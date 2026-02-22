import { useState } from "react";

function App() {
  const [page, setPage] = useState("login");
  const [toyState, setToyState] = useState("normal");
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    setEyePos({ x, y });
  };

  if (page === "celebrate") {
    return (
      <div className="h-screen gradient-bg flex flex-col items-center justify-center text-white relative overflow-hidden">

        <div className="confetti"></div>

        <h1 className="text-5xl font-bold mb-10 animate-bounce">
          🎉 Welcome {username} 🎉
        </h1>

        <div className="flex gap-12">
          <div className="dance teddy"></div>
          <div className="dance bunny"></div>
          <div className="dance panda"></div>
          <div className="dance cat"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="gradient-bg h-screen flex flex-col items-center justify-center text-white"
    >

      {/* TEDDY */}
      <div className="relative mb-10">

        {/* Ears */}
        <div className="ear left-ear"></div>
        <div className="ear right-ear"></div>

        {/* Head */}
        <div className="teddy-head">

          {/* Eyes */}
          {toyState !== "cover" && (
            <>
              <div
                className="eye left-eye"
                style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}
              ></div>
              <div
                className="eye right-eye"
                style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}
              ></div>
            </>
          )}

          {/* Hands */}
          {toyState === "cover" && (
            <>
              <div className="hand left-hand"></div>
              <div className="hand right-hand"></div>
            </>
          )}

          <div className={`mouth ${toyState === "happy" ? "big" : ""}`}></div>
        </div>
      </div>

      {/* LOGIN CARD */}
      <div className="glass-card">

        <h2 className="title">Teddy Secure Login</h2>

        {/* Username */}
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setToyState("happy")}
            onBlur={() => setToyState("normal")}
            required
          />
          <label className={username ? "filled" : ""}>Username</label>
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setToyState("cover")}
            onBlur={() => setToyState("normal")}
            required
          />
          <label className={password ? "filled" : ""}>Password</label>
        </div>

        <button
          onClick={() => setPage("celebrate")}
          className="login-btn"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default App;