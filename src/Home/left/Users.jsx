import React from 'react';
import User from './User';

const Users = () => {
  const storedUser = JSON.parse(localStorage.getItem('ChatUser')) || JSON.parse(localStorage.getItem('user'));

  let name = 'Aritra';
  let email = 'aritra@gmail.com';

  if (storedUser) {
    if (storedUser.fullname) name = storedUser.fullname;
    else if (storedUser.name) name = storedUser.name;

    if (storedUser.email) email = storedUser.email;
  }

  const userList = [{ id: 1, fullname: name, email: email }];

  return (
    <div className="flex-1 overflow-y-auto space-y-1">
      {userList.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Users;