import React, { Component } from "react";
import LandingTop from "../Components/LandingTop/LandingTop";
import Navbar from "./../Components/Navbar/navbar";
import ArtistsCarousel from "../Components/AtistsCarousel/ArtistsCarousel"
import HomePageTracks from "../Components/Cards/HomePageTracks"
import Container from "../Components/Container/Container"
import "./HomePage.css"

class HomePage extends Component {
  state = { menuId: "menu1" };
  onScrollNavbar = () => {
    if (document.getElementById("landingtop").scrollTop > 150) {
      this.setState({ menuId: "menu2" });
    } else {
      this.setState({ menuId: "menu1" });
    }
  };
  render() {
    return (
      <div className="bd">
        
      </div>
    );
  }
}

export default HomePage;
