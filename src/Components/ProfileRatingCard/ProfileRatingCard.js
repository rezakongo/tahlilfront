import React from "react";
import "./ProfileRatingCard.css";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export default function ProfileRatingCard(){
    return(
        <div className="ProfileRatingCardBdy">
            <div class="container-fluid !direction !spacing ProfileRatingCardDtaContain">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ">
                    <div class="col-12  ProfileRatingCardImageContain">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp541zb6jAu3pCjZN3IB7lsdJdtvrNHtZpUA&usqp=CAU" className="ProfileRatingCardImag"/>
                    </div>
                    <div class="col-12  ProfileRatingCardTitleContain">
                        Eminem
                    </div>
                    <div class="col-12  ProfileRatingCardStarsContain">
                    <ReactStars
                        count={5}
                        size={22}
                        value={2}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}