import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./AlbumTable.css";
import ReactStars from "react-rating-stars-component";
import Rating from "@material-ui/lab/Rating";

const StyledRating = withStyles({
  iconFilled: {
    color: "#d0e1f9",
  },
  iconHover: {
    color: "#d0e1f9",
  },
})(Rating);

const AlbumTable = (props) => (
  <Table id="Albumtable" unstackable inverted>
    <Table.Body>
      <div>
        <div className="row " id="AlbumH">
          <div className="col-sm-11 col-xs">
            <div className="row">
              <div className="col-sm-6 text atTitle">
                <h1 text>Latest Release</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid !direction !spacing AlbumTableBody">
        {props.albumsData.map((Album) => {
          return (
            <a
              href={"\\" + "album" + "\\" + Album.id}
              class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ArtistAlbumTableRow"
            >
              <div class="d-none d-sm-none d-md-block col-3  col-sm-3 col-md-3 col-lg-3 col-xl-3">
                {Album.release_date}
              </div>

              <div class="d-block d-sm-block d-md-none col-2  col-sm-3 col-md-0 col-lg-0 col-xl-0">
                {Album.release_date.substr(0, 4)}
              </div>

              <div className="d-none d-sm-block col-5  col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {Album.title}
              </div>

              <div className="d-block d-sm-none col-5  col-sm-4 col-md-3 col-lg-3 col-xl-3">
                {Album.title.substr(0, 8)}
                {Album.title.length > 8 ? "..." : ""}
              </div>

              <div class=" col-5  col-sm-4 col-md-3 col-lg-3 col-xl-3">
                <ReactStars
                  count={5}
                  size={20}
                  value={Album.rating}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#d0e1f9"
                />
              </div>

              <div class="d-none d-sm-none d-md-block col-0  col-sm-0 col-md-3 col-lg-3 col-xl-3">
                {Album.genre.substr(0, 12)}
                {Album.genre.length > 13 ? "..." : ""}
              </div>
            </a>
          );
        })}
      </div>
      {/*<div className="ArtistsAlbumContainer">
        {props.albumsData.map((Album) => {
          return (
            
            <div>
              <div
                className="row AlbumRow"
                id="desktop"
                href="test"
                onClick="test"
              >
                <div class="container-fluid !direction !spacing boooogh">
                  <div className="row " id="AlbumH">
                    <div className="col-sm-11 col-xs">
                      <div className="row" id="AlbumRow2">
                        <div class="col-2 text">{Album.release_date}</div>
                        <div class="col-4 text">{Album.title}</div>
                        <div class="col-2 text">
                          <ReactStars
                            count={5}
                            size={20}
                            value={Album.rating}
                            isHalf={true}
                            edit={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#d0e1f9"
                          />
                        </div>
                        <div class="col-4 text">{Album.genre}</div>
                      </div>
                    </div>
                  </div>
                  <div className="row AlbumRow" id="mobile" href="test">
                    <div class="col-12">
                      <div className="row" id="AlbumRow2">
                        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 txt">
                          {Album.ReleaseDate}
                        </div>

                        <div class="col-7  col-sm-7 col-md-7 col-lg-7 col-xl-7">
                          <div className="AlbumText">{Album.AlbumName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>*/}
    </Table.Body>
  </Table>
);

export default AlbumTable;
