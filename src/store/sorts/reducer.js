import { SET_DESC_LIST, SET_GROUP_LIST } from "./types";

const initialState = {
  groups: [],
  sorts: {},
};

const sortsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GROUP_LIST:
      return {
        ...state,
        groups: payload,
      };
    case SET_DESC_LIST:
      return {
        ...state,
        sorts: {
          ...state.sorts,
          count: payload.count,
          results: payload.results.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          }),
        },
      };
    default:
      return state;
  }
};

export default sortsReducer;
