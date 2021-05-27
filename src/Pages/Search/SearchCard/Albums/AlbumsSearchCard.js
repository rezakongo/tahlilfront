import React from "react";
import "./AlbumsSearchCard.css";
import { Header } from "semantic-ui-react";

function AlbumsSearchCard(props) {
  return (
      <div className="CardBody">
        <div className="container-fluid !direction !spacing test">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div className="col-md-12 col-sm-12  textContainer">
              <img
                width="250px"
                height="250px"
                id="trackImg"
                src={props.album.cover_image}
              />
              <Header as="h2" id="TrackTitle">
                {props.album.title}
                <Header.Subheader id="TrackTitle">
                  {props.album.artist[0].name}
                </Header.Subheader>
              </Header>
              <h3 className="TrackScore">{props.album.score}</h3>
              <h3 className="TrackRelease">2007.02.14</h3>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AlbumsSearchCard;
