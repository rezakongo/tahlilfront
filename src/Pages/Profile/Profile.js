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
    var sectionStyle = {
      width: "100%",
      minHeight: "20rem",
      maxHeight:"fitContent",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url(data:image/jpeg;base64,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)",
      boxShadow:"inset 0 0 0 2000px rgba(2, 2, 2, 0.534)"
    };
    return (
      <div>
        <Navbar activeItem="" menuId="menu1"></Navbar>
        <div style={sectionStyle} className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowOne">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} proData">
              <a href="/editprofile" className="editP">
                {" "}
                <img width="30" height="30" src={Gear} /> <p className="editPt">EditProfile</p>
              </a>
              
              <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6 col-xs-12 topCol">
                <div className="imgContainer">
                  <img
                    width="230"
                    height="230"
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
            </div>
          </div>
        <div className="container-fluid !direction !spacing Contain">
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
