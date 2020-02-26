import axios from "axios";
import { FETCH_SEARCH } from "./types";

// Get data from API based on user input and if it be empty use 'All' as a default value.
const fetchSearchReq = input => async dispatch => {
  input = input === "" ? "all" : input;
  const resultData = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=40`
  );
  dispatch({
    type: FETCH_SEARCH,
    payload: resultData.data.items
  });
};

export default fetchSearchReq;
