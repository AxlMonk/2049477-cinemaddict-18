import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const getRandomInteger = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomValue = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const formatStringToDateWithTime = (date) =>
  dayjs(date).format('YYYY/MM/DD hh:mm');

const formatStringToDate = (date) =>
  dayjs(date).format('DD MMMM YYYY');

const formatStringToYear = (date) =>
  dayjs(date).format('YYYY');

const formatMinutesToTime = (minutes) =>
  dayjs.duration(minutes, 'minutes').format('H[h]  mm[m]');

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


export {
  getRandomInteger,
  getRandomValue,
  formatStringToDateWithTime,
  formatStringToDate,
  formatStringToYear,
  formatMinutesToTime,
  isEscapeKey
};


