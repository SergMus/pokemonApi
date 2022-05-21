import * as types from "./types";

export const loaderOn = () => {
  return {
    type: types.LOADER_ON,
  };
};

export const loaderOff = () => {
  return {
    type: types.LOADER_OFF,
  };
};
