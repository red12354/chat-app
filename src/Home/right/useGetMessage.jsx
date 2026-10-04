import { useState, useEffect } from 'react';

const useGetMessage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages([]);
  }, []);

  return { messages: messages || [], loading };
};

export default useGetMessage;