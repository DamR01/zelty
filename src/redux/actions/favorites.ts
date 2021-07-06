import { MovieProps } from "../../utils/types";
import { ADD_LIKED_MOVIES, REMOVED_LIKED_MOVIES } from "../types";

export const addToFav = (movie: MovieProps) => {
  return {
    type: ADD_LIKED_MOVIES,
    payload: movie,
  };
};

export const removeFromFav = (movie: MovieProps) => {
  return {
    type: REMOVED_LIKED_MOVIES,
    payload: movie,
  };
};
