import React from "react";
import "./BavanRatingCard.css";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export default function BavanRatingCard(){
    return(
        <div className="BavanProfileRatingCardBdy">
            <div class="container-fluid !direction !spacing BavanProfileRatingCardDtaContain">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ">
                    <div class="col-3 BavanProfileRatingCardImageContain">
                    <img height="40" width="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp541zb6jAu3pCjZN3IB7lsdJdtvrNHtZpUA&usqp=CAU"/>
                    </div>
                    <div class="col-3  BavanProfileRatingCardTitleContain">
                        Eminem
                    </div>
                    <div class="col-6  BavanProfileRatingCardStarsContain">
                    <ReactStars
                        count={5}
                        size={20}
                        value={2}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#fbff00"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}