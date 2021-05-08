import React from 'react';
import "./GenreCards.css";

function GenreCards(props){
    return(
        <div class="container-fluid !direction !spacing genreC">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titlePos">
                {props.genre.title}
            </div>
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} desPosition">
                <p id="test">{props.genre.description}</p>
            </div>
        </div>
    )
}


export default GenreCards;