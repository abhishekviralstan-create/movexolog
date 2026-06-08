import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api";
import "../../css/admin.css";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await API.get("/blogs/admin/all");
      setBlogs(res.data.blogs || []);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");

    if (!confirmDelete) return;

    try {
      await API.delete(`/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-topbar">
        <div>
          <span className="admin-kicker">All Blogs</span>
          <h1>Manage Blogs</h1>
          <p>Edit, delete, publish and manage all blog posts.</p>
        </div>

        <Link to="/admin/blogs/new" className="admin-primary-btn">
          Add Blog
        </Link>
      </div>

      <div className="admin-panel">
        {loading ? (
          <p className="admin-muted">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="admin-muted">No blogs available.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Slug</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Published</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>{blog.slug}</td>
                    <td>{blog.category}</td>
                    <td>
                      <span className={`status ${blog.status}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td>{new Date(blog.publishedAt).toLocaleDateString()}</td>
                    <td>
                      <div className="table-actions">
                        <Link to={`/admin/blogs/edit/${blog._id}`}>Edit</Link>
                        <button onClick={() => deleteBlog(blog._id)}>
                          Delete
                        </button>
                      </div>
                    </td>
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