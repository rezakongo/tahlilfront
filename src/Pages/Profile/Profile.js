import React, { Component } from "react";
import "./Profile.css";
import Navbar from "../../Components/Navbar/navbar";
import Favorite from "../../Components/FavoritCards/Favorite";
import CommentCard from "../../Components/CommentCards/CommentCard";
import Gear from "./gear.png";

class Profile extends React.Component {
  state = {
    Avatar:
      "https://www.hdwallpaper.nu/wp-content/uploads/2016/01/zlatan_ibrahimovic_wallpaper_93590.png",
  };
  render() {
    return (
      <div>
        <Navbar activeItem="" menuId="menu1"></Navbar>
        <div className="container-fluid !direction !spacing Contain">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowOne">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} proData">
              <a href="#" className="editP">
                {" "}
                <img width="30" height="30" src={Gear} /> EditProfile
              </a>

              <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6 col-xs-12 topCol">
                <div className="imgContainer">
                  <img
                    width="160"
                    height="160"
                    className="Picture"
                    src={this.state.Avatar}
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-xs-12 nameAndDesContainer">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  <div class="col-xl-12 ">
                    <div className="NameContainer">Zlatan Ibrahimovich</div>
                  </div>
                  <div class="col-xl-12">
                    <div className="DescriptionContainer">
                      Morghi ke Anjir Mikhore Nokesh Kaje
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-5 col-sm-12 col-xs-12"></div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 signupDate">
                Date
              </div>
            </div>
          </div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowtwo">
            <div className="col-md-8 col-sm-12  colone">
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} leftContain">
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
            </div>
            <div className="col-md-4 col-sm-12 coltwo">
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                <div className="FavoriteTitle">Albums</div>
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
              </div>
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                <div className="FavoriteTitle">Tracks</div>
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
              </div>
              <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                <div className="FavoriteTitle">Artists</div>
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
                <Favorite />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
