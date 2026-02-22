import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import teddy from "./assets/teddy.svg";
import panda from "./assets/panda.svg";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);
  const [celebrate, setCelebrate] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleLogin = () => {
    setCelebrate(true);
    confetti({
      particleCount: 250,
      spread: 140,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="layout">

      {!celebrate && (
        <div className="row">

          {/* Teddy */}
          <motion.img
            src={teddy}
            alt="teddy"
            className="animal"
            animate={{
              rotate: mouse.x / 5,
              y: mouse.y / 8,
            }}
            transition={{ type: "spring", stiffness: 80 }}
          />

          {/* Login Card */}
          <div className="glass-card">
            <h2>Secure Login</h2>

            <div className="input-group">
              <input
                type="text"
                value={username}
                onFocus={() => setFocused("username")}
                onBlur={() => setFocused(null)}
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
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className={password ? "filled" : ""}>
                Password
              </label>
            </div>

            <button onClick={handleLogin}>
              Login
            </button>
          </div>

          {/* Panda */}
          <motion.div
            className="panda-wrapper"
            animate={{
              rotate: mouse.x / 5,
              y: mouse.y / 8,
            }}
          >
            <img src={panda} alt="panda" className="animal" />
            {focused === "password" && (
              <div className="blush"></div>
            )}
          </motion.div>

        </div>
      )}

      {celebrate && (
        <motion.div
          className="celebrate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1>🎉 Welcome {username} 🎉</h1>

          <div className="dance-row">
            <motion.img src={teddy} className="dance" animate={{ rotate: 10 }} />
            <motion.img src={panda} className="dance" animate={{ rotate: -10 }} />
          </div>
        </motion.div>
      )}

    </div>
  );
}

export default App;