import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import { favorisReducer } from "./favorisReducer";

export default combineReducers({
  moviesReducer,
  favorisReducer,
});
