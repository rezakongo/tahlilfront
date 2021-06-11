import React from "react";
import "./TracksSearchCard.css";
import TrackImage from "./karmapolice.jpg";
import { Header } from "semantic-ui-react";
import ReactStarRating from "react-rating-stars-component";

function TracksSearchCard(props) {
  return (
    <a href={`track\\${props.track.id}`} className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
            <img width="100%" height="185" id="trackImg" src={TrackImage} />

            <Header as="h2" id="TrackTitle">
              {props.track.title}
              <Header.Subheader id="TrackTitle">
                {props.track.artist.name}
              </Header.Subheader>
            </Header>
            <div className="TrackScore">
              <ReactStarRating
                value={2}
                numberOfStar={5}
                numberOfSelectedStar={2}
                colorFilledStar="red"
                colorEmptyStar="black"
                starSize="20px"
                spaceBetweenStar="10px"
                edit={false}
              />
            </div>
            <h3 className="TrackRelease">relese</h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default TracksSearchCard;
