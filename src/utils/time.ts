export const readableTimeUntil = (dateString: string) => {
  if (dateString) {
    const date = new Date(dateString);
    const diff = date.getTime() - new Date().getTime();
    const minutes = Math.round(diff / 60000);
    if (minutes > 120) return getTimeOfDate(date.toString());
    if (minutes > 60) return `${Math.trunc(minutes / 60)} t ${minutes - 60} min`;
    if (minutes < 1) return `Nå`;
    return `${minutes} min`;
  }

  return null;
};

export const getTimeOfDate = (dateString?: string) => {
  const date = dateString ? new Date(dateString) : new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};
