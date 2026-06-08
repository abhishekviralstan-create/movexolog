import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "./blogDetails.css";

const API_BASE = "http://localhost:5000";
const SITE_URL = "https://www.transvera.com";

const cleanText = (text = "") =>
  String(text).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const getBlogImage = (blog) => {
  const img =
    blog?.image ||
    blog?.featuredImage ||
    blog?.thumbnail ||
    blog?.coverImage ||
    blog?.heroImage ||
    blog?.blogImage;

  if (!img) return "";
  if (img.startsWith("http")) return img;
  if (img.startsWith("/uploads")) return `${API_BASE}${img}`;
  return `${API_BASE}/${img.replace(/^\/+/, "")}`;
};

const getBlogContent = (blog) =>
  blog?.content ||
  blog?.body ||
  blog?.article ||
  blog?.blogContent ||
  blog?.longDescription ||
  blog?.description ||
  "";

const getKeywords = (blog) => {
  const keywords =
    blog?.keywords || blog?.seoKeywords || blog?.metaKeywords || blog?.tags || [];

  if (Array.isArray(keywords)) return keywords.join(", ");
  return keywords || "logistics, freight, transport, supply chain, transvera";
};

const getTopics = (blog) => {
  const topics = blog?.tags || blog?.topics || blog?.categories;

  if (Array.isArray(topics) && topics.length > 0) return topics;

  return ["Road Freight", "Inbound Shipments", "Cross Border", "Supply Chain", "Logistics"];
};

