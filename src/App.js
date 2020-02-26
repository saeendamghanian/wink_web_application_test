import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookDetailPage from "./Components/BookDetailPage";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/wink_web_application_test/"
              component={Welcome}
              exact
            />
            <Route
              path="/wink_web_application_test/book/:id"
              render={props => (
                <BookDetailPage {...props} searchResult={this.props.searches} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searches: state.searches.searchResult
});

export default connect(mapStateToProps, null)(App);
