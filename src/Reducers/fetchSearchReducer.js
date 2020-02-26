import { FETCH_SEARCH } from "../Actions/types";

const initialState = {
  searchResult: []
};

const fetchSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
};

export default fetchSearchReducer;
