import { PAGE_ELEMENTS } from "./types";

// Create an array of book which should be deslpayed.
const showPage = (num, data, maxPageLimit) => dispatch => {
  const tableBodyResult = data.slice(
    maxPageLimit * num - maxPageLimit,
    maxPageLimit * num
  );

  dispatch({
    type: PAGE_ELEMENTS,
    payload: tableBodyResult,
    pageNum: num
  });
};

export default showPage;
