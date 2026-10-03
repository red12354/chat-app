import React, { useState } from 'react';

const Login = ({ onLoginSuccess, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess({ email });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md border border-gray-200 text-black">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-blue-600">Messenger</h1>
          <p className="text-gray-600 font-medium">
            Login with your <span className="text-blue-500">Account</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Box */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white">
            <span className="mr-3 text-lg">✉️</span>
            <input
              type="email"
              className="w-full bg-white text-black placeholder-gray-500 border-none outline-none text-base"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Box */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white">
            <span className="mr-3 text-lg">🔑</span>
            <input
              type="password"
              className="w-full bg-white text-black placeholder-gray-500 border-none outline-none text-base"
              placeholder="Password"
              value={email ? password : password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-lg transition duration-200 mt-2"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have any Account?{' '}
          <button 
            type="button"
            onClick={onSwitch} 
            className="text-blue-500 hover:underline font-semibold bg-transparent border-none p-0 cursor-pointer"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;