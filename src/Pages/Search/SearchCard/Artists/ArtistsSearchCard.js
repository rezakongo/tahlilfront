import React from "react";
import "./ArtistsSearchCard.css";
import ReactStars from "react-rating-stars-component";
import { Header } from "semantic-ui-react";

function ArtistsSearchCard(props) {
  return (
    <div className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
            <img width="100%" height="185" id="trackImg" src={
                (props.artist.photo=="")
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzxLjgPNZxJ_P_BH-k9DCKnd-StnfPdtnoA&usqp=CAU"
                  : props.artist.photo
              } />
            <Header as="h2" id="TrackTitle">
            {props.artist.name}
              <Header.Subheader id="TrackTitle">{props.artist.type}</Header.Subheader>
            </Header>
            <h3 className="TrackScore">
            <ReactStars
                        count={5}
                        size={20}
                        value={props.artist.score}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#fbff00"
                    />
            </h3>
            <h3 className="TrackRelease">1973-09-03</h3>
          </div>
        </div>
      </div>
  );
}

export default ArtistsSearchCard;
