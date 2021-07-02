import axios from "axios";
import { FETCH_MOVIES } from "./types";
import { Dispatch } from "redux";

export const moviesRequest = () => () => {
  const api_key = "ac559237f6c8fa925efadb2f02cac4c";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=fr-FR&year=2021`;
  return (dispatch: Dispatch) => {
    return axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: FETCH_MOVIES,
          payload: data.results,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
