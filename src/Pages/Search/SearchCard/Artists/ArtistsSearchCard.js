import React from "react";
import "./ArtistsSearchCard.css";
import ArtistImage from "./radiohead.jpg"


function ArtistsSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rows">
                    <div className="col-md-2 col-sm-12 imageContainer">
                        <img width="70" height="70" src={ArtistImage} className="img" />
                    </div>
                    <div className="col-md-10 col-sm-12  textContainer">
                        <h1>Radio Head</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistsSearchCard;