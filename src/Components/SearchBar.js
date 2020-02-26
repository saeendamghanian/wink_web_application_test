import React from "react";
import { connect } from "react-redux";
import fetchSearchReq from "../Actions/fetchSearchReq";
import showPage from "../Actions/showPage";
import getMaxPageLimit from "../Actions/getMaxPageLimit";

class SearchBar extends React.Component {
  state = {
    input: ""
  };

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSearch = async e => {
    e.preventDefault();
    // Fetch data from API through calling action creator.
    await this.props.fetchSearchReq(this.state.input);
    // Prepare the page elements based on fetched data.
    this.props.showPage(1, this.props.searchResult, this.props.maxPageLimit);
  };

  handleSelectChange = async e => {
    e.preventDefault();
    // Get the input of page limit from the user through action creator.
    await this.props.getMaxPageLimit(parseInt(e.target.value));
    // Prepare the page elements based on new page limit from the user input.
    this.props.showPage(1, this.props.searchResult, this.props.maxPageLimit);
  };

  render() {
    return (
      // Nav bar elements
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark  justify-content-between">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              value={this.state.input}
              onChange={this.handleInputChange}
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </form>
          <div>
            <span className="navbar-text text-white mr-2">Item per page</span>
            <select
              id="maxPageLimit"
              className="custom-select"
              onChange={this.handleSelectChange}
            >
              <option value="5" defaultValue>
                5
              </option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(null, { fetchSearchReq, showPage, getMaxPageLimit })(
  SearchBar
);
