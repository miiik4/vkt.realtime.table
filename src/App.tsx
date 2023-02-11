import './App.css';

import Header from './features/shell/Header';
import Timetable from './features/timetable/Timetable';
import Settings from './features/shell/Settings';
import { useEffect } from 'react';
import { setInitialFontSize } from './utils/font';

const App = () => {
  useEffect(() => {
    setInitialFontSize();
  }, []);

  return (
    <>
      <Header />
      <Timetable />
      <Settings />
    </>
  );
};

export default App;
