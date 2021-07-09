import React from "react";
import { Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./AlbumTrackCard.css";

const AlbumTrackCard = (props) => (
  <a href={'\\'+'track'+'\\'+props.item.id} className="aCon" href="1">
    <div className="containerAC">
      <img src={Cover} className="image" />
      <div className="centered">
        <h3>{props.title}</h3>
      </div>
    </div>
  </a>
);

export default AlbumTrackCard;
