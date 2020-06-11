import { TEST_ACTION } from "../actions/types";

const initialState = {
  testValue: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        testValue: action.payload,
      };
    default:
      return state;
  }
}
