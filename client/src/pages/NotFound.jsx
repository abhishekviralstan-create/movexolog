import { Link } from "react-router-dom";
import "../css/notFound.css";
import Error from "/404.svg";
export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="notfound-card">
        {/* <img
          src={Error}
          alt="404 Page Not Found"
          className="notfound-gif"
        /> */}

        <h1>404</h1>
        <h2>Page Not Found</h2>

        <p>
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="notfound-btn">
          Back To Home
        </Link>
      </div>
    </section>
  );
}