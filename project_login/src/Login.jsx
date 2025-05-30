import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = () => {
    if (username == "admin" && password == "admin") {
      Navigate("/product");
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form>
          <h2>Login</h2>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />

          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </form>
        <br />
        <button onClick={handleSubmit} className="btn btn-Login">
          Login
        </button>
        <Link to="/signup"> SignUp</Link>
      </div>
    </div>
  );
}

export default Login;
