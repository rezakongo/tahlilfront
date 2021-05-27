import React from "react";
import "./ArtistsSearchCard.css";
import { Header } from "semantic-ui-react";

function ArtistsSearchCard(props) {
  return (
    <a href={`/${props.artist.id}`}>
      <div className="CardBody">
        <div className="container-fluid !direction !spacing test">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div className="col-md-12 col-sm-12  textContainer">
              <img
                width="250px"
                height="250px"
                id="trackImg"
                src={props.artist.photo}
              />
              <Header as="h2" id="TrackTitle">
                {props.artist.name}
                <Header.Subheader id="TrackTitle">
                  {props.artist.type}
                </Header.Subheader>
              </Header>
              <h3 className="TrackScore">{props.artist.score}</h3>
              <h3 className="TrackRelease">1973-09-03</h3>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ArtistsSearchCard;
