import React, { Component } from "react";
import AlbumsCarousel from "../../Components/AlbumTable/AlbumsCarousel";
import AlbumTrackTable from "../../Components/AlbumTrackTable/AlbumTrackTable";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import { useState } from "react";
import Slider from "react-slick";
import "./TrackPage.css";
import eminem from "./eminem.jpg";
import star from "./star.png";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart";
import LyricsPage from "../../Components/Lyric/LyricsPage";

class TrackPage extends Component {
  state = {
    id: "46d32ced-77f7-4f85-b38b-1b547dc0722b",
    lyrics:
      "Thought I'd end up with Sean\r\nBut he wasn't a match\r\nWrote some songs about Ricky\r\nNow I listen and laugh\r\nEven almost got married\r\nAnd for Pete, I'm so thankful\n\nWish I could say, \"Thank you\" to Malcolm\n\n'Cause he was an angel\n\n\n\nOne taught me love\n\nOne taught me patience\n\nAnd one taught me pain\n\nNow, I'm so amazing\n\nI've loved and I've lost\n\nBut that's not what I see\n\nSo, look what I got\n\nLook what you taught me\n\nAnd for that, I say\n\n\n\nThank you, next (Next)\n\nThank you, next (Next)\n\nThank you, next\n\nI'm so fuckin' grateful for my ex\n\nThank you, next (Next)\n\nThank you, next (Next)\n\nThank you, next (Next)\n\nI'm so fuckin'\n\n\n\nSpend more time with my friends\n\nI ain't worried 'bout nothin'\n\nPlus, I met someone else\n\nWe havin' better discussions\n\nI know they say I move on too fast\n\nBut this one gon' last\n\n'Cause her name is Ari\n\nAnd I'm so good with that (So good with that)\n\n\n\nShe taught me love (Love)\n\nShe taught me patience (Patience)\n\nHow she handles pain (Pain)\n\nThat shit's amazing (Yeah, she's amazing)\n\nI've loved and I've lost (Yeah, yeah)\n\nBut that's not what I see (Yeah, yeah)\n\n'Cause look what I've found (Yeah, yeah)\n\nAin't no need for searching, and for that, I say\n\n\n\nThank you, next (Thank you, next)\n\nThank you, next (Thank you, next)\n\nThank you, next (Thank you)\n\nI'm so fuckin' grateful for my ex\n\nThank you, next (Thank you, next)\n\nThank you, next (Said thank you, next)\n\nThank you, next (Next)\n\nI'm so fuckin' grateful for my ex\n\n\n\nThank you, next\n\nThank you, next\n\nThank you, next\n\nI'm so fucking\n\n\n\nOne day I'll walk down the aisle\n\nHolding hands with my mama\n\nI'll be thanking my dad\n\n'Cause she grew from the drama\n\nOnly wanna do it once, real bad\n\nGon' make that shit last\n\nGod forbid something happens\n\nLeast this song is a smash (Song is a smash)\n\n\n\nI've got so much love (Love)\n\nGot so much patience (Patience)\n\nI've learned from the pain (Pain)\n\nI turned out amazing (Turned out amazing)\n\nI've loved and I've lost (Yeah, yeah)\n\nBut that's not what I see (Yeah, yeah)\n\n'Cause look what I've found (Yeah, yeah)\n\nAin't no need for searching\n\nAnd for that, I'll say\n\n\n\nThank you, next (Thank you, next)\n\nThank you, next (Thank you, next)\n\nThank you, next\n\nI'm so fuckin' grateful for my ex\n\nThank you, next (Thank you, next)\n\nThank you, next (Said thank you, next)\n\nThank you, next (Next)\n\nI'm so fuckin' grateful for my ex\n\n\n\nThank you, next\n\nThank you, next\n\nThank you, next\n\nYeah, yee\n\nThank you, next\n\nThank you, next\n\nThank you, next\n\nYeah, yee",
    login: true,
    comments: [],
    loading: false,
    loading2: false,
    result: [],
    artist: [],
    album: [],
    annotations: [],
    trackIsFavorit: false,
    rate: 0,
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.id }, () => {
      this.FetchData();
    });
  }

  FetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/MusicAPIView/?id=${this.state.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({ result: res.data.general_info });
        this.setState({ artist: res.data.general_info.artist[0] });
        this.setState({ album: res.data.general_info.album[0] });
        console.log(this.state.result);
      });

    axios
      .get(`http://127.0.0.1:8000/Lyrics/LyricsAPI/?id=${this.state.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.results[0].lyrics);
        this.setState({
          lyrics: res.data.results[0].lyrics,
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
        `http://127.0.0.1:8000/Lyrics/LyricsTextCommentAPI/?id=${this.state.id}`,
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
      });
  };

  render() {
    const makeFavorite = () => {
      if (!this.state.trackIsFavorit)
        axios.post(
          `http://127.0.0.1:8000/MusicFavoriteAPI/?id=${this.state.id}`,
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
            `http://127.0.0.1:8000/MusicUnfavoriteAPI/?id=${this.state.id}`,
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
        `http://127.0.0.1:8000/MusicRateAPI/?id=${this.state.id}`,
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
      backgroundImage: `url(https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png)`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.850)",
    };
    if (this.state.loading || this.state.loading2) {
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
                        <div style={{ width: "4rem" }}>
                          <Heart
                            inactiveColor="white"
                            isActive={this.state.trackIsFavorit}
                            onClick={makeFavorite}
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
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer"></div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genresContainer">
                        Genre : Rap
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genresContainer">
                        Rate :
                        <div class="col-3 testo">
                          3.5 <img src={star} width="25" height="25" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-1 col-md-0 col-sm-0 col-0"></div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-12 ">
                    <div class="container-fluid !direction !spacing ">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} followcontain"></div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} ">
                        <ReactStars
                          count={5}
                          size={35}
                          value={this.state.rate}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmhpekH-gt4ImCXO_3i0fZP83-OpiXA6MgwOf-lIFx4wInXNZeB7Js3DhIuCE3aau6t4&usqp=CAU"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 PdataContainer">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-md-4 PtitleContainer">KidA</div>

                        <div class="col-12 col-md-4 dateContainer">1988</div>
                        <div class="col-12 col-md-4 dateContainer">3.5</div>
                        <div class="col-12 col-md-4 dateContainer">Countr</div>
                        <div class="col-12 col-md-4 genresContainer  ">
                          Genres : Rap
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 pfol">
                    <div className="Pfollowcontain">
                      <div class="row">
                        <div class="col-12 col-sm-6 ">
                          <ReactStars
                            count={5}
                            size={35}
                            value={0}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            classNames="StarsContainP"
                          />
                        </div>

                        <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bibilContainer">
                          <div class="col-4 testo">
                            3.5 <img src={star} width="25" height="25" />
                          </div>
                          <div class="col-4 tests"></div>
                          <div class="col-4 testt">
                            <div style={{ width: "3rem" }}>
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
              <LyricsPage
                songId={this.state.id}
                lyrics={this.state.lyrics}
                annotations={this.state.annotations}
              />
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
