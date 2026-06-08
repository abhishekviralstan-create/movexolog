import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api";
import "../../css/admin.css";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("transvera_admin_user") || "{}");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/blogs/admin/all");
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const published = blogs.filter((blog) => blog.status === "published").length;
  const drafts = blogs.filter((blog) => blog.status === "draft").length;

  return (
    <div className="admin-page">
      <div className="admin-topbar">
        <div>
          <span className="admin-kicker">Dashboard</span>
          <h1>Blog Management</h1>
          <p>Manage Transvera blog content, SEO fields and publishing.</p>
        </div>

        <Link to="/admin/blogs/new" className="admin-primary-btn">
          Add New Blog
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Blogs</span>
          <strong>{blogs.length}</strong>
        </div>

        <div className="stat-card">
          <span>Published</span>
          <strong>{published}</strong>
        </div>

        <div className="stat-card">
          <span>Drafts</span>
          <strong>{drafts}</strong>
        </div>

        <div className="stat-card">
          <span>Admin</span>
          <strong>{user.name || "Admin"}</strong>
        </div>
      </div>

      <div className="admin-panel">
        <div className="panel-head">
          <h2>Latest Blogs</h2>
          <Link to="/admin/blogs">View All</Link>
        </div>

        {loading ? (
          <p className="admin-muted">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="admin-muted">No blogs found. Create your first blog.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {blogs.slice(0, 5).map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>{blog.category}</td>
                    <td>
                      <span className={`status ${blog.status}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td>{new Date(blog.publishedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}   