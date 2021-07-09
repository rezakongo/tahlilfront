import React, { Component } from "react";
import AlbumsCarousel from "../../Components/AlbumTable/AlbumsCarousel";
import AlbumTrackTable from "../../Components/AlbumTrackTable/AlbumTrackTable";
import Comment from "../../Components/Comment/Comment.js";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import Slider from "react-slick";
import "./GenrePage.css";
import eminem from "./eminem.jpg";
import HomePageAlbum from "../../Components/Cards/HomePageAlbum";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import ReactStars from "react-rating-stars-component";

class GenrePage extends Component {
  state = {
    name:"",
    id: "f4abc0b5-3f7a-4eff-8f78-ac078dbce533",
    login: true,
    comments:[],
    track:[],
    loading:true,
  };

  componentDidMount() {
    this.setState({ name: this.props.match.params.name },
    () => {
      this.FetchData();
    })
  }

  FetchData = () => {
    console.log('adfdad');
    axios
      .get(
        `http://127.0.0.1:8000/api/page/GenrePageAPIView/?name=${this.state.name}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          
        }
      )
      .then((res) => {
        
        this.setState({
          track:res.data.result,
          loading : false,
          
        });
      });

      
  };



  render() {
    const makeOpen = () => {
      this.setState({ open: true });
    };
    const closeSnackbar = () => {
      this.setState({ open: false })
      
    };

    const backs=[
      "https://www.stockmusiclab.com/wp-content/uploads/2019/08/cropped-studio_aim_musiclab_royalty_free_background_music.jpg",
      "https://media.istockphoto.com/vectors/music-background-vector-id1076840920?b=1&k=6&m=1076840920&s=612x612&w=0&h=nztxOFS4yKFkGr54v-4rM6RcQAC0BpV3lYNWS8fMJdI=",
      "https://cdn.wallpapersafari.com/11/43/6AXtlL.jpg",
      "https://images.ctfassets.net/bdyhigkzupmv/3qbcPWr60odpUo4PE7aQ79/5848e32e4fec473461e65e82d1c25753/hero-generic-console-production.jpg",
      "https://cdn.britannica.com/03/151903-131-E310E9EC/Microphone-background-sound-waves-energy-Music.jpg",

    ]
    var sectionStyle = {
      width: "100%",
      minHeight: "25rem",
      maxHeight: "fitContent",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(`+backs[Math.floor(Math.random()*backs.length)]+`)`,
      boxShadow: "inset 0 0 0 2000px rgba(2, 2, 2, 0.850)",
    };
    if (this.state.loading) {
      return <Loader content="Loading" size="large" inverted />;
    } else {
    return (
      <div>
        <Navbar activeItem="artist" menuId="menu2" />
        <div class="container-fluid !direction !spacing artistPageContainer">
          <div >
            <div
              style={sectionStyle}
              class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} x"
            >
              <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} artistDataPosition">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 GenreTitle">
                  {this.state.name}
                </div>
                <div class="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-6">
                </div>
                <div class="col-xl-3 col-lg-1 col-md-0 col-sm-0 col-0"></div>
                <div class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-12 ">
                  <div class="container-fluid !direction !spacing ">
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} followcontain"></div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bdyContainer">
          <div class="container-fluid !direction !spacing bdyPosition">
            <AlbumTrackTable tracks={this.state.track}/>
            
          </div>
        </div>

        <Footer />
      </div>
    );
    }
  }
}
export default GenrePage;
