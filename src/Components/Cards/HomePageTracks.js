import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./HomePageTracks.css";
import { TracksData } from "./TracksData";

const StyledRating = withStyles({
  iconFilled: {
    color: "#d0e1f9",
  },
  iconHover: {
    color: "#d0e1f9",
  },
})(Rating);

class TableExampleUnstackable extends Component {
  state = {};

  render() {
    return (
      <Table className="table" unstackable inverted>
        <Table.Body>
          {this.props.trc.map((track) => {
            return (
              <a href={`track\\${track.id}`}>
                <div className="row trackRow" id="desktop" href="test">
                  <div class="col-sm col-xs">
                    <div className="row" id="trackRow2">
                      <div class="col-sm-1 text">{track.num}</div>
                      <div class="col-sm-2 ">
                        <img
                          height="50"
                          src={track.photo}
                          rounded
                          size="mini"
                        />
                      </div>
                      <div class="col-sm   text">{track.title}</div>
                      <div class="col-sm text">{track.artist[0].name}</div>
                      <div class="col-sm  text">
                        <StyledRating
                          value={track.rating}
                          precision={0.1}
                          size={"small"}
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row trackRow" id="mobile" href="test">
                  <div class="col-12">
                    <div className="row" id="trackRow2">
                      <div class="col-2 txt">{track.num}</div>
                      <div class="col-3 ">
                        <Image src={track.photo} rounded size="mini" />
                      </div>
                      <div class="col-7 col-xs">
                        <div class="col-sm txt">{track.title}</div>
                        <div class="col-sm txt">{track.artist[0].name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default TableExampleUnstackable;
