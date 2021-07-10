import React from "react";
import "./ArtistsSearchCard.css";
import ReactStarRating from "react-rating-stars-component";
import { Header } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";

function ArtistsSearchCard(props) {
  return (
    <a href={`artist\\${props.artist.id}`} className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
            <img
              width="100%"
              height="185"
              id="trackImg"
              src={props.artist.photo}
            />
            <Header as="h2" className="title">
              {props.artist.name}
              <Header.Subheader id="TrackTitle">
                {props.artist.type}
              </Header.Subheader>
            </Header>
            <h3 className="TrackRelease">{props.artist.life_span.span}</h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ArtistsSearchCard;
