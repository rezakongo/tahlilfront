import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";
import "./LandingTop.css";

class LandingTop extends Component {
  state = {
    searchField: "",
  };

  render() {
    const handleChange = () => {};
    return (
      <div className="LandingBody">
        <div className="cont">
          <h1 className="tit">HEXBEAT</h1>
          <Input
            icon={<Icon name="search" id="iconColor" inverted circular link />}
            placeholder="Search..."
            className="searchBar"
            id="searchBarRadius"
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default LandingTop;
