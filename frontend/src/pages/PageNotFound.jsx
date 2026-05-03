import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
             Go to Login
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;