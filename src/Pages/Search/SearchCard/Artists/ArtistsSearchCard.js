import React from "react";
import "./ArtistsSearchCard.css";
import ArtistImage from "./usa.jpg"


function ArtistsSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rows">

                    <div className="col-md-12 col-sm-12  textContainer">
                        <h1 className="title">Singer</h1>
                        <img width="70" height="50" src={ArtistImage} className="img" />
                        <h2 className="SingerRate">Rate</h2>
                        <h2 className="SingerDate">Date</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistsSearchCard;