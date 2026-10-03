import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Tor login logic / authentication handler ekhane call korbi
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-200">
        
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-blue-600">Messenger</h1>
          <p className="text-gray-600 font-medium">
            Login with your <span className="text-blue-500">Account</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Field */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white focus-within:ring-2 focus-within:ring-blue-500">
            <span className="mr-3 text-lg">📧</span>
            <input
              type="email"
              style={{ backgroundColor: '#ffffff', color: '#000000' }}
              className="w-full text-black placeholder-gray-400 outline-none border-none text-base bg-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white focus-within:ring-2 focus-within:ring-blue-500">
            <span className="mr-3 text-lg">🔑</span>
            <input
              type="password"
              style={{ backgroundColor: '#ffffff', color: '#000000' }}
              className="w-full text-black placeholder-gray-400 outline-none border-none text-base bg-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
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

        {/* Signup Redirect Link */}
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