import React, { Component } from "react";
import { Redirect } from "react-router";
import { Icon, Input } from "semantic-ui-react";
import "./LandingTop.css";

function LandingTop() {
  const [redirect, setRedirect] = React.useState(false);
  const [searchField, setSeachField] = React.useState();
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      setRedirect(true);
    }
  };
  return (
    <div className="LandingBody">
      {redirect ? <Redirect push to={`/search?q=${searchField}`} /> : null}
      <div className="cont">
        <h1 className="tit">HEXBEAT</h1>
        <Input
          icon={<Icon name="search" id="iconColor" inverted circular link />}
          placeholder="Search..."
          className="searchBar"
          id="searchBarRadius"
          onChange={(e) => {
            console.log(e);
            setSeachField(e.target.value);
          }}
          onKeyPress={enterPressed.bind(this)}
        />
      </div>
    </div>
  );
}

export default LandingTop;
