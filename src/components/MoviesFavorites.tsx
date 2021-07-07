import { useSelector } from "react-redux";

import { MovieContainer } from "./MoviesList.style";
import { MovieListItem } from "./MovieListItem";
import { MovieProps } from "../utils/types";

export const MoviesFavorites = () => {
  const favorites = useSelector((state: any) => state.favorisReducer);

  return (
    <MovieContainer>
      {favorites?.map((movie: MovieProps, key: number) => (
        <MovieListItem movie={movie} key={key} />
      ))}
    </MovieContainer>
  );
};
