import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Welcome to the Dashboard!</h1>
      <p>You are now logged in.</p>
      <div style={{ margin: "24px 0" }}>
        <Link
          to="/profile"
          style={{
            marginRight: 16,
            color: "#42b983",
            textDecoration: "underline",
          }}
        >
          Profile
        </Link>
        <Link
          to="/contact"
          style={{
            marginRight: 16,
            color: "#42b983",
            textDecoration: "underline",
          }}
        >
          Contact
        </Link>
        <Link
          to="/help"
          style={{
            marginRight: 16,
            color: "#42b983",
            textDecoration: "underline",
          }}
        >
          Help
        </Link>
        <Link
          to="/services"
          style={{
            marginRight: 16,
            color: "#42b983",
            textDecoration: "underline",
          }}
        >
          Services
        </Link>
        <Link
          to="/product"
          style={{ color: "#42b983", textDecoration: "underline" }}
        >
          Product
        </Link>
      </div>
      <button
        onClick={handleLogout}
        style={{
          marginTop: 24,
          padding: "10px 24px",
          background: "#e74c3c",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
