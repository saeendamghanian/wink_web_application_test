import { PAGE_ELEMENTS } from "../Actions/types";

const initialState = {
  eachPageElements: [],
  pageNum: 0
};

// Show page reducer which modifies the states for the elements that should displayed on page and
// the page number of page which is already on it.
const showPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_ELEMENTS:
      return {
        ...state,
        eachPageElements: action.payload,
        pageNum: action.pageNum
      };
    default:
      return state;
  }
};

export default showPageReducer;
