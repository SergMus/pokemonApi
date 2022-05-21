import * as types from "./types";

export const increaseNumber = (size) => ({
  type: types.INCREASE_SIZE,
  payload: size,
});

export const decreaseNumber = (size) => ({
  type: types.DECREASE_SIZE,
  payload: size,
});

