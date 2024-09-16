import { DateTime } from 'luxon';

export const getTimeAgoStringFromDate = (createdDate: string) => {
  const dateTime = DateTime.fromISO(createdDate);

  return dateTime.toRelative({ base: DateTime.now(), style: 'long' });
};
