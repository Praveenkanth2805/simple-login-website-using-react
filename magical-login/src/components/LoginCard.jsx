import React, { useState } from 'react';
import InputField from './InputField';
import LoginButton from './LoginButton';

const LoginCard = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await fetch('http://localhost:8000/login_api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setStatus(data.status);  // 'success' or 'fail'
  }

  return (
    <div className={`bg-white rounded-2xl p-10 shadow-xl w-96 mx-auto mt-20 animate-flip
      ${status === 'fail' ? 'shake border-red-500' : ''} 
      ${status === 'success' ? 'border-green-500' : ''}`}>
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Magical Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField type="text" placeholder="Username" name="username" />
        <InputField type="password" placeholder="Password" name="password" />
        <LoginButton />
      </form>
    </div>
  );
}

export default LoginCard;