import React, { useState } from "react";

export default function Signup({ onSignupSuccess, onSwitch }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Chat Dashboard-e jaoar jonno call kora hocche
    onSignupSuccess({ username: formData.username, email: formData.email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-1">Messenger</h2>
        <p className="text-gray-600 mb-6 font-medium">
          Create a new <span className="text-blue-600">Account</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500">
            <span className="text-gray-500 mr-2">👤</span>
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              className="w-full outline-none text-sm text-gray-700"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500">
            <span className="text-gray-500 mr-2">✉</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none text-sm text-gray-700"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500">
            <span className="text-gray-500 mr-2">🔑</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none text-sm text-gray-700"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:border-blue-500">
            <span className="text-gray-500 mr-2">🔑</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full outline-none text-sm text-gray-700"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition duration-200"
          >
            Signup
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-600">
          Have any Account?{" "}
          <span
            onClick={onSwitch}
            className="text-blue-600 cursor-pointer font-semibold underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}