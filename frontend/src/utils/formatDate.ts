export const formatDate = (date: string | number | Date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: '2-digit',
    //dayPeriod: 'narrow',
  });
};
