export const SELECT_MONTHS = [
  { label: 'January', value: 'January' },
  { label: 'February', value: 'February' },
  { label: 'March', value: 'March' },
  { label: 'April', value: 'April' },
  { label: 'May', value: 'May' },
  { label: 'June', value: 'June' },
  { label: 'July', value: 'July' },
  { label: 'August', value: 'August' },
  { label: 'September', value: 'September' },
  { label: 'October', value: 'October' },
  { label: 'November', value: 'November' },
  { label: 'December', value: 'December' },
];

const DAYS_IN_MONTH = 31;

export const SELECT_DAYS = Array.from({ length: DAYS_IN_MONTH }, (_, i) => ({
  label: i + 1,
  value: i + 1,
}));

const NUMBER_OF_YEARS = 31;

export const SELECT_YEARS = Array.from({ length: NUMBER_OF_YEARS }, (_, i) => ({
  label: new Date().getFullYear() - i,
  value: new Date().getFullYear() - i,
}));

export const BIRTHDAY_SELECTS = [
  {
    label: 'Day',
    name: 'day',
    options: SELECT_DAYS,
  },
  {
    label: 'Month',
    name: 'month',
    options: SELECT_MONTHS,
  },
  {
    label: 'Year',
    name: 'year',
    options: SELECT_YEARS,
  },
];
