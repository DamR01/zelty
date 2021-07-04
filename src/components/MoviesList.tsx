import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import {
  MovieContainer,
  StyledLink,
  MovieCard,
  MovieImg,
  Title,
  MovieRelease,
} from "./MoviesList.style";

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const MoviesList = () => {
  const movies = useSelector((state: any) => state.moviesReducer);

  // const getDate = DateTime.local().toISODate();

  // const movieDate = movies.map((movie: MovieProps) => {
  //   const moviedata = DateTime.fromISO(movie.release_date);
  //   const dateToday = DateTime.fromISO(getDate);
  //   return dateToday.diff(moviedata, ["months", "days"]).toObject();
  // });

  const movieRelease = movies?.map((movie: MovieProps, key: number) => (
    <MovieCard key={`movie_card_${key}`}>
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
        </MovieRelease>
      </StyledLink>
    </MovieCard>
  ));

  return <MovieContainer>{movieRelease}</MovieContainer>;
};
