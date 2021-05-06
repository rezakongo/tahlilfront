import React from "react";
import "./TracksSearchCard.css";
import TrackImage from "./karmapolice.jpg"


function TracksSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  
                        
                    <div className="col-md-12 col-sm-12  textContainer">
                    <img width="130" height="130" src={TrackImage}/>
                        <h1 className="TrackTitle">Title</h1>
                        <h2 className="TrackSinger">Singer</h2>
                        <h3 className="TrackScore">Score</h3>
                        <h3 className="TrackRelease">Release</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TracksSearchCard;