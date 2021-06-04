import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./AlbumTable.css";

const AlbumTable = (props) => (
  <Table className="table" unstackable inverted>
    <Table.Body>
      <div>
        <div className="row " id="AlbumH">
          <div className="col-sm-11 col-xs">
            <div className="row">
              <div className="col-sm-6 text atTitle">
                <h1 text>Latest Release</h1>
              </div>
              <div className="col-sm-6 text showAllCont ">
                <a href="test">
                  <p className="showAllText">Show All</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.albumsData.map((Album) => {
        return (
          <div>
            <div
              className="row AlbumRow"
              id="desktop"
              href="test"
              onClick="test"
            >
              <div className="col-sm-11 col-xs">
                <div className="row" id="AlbumRow2">
                  <div class="col-sm-2 text">{Album.release_date}</div>
                  <div class="col-sm-1 ">
                    <Image src={Cover} rounded size="mini" />
                  </div>
                  <div class="col-sm-4   text">{Album.title}</div>
                  <div class="col-sm-2  text">
                    <Rating
                      value={2}
                      precision={0.1}
                      size={"small"}
                      readOnly={true}
                    />
                  </div>
                  <div class="col-sm-4   text">{Album.Genres}</div>
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
