import PropTypes from "prop-types";
import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";
import "./searchSug.css";
import { Redirect } from "react-router";
import axios from "axios";

const categoryLayoutRenderer = ({ categoryContent, resultsContent }) => (
  <div>
    <h3
      className="name"
      style={{
        margin: 0,
        backgroundColor: "rgb(55,71,103)",
        color: "white !important",
      }}
    >
      {categoryContent}
    </h3>
    <div
      style={{
        font: "20px",
        backgroundColor: "rgb(40,54,85)",
        color: "white !important",
      }}
      className="results"
    >
      {resultsContent}
    </div>
  </div>
);

categoryLayoutRenderer.propTypes = {
  categoryContent: PropTypes.node,
  resultsContent: PropTypes.node,
};

const categoryRenderer = ({ name }) => (
  <div id="cat">
    <Header size="small">{name}</Header>
  </div>
);

categoryRenderer.propTypes = {
  name: PropTypes.string,
};

const resultRenderer = ({ title }) => <p>{title} </p>;

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const initialState = {
  isLoading: false,
  results: [],
  value: "",
  redirect: false,
};

export default class SearchExampleCategory extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value, result: [] }, () => {
      setTimeout(() => {
        if (this.state.value.length < 1) return this.setState(initialState);

        axios
          .get(
            `http://37.152.182.41/api/page/SuggestionSearchAPIView/?search=${value}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            this.setState({
              isLoading: false,
              results: res.data.results,
            });
          })
          .catch((error) => {
            console.log(error.response);
          });
      }, 1000);
    });
  };
  enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.setState({ redirect: true });
    }
  };
  render() {
    const { isLoading, value, results, redirect } = this.state;

    return (
      <div>
        {" "}
        {redirect ? <Redirect push to={`/search?q=${value}`} /> : null}
        <Search
          category
          categoryLayoutRenderer={categoryLayoutRenderer}
          categoryRenderer={categoryRenderer}
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true,
          })}
          resultRenderer={resultRenderer}
          results={results}
          value={value}
          onKeyPress={this.enterPressed.bind(this)}
        />
      </div>
    );
  }
}
