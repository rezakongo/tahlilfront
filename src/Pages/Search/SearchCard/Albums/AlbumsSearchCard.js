import React from "react";
import "./AlbumsSearchCard.css";
import Kida from "./Kida.jpg"


function AlbumsSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                   
                        
                    <div className="col-md-12 col-sm-12  textContainer">
                        <img width="130" height="130"  src={Kida}/>\
                        <h1 className="AlbumTitle">Album</h1>
                        <h3 className="AlbumSinger">Artist</h3>
                        <h3 className="AlbumRate">Release</h3>
                        <h4 className="AlbumRelease">Score</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsSearchCard;