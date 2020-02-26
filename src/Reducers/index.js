import { combineReducers } from "redux";
import fetchSearchReducer from "./fetchSearchReducer";
import showPageReducer from "./showPageReducer";
import pageLimitReducer from "./pageLimitReducer";

const rootReducer = combineReducers({
  searches: fetchSearchReducer,
  pageElements: showPageReducer,
  pageLimit: pageLimitReducer
});

export default rootReducer;
