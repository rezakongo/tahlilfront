import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";
import axios from "axios";
import { Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard";
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard";
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard";
import Navbar from "../../Components/Navbar/navbar";

import "./SearchPage.css";
import Orbs from "./orbs.gif";

class SearchPage extends React.Component {
  state = {
    Artists: [],
    Albums: [],
    Tracks: [],
    searchField: "",
  };

  componentDidMount() {
    this.setState({ searchField: this.props.location.state.property_id },);
    axios
      .get(
        `http://127.0.0.1:8000/api/page/ArtistSearchAPIView/?format=json&search=` +
          this.state.searchField
      )
      .then((res) => {
        const Artists = res.data.results;
        this.setState({ Artists });
      });
    axios
      .get(
        `http://127.0.0.1:8000/api/page/AlbumSearchAPIView/?format=json&search=` +
          this.state.searchField
      )
      .then((res) => {
        const Albums = res.data.results;
        this.setState({ Albums });
      });
    axios
      .get(
        `http://127.0.0.1:8000/api/page/MusicSearchAPIView/?format=json&search=` +
          this.state.searchField
      )
      .then((res) => {
        const Tracks = res.data.results;
        this.setState({ Tracks });
      });
  }
  
  render() {
    const handleChange = (e) => {
      const inputValueToUrl = encodeURI(e.target.value);
      this.state.searchField = inputValueToUrl;
    };

    const handleClick = (e) => {
      this.componentDidMount();
    };
    return (
      <div className="Container">
        <Navbar activeItem="" menuId="menu1"></Navbar>
        <div className="container-fluid !direction !spacing totalContainer">
          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}"></div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} SearchTop">
            <div className="col-md-5 col-sm-0 titr">
              300 Results(100 Albums,100 Artists,100 Tracks)
            </div>
            <div className="col-md-3 "></div>
            <div className="col-md-3">
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
            <div className="col-md-1  ddContainer">
              <div className="dropdown dd">
                <button
                  className="btn btn-secondary dropdown-toggle ddButton"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li className="ddList">
                    <div
                      className="nav flex-column nav-pills me-3 ddinlist"
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|} bodyContain">
            <div class="col-md-1  "></div>
            <div
              className="col-md-10 tab-content resultContainer"
              id="v-pills-tabContent"
            >
              <div
                className="tab-pane fade show active tabsBody"
                id="v-pills-Tracks"
                role="tabpanel"
                aria-labelledby="v-pills-Tracks-tab"
              >
                {this.state.Tracks.map((Track) => (
                  <TracksSearchCard Track={Track} />
                ))}
              </div>
              <div
                className="tab-pane fade tabsBody"
                id="v-pills-Albums"
                role="tabpanel"
                aria-labelledby="v-pills-Albums-tab"
              >
                {this.state.Albums.map((Album) => (
                  <AlbumsSearchCard Album={Album} />
                ))}
              </div>
              <div
                className="tab-pane fade tabsBody"
                id="v-pills-Artists"
                role="tabpanel"
                aria-labelledby="v-pills-Artists-tab"
              >
                {this.state.Artists.map((Artist) => (
                  <ArtistsSearchCard Artist={Artist} />
                ))}
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
