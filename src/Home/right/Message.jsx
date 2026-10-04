import React from 'react';

function Message({ message }) {
  const text = message?.text || message?.message || (typeof message === 'string' ? message : 'Hello!');

  return (
    <div className="chat chat-start my-2">
      <div className="chat-bubble bg-slate-700 text-white">
        {text}
      </div>
    </div>
  );
}

export default Message;