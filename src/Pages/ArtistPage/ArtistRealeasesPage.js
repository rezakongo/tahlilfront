import React, { Component } from "react";
import AlbumsCarousel from "../../Components/AlbumTable/AlbumsCarousel";
import AlbumTableAll from "../../Components/AlbumTable/AlbumTableAll";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Slider from "react-slick";
import "./ArtistPage.css";
import eminem from "./eminem.jpg";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";
import axios from "axios";
import { Loader } from "semantic-ui-react";


class ArtistRealeasesPage extends Component {
  state = {
    id: "",
    login: false,
    photo: "",
    name: "",
    type: "",
    country: "",
    follow: false,
    comments: [],
    loading: true,
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
    axios
      .get(`http://127.0.0.1:8000/ArtistAPIView/?id=${this.state.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          follow: res.data.me_follow,
          photo: res.data.general_info.photo,
          name: res.data.general_info.name,
          type: res.data.general_info.type,
          country: res.data.general_info.country,
        });
      });

    axios
      .get(
        `http://127.0.0.1:8000/api/page/ArtistAllCommentAPI/?artistid=${this.state.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          comments: res.data.results,
          loading: false,
        });
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
                      src={this.state.photo}
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-6">
                    <div class="container-fluid !direction !spacing dataContainer">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} titleContainer">
                        {this.state.name}
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">
                        Releases
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} dateContainer">

                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} genresContainer">
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-1 col-md-0 col-sm-0 col-0"></div>
                  <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-12 ">
                    <div class="container-fluid !direction !spacing ">
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} followcontain">
                      </div>
                      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
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
                      src="https://content.api.news/v3/images/bin/ba49fee5bc802f0a32a9415fef635f71"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-12 PdataContainer">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-md-4 PtitleContainer">
                          Eminem
                        </div>

                        <div class="col-12 col-md-4 dateContainer">
                          Releases
                        </div>
                        <div class="col-12 col-md-4 dateContainer"></div>
                        <div class="col-12 col-md-4 genresContainer  ">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6 pfol">
                    <div className="Pfollowcontain">
                      <div class="row">
                        <div className=" folp">
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
              <AlbumTableAll/>
              
            </div>
          </div>

          <Footer />
        </div>
      );
    }
  }
}
export default ArtistRealeasesPage;
