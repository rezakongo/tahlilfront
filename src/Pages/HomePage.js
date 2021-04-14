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
      <div>
        <div className="container-fluid !direction !spacing ">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowSetting">
              <LandingTop/>
          </div>
          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowSetting">
              <ArtistsCarousel />
          </div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} tracksContain rowSetting">
            <div className="tracks">
            <HomePageTracks/>
            </div>
          </div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} containerSetting rowSetting">\
          
            <Container/>
            
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default HomePage;
