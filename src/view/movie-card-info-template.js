import { formatStringToYear, formatMinutesToTime } from '../utils';

export const createMovieCardInfoTemplate = (movieInfo, commentsLength) => {
  const {
    title, totalRating,
    release, runTime,
    genre, poster,
    description,
  } = movieInfo;

  if (commentsLength === 1) {
    return `
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${formatStringToYear(release.date)}</span>
          <span class="film-card__duration">${formatMinutesToTime(runTime)}</span>
          <span class="film-card__genre">${genre[0]}</span>
        </p>
        <img src="${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">
          ${description}
        </p>
        <span class="film-card__comments">
          ${commentsLength} comment
        </span>
      </a>
    `;
  }

  return `
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${formatStringToYear(release.date)}</span>
        <span class="film-card__duration">${formatMinutesToTime(runTime)}</span>
        <span class="film-card__genre">${genre[0]}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">
        ${description}
      </p>
      <span class="film-card__comments">
        ${commentsLength} comments
      </span>
    </a>
  `;
};

