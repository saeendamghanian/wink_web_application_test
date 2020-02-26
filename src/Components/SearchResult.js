import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ maxPageLimit, pageElements, pageNum }) => {
  return (
    // Create table of search result elements.
    <div className="container">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Authors</th>
              <th scope="col">Published Date</th>
            </tr>
          </thead>
          <tbody>
            {pageElements.map((element, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    {(pageNum - 1) * maxPageLimit + (index + 1)}
                  </th>
                  <td>
                    <Link to={`/book/${element.id}`}>
                      {element.volumeInfo.title}
                    </Link>
                  </td>
                  <td>{element.volumeInfo.authors}</td>
                  <td>{element.volumeInfo.publishedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResult;
