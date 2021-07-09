import React from "react";
import ReactDOM from "react-dom";
import "./AlbumsSearchCard.css";
import ReactStarRating from "react-rating-stars-component";
import { Header } from "semantic-ui-react";

function AlbumsSearchCard(props) {
  return (
    <a href={`album\\${props.album.id}`} className="CardBody">
      <div className="container-fluid !direction !spacing test">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col-md-12 col-sm-12  textContainer">
            <img
              width="100%"
              height="185"
              id="trackImg"
              src={
                props.album.cover_image == ""
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvtOLF1dL5l5PBmVkb75sFOb3FA6rFT4ATJzIGKTCrhwNLTVXSP53ZSebjAKdub87ZhY&usqp=CAU"
                  : props.album.cover_image
              }
            />
            <Header as="h2" id="TrackTitle">
              {props.album.title}
              <Header.Subheader id="TrackTitle">
                {props.album.artist[0].name}
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
            <h3 className="TrackRelease">2007.02.14</h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default AlbumsSearchCard;
