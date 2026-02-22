import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const hoverSound = new Audio("/hover-chime.mp3");
  const clickSound = new Audio("/click-beep.mp3");

  const handleLogin = () => {
    clickSound.play();

    if (username === "admin" && password === "1234") {
      setError(false);
      setSuccess(true);
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="gradient-bg h-screen flex items-center justify-center text-white">
      
      <div
        className={`bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96 transition-all duration-500 
        ${error ? "shake border border-red-500" : ""} 
        ${success ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Super Login</h2>

        <div className="relative mb-6">
          <input
            type="text"
            required
            className="w-full p-3 bg-transparent border-b border-white focus:outline-none focus:border-cyan-400 peer"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="absolute left-0 top-3 text-gray-300 transition-all 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400">
            Username
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            required
            className="w-full p-3 bg-transparent border-b border-white focus:outline-none focus:border-cyan-400 peer"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="absolute left-0 top-3 text-gray-300 transition-all 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-400">
            Password
          </label>
        </div>

        <button
          onMouseEnter={() => hoverSound.play()}
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
        >
          Login
        </button>

        {error && (
          <p className="text-red-400 mt-4 text-center">
            Invalid credentials
          </p>
        )}

        {success && (
          <p className="text-green-400 mt-4 text-center">
            Login Successful!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;