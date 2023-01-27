import './App.css';

import config from './appConfig.json';
import Header from './features/shell/Header';
import Timetable from './features/timetable/Timetable';

const App = () => (
  <>
    <Header title={config.title} />
    <Timetable />
  </>
);

export default App;
