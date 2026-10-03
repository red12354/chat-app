import React, { useState } from "react";

export default function Login({ onLoginSuccess, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Chat Dashboard-e jaoar jonno call kora hocche
      onLoginSuccess({ email });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-1">Messenger</h2>
        <p className="text-gray-600 mb-6 font-medium">
          Login with your <span className="text-blue-600">Account</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500">
            <span className="text-gray-500 mr-2">✉</span>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-sm text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500">
            <span className="text-gray-500 mr-2">🔑</span>
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-sm text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-600">
          Don't have any Account?{" "}
          <span
            onClick={onSwitch}
            className="text-blue-600 cursor-pointer font-semibold underline"
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}