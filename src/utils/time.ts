export const readableTimeUntil = (dateString: string) => {
  if (dateString) {
    const date = new Date(dateString);
    const diff = date.getTime() - new Date().getTime();
    const minutes = Math.round(diff / 60000);
    if (minutes > 60) return `${(minutes / 60).toFixed(1)} h`;
    if (minutes < 1) return `Now`;
    return `${minutes} min`;
  }

  return null;
};

export const getDateTime = (dateString: string) => {
  if (dateString) {
    const date = new Date(dateString);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
      2,
      '0'
    )}`;
  }

  return null;
};
