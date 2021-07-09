import React, { Component } from "react";
import AlbumsCarousel from "../../Components/AlbumTable/AlbumsCarousel";
import AlbumTable from "../../Components/AlbumTable/AlbumTable";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Slider from "react-slick";
import "./ArtistPage.css";
import eminem from "./eminem.jpg";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "bootstrap";
import Flag from "react-world-flags";

class ArtistPage extends Component {
  state = {
    id: "",
    login: false,
    follow: false,
    comments: [],
    albums: [],
    toptracks: [],
    loading: true,
    open: false,
    photo: "",
    general_info: null,
    genres: [],
  };
  componentDidMount() {
    if (localStorage.getItem("autToken") === null)
      this.setState({ login: false });
    else {
      this.setState({ login: true });
    }

    this.setState({ id: this.props.match.params.id }, () => {
      this.FetchData();
    });
  }

  FetchData = () => {
    if (this.state.login)
      axios
        .get(
          `http://37.152.182.41/ArtistAPIView/?id=${this.state.id}&limit=10`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem("autToken")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            follow: res.data.me_follow === "True" ? true : false,
            general_info: res.data.general_info,
            photo: res.data.general_info.photo,
            albums: res.data.musics_albums,
            toptracks: res.data.top_musics_albums,
            loading: false,
          });
          console.log(this.state.follow);
        });
    else
      axios
        .get(
          `http://37.152.182.41/ArtistAPIView/?id=${this.state.id}&limit=10`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            follow: res.data.me_follow === "True" ? true : false,
            general_info: res.data.general_info,
            photo: res.data.general_info.photo,
            albums: res.data.albums,
            musics: res.data.musics,

            toptracks: res.data.top_musics_albums,
            loading: false,
          });
          console.log(this.state.follow);
        });
  };

  render() {
    var sectionStyle = {
      width: "100%",
      minHeight: "25rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${this.state.photo})`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.534)",
    };

    const makeFollow = () => {
      this.setState({ follow: true });
      axios
        .post(
          `http://37.152.182.41/ArtistFollowAPI/?id=${this.state.id}`,
          {},
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("autToken")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    };

    const makeUnfollow = () => {
      this.setState({ follow: false });
      axios
        .post(
          `http://37.152.182.41/ArtistUnfollowAPI/?id=${this.state.id}`,
          {},
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("autToken")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        });
    };

    if (this.state.loading) {
      return <Loader content="Loading" size="large" inverted />;
    } else {
      return (
        <div>
          <Navbar activeItem="artist" menuId="menu2" />
          <div class="container-fluid !direction !spacing artistPageContainer">
            <div class="d-none d-sm-none d-md-none d-lg-block">
              <div
                style={sectionStyle}
                class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} x"
              >
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} artistDataPosition">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 imgContainer">
                    <img
                      width="280"
                      height="280"
                      className="imgkhodesh"
                      src={this.state.general_info.photo}
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-6">
                    <div class="container-fluid !direction !spacing dataContainer">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titleContainer">
                        {this.state.general_info.name}
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        {this.state.general_info.life_span.span}
                      </div>
                      <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ">
                        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 artistPageDateContainer ">
                          Country:
                        </div>
                        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ArtistPageFlag">
                          <Flag
                            code={this.state.general_info.country}
                            height="20rem"
                          />
                        </div>
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genresContainer">
                        <div className="artistPageDateContainer">
                          {this.state.general_info.genre.length > 0
                            ? "Genres: " + this.state.general_info.genre[0]
                            : ""}
                          {this.state.general_info.genre.length > 1
                            ? ", " + this.state.general_info.genre[1]
                            : ""}
                          {this.state.general_info.genre.length > 2
                            ? ", " + this.state.general_info.genre[2]
                            : ""}
                          {this.state.general_info.genre.length > 3
                            ? ", " + this.state.general_info.genre[3]
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-1 col-md-0 col-sm-0 col-0"></div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-12 ">
                    <div class="container-fluid !direction !spacing ">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} followcontain">
                        <div className="followersContainer">
                          {this.state.general_info.followings} Follows
                        </div>
                      </div>
                      <div
                        id={this.state.login ? "" : "hidden"}
                        class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}"
                      >
                        <button
                          className="followButton"
                          id={this.state.follow ? "hidden" : ""}
                          onClick={makeFollow}
                        >
                          Follow
                        </button>
                        <button
                          id={this.state.follow ? "" : "hidden"}
                          className="followButton"
                          onClick={makeUnfollow}
                        >
                          Unfollow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-block d-lg-none">
              <div style={sectionStyle} class="row ">
                <div class="row PartistDataPosition">
                  <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 PimgContainer">
                    <img
                      width="200"
                      height="200"
                      className="imgkhodesh"
                      src={this.state.general_info.photo}
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 PdataContainer">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-md-4 PtitleContainer">
                          {this.state.general_info.name}
                        </div>

                        <div class="col-12 col-md-4 dateContainer">
                          {this.state.general_info.life_span.span}
                        </div>
                        <div class="col-12 col-md-4 dateContainer">
                          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} artistPageMobileCountryContainer">
                            <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 artistPageDateContainer ">
                              Country:
                            </div>
                            <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ArtistPageFlag">
                              <Flag
                                code={this.state.general_info.country}
                                height="20rem"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4 genresContainer  ">
                          {this.state.general_info.genre.length > 0
                            ? "Genres: " + this.state.general_info.genre[0]
                            : ""}
                          {this.state.general_info.genre.length > 1
                            ? ", " + this.state.general_info.genre[1]
                            : ""}
                          {this.state.general_info.genre.length > 2
                            ? ", " + this.state.general_info.genre[2]
                            : ""}
                          {this.state.general_info.genre.length > 3
                            ? ", " + this.state.general_info.genre[3]
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 pfol">
                    <div className="Pfollowcontain">
                      <div class="row">
                        <div className=" folp">
                          <div className="followersContainer">
                            {this.state.general_info.followings} Follows
                          </div>
                          <div id={this.state.login ? "" : "hidden"}>
                            <button
                              id={this.state.follow ? "" : "hidden"}
                              className="pfollowButton"
                              onClick={makeFollow}
                            >
                              Follow
                            </button>
                            <button
                              id={this.state.follow ? "hidden" : ""}
                              className="pfollowButton"
                              onClick={makeUnfollow}
                            >
                              unFollow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
            <div class="container-fluid !direction !spacing bdyPosition">
              <AlbumsCarousel tracksData={this.state.toptracks} />
              <AlbumTable
                albumsData={this.state.albums}
              />
              <Comment
                login={this.state.login}
                type="Artist"
                id={this.state.id}
              />
            </div>
          </div>

          <Footer />
        </div>
      );
    }
  }
}
export default ArtistPage;
