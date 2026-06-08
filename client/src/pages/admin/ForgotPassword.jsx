import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../../api";
import "../../css/admin.css";

export default function ForgotPassword() {
  const [form, setForm] = useState({
    email: "",
    newPassword: "",
    adminSecret: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setMessage("");

      const res = await API.post("/auth/reset-password", form);

      setMessage(res.data.message || "Password reset successfully");

      setForm({
        email: "",
        newPassword: "",
        adminSecret: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-head">
          <span>Password Recovery</span>
          <h1>Reset Password</h1>
          <p>Reset admin password using your secure admin secret.</p>
        </div>

        {error && <div className="auth-alert">{error}</div>}
        {message && <div className="auth-success">{message}</div>}

        <form onSubmit={handleReset} className="auth-form">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="admin@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={form.newPassword}
            onChange={handleChange}
            required
          />

          <label>Admin Secret</label>
          <input
            type="password"
            name="adminSecret"
            placeholder="Enter admin secret"
            value={form.adminSecret}
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/admin/login">Back to Login</Link>
        </div>
      </div>
    </section>
  );
}