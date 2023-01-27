export const readableTimeUntil = (dateString: string) => {
  if (dateString) {
    const date = new Date(dateString);
    const diff = date.getTime() - new Date().getTime();
    const minutes = Math.round(diff / 60000);
    if (minutes > 60) return `${(minutes / 60).toFixed(1)} timer`;
    if (minutes < 1) return `Now`;
    return `${minutes} min`;
  }

  return null;
};

export const getTimeOfDate = (dateString: string) => {
  if (dateString) {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return null;
};
