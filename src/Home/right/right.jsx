import React from 'react';
import Messages from './Messages';
import TypeSend from './TypeSend';

function Right() {
  const storedUser = JSON.parse(localStorage.getItem('ChatUser')) || JSON.parse(localStorage.getItem('user'));

  let name = 'Aritra';
  let email = 'aritra@gmail.com';

  if (storedUser) {
    if (storedUser.fullname) name = storedUser.fullname;
    else if (storedUser.name) name = storedUser.name;

    if (storedUser.email) email = storedUser.email;
  }

  return (
    <div className="w-full bg-slate-900 text-white flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-slate-800 border-b border-slate-700">
        <div className="avatar placeholder">
          <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-base text-white">{name}</h2>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <Messages />
      </div>

      {/* Input */}
      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <TypeSend />
      </div>
    </div>
  );
}

export default Right;