import React, { useState } from "react";
import Messages from "./Messages.jsx";
import TypeSend from "./TypeSend.jsx";

export default function Right() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = {
      text: text,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="w-[65%] bg-slate-800 text-white flex flex-col justify-between h-screen">
      {/* Header Area */}
      <div className="flex items-center gap-3 p-3 bg-slate-900 border-b border-gray-700">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
          D
        </div>
        <div>
          <h1 className="font-semibold text-sm">Deba</h1>
          <span className="text-xs text-gray-400">Deba@gmail.com</span>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <Messages messages={messages} />

      {/* Message Input Footer */}
      <TypeSend onSendMessage={handleSendMessage} />
    </div>
  );
}