import React from "react";
import "./CommentCard.css";
import pic from "./Rihanna.jpg";

function CommentCard(){
    return(
        <div class="container-fluid !direction !spacing commentPosition">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} commentCard">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 imgPosition">
                    <img width="150" height="150" src={pic}/>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-9">
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} comment">
                            <p id="test">dlsoprwjgoprewopgoerpgopreogporenopvreopgmopermgopermgopmeropgmmoerpmgopremgopregopgeneopgngt</p>
                    </div> 
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} date">
                        esfperfref
                    </div> 
                </div>
            </div>         
        </div>
    )
}

export default CommentCard;