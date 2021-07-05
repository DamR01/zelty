import { useSelector } from "react-redux";

import { MovieContainer } from "./MoviesList.style";
import { MovieListItem } from "./MovieListItem";

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

  return (
    <MovieContainer>
      {movies?.map((movie: MovieProps, key: number) => (
        <MovieListItem movie={movie} key={key} />
      ))}
    </MovieContainer>
  );
};
