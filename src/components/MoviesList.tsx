import { useSelector } from "react-redux";

import { MovieContainer } from "./MoviesList.style";
import { MovieListItem } from "./MovieListItem";
import { MovieProps } from "../utils/types";

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
