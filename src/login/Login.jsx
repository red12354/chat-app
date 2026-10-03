import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Connect your login function/hook here (e.g., useLogin())
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md border border-gray-100">
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-blue-600">Messenger</h1>
          <p className="text-gray-600 font-medium">
            Login with your <span className="text-blue-500">Account</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input Field */}
          <div>
            <label className="input input-bordered flex items-center gap-3 bg-white text-gray-800 border-gray-300 focus-within:border-blue-500 focus-within:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 text-gray-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l.025.009a6.07 6.07 0 0 1 .715.07l.012.002A10.15 10.15 0 0 0 8 7.318a10.15 10.15 0 0 0 6.248-2.044l.012-.002a6.07 6.07 0 0 1 .715-.07L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954a10.966 10.966 0 0 1-6.958 2.502A10.966 10.966 0 0 1 1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          {/* Password Input Field */}
          <div>
            <label className="input input-bordered flex items-center gap-3 bg-white text-gray-800 border-gray-300 focus-within:border-blue-500 focus-within:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 0-4.899-3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .146-.353l.904-.904A4 4 0 1 0 14 6Zm-4-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg border-none normal-case mt-2"
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