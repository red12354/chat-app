import React from 'react';
import User from './User';

const Users = () => {
  const storedUser = JSON.parse(localStorage.getItem('ChatUser')) || JSON.parse(localStorage.getItem('user'));
  
  const userList = storedUser 
    ? [{ id: 1, fullname: storedUser.fullname || storedUser.name || "Aritra", email: storedUser.email || "aritra@gmail.com" }]
    : [{ id: 1, fullname: "Aritra", email: "aritra@gmail.com" }];

  return (
    <div className="flex-1 overflow-y-auto max-h-[80vh] space-y-1">
      {userList.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Users;