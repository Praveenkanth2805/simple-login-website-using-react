import React from "react";

const LoginButton = () => {
  return (
    <button className="relative w-full bg-purple-600 text-white py-3 rounded-lg overflow-hidden hover:bg-purple-700 transition">
      <span className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping"></span>
      Login
    </button>
  );
};

export default LoginButton;