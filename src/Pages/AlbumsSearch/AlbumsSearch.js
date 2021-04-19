import React from "react"
import AlbumsSearchCard from "../Search/SearchCard/Albums/AlbumsSearchCard"
import "./AlbumsSearch.css"
function AlbumsSearch(){
    return(
        <div className="bdy">
            <div className="itemContainer">
                <AlbumsSearchCard/>
                <AlbumsSearchCard/>
                <AlbumsSearchCard/>
                <AlbumsSearchCard/>
                <AlbumsSearchCard/>
            </div>
        </div>
    )
}

export default AlbumsSearch;