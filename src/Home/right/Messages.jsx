import React from 'react';

function Messages() {
  const messages = []; 

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center items-center text-gray-400">
      {messages && messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className="chat chat-start my-2">
            <div className="chat-bubble">{msg.text || msg}</div>
          </div>
        ))
      ) : (
        <p className="text-sm">No messages yet. Start a conversation!</p>
      )}
    </div>
  );
}

export default Messages;