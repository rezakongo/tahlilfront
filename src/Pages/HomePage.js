import React, { Component } from "react";
import LandingTop from "../Components/LandingTop/LandingTop";
import Navbar from "./../Components/Navbar/navbar";

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
      <div id="navbar" onScroll={this.onScrollNavbar}>
        <Navbar menuId={this.state.menuId} activeItem="Home" />
        <LandingTop id="landingtop" />
      </div>
    );
  }
}

export default HomePage;
