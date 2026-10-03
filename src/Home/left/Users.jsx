import React, { useEffect, useState } from 'react';
import User from './User';
import { db } from '../../firebase'; // Tor firebase config path
import { collection, onSnapshot } from 'firebase/firestore';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Firebase Firestore-er 'users' collection theke live data fetch kora
    if (db) {
      const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      });
      return () => unsubscribe();
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto max-h-[80vh]">
      {users.length > 0 ? (
        users.map((user) => (
          <User key={user.id || user.email} user={user} />
        ))
      ) : (
        <div className="text-center text-gray-400 py-4 text-sm">
          No users found
        </div>
      )}
    </div>
  );
};

export default Users;