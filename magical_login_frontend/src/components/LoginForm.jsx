import React, { useState } from 'react';
import '../index.css';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8000/login_api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-700">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg animate-flip">
        <h2 className="text-2xl font-bold mb-6 text-center">Magical Login</h2>
        <input type="text" placeholder="Username" className="border p-2 mb-4 w-full" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-purple-700 text-white p-2 w-full rounded hover:bg-purple-800">Login</button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
}