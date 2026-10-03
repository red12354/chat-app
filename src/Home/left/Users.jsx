import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // LocalStorage or Auth State check
    const storedUser = JSON.parse(localStorage.getItem('ChatUser')) || JSON.parse(localStorage.getItem('user'));
    
    if (storedUser) {
      setUserList([storedUser]);
    } else {
      // Fallback dynamic user state
      setUserList([{ id: 1, name: 'Aritra', email: 'aritra@gmail.com' }]);
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto max-h-[80vh] space-y-1">
      {userList.length > 0 ? (
        userList.map((u, index) => (
          <User key={u._id || u.id || index} user={u} />
        ))
      ) : (
        <div className="text-center text-gray-400 py-4 text-sm">
          No active users
        </div>
      )}
    </div>
  );
};

export default Users;