export default function BlogDetails() {
  const params = useParams();
  const blogParam = params.slug || params.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [commentLoading, setCommentLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_BASE}/api/blogs/slug/${blogParam}`);
        const data = await res.json();

        const finalBlog =
          data?.blog ||
          data?.data ||
          data?.singleBlog ||
          data?.post ||
          data?.blogs?.[0] ||
          data?.[0] ||
          data;

        setBlog(finalBlog);
      } catch (error) {
        console.error("Single blog fetch error:", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (blogParam) fetchBlog();
  }, [blogParam]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const slug = blog?.slug || blogParam;
        if (!slug) return;

        const res = await fetch(`${API_BASE}/api/comments/${slug}`);
        const data = await res.json();

        setComments(data?.comments || []);
      } catch (error) {
        console.error("Comments fetch error:", error);
      }
    };

    if (blog) fetchComments();
  }, [blog, blogParam]);

  const imageUrl = useMemo(() => getBlogImage(blog), [blog]);
  const blogContent = useMemo(() => getBlogContent(blog), [blog]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!commentForm.name.trim() || !commentForm.email.trim() || !commentForm.comment.trim()) {
      alert("Please fill all fields");
      return;
    }

    if (!blog?._id) {
      alert("Blog ID missing. Please refresh page.");
      return;
    }

    try {
      setCommentLoading(true);

      const res = await fetch(`${API_BASE}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId: blog._id,
          blogSlug: blog.slug || blogParam,
          name: commentForm.name.trim(),
          email: commentForm.email.trim(),
          comment: commentForm.comment.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Comment post nahi hua");
        return;
      }

      setComments((prev) => [data.comment, ...prev]);

      setCommentForm({
        name: "",
        email: "",
        comment: "",
      });
    } catch (error) {
      console.error("Comment submit error:", error);
      alert("Something went wrong");
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-detail-page">
        <Header />
        <div className="bd-loading">Loading blog...</div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <Header />
        <div className="bd-loading">Blog not found</div>
        <Footer />
      </div>
    );
  }

  const blogTitle = blog.title || blog.blogTitle || blog.metaTitle || "Transvera Blog";

  const metaTitle = blog.metaTitle || blog.seoTitle || `${blogTitle} | Transvera Blogs`;

  const metaDescription =
    blog.metaDescription ||
    blog.seoDescription ||
    blog.shortDescription ||
    blog.excerpt ||
    cleanText(blog.description || blogContent).slice(0, 160);

  const keywords = getKeywords(blog);
  const authorName = blog.author || blog.authorName || "Transvera Team";
  const publisherName = "Transvera";
  const topics = getTopics(blog);

  const publishDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Latest";

  return (
    <div className="blog-detail-page">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`${SITE_URL}/blogs/${blog.slug || blog._id || blogParam}`} />
        <meta name="robots" content="index, follow" />
        <meta name="publisher" content={publisherName} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.blogH1 || blogTitle,
            name: blogTitle,
            description: metaDescription,
            image: imageUrl,
            datePublished: blog.publishedAt || blog.createdAt,
            dateModified: blog.updatedAt,
            author: {
              "@type": "Person",
              name: authorName,
            },
            publisher: {
              "@type": "Organization",
              name: "Transvera",
            },
            keywords,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blogs/${blog.slug || blog._id || blogParam}`,
            },
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        <section
          className="bd-hero"
          style={{
            backgroundImage: imageUrl
              ? `url(${imageUrl})`
              : `linear-gradient(90deg, rgba(4, 26, 78, 0.95), rgba(4, 26, 78, 0.75))`,
          }}
        >
          <div className="tv-container bd-hero-content">
            <h1>{blogTitle}</h1>
            <p>{metaDescription}</p>

            <div className="bd-meta">
              <strong>{authorName}</strong>
              <span>{publishDate}</span>
            </div>
          </div>
        </section>

        <section className="bd-section">
          <div className="tv-container bd-layout">
            <article className="bd-content">
              <div className="bd-html" dangerouslySetInnerHTML={{ __html: blogContent }} />

              <section className="bd-read-more">
                <div className="bd-section-head">
                  <span>Explore More</span>
                  <h2>Read More Articles</h2>
                </div>

                <div className="bd-more-grid">
                  <Link to="/blogs" className="bd-more-card">
                    <h3>Latest Logistics Insights</h3>
                    <p>Explore more guides, tips, and updates from Transvera.</p>
                    <span>Read Articles →</span>
                  </Link>

                  <Link to="/blogs" className="bd-more-card">
                    <h3>Freight & Shipping Guides</h3>
                    <p>Learn how modern logistics and shipping work in real business.</p>
                    <span>View More →</span>
                  </Link>
                </div>
              </section>

              <section className="bd-comments">
                <div className="bd-section-head">
                  <span>Join Discussion</span>
                  <h2>Leave a Comment</h2>
                </div>

                <form className="bd-comment-form" onSubmit={handleCommentSubmit}>
                  <div className="bd-form-row">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={commentForm.name}
                      onChange={(e) =>
                        setCommentForm({ ...commentForm, name: e.target.value })
                      }
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      value={commentForm.email}
                      onChange={(e) =>
                        setCommentForm({ ...commentForm, email: e.target.value })
                      }
                    />
                  </div>

                  <textarea
                    placeholder="Write your comment..."
                    rows="5"
                    value={commentForm.comment}
                    onChange={(e) =>
                      setCommentForm({ ...commentForm, comment: e.target.value })
                    }
                  />

                  <button type="submit" disabled={commentLoading}>
                    {commentLoading ? "Posting..." : "Post Comment"}
                  </button>
                </form>

                <div className="bd-comment-list">
                  <h3>{comments.length} Comments</h3>

                  {comments.length === 0 ? (
                    <p className="bd-no-comments">
                      No comments yet. Be the first to comment.
                    </p>
                  ) : (
                    comments.map((item) => (
                      <div className="bd-comment-item" key={item._id}>
                        <div className="bd-comment-avatar">
                          {item.name?.charAt(0)?.toUpperCase()}
                        </div>

                        <div>
                          <h4>{item.name}</h4>
                          <span>
                            {item.createdAt
                              ? new Date(item.createdAt).toLocaleDateString("en-IN")
                              : "Just now"}
                          </span>
                          <p>{item.comment}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </article>

            <aside className="bd-sidebar">
              <div className="bd-side-card">
                <h3>Top Topics</h3>
                <div className="bd-tags">
                  {topics.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <div className="bd-side-card">
                <h3>Author</h3>
                <p>{authorName}</p>
              </div>

              <div className="bd-side-card">
                <h3>Publisher</h3>
                <p>{publisherName}</p>
              </div>

              <Link to="/blogs" className="bd-back-btn">
                ← Back to Blogs
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}