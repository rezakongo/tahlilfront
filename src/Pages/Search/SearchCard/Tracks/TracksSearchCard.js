import React from "react";
import "./TracksSearchCard.css";
import TrackImage from "./karmapolice.jpg";
import { Header } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";

function TracksSearchCard(props) {
  return (
    <div className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
<<<<<<< HEAD
            <img width="250px" height="250px" id="trackImg" src={TrackImage} />
=======
            <img width="100%" height="185" id="trackImg" src={TrackImage} />
            
>>>>>>> c6916d54347730bb8429c616aad3ec951e007d23
            <Header as="h2" id="TrackTitle">
              {props.track.title}
              <Header.Subheader id="TrackTitle">
                {props.track.artist.name}
              </Header.Subheader>
            </Header>
            <h3 className="TrackScore">
            <ReactStars
                        count={5}
                        size={20}
                        value={props.track.score}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#fbff00"
                    />
            </h3>
            <h3 className="TrackRelease">relese</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TracksSearchCard;
