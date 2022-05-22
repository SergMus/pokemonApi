import { LOADER_ON, LOADER_OFF } from "./types";

const initialState = {
  loading: true,
};

const loaderReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
  case LOADER_ON:
    return {
      ...state,
      loading: true,
    };
  case LOADER_OFF:
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
};

export default loaderReducer;
