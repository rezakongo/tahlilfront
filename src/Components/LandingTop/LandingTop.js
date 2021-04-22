import React,{Component} from "react";
import { Icon, Input } from "semantic-ui-react";
import "./LandingTop.css";


function LandingTop() {
  return (
    <div className="LandingBody">
      <div className="cont">
        <h1 className="tit">HEXBEAT</h1>
        <Input
          icon={<Icon name="search" id="iconColor"  inverted circular link />}
          placeholder="Search..."
          className="searchBar"
          id="searchBarRadius"
        />
      </div>
    </div>
  );
}

export default LandingTop;
