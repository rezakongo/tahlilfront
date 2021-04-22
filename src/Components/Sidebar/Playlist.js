import React from "react";
import Cardplay from "./Cardplay";
import "./Dashboard.css";

export default function Playlist(props) {
  return (
    <div className="list">
      {props.playlist.map((p) => (
        <Cardplay
          key={p.id}
          albumName={p.name}
          singerName={p.singer}
          albumCover={p.image}
          perview={p.perview}
          className="test"
        />
      ))}
    </div>
  );
}
