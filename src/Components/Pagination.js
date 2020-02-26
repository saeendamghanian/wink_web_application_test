import React from "react";
import { connect } from "react-redux";
import showPage from "../Actions/showPage";

const Pagination = ({ searchResult, maxPageLimit, showPage }) => {
  let numOfPages = [];

  // Find number of paginators.
  for (let i = 1; i <= Math.ceil(searchResult.length / maxPageLimit); i++) {
    numOfPages.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {// Create paginators based on the amount of them.
        numOfPages.map((element, index) => (
          <li key={index} className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => showPage(index + 1, searchResult, maxPageLimit)}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default connect(null, { showPage })(Pagination);
