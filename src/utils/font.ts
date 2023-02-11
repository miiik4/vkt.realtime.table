const root = document.documentElement;

const updateFontSize = (number: number) => {
  const fontSize = root.style.getPropertyValue('--font-size');
  const newFontSize = Number(fontSize ? fontSize.slice(0, -1) : 100) + number + '%';
  root.style.setProperty('--font-size', newFontSize);
  localStorage.setItem('fontSize', newFontSize);
};

export const setInitialFontSize = () => {
  const storedFontSize = localStorage.getItem('fontSize');
  !!storedFontSize && root.style.setProperty('--font-size', storedFontSize);
};

export const increaseFontSize = () => updateFontSize(10);
export const decreaseFontSize = () => updateFontSize(-10);
