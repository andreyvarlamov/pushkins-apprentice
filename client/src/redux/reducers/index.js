import { combineReducers } from "redux";

import testReducers from "./testReducers";
import wordInfoReducers from "./wordInfoReducers";

export default combineReducers({
  test: testReducers,
  wordInfo: wordInfoReducers,
});
