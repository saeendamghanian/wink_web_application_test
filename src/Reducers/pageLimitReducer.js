import { PAGE_LIMIT } from "../Actions/types";

const initialState = {
  eachPageLimit: 5
};

const pageLimitReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_LIMIT:
      return { ...state, eachPageLimit: action.payload };
    default:
      return state;
  }
};

export default pageLimitReducer;
