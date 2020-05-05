import React from "react";

export type Action = {
  type: "INCREMENT";
};

type State = {
  count: number;
};

export const initialState = {
  count: 0,
} as State;

const reducer = (state: State, action: Action): State => {
  return state;
};

export default reducer;
