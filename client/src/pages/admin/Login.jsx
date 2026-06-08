import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../api";
import "../../css/admin.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await API.post("/auth/login", form);

      localStorage.setItem("transvera_admin_token", res.data.token);
      localStorage.setItem("transvera_admin_user", JSON.stringify(res.data.user));

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-head">
          <span>Transvera Login</span>
          <h1>Welcome Back</h1>
          <p>Login to manage blogs, SEO content and publishing.</p>
        </div>

        {error && <div className="auth-alert">{error}</div>}

        <form onSubmit={handleLogin} className="auth-form">
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
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/admin/signup">Create Admin</Link>
          <Link to="/admin/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </section>
  );
}