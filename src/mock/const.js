const NAME_COUNT = 2;

const MAX_COMMENT_ON_FILM = 5;

const GenreCount = {
  MIN: 1,
  MAX: 3
};

const Rating = {
  MIN: 0,
  MAX: 10
};

const AgeRating = {
  MIN: 0,
  MAX: 18
};

const RunTime = {
  MIN: 60,
  MAX: 180
};

const YearsDuration = {
  MIN: 5,
  MAX: 10
};

const DaysDuration = {
  MIN: 0,
  MAX: 7
};

const names = [
  'John',
  'Sam',
  'Mike',
  'Kolya',
  'Masha',
  'Dan',
  'Kira'
];

const surnames = [
  'Diesel',
  'Hell',
  'Ivanov',
  'Lee',
  'Sina',
  'Petrov',
  'Yensen'
];

const titles = [
  'Terminator',
  'Hitman',
  'Double Dragon',
  'Blade',
  'Made For Each Other',
  'Popeye Meets Sinbad',
  'Sagerush Trail',
  'Santa Claus Conquers The Martians',
  'The Dance Of Life',
  'The Great Flamation',
  'The Man With The Golden Arm'
];

const posters = [
  '../images/posters/made-for-each-other.png',
  '../images/posters/popeye-meets-sinbad.png',
  '../images/posters/sagebrush-trail.jpg',
  '../images/posters/santa-claus-conquers-the-martians.jpg',
  '../images/posters/the-dance-of-life.jpg',
  '../images/posters/the-great-flamarion.jpg',
  '../images/posters/the-man-with-the-golden-arm.jpg'
];

const genres = [
  'Animation',
  'Action',
  'Adventure',
  'Comedy',
  'Family',
  'Horror',
  'Thriller',
];

const emotions = [
  'smile',
  'sleeping',
  'puke',
  'angry',
];

const description = `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
                     Sed blandit, eros vel aliquam faucibus, purus ex euismod diam,
                     eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.
                     Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const comment = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Cras aliquet varius magna, non porta ligula feugiat eget.`;

const countries = ['USA', 'Russia', 'Germany', 'Finland', 'Japan', 'Mexico', 'France'];

export {
  NAME_COUNT,
  MAX_COMMENT_ON_FILM,
  GenreCount,
  Rating,
  RunTime,
  AgeRating,
  YearsDuration,
  DaysDuration,
  names,
  surnames,
  titles,
  posters,
  genres,
  emotions,
  description,
  comment,
  countries
};
