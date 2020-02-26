import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import Pagination from "./Pagination";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchResult={this.props.searches}
          maxPageLimit={this.props.pageLimit}
        />
        <Pagination
          searchResult={this.props.searches}
          maxPageLimit={this.props.pageLimit}
        />
        <SearchResult
          pageElements={this.props.pageElements}
          maxPageLimit={this.props.pageLimit}
          pageNum={this.props.pageNum}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searches: state.searches.searchResult,
  pageElements: state.pageElements.eachPageElements,
  pageLimit: state.pageLimit.eachPageLimit,
  pageNum: state.pageElements.pageNum
});

export default connect(mapStateToProps, null)(Welcome);
