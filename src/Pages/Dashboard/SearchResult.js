import React from "react";
import CardAlbum from "./CardAlbum";
import "./Dashboard.css";

export default function Search(props) {
  return (
    <ul className="search-result">
      {props.playlist.map((p) => (
        <li>
          <CardAlbum
            key={p.id}
            albumName={p.name}
            singerName={p.singer}
            albumCover={p.image}
            perview={p.perview}
          />
        </li>
      ))}
    </ul>
  );
}
