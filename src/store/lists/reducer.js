import { SET_POKEMON_LIST, SET_TYPES_LIST } from "./types";

const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_POKEMON_LIST:
    return {
      ...state,
      lists: payload,
    };
  case SET_TYPES_LIST:
    return {
      ...state,
      lists: payload,
    };
  default:
    return state;
  }
};

export default listsReducer;
