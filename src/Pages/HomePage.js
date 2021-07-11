import React, { Component } from "react";
import LandingTop from "../Components/LandingTop/LandingTop";
import Navbar from "./../Components/Navbar/navbar";
import ArtistsCarousel from "../Components/AtistsCarousel/ArtistsCarousel";
import HomePageTracks from "../Components/Cards/HomePageTracks";
import Container from "../Components/Container/Container.js";
import "./HomePage.css";
import Footer from "../Components/Footer/footer";
import { useLocation } from "react-router";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import { Loader } from "semantic-ui-react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const apiArtist = axios.create({
  baseURL: "http://37.152.182.41/api/page/TenTopArtistAPIView/",
});

const apiAlbum = axios.create({
  baseURL: "http://37.152.182.41/api/page/TenTopAlbumAPIView/",
});

const apiTeack = axios.create({
  baseURL: "http://37.152.182.41/api/page/TenTopMusicAPIView/",
});

function HomePage() {
  let query = useQuery();

  const [menuId, setMenuId] = React.useState("menu1");
  const [open, setOpen] = React.useState(
    query.get("l") === "true" ? true : false
  );
  const [loading1, setLoading1] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);
  const [loading3, setLoading3] = React.useState(true);
  const [ArtistData, setArtistData] = React.useState([]);
  const [TrackData, setTrackData] = React.useState([]);
  const [AlbumData, setAlbumData] = React.useState([]);

  React.useEffect(() => {
    if (loading1)
      apiArtist.get("/").then((res) => {
        console.log(res.data);
        setArtistData(res.data);
        setLoading1(false);
      });
    if (loading2)
      apiTeack.get("/").then((res) => {
        console.log(res.data);
        setTrackData(res.data);
        setLoading2(false);
      });
    if (loading3)
      apiAlbum.get("/").then((res) => {
        console.log(res.data);
        setAlbumData(res.data);
        setLoading3(false);
      });
  });
  console.log(ArtistData);

  const onScrollNavbar = () => {
    if (document.getElementById("container-navabr").scrollTop > 330) {
      setMenuId("menu2");
    } else {
      setMenuId("menu1");
    }
  };
  const closeSnackbar = () => {
    setOpen(false);
  };

  if (loading1 || loading2 || loading3) {
    return (
      <div id="container-navabr" onScroll={onScrollNavbar}>
        <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
          <Alert severity="success">Your login was successful!</Alert>
        </Snackbar>
        <Navbar id="navbar" menuId={menuId} activeItem="Home" />
        <div id="landingtop" className="container-fluid !direction !spacing ">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowSetting">
            <LandingTop />
          </div>
          <div className="LC">
            <Loader
              content="Loading"
              className="loaderSt"
              size="large"
              inverted
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div id="container-navabr" onScroll={onScrollNavbar}>
        <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
          <Alert severity="success">Your login was successful!</Alert>
        </Snackbar>
        <Navbar id="navbar" menuId={menuId} activeItem="Home" />
        <div id="landingtop" className="container-fluid !direction !spacing ">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowSetting">
            <LandingTop />
          </div>
          <div className="hpFContainer">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}  tracksContain rowSetting">
              <h2 className="divider line glow">TOP &nbsp; ARTISTS</h2>
              <ArtistsCarousel Rtist={ArtistData} />
            </div>
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} tracksContain rowSetting">
              <h2 className="divider line glow">TOP &nbsp; TRACKS</h2>
              <div className="tracks">
                <HomePageTracks trc={TrackData} />
              </div>
            </div>
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} containerSetting rowSetting">
              <h2 className="divider line glow">TOP &nbsp; ALBUMS</h2>
              <Container Alb={AlbumData} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
