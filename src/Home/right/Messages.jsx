import React from "react";
import Message from "./Message.jsx";

export default function Messages({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-800">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-gray-400 text-sm">
            No messages yet. Send a message to start chatting!
          </p>
        </div>
      ) : (
        messages.map((msg, index) => <Message key={index} message={msg} />)
      )}
    </div>
  );
}