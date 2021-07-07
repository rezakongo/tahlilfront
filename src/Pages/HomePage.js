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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const apiArtist = axios.create({
  baseURL: "http://127.0.0.1:8000/api/page/TenTopArtistAPIView/",
});

const apiAlbum = axios.create({
  baseURL: "http://127.0.0.1:8000/api/page/TenTopAlbumAPIView/",
});

const apiTeack = axios.create({
  baseURL: "http://127.0.0.1:8000/api/page/TenTopMusicAPIView/",
});

function HomePage() {
  let query = useQuery();

  const [menuId, setMenuId] = React.useState("menu1");
  const [open, setOpen] = React.useState(
    query.get("l") === "true" ? true : false
  );
  const [loading1, setLoading1] = React.useState(true);

  const [ArtistData, setArtistData] = React.useState([]);

  React.useEffect(() => {
    apiArtist.get("/").then((res) => {
      console.log(res.data);
      setArtistData(res.data);
      setLoading1(false);
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

  if (loading1) {
    return <div />;
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
              <h2 className="divider line glow" contentEditable>
                TOP &nbsp; ARTISTS
              </h2>
              <ArtistsCarousel Rtist={ArtistData} />
            </div>
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} tracksContain rowSetting">
              <h2 className="divider line glow" contentEditable>
                TOP &nbsp; TRACKS
              </h2>
              <div className="tracks">
                <HomePageTracks />
              </div>
            </div>
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} containerSetting rowSetting">
              <h2 className="divider line glow" contentEditable>
                TOP &nbsp; ALBUMS
              </h2>
              <Container />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
