import { INCREASE_SIZE, DECREASE_SIZE } from "./types";

const initialState = {
  perPage: 21,
};

const sizeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case INCREASE_SIZE:
    return {
      ...state,
      perPage: payload + 20,
    };
  case DECREASE_SIZE:
    return {
      ...state,
      perPage: payload - 20,
    };

  default:
    return state;
  }
};

export default sizeReducer;
