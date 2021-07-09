import React from "react";
import ReactDOM from "react-dom";
import "./AlbumsSearchCard.css";
import { Header } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";


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
              <ReactStars
                count={5}
                size={20}
                value={props.album.rating}
                isHalf={true}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#d0e1f9"
              />
            </div>
            <h3 className="TrackRelease">{props.album.first_release_date}</h3>
          </div>
        </div>
      </div>
    </a>
  );
}

export default AlbumsSearchCard;
