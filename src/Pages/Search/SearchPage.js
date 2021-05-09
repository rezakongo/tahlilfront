import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";
import axios from "axios";
import { Tab } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AlbumsSearchCard from "./SearchCard/Albums/AlbumsSearchCard";
import ArtistsSearchCard from "./SearchCard/Artists/ArtistsSearchCard";
import TracksSearchCard from "./SearchCard/Tracks/TracksSearchCard";
import Navbar from "../../Components/Navbar/navbar";
import { Pagination } from "semantic-ui-react";

import "./SearchPage.css";
import Orbs from "./orbs.gif";
import { Redirect, useLocation } from "react-router";
import Footer from "../../Components/Footer/footer";

class SearchPage extends React.Component {
  state = {
    Artists: [],
    Albums: [],
    Tracks: [],
    searchField: "",
    activePage: 1,
    changePage: false,
  };
  componentDidMount() {
    this.setState({ searchField: this.props.que });
    this.setState({ activePage: this.props.page });

    console.log(this.state.activePage);
  }

  APICallFunction = () => {
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
      this.setState({ activePage });
      this.setState({ changePage: true });
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
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 titr">
                300 Results(100 Albums,100 Artists,100 Tracks)
              </div>
              <div className="col-0 col-sm-0 col-md-1 col-lg-2 col-xl-5"></div>
              <div className="col-9 col-sm-9 col-md-5 col-lg-4 col-xl-3">
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
              <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1 ddContainer">
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
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <TracksSearchCard />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade tabsBody"
                id="v-pills-Albums"
                role="tabpanel"
                aria-labelledby="v-pills-Albums-tab"
              >
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <AlbumsSearchCard />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade tabsBody"
                id="v-pills-Artists"
                role="tabpanel"
                aria-labelledby="v-pills-Artists-tab"
              >
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                  <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-xs-6 col-xxs-6 col-xxxs-12">
                    <ArtistsSearchCard />
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              activePage={this.state.activePage}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={10}
              id="pagination"
              onPageChange={handlePaginationChange}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SearchPage;
