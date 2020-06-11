import { TEST_ACTION } from "./types";

export const testAction = value => dispatch => {
  dispatch({ type: TEST_ACTION, payload: value });
};
