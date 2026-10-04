import React from 'react';

const User = ({ user }) => {
  const name = user?.fullname || user?.name || 'Aritra';
  const email = user?.email || 'aritra@gmail.com';

  return (
    <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition duration-150">
      <div className="avatar placeholder">
        <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
          {name.charAt(0).toUpperCase()}
        </div>
      </div>
      <div className="overflow-hidden">
        <h3 className="font-semibold text-white text-sm truncate">{name}</h3>
        <p className="text-xs text-gray-400 truncate">{email}</p>
      </div>
    </div>
  );
};

export default User;