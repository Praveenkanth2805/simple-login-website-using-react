import React from 'react';

const InputField = ({type, placeholder, name}) => {
  return (
    <div className="relative mb-5">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
    </div>
  );
}

export default InputField;