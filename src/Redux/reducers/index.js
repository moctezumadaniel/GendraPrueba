import { combineReducers } from "redux";
import contentReducer from "./content";
import searchReducer from "./search";

const reducers = combineReducers({
  search: searchReducer,
  content: contentReducer,
});

export default reducers;
