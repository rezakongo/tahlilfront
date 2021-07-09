import React from "react";
import "./TracksSearchCard.css";
import TrackImage from "./karmapolice.jpg";
import { Header } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";

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
              <ReactStars
                count={5}
                size={20}
                value={props.track.rating}
                isHalf={true}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#d0e1f9"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default TracksSearchCard;
