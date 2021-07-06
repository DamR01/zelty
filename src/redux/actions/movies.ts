import axios from "axios";
import { DateTime } from "luxon";
import { Dispatch } from "redux";
import { FETCH_MOVIES } from "../types";

export const moviesRequest = () => {
  const todayDate = DateTime.local().toISODate();
  const api_key = "9ac559237f6c8fa925efadb2f02cac4c";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=fr-FR&year=2021&primary_release_date.lte=${todayDate}`;

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
