import React from "react";

class BookDetailPage extends React.Component {
  render() {
    // Get book id from URL.
    const { params } = this.props.match;

    // Create book element object based on book id from URL.
    const book = Object.assign(
      {},
      this.props.searchResult.find(book => book.id === params.id)
    );

    // Create volume info object.
    const volumeInfo = Object.assign({}, book.volumeInfo);

    return (
      // Create list of book infos.
      <ul id="book-info-container" className="list-group list-group-flush">
        <li class="list-group-item">{`Title: ${volumeInfo.title}`}</li>
        <li class="list-group-item">{`Description: ${volumeInfo.description}`}</li>
        <li class="list-group-item">{`Publisher: ${volumeInfo.publisher}`}</li>
        <li class="list-group-item">{`PublishedDate: ${volumeInfo.publishedDate}`}</li>
        <li class="list-group-item">{`Language: ${volumeInfo.language}`}</li>
        <li class="list-group-item">
          {`InfoLink: `}
          <a
            href={volumeInfo.infoLink}
            target="_blank"
          >{`${volumeInfo.infoLink}`}</a>
        </li>
      </ul>
    );
  }
}

export default BookDetailPage;
