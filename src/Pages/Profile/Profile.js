import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import "./Profile.css";
import Navbar from "../../Components/Navbar/navbar";
import Favorite from "../../Components/FavoritCards/Favorite";
import CommentCard from "../../Components/CommentCards/CommentCard";
import ProfileModals from "../../Components/ProfileModals/ProfileModals";
import CommentModals from "../../Components/CommentModal/CommentModal";
import ProfileRatingCard from "../../Components/ProfileRatingCard/ProfileRatingCard";
import RatingModal from "../../Components/RatingModal/RatingModal";
import BavanRatingCard from "../../Components/BavanRatingCard/BavanRatingCard";
import BavanRatingModal from "../../Components/BavanRatingModal/BavanRatingModal";
import Gear from "./gear.png";
import think from "./think.png";
import Footer from "../../Components/Footer/footer";
import axios from "axios";
import { Col } from "react-bootstrap";
import { Loader } from "semantic-ui-react";

class Profile extends React.Component {
  state = {
    id: "",
    userProfile: false,
    username: "",
    email: "",
    FName: "",
    LName: "",
    description: "",
    avatar: "",
    artistsData: [],
    favoriteAlbums: [],
    favoriteTracks: [],
    ratingTracks: [],
    ratingAlbums: [],
    albumComments:[],
    trackComments:[],
    artistComments:[],
    loading: true,
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id }, () => {
      this.APICallFunction();
    });
  }
  APICallFunction = () => {
    axios
      .get(`http://37.152.182.41/ProfileInfoAPI/?username=${this.state.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          username: res.data.username,
          email: res.data.email,
          aemail: res.data.email,
          FName: res.data.first_name,
          LName: res.data.last_name,
          description: res.data.description,
          avatar: `http://37.152.182.41${res.data.avatar}`,
          artistsData: res.data.followed_artists,
          favoriteAlbums:res.data.favorite_albums,
          favoriteTracks:res.data.favorite_musics,
          ratingTracks: res.data.rating_musics,
          ratingAlbums: res.data.rating_albums,
          albumComments: res.data.comment_albums,
          trackComments: res.data.comment_musics,
          artistComments: res.data.comment_artists,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(this.state.token);
        console.log(error.response);
      });

    if (this.state.id === this.state.username) {
      this.setState({ userProfile: true });
    }
  };
  render() {
    var sectionStyle = {
      width: "100%",
      minHeight: "20rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${this.state.avatar})`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.534)",
    };

    var AlbumShowMore = true;

    function AlbumShowMoreClick() {
      if (AlbumShowMore == true) {
        AlbumShowMore = false;
        console.log(AlbumShowMore);
      } else {
        AlbumShowMore = true;
        console.log(AlbumShowMore);
      }
    }
    if (this.state.loading) {
      return <Loader content="Loading" size="large" inverted />;
    } else {
      return (
        <div>
          <Navbar activeItem="profile" menuId="menu2" />
          <div
            style={sectionStyle}
            className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowOne"
          >
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} proData">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 topCol">
                <div className="imgContainer">
                  <img className="Picture" src={this.state.avatar} />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-xs-12 nameAndDesContainer">
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  <div class="col-xl-12 ">
                    <div className="NameContainer">
                     
                        {this.state.FName=="" || this.state.LName=="" ?
                          this.state.id
                        :
                          this.state.FName+" "+this.state.LName
                    }
                     
                    </div>
                  </div>
                  <div class="col-xl-12">
                    <div className="DescriptionContainer">
                    {this.state.description=="" ?
                          "bio":
                          this.state.description
                    }
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <br />
                <br />

                <a href="/editprofile">
                  <button className="followButton">Edit Profile</button>
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid !direction !spacing Contain">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowtwo">
              <div className="col-md-8 col-sm-12  colone">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} leftContain">
                  <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titlecomment">
                    <h2 className="divider line glow" contenteditable>
                      RATINGS
                    </h2>
                    <div class="col-0 col-sm-0 col-md-3 col-lg-5 col-xl-7"></div>
                    <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3"></div>
                  </div>
                  <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ratingPosition">
                    <div className="rightContainitems">
                      {this.state.ratingAlbums.map((alb)=>{
                        return <BavanRatingCard tag='album' item={alb}/>;
                      })}
                      {this.state.ratingTracks.map((trc)=>{
                        return <BavanRatingCard tag='track' item={trc}/>;
                      })}
                      {
                      (this.state.ratingAlbums.length==0 && this.state.ratingTracks.length==0) ? <img width="200" height="200" src={think} className="thinkingImage"/>:<div/>
                      }
                      
                    </div>
                  </div>
                  <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titlecomment">
                    <h2 className="divider line glow" contenteditable>
                      COMMENTS
                    </h2>
                    <div class="col-0 col-sm-0-col-md-4 col-lg-6 col-xl-8"></div>
                    <div class="col-12 col-sm-6-col-md-4 col-lg-3 col-xl-2"></div>
                  </div>
                  
                  {this.state.albumComments.map((trc)=>{
                    return <CommentCard tag='album'  item={trc}/>;
                  })}
                  {this.state.trackComments.map((trc)=>{
                    return <CommentCard tag='track' item={trc}/>;
                  })}

                  {this.state.artistComments.map((trc)=>{
                    return <CommentCard tag='artist' item={trc}/>;
                  })}
                  
                  {
                      (this.state.albumComments.length==0 && this.state.trackComments.length==0 && this.state.albumComments.length==0) ? <img width="300" height="300" src={think} className="thinkingImage"/>:<div/>
                  }
                </div>
              </div>
              <div className="col-md-4 col-sm-12 coltwo">
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                  <div className="FavoriteTitle">Albums</div>
                  <div className="rightContainitems">
                    {
                      this.state.favoriteAlbums.length==0 ? <img width="300" height="300" src={think}/>:<div/>
                    }
                    {this.state.favoriteAlbums.map((Album) => {
                      return <Favorite tag='album' item={Album} />;
                    })}
                  </div>
                </div>
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                  <div className="FavoriteTitle">Tracks</div>
                  <div className="rightContainitems">
                  {
                      this.state.favoriteTracks.length==0 ? <img width="300" height="300" src={think}/>:<div/>
                    }
                    {this.state.favoriteTracks.map((Track) => {
                      return <Favorite tag='track' item={Track} />;
                    })}
                  </div>
                </div>
                <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rightContain">
                  <div className="FavoriteTitle">Artists</div>
                  <div className="rightContainitems">
                  {
                      this.state.artistsData.length==0 ? <img width="300" height="300" src={think}/>:<div/>
                    }
                    {this.state.artistsData.map((artist) => {
                      return <Favorite tag='artist' item={artist} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer style={{ marginTop: "5px" }} />
        </div>
      );
    }
  }
}

export default Profile;
