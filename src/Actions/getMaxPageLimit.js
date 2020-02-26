import { PAGE_LIMIT } from "./types";

// Action creator for page limit which got from user input.
const getMaxPageLimit = pageLimit => dispatch => {
  dispatch({
    type: PAGE_LIMIT,
    payload: pageLimit
  });
};

export default getMaxPageLimit;
