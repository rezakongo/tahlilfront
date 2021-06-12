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

const AlbumTrackTable = () => (
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
      {AlbumsTrackData.map((Album) => {
        return (
          <div>
            
            <div
              className="row AlbumRow"
              id="desktop"
              href="test"
              onClick="test"
            >
              <div class="container-fluid !direction !spacing ">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}" id="AlbumRow2">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text">{Album.ReleaseDate}</div>
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 imgcontaner">
                    <Image src={Cover} rounded size="mini" />
                  </div>
                  <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 trackAlbumTitle">{Album.AlbumName}</div>
                  <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text   ttttest">
                    <Rating
                      value={Album.rateValue}
                      precision={0.1}
                      size={"small"}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row AlbumRow" id="mobile" href="test">
              <div class="col-12">
                <div className="row" id="AlbumRow2">
                  <div class="col-2 txt">{Album.ReleaseDate}</div>
                  <div class="col-3 ">
                    <Image src={Cover} rounded size="mini" />
                  </div>
                  <div class="col-7 col-xs">
                    <div class="col-sm txt">{Album.AlbumName}</div>
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
