import React from "react";
import { Icon, Input } from "semantic-ui-react";
import "./LandingTop.css";

function LandingTop() {
  return (
    <div className="LandingBody">
      <div className="cont">
        <h1 className="tit">HEX BEAT</h1>
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
          className="searchBar"
        />
      </div>
    </div>
  );
}

export default LandingTop;
