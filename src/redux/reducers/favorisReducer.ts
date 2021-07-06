import { ADD_LIKED_MOVIES, REMOVED_LIKED_MOVIES } from "../types";

export const favorisReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_LIKED_MOVIES:
      return [...state, action.payload];

    case REMOVED_LIKED_MOVIES:
      return [
        ...state,
        state.filter((item: any) => item.id !== action.payload),
      ];

    default:
      return state;
  }
};
