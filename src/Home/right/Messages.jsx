import React from 'react';
import Message from './Message';
import useGetMessage from '../../context/useGetMessage';

function Messages() {
  const { messages } = useGetMessage ? useGetMessage() : { messages: [] };
  const safeMessages = Array.isArray(messages) ? messages : [];

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center items-center text-gray-400">
      {safeMessages.length > 0 ? (
        safeMessages.map((msg, index) => (
          <Message key={msg?._id || index} message={msg} />
        ))
      ) : (
        <p className="text-sm text-gray-400">No messages yet. Start a conversation!</p>
      )}
    </div>
  );
}

export default Messages;