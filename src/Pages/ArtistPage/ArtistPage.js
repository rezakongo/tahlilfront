import React, { Component } from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./ArtistPage.css";

class ArtistPage extends Component {
  render() {
   

    return (
      <div>
        <Navbar activeItem="Genres" menuId="menu2" />
        <div class="container-fluid !direction !spacing">
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} artistDataPosition">
                
            </div>
            <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
                <div class="container-fluid !direction !spacing bdyPosition">
                    
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ArtistPage;
