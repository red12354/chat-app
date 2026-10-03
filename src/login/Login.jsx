import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md border border-gray-200">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-blue-600">Messenger</h1>
          <p className="text-gray-600 font-medium">
            Login with your <span className="text-blue-500">Account</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-white p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="mr-3 text-gray-500">📧</span>
            <input
              type="email"
              className="w-full bg-white text-black placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0 text-base"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-white p-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="mr-3 text-gray-500">🔑</span>
            <input
              type="password"
              className="w-full bg-white text-black placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0 text-base"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-lg transition duration-200 mt-2"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center text-sm text-gray-600">
          Don't have any Account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline font-semibold">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;