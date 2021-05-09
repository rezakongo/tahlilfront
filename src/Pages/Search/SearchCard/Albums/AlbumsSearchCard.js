import { date } from "faker";
import React from "react";
import "./AlbumsSearchCard.css";
import Kida from "./Kida.jpg"


function AlbumsSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                   
                        
                    <div className="col-md-12 col-sm-12  textContainer">
                        <img width="130" height="130"  src={props.album.cover_image}/>\
                        <h1 className="AlbumTitle">{props.album.title}</h1>
                        <h3 className="AlbumSinger">{props.album.artist.name}</h3>
                        <h3 className="AlbumRate">{props.album.score}</h3>
                        <h4 className="AlbumRelease">{props.album.firstreleasedate}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsSearchCard;