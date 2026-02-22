import React from 'react';
import InputField from './InputField';
import LoginButton from './LoginButton';

const LoginCard = ({status}) => {
  return (
    <div className={`bg-white rounded-2xl p-10 shadow-xl w-96 mx-auto mt-20 animate-flip
      ${status === 'fail' ? 'shake border-red-500' : ''}`}>
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Magical Login</h2>
      <form method="POST" action="/login/">
        <InputField type="text" placeholder="Username" name="username" />
        <InputField type="password" placeholder="Password" name="password" />
        <LoginButton />
      </form>
    </div>
  );
}

export default LoginCard;