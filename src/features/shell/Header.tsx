import './Header.css';
import config from 'src/appConfig.json';

import { useEffect, useState } from 'react';
import { getTimeOfDate } from 'src/utils/time';

const Header = () => {
  const [clock, setClock] = useState(getTimeOfDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getTimeOfDate());
    }, config.updateInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="headerWrapper">
      <img src="bus.webp" alt="bus logo" />
      <h2 className="headerTitle">{config.title}</h2>
      <h2 className="headerClock">{clock}</h2>
    </div>
  );
};

export default Header;
