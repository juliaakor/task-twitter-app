export const formatToBirthdayString = (day: string, month: string, year: string) => {
  const dayNumber = day.padStart(2, '0');
  const monthNumber = month.padStart(2, '0');

  return `${year}-${monthNumber}-${dayNumber}`;
};
