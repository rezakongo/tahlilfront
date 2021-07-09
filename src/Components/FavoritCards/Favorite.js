import React from "react";
import "./Favorite.css";
import tpac from "./2pac.jpg";
import close from "./x.png";

function Favorite(props) {
  if (props.item == null) return <div />;
  else
    return (
      <a href={'\\'+props.tag+'\\'+props.item.id} className="container-fluid !direction !spacing FavoriteCartContainer">
        <div className="row  FavoritCard">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 imagePosition">
            <img
              width="50"
              height="50"
              src={(props.tag=='artist'?props.item.photo:props.item.cover_image)}
              className="imag"
            />
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 captionPosition">
            <div className="row  namePosition">{(props.tag=='artist'?props.item.name:'')+(props.tag=='album'?props.item.title:'')+(props.tag=='track'?props.item.title:'')}</div>
            <div className="row  typePosition"></div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2  scorePosition">
            <div className="score">
              
            </div>
          </div>
        </div>
      </a>
    );
}

export default Favorite;
