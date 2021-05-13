import React, { Component } from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./ArtistPage.css";

class ArtistPage extends Component {
  render() {
   

    return (
      <div>
        <Navbar activeItem="Genres" menuId="menu2" />
        
      </div>
    );
  }
}

export default ArtistPage;
