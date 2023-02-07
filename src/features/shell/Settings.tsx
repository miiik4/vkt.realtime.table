import './Settings.css';

const Controls = () => {
  const root = document.documentElement;

  const updateFontSize = (number: number) => {
    const fontSize = root.style.getPropertyValue('--font-size');
    const newFontSize = fontSize ? Number(fontSize.slice(0, -1)) + number + '%' : '110%';
    root.style.setProperty('--font-size', newFontSize);
  };

  const increaseFontSize = () => updateFontSize(10);
  const decreaseFontSize = () => updateFontSize(-10);

  return (
    <div className="controlsWrapper">
      <span onClick={increaseFontSize}>+</span>
      <span onClick={decreaseFontSize}>-</span>
    </div>
  );
};

export default Controls;
