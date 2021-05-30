import React from "react";
import "./ArtistsSearchCard.css";
import ReactStarRating from "react-rating-stars-component";
import { Header } from "semantic-ui-react";

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
              src={
                props.artist.photo == ""
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzxLjgPNZxJ_P_BH-k9DCKnd-StnfPdtnoA&usqp=CAU"
                  : props.artist.photo
              }
            />
            <Header as="h2" id="TrackTitle">
              {props.artist.name}
              <Header.Subheader id="TrackTitle">
                {props.artist.type}
              </Header.Subheader>
            </Header>
            <div className="TrackScore">
              <ReactStarRating
                numberOfStar={5}
                numberOfSelectedStar={2}
                colorFilledStar="red"
                colorEmptyStar="black"
                starSize="20px"
                spaceBetweenStar="10px"
                edit={false}
              />
            </div>
            <h3 className="TrackRelease">1973-09-03</h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ArtistsSearchCard;
