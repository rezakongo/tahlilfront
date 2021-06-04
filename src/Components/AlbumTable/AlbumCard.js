import React from "react";
import { Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./AlbumCard.css";

const AlbumCard = (props) => (
  <a className="aCon" href="1">
    <div className="containerAC">
      <img src={Cover} className="image" />
      <div className="centered">
        <h3>{props.album.title}</h3>
      </div>
    </div>
  </a>
);

export default AlbumCard;
