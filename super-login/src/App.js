import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Teddy from "./assets/teddy.svg";
import Panda from "./assets/panda.svg";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate head rotation
  const rotateValue = (mousePos.x - window.innerWidth / 2) / 40;

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setError(false);
      setSuccess(true);
      confetti({ particleCount: 200, spread: 120 });
    } else {
      setError(true);
      setTimeout(() => setError(false), 800);
    }
  };

  if (success) {
    return (
      <div className="layout celebrate">
        <h1>🎉 Welcome 🎉</h1>
        <div className="dance-row">
          <img src={Teddy} className="dance" />
          <img src={Panda} className="dance" />
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <div className="row">
        {/* Teddy */}
        <motion.img
          src={Teddy}
          className="animal"
          animate={{
            rotate: error
              ? [0, -15, 15, -15, 15, 0]
              : rotateValue,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Login Card */}
        <div className="glass-card">
          <h2>Login</h2>

          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className={username ? "filled" : ""}>
              Username
            </label>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className={password ? "filled" : ""}>
              Password
            </label>
          </div>

          <button onClick={handleLogin}>Login</button>

          {error && (
            <p style={{ color: "red", marginTop: "15px" }}>
              Wrong Credentials 😡
            </p>
          )}
        </div>

        {/* Panda */}
        <motion.img
          src={Panda}
          className="animal"
          animate={{
            rotate: error
              ? [0, 15, -15, 15, -15, 0]
              : -rotateValue,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
}

export default App;