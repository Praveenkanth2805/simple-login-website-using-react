import { useState } from "react";

function App() {
  const [toyState, setToyState] = useState("normal");
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    setEyePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="gradient-bg h-screen flex flex-col items-center justify-center text-white"
    >
      {/* 🧸 TEDDY */}
      <div className="relative mb-8">

        {/* Ears */}
        <div className="absolute -left-8 -top-6 w-16 h-16 bg-amber-700 rounded-full"></div>
        <div className="absolute -right-8 -top-6 w-16 h-16 bg-amber-700 rounded-full"></div>

        {/* Face */}
        <div className="w-48 h-48 bg-amber-600 rounded-full relative shadow-2xl flex items-center justify-center transition-all duration-300">

          {/* Eyes */}
          {toyState !== "cover" && (
            <>
              <div className="absolute left-14 top-16 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 bg-black rounded-full"
                  style={{
                    transform: `translate(${eyePos.x}px, ${eyePos.y}px)`
                  }}
                ></div>
              </div>

              <div className="absolute right-14 top-16 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div
                  className="w-4 h-4 bg-black rounded-full"
                  style={{
                    transform: `translate(${eyePos.x}px, ${eyePos.y}px)`
                  }}
                ></div>
              </div>
            </>
          )}

          {/* Hands covering eyes */}
          {toyState === "cover" && (
            <>
              <div className="absolute left-6 top-12 w-16 h-16 bg-amber-700 rounded-full rotate-12"></div>
              <div className="absolute right-6 top-12 w-16 h-16 bg-amber-700 rounded-full -rotate-12"></div>
            </>
          )}

          {/* Nose */}
          <div className="absolute top-28 w-8 h-6 bg-black rounded-full"></div>

          {/* Mouth */}
          <div
            className={`absolute top-32 w-16 h-8 border-b-4 border-black rounded-full transition-all duration-300 ${
              toyState === "happy" ? "scale-125" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* LOGIN CARD */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Super Login
        </h2>

        {/* Username */}
        <div className="relative mb-6">
          <input
            type="text"
            required
            onFocus={() => setToyState("happy")}
            onBlur={() => setToyState("normal")}
            className="w-full p-3 bg-transparent border-b border-white focus:outline-none focus:border-cyan-400 peer"
          />
          <label className="absolute left-0 top-3 text-gray-300 transition-all
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400">
            Username
          </label>
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <input
            type="password"
            required
            onFocus={() => setToyState("cover")}
            onBlur={() => setToyState("normal")}
            className="w-full p-3 bg-transparent border-b border-white focus:outline-none focus:border-cyan-400 peer"
          />
          <label className="absolute left-0 top-3 text-gray-300 transition-all
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400">
            Password
          </label>
        </div>

        <button className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
          Login
        </button>
      </div>
    </div>
  );
}

export default App;