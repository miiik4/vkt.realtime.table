import './App.css';

import config from './appConfig.json';
import Header from './features/shell/Header';
import Timetable from './features/timetable/Timetable';

const App = () => (
  <>
    <Header title={config.title} />
    {config.selected.map((selected) => (
      <Timetable
        key={selected.stopCode}
        stopCode={selected.stopCode}
        lineName={selected.lineName}
        directionCode={selected.directionCode}
      />
    ))}
  </>
);

export default App;
