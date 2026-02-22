import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);
  const [celebrate, setCelebrate] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Mouse tracking
  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Confetti burst
  const triggerCelebration = () => {
    setCelebrate(true);
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className={`main-bg ${celebrate ? "bright" : ""}`}>

      {/* Celebration Overlay */}
      {celebrate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="celebration-screen"
        >
          <h1>🎉 Welcome {username} 🎉</h1>
          <div className="dance-row">
            <div className="dance teddy-dance"></div>
            <div className="dance panda-dance"></div>
            <div className="dance bunny"></div>
            <div className="dance cat"></div>
          </div>
        </motion.div>
      )}

      {/* Characters Section */}
      {!celebrate && (
        <>
          <div className="characters">

            {/* Hearts Always Floating */}
            <div className="hearts">
              <span>💖</span>
              <span>💕</span>
              <span>💗</span>
            </div>

            {/* TEDDY */}
            <motion.div
              animate={{
                rotate:
                  focused === "password"
                    ? 25
                    : mouse.x / 4,
                y: mouse.y / 5,
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="teddy"
            >
              <div
                className="eye left"
                style={{
                  transform: `translate(${mouse.x / 3}px, ${mouse.y / 3}px)`
                }}
              />
              <div
                className="eye right"
                style={{
                  transform: `translate(${mouse.x / 3}px, ${mouse.y / 3}px)`
                }}
              />
            </motion.div>

            {/* PANDA */}
            <motion.div
              animate={{
                scale: username ? 1.05 : 1,
              }}
              className="panda"
            >
              <div className={`blush ${username ? "show" : ""}`} />
            </motion.div>

          </div>

          {/* Glass Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card"
          >
            <h2>Premium Secure Login</h2>

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

            <button onClick={triggerCelebration}>
              Login
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;