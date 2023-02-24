import './Loading.css';

import { useEffect, useState } from 'react';

const Loading = () => {
  const [message, setMessage] = useState('Henter data..');

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage('Ingen data tilgjengelig >:(');
      return clearInterval(interval);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return <p className="loadingMessage">{message}</p>;
};

export default Loading;
