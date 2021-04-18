import React from "react";
import "./AlbumsSearchCard.css";



function AlbumsSearchCard(props){
    return(
        <div className="CardBody">
            <div className="container-fluid !direction !spacing">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} Rows">
                <div className="col-lg-2 col-sm-12 textContainer">
                    Type
                </div>
                <div className="col-lg-4 col-sm-12 ">
                    Img
                </div>
                <div className="col-lg-2 col-sm-12 textContainer">
                    Artist
                </div>
                <div className="col-lg-2 col-sm-12 textContainer">
                    Year
                </div>
                <div className="col-lg-2 col-sm-12 textContainer">
                    Name
                </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsSearchCard;