import React from 'react';
import "./Favorite.css"
import tpac from "./2pac.jpg";
import close from "./x.png";

function Favorite(){
    return(
        <div className="container-fluid !direction !spacing FavoriteCartContainer">
            <div className="row  FavoritCard">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 imagePosition">
                    <img width="50" height="50" src={tpac} className="imag"/>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 captionPosition">
                    <div className="row  namePosition">
                        Name
                    </div>
                    <div className="row  typePosition">
                        Music
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2  scorePosition">
                    <div className="score">
                        <button className="removeB"><img width="20" height="20" src={close} className="ax"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorite;