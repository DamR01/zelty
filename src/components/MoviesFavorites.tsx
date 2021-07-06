import { connect, useSelector } from "react-redux";

import { MovieContainer } from "./MoviesList.style";
import { MovieListItem } from "./MovieListItem";
import { favorisReducer } from "../redux/reducers/favorisReducer";
import { MovieProps } from "../utils/types";

const MoviesFavorites = () => {
  const favorites = useSelector((state: any) => state.favorisReducer);

  return (
    <MovieContainer>
      {favorites?.map((movie: MovieProps, key: number) => (
        <MovieListItem movie={movie} key={key} />
      ))}
    </MovieContainer>
  );
};

export default connect(favorisReducer, null)(MoviesFavorites);
