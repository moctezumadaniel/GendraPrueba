import { combineReducers } from "redux";
import searchReducer from "./search";

const reducers = combineReducers({
  search: searchReducer,
});

export default reducers;
