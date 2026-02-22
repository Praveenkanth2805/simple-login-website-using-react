// src/App.jsx
import React from "react";
import LoginCard from "./components/LoginCard";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-purple-900 to-purple-700 overflow-hidden">
  <ParticlesBackground className="absolute inset-0 z-0" />   {/* behind */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <LoginCard />
  </div>
</div>
  );
}

export default App;