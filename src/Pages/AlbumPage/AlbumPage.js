import React, { Component } from "react";
import AlbumsCarousel from "../../Components/AlbumTable/AlbumsCarousel";
import AlbumTrackTable from "../../Components/AlbumTrackTable/AlbumTrackTable";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Slider from "react-slick";
import "./AlbumPage.css";
import eminem from "./eminem.jpg";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";
import axios from "axios";
import Heart from "react-heart";
import { Loader } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";
import star from "./star.png";

class AlbumPage extends Component {
  state = {
    id: "d8fa32bb-8ee3-4194-b87f-a6f72c6ec46b",
    login: true,
    loading: true,
    albumIsFavorit: false,
    rate: 0,
    result: [],
    tracks: [],
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
        .get(`http://37.152.182.41/AlbumAPIView/?id=${this.state.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("autToken")}`,
          },
        })
        .then((res) => {
          this.setState({
            albumIsFavorit: res.data.me_favorite !== "False",
            result: res.data.general_info,
            tracks: res.data.musics,
            rate: res.data.me_rate === null ? 0 : res.data.me_rate,
            loading: false,
          });
        });
    else
      axios
        .get(`http://37.152.182.41/AlbumAPIView/?id=${this.state.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.setState({
            albumIsFavorit: res.data.me_favorite !== "False",
            result: res.data.general_info,
            tracks: res.data.musics,
            rate: res.data.me_rate === null ? 0 : res.data.me_rate,
            loading: false,
          });
        });
  };

  render() {
    const makeFavorite = () => {
      if (!this.state.trackIsFavorit)
        axios.post(
          `http://37.152.182.41/AlbumFavoriteAPI/?id=${this.state.id}`,
          {},
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("autToken")}`,
            },
          }
        );
      else
        axios
          .post(
            `http://37.152.182.41/AlbumUnfavoriteAPI/?id=${this.state.id}`,
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
      this.setState({ albumIsFavorit: !this.state.albumIsFavorit });
    };
    const RateTrack = (e) => {
      const rateTemp = e;
      this.setState({ rate: rateTemp });
      let formData = new FormData();
      formData.append("rate", rateTemp);
      axios.post(
        `http://37.152.182.41/AlbumRateAPI/?id=${this.state.id}`,
        formData,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("autToken")}`,
          },
        }
      );
    };
    var sectionStyle = {
      width: "100%",
      minHeight: "25rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${this.state.result.cover_image})`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.850)",
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
                    <div className="imageFollowContainer">
                      <img
                        width="280"
                        height="280"
                        className={
                          this.state.albumIsFavorit
                            ? "imgkhodeshFollow"
                            : "imgkhodesh"
                        }
                        src={this.state.result.cover_image}
                      />
                      <div id="heart1F">
                        <div
                          style={{ width: "4rem" }}
                          id={this.state.login ? "" : "hidden"}
                        >
                          <Heart
                            inactiveColor="white"
                            isActive={this.state.albumIsFavorit}
                            onClick={makeFavorite}
                            style={
                              this.state.albumIsFavorit
                                ? { fill: "rgb(97, 6, 6)" }
                                : { fill: "white" }
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-6">
                    <div class="container-fluid !direction !spacing dataContainer">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titleContainer">
                        {this.state.result.title}
                      </div>
                      
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        Released Date : {this.state.result.relase_date}
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} albumPageGenresContainer">
                        Genres:  {(this.state.result.genre.length>0?this.state.result.genre[0]:'')+(this.state.result.genre.length>1?', '+this.state.result.genre[1]:'')+(this.state.result.genre.length>2?', '+this.state.result.genre[2]:'')}
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        Rate: {this.state.result.rating}
                        <div class="col-1  albumPageRatingStar">
                            <img width='20' height='20' src='https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-14.png'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-1 col-md-0 col-sm-0 col-0"></div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-12 ">
                    <div class="container-fluid !direction !spacing ">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} followcontain"></div>
                      <div
                        class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} "
                        id={this.state.login ? "" : "hidden"}
                      >
                        <ReactStars
                          count={5}
                          size={35}
                          value={this.state.rate}
                          edit={this.state.rate === 0}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#d0e1f9"
                          classNames="AlbumPageStarsContainP"
                          onChange={RateTrack}
                        />
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
                      src={this.state.result.cover_image}
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 PdataContainer">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-md-4 PtitleContainer">
                          {this.state.result.title}
                        </div>

                        <div class="col-12 col-md-4 dateContainer">
                          Released Date : {this.state.result.relase_date}
                        </div>
                        <div class="col-12 col-md-4 dateContainer">
                          Rate : {this.state.result.rating}
                        </div>
                        <div class="col-12 col-md-4 genresContainer  ">
                          Genres: {(this.state.result.genre.length>0?this.state.result.genre[0]:'')+(this.state.result.genre.length>1?', '+this.state.result.genre[1]:'')+(this.state.result.genre.length>2?', '+this.state.result.genre[2]:'')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 pfol">
                    <div className="Pfollowcontain">
                      <div class="row">
                        <div
                          class="col-12 col-sm-6 "
                          id={this.state.login ? "" : "hidden"}
                        >
                          <ReactStars
                            count={5}
                            size={35}
                            value={this.state.rate}
                            edit={this.state.rate === 0}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#d0e1f9"
                            classNames="AlbumPageStarsContainP"
                            onChange={RateTrack}
                          />
                        </div>
                        <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bibilContainer">
                          <div class="col-4 tests"></div>
                          <div class="col-4 testo">
                            3.5 <img src={star} width="25" height="25" />
                          </div>

                          <div class="col-4 testt">
                            <div
                              style={{ width: "3rem" }}
                              id={this.state.login ? "" : "hidden"}
                            >
                              <Heart
                                inactiveColor="red"
                                isActive={this.state.AlbumIsFavorit}
                                onClick={RateTrack}
                              />
                            </div>
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
              <AlbumTrackTable tracks={this.state.tracks} />
              <Comment
                login={this.state.login}
                type="Album"
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
export default AlbumPage;
