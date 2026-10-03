import React from "react";

export default function Message({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
      <div
        className={`text-sm px-4 py-2 rounded-2xl max-w-xs shadow ${
          isMe
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-slate-700 text-white rounded-bl-none"
        }`}
      >
        {message.text}
      </div>
      <span className="text-[10px] text-gray-400 mt-1 px-1">
        {message.time}
      </span>
    </div>
  );
}