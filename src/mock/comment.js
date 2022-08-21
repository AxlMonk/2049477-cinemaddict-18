import dayjs from 'dayjs';
import { getRandomInteger, getRandomValue } from '../utils.js';
import { DaysDuration, names, surnames, emotions, comment } from './const.js';

const generateComment = () => ({
  author: `${getRandomValue(names)}, ${getRandomValue(surnames)}`,
  comment,
  date: dayjs().subtract(getRandomInteger(DaysDuration.MIN, DaysDuration.MAX), 'day').toISOString(),
  emotion: getRandomValue(emotions),
});

const getCommentCount = (movies) => movies.reduce(
  (count, movie) => count + movie.comments.length, 0
);

export const generateComments = (movies) => {
  const commentCount = getCommentCount(movies);

  return Array.from({length: commentCount}, (_value, index) => {
    const commentItem = generateComment();

    return {
      id: String(index + 1),
      ...commentItem,
    };
  });
};

