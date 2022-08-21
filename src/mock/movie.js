import dayjs from 'dayjs';
import { getRandomInteger, getRandomValue } from '../utils.js';
import { FILM_COUNT } from '../const.js';
import {
  NAME_COUNT, MAX_COMMENT_ON_FILM, GenreCount, Rating, RunTime,
  AgeRating, YearsDuration, names, surnames, titles, posters,
  genres, description, countries
} from './const.js';

const generateMovie = () => ({
  title: getRandomValue(titles),
  alternativeTitle: getRandomValue(titles),
  totalRating: getRandomInteger(Rating.MIN, Rating.MAX),
  poster: getRandomValue(posters),
  ageRating: getRandomInteger(AgeRating.MIN, AgeRating.MAX),
  director: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  writers: Array.from({length: NAME_COUNT}, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  actors: Array.from({length: NAME_COUNT}, () => `${getRandomValue(names)} ${getRandomValue(surnames)}`),
  release: {
    date: dayjs().subtract(getRandomInteger(YearsDuration.MIN, YearsDuration.MAX), 'year').toISOString(),
    releaseCountry: getRandomValue(countries)
  },
  runTime: getRandomInteger(RunTime.MIN, RunTime.MAX),
  genre: Array.from({length: getRandomInteger(GenreCount.MIN, GenreCount.MAX)}, () => getRandomValue(genres)),
  description
});

export const generateMovies = () => {
  const movies = Array.from({length: FILM_COUNT}, generateMovie);

  let totalCommentsCount = 0;

  return movies.map((movie, index) => {
    const hasComments = getRandomInteger(0, 1);

    const movieCommentsCount = (hasComments)
      ? getRandomInteger(1, MAX_COMMENT_ON_FILM)
      : 0;

    totalCommentsCount += movieCommentsCount;

    return {
      id: String(index + 1),
      comments: (hasComments)
        ? Array.from({length: movieCommentsCount},
          (_value, commentIndex) => String(totalCommentsCount - commentIndex)
        )
        : [],
      movieInfo: movie,
    };
  });
};

