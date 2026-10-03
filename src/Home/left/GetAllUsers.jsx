import { useEffect, useState } from 'react';

const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // LocalStorage theke active logged-in user dynamically render kora
    const storedUser = JSON.parse(localStorage.getItem('ChatUser')) || JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setAllUsers([{
        _id: storedUser._id || '1',
        fullname: storedUser.fullname || storedUser.name || 'Aritra',
        email: storedUser.email || 'aritra@gmail.com'
      }]);
    } else {
      setAllUsers([{
        _id: '1',
        fullname: 'Aritra',
        email: 'aritra@gmail.com'
      }]);
    }
  }, []);

  return [allUsers];
};

export default useGetAllUsers;