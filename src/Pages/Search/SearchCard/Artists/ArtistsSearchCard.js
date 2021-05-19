import React from "react";
import "./ArtistsSearchCard.css";
import { Header } from "semantic-ui-react";

function ArtistsSearchCard(props) {
  return (
    <div className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
            <img width="100%" height="100%" id="trackImg" src="https://yt3.ggpht.com/ytc/AAUvwnhgjMg4EssbZxxBMDbx4e_IzUIwbGmABR4Lfwz9kxM=s900-c-k-c0x00ffffff-no-rj" />
            <Header as="h2" id="TrackTitle">
            {props.artist.name}
              <Header.Subheader id="TrackTitle">{props.artist.type}</Header.Subheader>
            </Header>
            <h3 className="TrackScore">{props.artist.score}</h3>
            <h3 className="TrackRelease">1973-09-03</h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ArtistsSearchCard;