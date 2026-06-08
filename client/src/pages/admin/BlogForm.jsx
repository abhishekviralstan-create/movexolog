import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.snow.css";
import API from "../../api";
import "../../css/adm.css";

const createSlug = (text = "") => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "link"],
    ["clean"],
  ],
};
const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "list",
  "blockquote",
  "link",
];

export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [slugTouched, setSlugTouched] = useState(false);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [oldImage, setOldImage] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    blogH1: "",
    excerpt: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "Logistics, Transvera",
    category: "Road Freight",
    publishedAt: "",
    author: "Abhishek Singh",
    status: "published",
  });

  useEffect(() => {
    if (!isEdit) return;

    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/admin/${id}`);
        const blog = res.data.blog;

        setForm({
          title: blog.title || "",
          slug: blog.slug || "",
          blogH1: blog.blogH1 || "",
          excerpt: blog.excerpt || "",
          content: blog.content || "",
          metaTitle: blog.metaTitle || "",
          metaDescription: blog.metaDescription || "",
          keywords: Array.isArray(blog.keywords)
            ? blog.keywords.join(", ")
            : blog.keywords || "",
          category: blog.category || "Road Freight",
          publishedAt: blog.publishedAt
            ? new Date(blog.publishedAt).toISOString().slice(0, 16)
            : "",
          author: blog.author || "Abhishek Singh",
          status: blog.status || "published",
        });

        setOldImage(blog.featuredImage || "");
        setSlugTouched(true);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load blog");
      } finally {
        setFetching(false);
      }
    };

    fetchBlog();
  }, [id, isEdit]);

  const cleanQuillHtml = (html = "") => {
    return String(html)
      .replace(/&nbsp;/g, " ")
      .replace(/\u00A0/g, " ")
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
      .replace(/\sstyle="[^"]*"/gi, "")
      .replace(/\sclass="[^"]*"/gi, "")
      .replace(/<p><br><\/p>/g, "")
      .trim();
  };

  const isEmptyContent = (html = "") => {
    const text = String(html)
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, "")
      .trim();

    return !text;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: slugTouched ? prev.slug : createSlug(value),
        metaTitle: prev.metaTitle ? prev.metaTitle : value.slice(0, 70),
        blogH1: prev.blogH1 ? prev.blogH1 : value,
      }));
      return;
    }

    if (name === "slug") {
      setSlugTouched(true);
      setForm((prev) => ({
        ...prev,
        slug: createSlug(value),
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (value) => {
    setForm((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "image/webp") {
      alert("Only WEBP image is allowed");
      e.target.value = "";
      return;
    }

    if (file.size > 100 * 1024) {
      alert("Image size must be under 100kb");
      e.target.value = "";
      return;
    }

    setFeaturedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmptyContent(form.content)) {
      setError("Blog content is required");
      return;
    }

    if (!isEdit && !featuredImage) {
      setError("Featured image is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const safeForm = {
        ...form,
        content: cleanQuillHtml(form.content),
      };

      const formData = new FormData();

      Object.entries(safeForm).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (featuredImage) {
        formData.append("featuredImage", featuredImage);
      }

      if (isEdit) {
        await API.put(`/blogs/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await API.post("/blogs", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      navigate("/admin/blogs");
    } catch (err) {
      setError(err.response?.data?.message || "Blog save failed");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="admin-page">
        <p className="admin-muted">Loading blog editor...</p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-topbar">
        <div>
          <span className="admin-kicker">
            {isEdit ? "Edit Blog" : "Create Blog"}
          </span>
          <h1>{isEdit ? "Update Blog Post" : "Add New Blog Post"}</h1>
          <p>SEO fields, slug and schema are ready for Transvera blog publishing.</p>
        </div>
      </div>

      {error && <div className="auth-alert form-alert">{error}</div>}

      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-left">
            <div className="form-card">
              <h2>Blog Content</h2>

              <div className="field-group">
                <div className="label-row">
                  <label>Title *</label>
                  <span>{form.title.length}/70 characters</span>
                </div>
                <input
                  type="text"
                  name="title"
                  maxLength="70"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label>Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="auto-generated-slug"
                  required
                />
                <small>Slug automatically generates from title. You can edit it.</small>
              </div>

              <div className="field-group">
                <label>Blog H1 *</label>
                <input
                  type="text"
                  name="blogH1"
                  value={form.blogH1}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label>Short Paragraph / Excerpt *</label>
                <textarea
                  name="excerpt"
                  rows="4"
                  value={form.excerpt}
                  onChange={handleChange}
                  required
                />
                <small>This paragraph will show on blog card.</small>
              </div>

              <div className="field-group">
                <label>Content *</label>

                <ReactQuill
                  theme="snow"
                  value={form.content}
                  onChange={handleContentChange}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your blog content here..."
                  className="admin-rich-editor"
                />

                <small>
                  You can add headings, paragraphs, links, colors, lists and alignment.
                </small>
              </div>
            </div>

            <div className="form-card">
              <h2>SEO Settings</h2>

              <div className="field-group">
                <div className="label-row">
                  <label>Meta Title *</label>
                  <span>{form.metaTitle.length}/70 characters</span>
                </div>
                <input
                  type="text"
                  name="metaTitle"
                  maxLength="70"
                  value={form.metaTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <div className="label-row">
                  <label>Meta Description *</label>
                  <span>{form.metaDescription.length}/150 characters</span>
                </div>
                <textarea
                  name="metaDescription"
                  maxLength="150"
                  rows="4"
                  value={form.metaDescription}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label>Keywords</label>
                <input
                  type="text"
                  name="keywords"
                  value={form.keywords}
                  onChange={handleChange}
                  placeholder="logistics, freight, supply chain"
                />
              </div>
            </div>
          </div>

          <div className="form-right">
            <div className="form-card sticky-card">
              <h2>Publish Settings</h2>

              <div className="field-group">
                <label>Featured Image {isEdit ? "" : "*"}</label>
                <input type="file" accept="image/webp" onChange={handleImage} />
                <small>Max image size: 100kb. Only WEBP supported.</small>

                {oldImage && !featuredImage && (
                  <img src={oldImage} alt="Current" className="preview-img" />
                )}

                {featuredImage && <p className="image-name">{featuredImage.name}</p>}
              </div>

              <div className="field-group">
                <label>Category *</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option>Road Freight</option>
                  <option>Inbound Shipments</option>
                  <option>Cross Border Shipments</option>
                  <option>Logistics</option>
                  <option>Supply Chain</option>
                  <option>Transportation</option>
                  <option>Warehouse Management</option>
                  <option>Digital Logistics</option>
                </select>
              </div>

              <div className="field-group">
                <label>Published At</label>
                <input
                  type="datetime-local"
                  name="publishedAt"
                  value={form.publishedAt}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                />
              </div>

              <div className="field-group">
                <label>Status</label>
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="seo-defaults">
                <h3>SEO Defaults</h3>
                <p>
                  <strong>Publisher:</strong> Transvera
                </p>
                <p>
                  <strong>Robots Tag:</strong> index, follow
                </p>
                <p>
                  <strong>Schema Type:</strong> BlogPosting
                </p>
              </div>

              <button className="publish-btn" disabled={loading}>
                {loading ? "Saving..." : isEdit ? "Update Blog" : "Publish Blog"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}