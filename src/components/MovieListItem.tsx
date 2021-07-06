import { DateTime } from "luxon";
import { MovieProps } from "../utils/types";

import {
  MovieCard,
  StyledLink,
  MovieImg,
  Title,
  MovieRelease,
} from "./MovieListItem.style";

interface MovieListItemProps {
  movie: MovieProps;
}

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  const getDate = DateTime.local().toISODate();

  const moviedate = DateTime.fromISO(movie.release_date);
  const dateToday = DateTime.fromISO(getDate);
  const diffDate = dateToday.diff(moviedate, ["months", "days"]).toObject();

  return (
    <MovieCard>
      <StyledLink
        to={{
          pathname: `/movie/${movie.title}`,
          state: { pass: movie },
        }}
      >
        <MovieImg
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <Title>{movie.title}</Title>
        <MovieRelease>
          Date de sortie:
          {DateTime.fromISO(movie.release_date)
            .setLocale("fr")
            .toFormat("dd-LL-yyyy")}
          <MovieRelease>
            {diffDate.months === 0
              ? `Il y a ${diffDate.days} jours`
              : diffDate.months !== 0 && diffDate.days === 0
              ? `Il y a ${diffDate.months} mois`
              : `Il y a ${diffDate.months} mois et ${diffDate.days} jours`}
          </MovieRelease>
        </MovieRelease>
      </StyledLink>
    </MovieCard>
  );
};
