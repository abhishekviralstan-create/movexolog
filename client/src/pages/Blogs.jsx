import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/navbar";
import Footer from "../components/footer";
import "./blogs.css";

const API_BASE = "http://localhost:5000";

const getBlogImage = (blog) => {
  const img = blog.image || blog.featuredImage || blog.thumbnail || blog.coverImage;
  if (!img) return "";
  if (img.startsWith("http")) return img;
  if (img.startsWith("/uploads")) return `${API_BASE}${img}`;
  return `${API_BASE}/${img}`;
};

const getBlogDesc = (blog) => {
  const text =
    blog.shortDescription ||
    blog.description ||
    blog.metaDescription ||
    blog.excerpt ||
    blog.content ||
    "";
  return text.replace(/<[^>]*>/g, "").slice(0, 130);
};

const getBlogLink = (blog) => `/blogs/${blog.slug || blog._id}`;

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_BASE}/api/blogs?page=${page}&limit=9`);
        const data = await res.json();

        const blogsArray = Array.isArray(data)
          ? data
          : data.blogs || data.data || [];

        setBlogs(blogsArray);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Blogs fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  return (
    <div className="tv-blogs-page">
      <Helmet>
        <title>Blogs | Transvera Logistics Insights & Freight Updates</title>
        <meta
          name="description"
          content="Read latest Transvera blogs on logistics, road freight, inbound shipments, cross-border transport, supply chain and delivery solutions."
        />
        <meta
          name="keywords"
          content="Transvera blogs, logistics blogs, freight blogs, transport updates, road freight, inbound shipments, cross border shipments"
        />
        <link rel="canonical" href="https://www.transvera.com/blogs" />
      </Helmet>

      <Header />

      <main>
   <section className="tv-blogs-hero">
  <div className="tv-container">
    <div className="tv-blogs-hero-content">

      <h1>
        Our Insights
      </h1>

      <p>
        Explore expert articles, freight strategies, supply chain
        insights and transportation updates helping businesses move
        smarter and faster.
      </p>

      {/* <div className="tv-hero-actions">
        <a href="#blogs" className="tv-btn-primary">
          Explore Blogs →
        </a>

        <Link to="/contact-us" className="tv-btn-light">
          Contact Us →
        </Link>
      </div> */}
    </div>
  </div>
</section>
        <section className="tv-blogs-list-section">
          <div className="tv-container">
            <div className="tv-blogs-heading">
              <span>Our Articles</span>
              <h2>Latest Blogs</h2>
              <p>Stay updated with our newest logistics and transport articles.</p>
            </div>

            {loading ? (
              <div className="tv-blogs-loading">Loading blogs...</div>
            ) : (
              <>
                <div className="tv-blogs-grid">
                  {blogs.map((blog) => (
                    <Link
                      to={getBlogLink(blog)}
                      className="tv-blog-card"
                      key={blog._id}
                    >
                      <div className="tv-blog-card-img">
                        <img src={getBlogImage(blog)} alt={blog.title} />
                      </div>

                      <div className="tv-blog-card-content">
                        <span>
                          {blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )
                            : "Latest Blog"}
                        </span>

                        <h3>{blog.title}</h3>

                        <p>{getBlogDesc(blog)}...</p>

                        <strong>Read Full Blog →</strong>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="tv-blog-pagination">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    Previous
                  </button>

                  <span>
                    Page {page} of {totalPages}
                  </span>

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}