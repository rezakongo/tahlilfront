import React, { Component } from "react";
import { Dimmer, Icon, Input, Loader } from "semantic-ui-react";
import axios from "axios";
import { Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard";
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard";
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard";
import Navbar from "../../Components/Navbar/navbar";
import { Pagination } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import "./SearchPage.css";
import Orbs from "./orbs.gif";
import { Redirect, useLocation } from "react-router";
import Footer from "../../Components/Footer/footer";
import sag from "./sag.png";
import { TrainRounded } from "@material-ui/icons";

class SearchPage extends React.Component {
  state = {
    Artists: [],
    Albums: [],
    Tracks: [],
    searchField: "",
    activePage: "",
    changePage: false,
    loading1: true,
    loading2: true,
    loading3: true,
    ArtistNf: false,
    AlbumNf: false,
    TrackNf: false,
  };

  componentDidMount() {
    this.setState(
      {
        searchField: this.props.que === null ? "" : this.props.que,
        activePage: this.props.page === null ? 1 : this.props.page,
      },
      () => {
        this.APICallFunction();
      }
    );

    console.log(this.state.activePage);
  }

  APICallFunction = () => {
    axios
      .get(
        `http://37.152.182.41/api/page/ArtistSearchAPIView/?search=${
          this.state.searchField
        }&limit=10&page=${this.state.activePage - 1}&photo=True`
      )
      .then((res) => {
        console.log(res.data);
        const Artists = res.data.results;

        this.setState({ Artists, loading1: false });
        if (Artists.length <= 0) {
          this.setState({ ArtistNf: true });
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
    axios
      .get(
        `http://37.152.182.41/api/page/AlbumSearchAPIView/?search=${
          this.state.searchField
        }&limit=10&page=${this.state.activePage - 1}&photo=True`
      )
      .then((res) => {
        const Albums = res.data.results;
        console.log(res.data);
        this.setState({ Albums, loading2: false });
        this.setState({});
        if (Albums.length <= 0) {
          this.setState({ AlbumNf: true });
        }
      });
    axios
      .get(
        `http://37.152.182.41/api/page/MusicSearchAPIView/?search=${
          this.state.searchField
        }&limit=10&page=${this.state.activePage - 1}&photo=True`
      )
      .then((res) => {
        const Tracks = res.data.results;
        console.log(res.data);
        this.setState({ Tracks, loading3: false });
        if (Tracks.length <= 0) {
          this.setState({ TrackNf: true });
        }
      });
  };
  render() {
    const handleChange = (e) => {
      const inputValueToUrl = encodeURI(e.target.value);
      this.state.searchField = inputValueToUrl;
    };

    const handleClick = (e) => {
      this.componentDidMount();
    };
    const handlePaginationChange = (e, { activePage }) => {
      this.setState({
        activePage,
        changePage: true,
        loading1: true,
        loading2: true,
        loading3: true,
      });
      this.APICallFunction();
    };
    return (
      <div>
        <Navbar activeItem="search" menuId="menu1" />
        {this.state.changePage ? (
          <Redirect
            push
            to={`/search?q=${this.state.searchField}&p=${this.state.activePage}`}
          />
        ) : null}
        <div className="container-fluid !direction !spacing">
          <div className="badbakhti">
            <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} SearchTop">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 titr"></div>
              <div className="col-0 col-sm-0 col-md-1 col-lg-2 col-xl-5"></div>
              <div className="col-12 col-sm-9 col-md-5 col-lg-4 col-xl-3 jojocontainer">
                <Input
                  icon={
                    <Icon
                      name="search"
                      id="iconColor"
                      onClick={handleClick}
                      inverted
                      circular
                      link
                    />
                  }
                  placeholder="Search..."
                  className="searchBar"
                  id="searchBarRadius"
                  onChange={handleChange}
                  defaultValue={this.state.searchField}
                />
              </div>
              <div className="col-12 col-sm-3 col-md-2 col-lg-2 col-xl-1 ddContainer">
                <Dropdown text="Fiter" className="filtertabsB">
                  <Dropdown.Menu className="filterTabsContainer">
                    <Dropdown.Item className="filterTabsContainer">
                      <div
                        className="nav flex-column nav-pills me-3 filterTabsKhodesh"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="nav-link active tabs"
                          id="v-pills-Tracks-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-Tracks"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-Tracks"
                          aria-selected="true"
                        >
                          Tracks
                        </button>
                        <button
                          className="nav-link tabs"
                          id="v-pills-Albums-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-Albums"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-Albums"
                          aria-selected="false"
                        >
                          Albums
                        </button>
                        <button
                          className="nav-link tabs"
                          id="v-pills-Artists-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-Artists"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-Artists"
                          aria-selected="false"
                        >
                          Artists
                        </button>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="badbakhti2">
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bodyContain">
            <div class="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active tabsBody"
                id="v-pills-Tracks"
                role="tabpanel"
                aria-labelledby="v-pills-Tracks-tab"
              >
                <div className="sagContainer">
                  <img
                    src={sag}
                    id={this.state.TrackNf ? "sag" : "hidden"}
                    onPageChange={handlePaginationChange}
                  />
                </div>

                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowcenter">
                  {this.state.Tracks.map((track) => {
                    return (
                      <div
                        id={
                          
                          !this.state.loading3
                            ? "hidden"
                            : ""
                        }
                        class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-9"
                      >
                        <TracksSearchCard track={track} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                id={
                  
                  !this.state.loading2
                  
                    ? "loading"
                    : "hidden"
                }
              >
                <Loader content="Loading" size="large" inverted />
              </div>
              <div
                className="tab-pane fade tabsBody"
                id="v-pills-Albums"
                role="tabpanel"
                aria-labelledby="v-pills-Albums-tab"
              >
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowcenter">
                  <div className="sagContainer">
                    <img src={sag} id={this.state.AlbumNf ? "sag" : "hidden"} />
                  </div>
                  {this.state.Albums.map((album) => {
                    return (
                      <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-9">
                        <AlbumsSearchCard album={album} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade tabsBody"
                id="v-pills-Artists"
                role="tabpanel"
                aria-labelledby="v-pills-Artists-tab"
              >
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} rowcenter">
                  <div className="sagContainer">
                    <img
                      src={sag}
                      id={this.state.ArtistNf ? "sag" : "hidden"}
                    />
                  </div>
                  {this.state.Artists.map((artist) => {
                    return (
                      <div
                        id={
                          !this.state.loading1
                          
                            ? "hidden"
                            : ""
                        }
                        class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-9"
                      >
                        <ArtistsSearchCard artist={artist} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Pagination
              activePage={this.state.activePage}
              defaultActivePage={this.state.activePage}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              inverted
              totalPages={10}
              id={
                this.state.loading1 ||
                this.state.loading2 ||
                this.state.loading3
                  ? "hidden"
                  : "pagination"
              }
              onPageChange={handlePaginationChange}
            />
          </div>
        </div>

        <Footer id="footer" />
      </div>
    );
  }
}

export default SearchPage;
