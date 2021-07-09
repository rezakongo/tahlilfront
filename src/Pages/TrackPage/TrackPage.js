import React, { Component } from "react";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import "./TrackPage.css";
import star from "./star.png";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart";
import LyricsPage from "../../Components/Lyric/LyricsPage";
import { Star } from "@material-ui/icons";

class TrackPage extends Component {
  state = {
    id: "46d32ced-77f7-4f85-b38b-1b547dc0722b",
    lyrics:
      "Thought I'd end up with Sean\r\nBut he wasn't a match\r\nWrote some songs about Ricky\r\nNow I listen and laugh\r\nEven almost got married\r\nAnd for Pete, I'm so thankful\n\nWish I could say, \"Thank you\" to Malcolm\n\n'Cause he was an angel\n\n\n\nOne taught me love\n\nOne taught me patience\n\nAnd one taught me pain\n\nNow, I'm so amazing\n\nI've loved and I've lost\n\nBut that's not what I see\n\nSo, look what I got\n\nLook what you taught me\n\nAnd for that, I say\n\n\n\nThank you, next (Next)\n\nThank you, next (Next)\n\nThank you, next\n\nI'm so fuckin' grateful for my ex\n\nThank you, next (Next)\n\nThank you, next (Next)\n\nThank you, next (Next)\n\nI'm so fuckin'\n\n\n\nSpend more time with my friends\n\nI ain't worried 'bout nothin'\n\nPlus, I met someone else\n\nWe havin' better discussions\n\nI know they say I move on too fast\n\nBut this one gon' last\n\n'Cause her name is Ari\n\nAnd I'm so good with that (So good with that)\n\n\n\nShe taught me love (Love)\n\nShe taught me patience (Patience)\n\nHow she handles pain (Pain)\n\nThat shit's amazing (Yeah, she's amazing)\n\nI've loved and I've lost (Yeah, yeah)\n\nBut that's not what I see (Yeah, yeah)\n\n'Cause look what I've found (Yeah, yeah)\n\nAin't no need for searching, and for that, I say\n\n\n\nThank you, next (Thank you, next)\n\nThank you, next (Thank you, next)\n\nThank you, next (Thank you)\n\nI'm so fuckin' grateful for my ex\n\nThank you, next (Thank you, next)\n\nThank you, next (Said thank you, next)\n\nThank you, next (Next)\n\nI'm so fuckin' grateful for my ex\n\n\n\nThank you, next\n\nThank you, next\n\nThank you, next\n\nI'm so fucking\n\n\n\nOne day I'll walk down the aisle\n\nHolding hands with my mama\n\nI'll be thanking my dad\n\n'Cause she grew from the drama\n\nOnly wanna do it once, real bad\n\nGon' make that shit last\n\nGod forbid something happens\n\nLeast this song is a smash (Song is a smash)\n\n\n\nI've got so much love (Love)\n\nGot so much patience (Patience)\n\nI've learned from the pain (Pain)\n\nI turned out amazing (Turned out amazing)\n\nI've loved and I've lost (Yeah, yeah)\n\nBut that's not what I see (Yeah, yeah)\n\n'Cause look what I've found (Yeah, yeah)\n\nAin't no need for searching\n\nAnd for that, I'll say\n\n\n\nThank you, next (Thank you, next)\n\nThank you, next (Thank you, next)\n\nThank you, next\n\nI'm so fuckin' grateful for my ex\n\nThank you, next (Thank you, next)\n\nThank you, next (Said thank you, next)\n\nThank you, next (Next)\n\nI'm so fuckin' grateful for my ex\n\n\n\nThank you, next\n\nThank you, next\n\nThank you, next\n\nYeah, yee\n\nThank you, next\n\nThank you, next\n\nThank you, next\n\nYeah, yee",
    login: true,
    comments: [],
    loading: true,
    loading2: true,
    loading3: true,
    result: [],
    artist: [],
    album: [],
    annotations: [],
    trackIsFavorit: false,
    findLyric: false,
    rate: 0,
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
        .get(`http://37.152.182.41/MusicAPIView/?id=${this.state.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("autToken")}`,
          },
        })
        .then((res) => {
          this.setState({
            trackIsFavorit: res.data.me_favorite !== "False",
            result: res.data.general_info,
            artist: res.data.general_info.artist[0],
            album: res.data.general_info.album[0],
            rate: res.data.me_rate === null ? 0 : res.data.me_rate,
            loading3: false,
          });
        });
    else
      axios
        .get(`http://37.152.182.41/MusicAPIView/?id=${this.state.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.setState({
            trackIsFavorit: res.data.me_favorite !== "False",
            result: res.data.general_info,
            artist: res.data.general_info.artist[0],
            album: res.data.general_info.album[0],
            rate: res.data.me_rate === null ? 0 : res.data.me_rate,
            loading3: false,
          });
        });

    axios
      .get(`http://37.152.182.41/Lyrics/LyricsAPI/?id=${this.state.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.results[0].lyrics);
        this.setState({
          lyrics: res.data.results[0].lyrics,
          findLyric: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          lyrics: "",
          loading: false,
        });
      });

    axios
      .get(
        `http://37.152.182.41/Lyrics/LyricsTextCommentAPI/?id=${this.state.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        this.setState({
          annotations: res.data.results,
          loading2: false,
        });
      })
      .catch((error) => {
        this.setState({
          annotations: [],
          loading2: false,
        });
      });
  };

  render() {
    const makeFavorite = () => {
      if (!this.state.trackIsFavorit)
        axios.post(
          `http://37.152.182.41/MusicFavoriteAPI/?id=${this.state.id}`,
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
            `http://37.152.182.41/MusicUnfavoriteAPI/?id=${this.state.id}`,
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
      this.setState({ trackIsFavorit: !this.state.trackIsFavorit });
    };
    const RateTrack = (e) => {
      const rateTemp = e;
      this.setState({ rate: rateTemp });
      let formData = new FormData();
      formData.append("rate", rateTemp);
      axios.post(
        `http://37.152.182.41/MusicRateAPI/?id=${this.state.id}`,
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
      backgroundImage: `url(${this.state.result.photo})`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.850)",
    };
    if (this.state.loading || this.state.loading2 || this.state.loading3) {
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
                          this.state.trackIsFavorit
                            ? "imgkhodeshFollow"
                            : "imgkhodesh"
                        }
                        src={this.state.result.photo}
                      />
                      <div id="heart1F">
                        <div
                          style={{ width: "4rem" }}
                          id={this.state.login ? "" : "hidden"}
                        >
                          <Heart
                            inactiveColor="white"
                            isActive={this.state.trackIsFavorit}
                            onClick={makeFavorite}
                            style={
                              this.state.trackIsFavorit
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
                        {this.state.artist.name}
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        Released Date : {this.state.album.date}
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genresContainer">
                        
                          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                           

                          Rate {" "}:{" "}{this.state.result.rating}
                          <div class="col-1  TrackPageRating">
                          <Star
                            src={star}
                            width="50"
                            height="50"
                            style={{ fill: "#d0e1f9" }}
                          />
                          </div>
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
                          classNames="StarsContainP"
                          onChange={RateTrack}
                        />
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bibilContainer">
                        <div class="col-4 tests"></div>
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
                      src={this.state.result.photo}
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 PdataContainer">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-md-4 PtitleContainer">
                          {this.state.result.title}
                        </div>

                        <div class="col-12 col-md-4 dateContainer">
                          Released Date : {this.state.album.date}
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
                            isHalf={true}
                            edit={this.state.rate === 0}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#d0e1f9"
                            classNames="StarsContainP"
                          />
                        </div>

                        <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bibilContainer">
                          Rate :
                          <div class="col-3 testo">
                            {this.state.result.rating}{" "}
                            <Star
                              src={star}
                              width="50"
                              height="50"
                              style={{ fill: "#d0e1f9" }}
                            />
                          </div>
                          <div class="col-4 tests"></div>
                          <div class="col-4 testt">
                            <div
                              style={{ width: "3rem" }}
                              id={this.state.login ? "" : "hidden"}
                            >
                              <Heart
                                inactiveColor="red"
                                isActive={this.state.trackIsFavorit}
                                onClick={makeFavorite}
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
              {this.state.findLyric ? (
                <LyricsPage
                  songId={this.state.id}
                  lyrics={this.state.lyrics}
                  annotations={this.state.annotations}
                />
              ) : (
                <div id="NoLyric">
                  <p>There is no Lyric</p>
                </div>
              )}

              <Comment
                login={this.state.login}
                type="Music"
                id={this.state.id}
                commentData={this.state.comments}
              />
            </div>
          </div>

          <Footer />
        </div>
      );
    }
  }
}
export default TrackPage;
