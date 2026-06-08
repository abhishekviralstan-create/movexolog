import asyncHandler from "express-async-handler";
import slugify from "slugify";
import Blog from "../models/Blog.js";

const makeUniqueSlug = async (title, customSlug = "") => {
  const baseSlug = slugify(customSlug || title, {
    lower: true,
    strict: true,
    trim: true,
  });

  let slug = baseSlug;
  let count = 1;

  while (await Blog.findOne({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
};

const buildImageUrl = (req, filePath) => {
  return `${req.protocol}://${req.get("host")}/${filePath.replace(/\\/g, "/")}`;
};

const buildBlogSchema = (blog) => {
  return {
    "@context": "https://schema.org",
    "@type": blog.schemaType || "BlogPosting",
    headline: blog.blogH1,
    name: blog.title,
    description: blog.metaDescription,
    image: blog.featuredImage,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    author: {
      "@type": "Person",
      name: blog.author || "Abhishek Singh",
    },
    publisher: {
      "@type": "Organization",
      name: blog.publisher || "Transvera RCM",
    },
    keywords: blog.keywords,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blogs/${blog.slug}`,
    },
  };
};

export const createBlog = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    blogH1,
    excerpt,
    content,
    metaTitle,
    metaDescription,
    keywords,
    category,
    publishedAt,
    author,
  } = req.body;

  if (
    !title ||
    !blogH1 ||
    !excerpt ||
    !content ||
    !metaTitle ||
    !metaDescription ||
    !category
  ) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  if (!req.file) {
    res.status(400);
    throw new Error("Featured image is required");
  }

  const finalSlug = await makeUniqueSlug(title, slug);

  const imageUrl = buildImageUrl(req, req.file.path);

  const blog = await Blog.create({
    title,
    slug: finalSlug,
    blogH1,
    excerpt,
    content,
    metaTitle,
    metaDescription,
    keywords: keywords
      ? keywords.split(",").map((item) => item.trim()).filter(Boolean)
      : [],
    featuredImage: imageUrl,
    category,
    publishedAt: publishedAt || Date.now(),
    author: author || "Transvera",
    publisher: "Transvera RCM",
    robotsTag: "index, follow",
    schemaType: "BlogPosting",
  });

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    blog,
    schema: buildBlogSchema(blog),
  });
});

export const getHomeBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .limit(3)
    .select("title slug excerpt featuredImage category publishedAt author");

  res.json({
    success: true,
    count: blogs.length,
    blogs,
  });
});

export const getBlogs = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const skip = (page - 1) * limit;

  const keyword = req.query.keyword || "";
  const category = req.query.category || "";

  const query = {
    status: "published",
    ...(keyword && {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { excerpt: { $regex: keyword, $options: "i" } },
        { category: { $regex: keyword, $options: "i" } },
      ],
    }),
    ...(category && { category }),
  };

  const totalBlogs = await Blog.countDocuments(query);

  const blogs = await Blog.find(query)
    .sort({ publishedAt: -1 })
    .skip(skip)
    .limit(limit)
    .select("title slug excerpt featuredImage category publishedAt author");

  res.json({
    success: true,
    currentPage: page,
    totalPages: Math.ceil(totalBlogs / limit),
    totalBlogs,
    count: blogs.length,
    blogs,
  });
});

export const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({
    slug: req.params.slug,
    status: "published",
  });

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.json({
    success: true,
    blog,
    seo: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      keywords: blog.keywords.join(", "),
      robots: blog.robotsTag,
      canonical: `/blogs/${blog.slug}`,
    },
    schema: buildBlogSchema(blog),
  });
});

export const getAdminBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({})
    .sort({ createdAt: -1 })
    .select("title slug category status publishedAt author createdAt");

  res.json({
    success: true,
    count: blogs.length,
    blogs,
  });
});

export const getAdminBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.json({
    success: true,
    blog,
  });
});

export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const {
    title,
    slug,
    blogH1,
    excerpt,
    content,
    metaTitle,
    metaDescription,
    keywords,
    category,
    publishedAt,
    author,
    status,
  } = req.body;

  if (title) blog.title = title;
  if (blogH1) blog.blogH1 = blogH1;
  if (excerpt) blog.excerpt = excerpt;
  if (content) blog.content = content;
  if (metaTitle) blog.metaTitle = metaTitle;
  if (metaDescription) blog.metaDescription = metaDescription;
  if (category) blog.category = category;
  if (publishedAt) blog.publishedAt = publishedAt;
  if (author) blog.author = author;
  if (status) blog.status = status;

  if (keywords) {
    blog.keywords = keywords.split(",").map((item) => item.trim()).filter(Boolean);
  }

  if (slug && slug !== blog.slug) {
    blog.slug = await makeUniqueSlug(title || blog.title, slug);
  }

  if (!slug && title && title !== blog.title) {
    blog.slug = await makeUniqueSlug(title);
  }

  if (req.file) {
    blog.featuredImage = buildImageUrl(req, req.file.path);
  }

  const updatedBlog = await blog.save();

  res.json({
    success: true,
    message: "Blog updated successfully",
    blog: updatedBlog,
    schema: buildBlogSchema(updatedBlog),
  });
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  await blog.deleteOne();

  res.json({
    success: true,
    message: "Blog deleted successfully",
  });
});