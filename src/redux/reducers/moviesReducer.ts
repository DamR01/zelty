import { FETCH_MOVIES } from "../types";

export default function moviesReducer(state = [], action: any) {
  switch (action.type) {
    case FETCH_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
}
