import React, { useState } from "react";

export default function TypeSend({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    onSendMessage(message);
    setMessage(""); // Input box clear kora
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-slate-900 border-t border-gray-700 flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Type here..."
        className="flex-1 bg-slate-800 text-sm text-gray-200 outline-none px-4 py-2 rounded-lg border border-gray-700 focus:border-blue-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition duration-200"
      >
        Send
      </button>
    </form>
  );
}