import React from "react";

const InputField = ({ type, placeholder, name }) => {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        placeholder=" "
        className="peer w-full p-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 outline-none transition"
      />
      <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
        peer-focus:top-0 peer-focus:text-purple-600 peer-focus:text-sm">
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;