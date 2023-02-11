import './Settings.css';

import { decreaseFontSize, increaseFontSize } from 'src/utils/font';

const Controls = () => (
  <div className="controlsWrapper">
    <span onClick={increaseFontSize}>+</span>
    <span onClick={decreaseFontSize}>-</span>
  </div>
);

export default Controls;
