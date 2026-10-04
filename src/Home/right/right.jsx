import React from 'react';
import Messages from './Messages';
import TypeSend from './TypeSend';

const Right = ({ selectedUser }) => {
  // LocalStorage or active selected user logic
  const activeUser = selectedUser || JSON.parse(localStorage.getItem('ChatUser')) || {
    name: 'Aritra',
    email: 'aritra@gmail.com'
  };

  const displayName = activeUser?.fullname || activeUser?.name || activeUser?.username || 'Aritra';
  const displayEmail = activeUser?.email || 'aritra@gmail.com';

  return (
    <div className="w-full bg-slate-900 text-white flex flex-col h-screen">
      {/* Top Chat Header */}
      <div className="flex items-center gap-3 p-4 bg-slate-800 border-b border-slate-700">
        <div className="avatar placeholder">
          <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
            {displayName.charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-base text-white">{displayName}</h2>
          <p className="text-xs text-gray-400">{displayEmail}</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <Messages />
      </div>

      {/* Message Input Box */}
      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <TypeSend />
      </div>
    </div>
  );
};

export default Right;