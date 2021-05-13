import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import { AlbumsData } from "./AlbumsData.js";
import "./AlbumTable.css";

const AlbumTable = () => (
  <Table className="table" unstackable inverted>
    <Table.Body>
      {AlbumsData.map((Album) => {
        return (
          <div>
            <div
              className="row AlbumRow"
              id="desktop"
              href="test"
              onClick="test"
            >
              <div className="col-sm-7 col-xs">
                <div className="row" id="AlbumRow2">
                  <div class="col-sm-3 text">{Album.ReleaseDate}</div>
                  <div class="col-sm-2 ">
                    <Image src={Cover} rounded size="mini" />
                  </div>
                  <div class="col-sm-3   text">{Album.AlbumName}</div>
                  <div class="col-sm-3  text">
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

export default AlbumTable;
