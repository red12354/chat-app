import { useEffect, useState } from 'react';

const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('ChatUser')) || JSON.parse(localStorage.getItem('user'));

    let name = 'Aritra';
    let email = 'aritra@gmail.com';

    if (storedUser) {
      if (storedUser.fullname) name = storedUser.fullname;
      else if (storedUser.name) name = storedUser.name;

      if (storedUser.email) email = storedUser.email;
    }

    setAllUsers([{
      _id: '1',
      fullname: name,
      email: email
    }]);
  }, []);

  return [allUsers];
};

export default useGetAllUsers;