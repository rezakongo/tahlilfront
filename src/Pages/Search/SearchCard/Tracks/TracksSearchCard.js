import React from "react";
import "./TracksSearchCard.css";
import TrackImage from "./karmapolice.jpg";
import { Header } from "semantic-ui-react";

function TracksSearchCard(props) {
  return (
    <div className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
            <img width="100%" height="100%" id="trackImg" src={TrackImage} />
            <Header as="h2" id="TrackTitle">
              Title
              <Header.Subheader id="TrackTitle">Singer</Header.Subheader>
            </Header>
            <h1></h1>
            <h2 className="TrackSinger"></h2>
            <h3 className="TrackScore">Score</h3>
            <h3 className="TrackRelease">Release</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TracksSearchCard;
