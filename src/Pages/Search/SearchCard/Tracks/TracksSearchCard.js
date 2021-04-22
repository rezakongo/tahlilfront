import React from "react";
import "./TracksSearchCard.css";
import TrackImage from "./karmapolice.jpg"


function TracksSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div className="col-md-2 col-sm-12 imageContainer">
                        <img width="130" height="130" src={TrackImage}/>
                    </div>
                    <div className="col-md-10 col-sm-12  textContainer">
                        <h1>Karma Police</h1>
                        <h2>Radio Head</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TracksSearchCard;