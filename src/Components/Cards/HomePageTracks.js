import React from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from '@material-ui/core/styles';
import { Table, Image } from "semantic-ui-react";
import Cover from "./cover-dsotm.jpg";
import "./HomePageTracks.css";
import { TracksData } from "./TracksData";

const StyledRating = withStyles({
  iconFilled: {
    color: '#d0e1f9',
  },
  iconHover: {
    color: '#d0e1f9',
  },
})(Rating);

const TableExampleUnstackable = () => (
  <Table className="table" unstackable inverted>
    <Table.Body>
      {TracksData.map((track) => {
        return (
          <div>
            <div className="row trackRow" id="desktop" href="test">
              <div class="col-sm col-xs">
                <div className="row" id="trackRow2">
                  <div class="col-sm-1 text">{track.num}</div>
                  <div class="col-sm-2 ">
                    <Image src={Cover} rounded size="mini" />
                  </div>
                  <div class="col-sm   text">{track.trackName}</div>
                  <div class="col-sm text">{track.singerName}</div>
                  <div class="col-sm  text">
                    <StyledRating
                      value={track.rateValue}
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
                    <Image src={Cover} rounded size="mini" />
                  </div>
                  <div class="col-7 col-xs">
                    <div class="col-sm txt">{track.trackName}</div>
                    <div class="col-sm txt">{track.singerName}</div>
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

export default TableExampleUnstackable;
