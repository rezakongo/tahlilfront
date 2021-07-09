import React from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import { AlbumsTrackData } from "./AlbumsTrackData.js";
import "./AlbumTrackTable.css";

const StyledRating = withStyles({
  iconFilled: {
    color: "#d0e1f9",
  },
  iconHover: {
    color: "#d0e1f9",
  },
})(Rating);

const AlbumTrackTable = (props) => (
  
  <div id="AlbumTracktable" unstackable inverted>
    <div>
      <div>
        <div className="row " id="AlbumTrackTableAlbumH">
          <div className="col-sm-11 col-xs">
            <div className="row">
              <div className="col-sm-6 text atTitle">
                <h1 text>Tracks</h1>
              </div>
              <div className="col-sm-6 ">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <div class="container-fluid !direction !spacing albumTrackTableBody">
         <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} albumTrackTableRow">

      {props.tracks.map((track) => {
        return (
                    <a href={'\\'+'track'+'\\'+track.id} class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} AlbumTrackTableRRRow">
                      {track.title}
                      </a>                
        );
      })}
       
        </div>
       </div>
    </div>
  </div>
 
);

export default AlbumTrackTable;
