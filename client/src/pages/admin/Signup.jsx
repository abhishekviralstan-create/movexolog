import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../api";
import "../../css/admin.css";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    adminSecret: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await API.post("/auth/register", form);

      localStorage.setItem("transvera_admin_token", res.data.token);
      localStorage.setItem("transvera_admin_user", JSON.stringify(res.data.user));

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-head">
          <span>Transvera Signup</span>
          <h1>Create Admin</h1>
          <p>Use admin secret to create a secure Transvera blog admin account.</p>
        </div>

        {error && <div className="auth-alert">{error}</div>}

        <form onSubmit={handleSignup} className="auth-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Transvera"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="admin@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={form.password}
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
            {loading ? "Creating..." : "Create Admin"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/admin/login">Already have account?</Link>
        </div>
      </div>
    </section>
  );
}