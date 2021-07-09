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
  <Table id="Tracktable" unstackable inverted>
    <Table.Body>
      <div>
        <div className="row " id="AlbumH">
          <div className="col-sm-11 col-xs">
            <div className="row">
              <div className="col-sm-6 text atTitle">
                <h1 text>Tracks</h1>
              </div>
              <div className="col-sm-6 text showAllCont ">
                <a href="test"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.tracks.map((track) => {
        return (
          <div>
            <div
              className="row AlbumRow"
              id="desktop"
              href="test"
              onClick="test"
            >
              <div className="col-sm-8 col-xs">
                <div class="container-fluid !direction !spacing ">
                  <div
                    class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}"
                    id="AlbumRow2"
                  >
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                      {track.title}
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text   ttttest">
                      <Rating
                        value={0}
                        precision={0.1}
                        size={"small"}
                        readOnly={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row AlbumRow" id="mobile" href="test">
              <div class="col-12">
                <div className="row" id="AlbumRow2">
                  <div class="col-7 col-xs">
                    <div class="col-sm txt">{track.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Table.Body>
  </Table>
);

export default AlbumTrackTable;
