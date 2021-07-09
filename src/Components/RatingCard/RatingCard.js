import React from "react";
import "./RatingCard.css";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export default function BavanRatingCard(props) {
  const RName = () => {
    if (props.tag == "album") {
      return props.item.album.title;
    } else {
      return "sfwsf";
    }
  };
  return (
    <a
      href={
        "\\" +
        props.tag +
        "\\" +
        (props.tag == "album" ? props.item.album.id : "") +
        (props.tag == "track" ? props.item.music.id : "")
      }
    >
      <div className="BavanProfileRatingCardBdy">
        <div class="container-fluid !direction !spacing BavanProfileRatingCardDtaContain">
          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ">
            <div class="col-3 BavanProfileRatingCardImageContain">
              <img
                height="40"
                width="40"
                src={
                  (props.tag == "album" ? props.item.album.cover_image : "") +
                  (props.tag == "track" ? props.item.music.photo : "")
                }
              />
            </div>
            <div class="col-4  BavanProfileRatingCardTitleContain">
              {(props.tag == "album" ? props.item.album.title : "") +
                (props.tag == "track" ? props.item.music.title : "")}
            </div>
            <div class="col-5  BavanProfileRatingCardStarsContain">
              <ReactStars
                count={5}
                size={20}
                value={props.item.rating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#d0e1f9"
                edit={false}
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
