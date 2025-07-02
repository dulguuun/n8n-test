import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MOCK_USER = { username: "admin", password: "admin" };

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const test: unknown = () => {
    console.log("Test function called");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        margin: "100px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "91%", marginBottom: 12, padding: 8 }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "91%", marginBottom: 12, padding: 8 }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#42b983",
            color: "#fff",
            border: "none",
            borderRadius: 4,
          }}
        >
          Login
        </button>
        {error && <p style={{ color: "#e74c3c", marginTop: 16 }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
