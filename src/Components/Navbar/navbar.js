import { Divider, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Header, Icon, Input, Menu } from "semantic-ui-react";
import logo from "./logo.png";
import Dropdown from "./dropdown";
import Searchdd from "./Searchdd";
import "./navbar.css";
import axios from "axios";
import { Redirect } from "react-router";
import SearchSug from "./searchSug";

export default class DNavbar extends Component {
  state = {
    menuOpen: false,
    isLogin: true,
    username: " ",
    redirect: false,
    query: "",
    token: "",
  };

  componentDidMount() {
    const test = localStorage.getItem("autToken");
    if (test === null) this.setState({ isLogin: false });
    else {
      this.setState({ token: "Token " + test }, () => this.APICallFunction());
    }
  }
  APICallFunction = () => {
    axios
      .get("http://127.0.0.1:8000/djoser/users/me/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("autToken")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.username);
        this.setState({ username: res.data.username });
      })
      .catch((error) => {
        console.log(this.state.token);
        console.log(error.response);
      });
  };

  Login = () => {
    this.setState({ isLogin: true });
  };

  Logout = () => {
    this.setState({ isLogin: false });
  };

  onClickMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    const { activeItem } = this.props;
    const { history } = this.context;
    return (
      <div id="navbar">
        {/* desktop */}
        <Menu secondary id={"d" + this.props.menuId}>
          <Menu.Item>
            <Header
              className="logo"
              as="h2"
              color="blue"
              image={logo}
              content="Hexbeat"
              size="small"
            />
          </Menu.Item>
          <Menu.Item
            name="Home"
            href="home"
            id={
              activeItem === "" || activeItem === "Home" ? "active_tap" : "tap"
            }
            active={activeItem === "Home"}
          />
          <Menu.Item
            name="Artists"
            href="artists"
            id={activeItem === "Artists" ? "active_tap" : "tap"}
            active={activeItem === "Artists"}
          />
          <Menu.Item
            name="Albums"
            href="albums"
            id={activeItem === "Albums" ? "active_tap" : "tap"}
            active={activeItem === "Albums"}
          />
          <Menu.Item
            name="Genres"
            href="genres"
            id={activeItem === "Genres" ? "active_tap" : "tap"}
            active={activeItem === "Genres"}
          />
          <Menu.Menu position="right">
            <Menu.Item id="search-container">
              <SearchSug />
            </Menu.Item>

            <Menu.Item
              name="Sign in"
              href="signin"
              id={
                this.state.isLogin
                  ? "hidden"
                  : activeItem === "Sign in"
                  ? "active_tap"
                  : "tap"
              }
              active={activeItem === "Sign in"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name="Sign up"
              href="signup"
              id={
                this.state.isLogin
                  ? "hidden"
                  : activeItem === "Sign up"
                  ? "active_tap"
                  : "tap"
              }
              active={activeItem === "Sign up"}
              onClick={this.handleItemClick}
            />
            <Menu.Item>
              <div id={!this.state.isLogin ? "hidden" : ""}>
                <Dropdown username={this.state.username} Logout={this.Logout} />
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {/* mobile */}
        <div id={this.state.menuOpen ? "hidden" : "close"}>
          <Menu secondary id={"m" + this.props.menuId}>
            <Menu.Item>
              <Header
                className="logo"
                as="h2"
                color="blue"
                image={logo}
                content="Hexbeat"
                size="small"
              />
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <div id={!this.state.isLogin ? "hidden" : ""}>
                  <Dropdown
                    username={this.state.username}
                    Logout={this.Logout}
                  />
                </div>
              </Menu.Item>
              <Menu.Item>
                <Icon
                  name="bars"
                  size="large"
                  onClick={this.onClickMenu}
                  color="blue"
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
        <div id={this.state.menuOpen ? "mmenu-container" : "hidden"}>
          <Menu secondary id="close-icon">
            <Menu.Menu position="right">
              <Menu.Item>
                <Icon
                  name="close"
                  size="large"
                  onClick={this.onClickMenu}
                  color="blue"
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <div className="center">
            <div>
              <a
                id={activeItem === "Home" ? "v1" : "v2"}
                onClick={() => {
                  this.onClickMenu();
                }}
                href="home"
              >
                Home
              </a>
              <a
                id={activeItem === "Artists" ? "v1" : "v2"}
                onClick={() => {
                  this.onClickMenu();
                }}
                href="artists"
              >
                Artists
              </a>
              <a
                id={activeItem === "Albums" ? "v1" : "v2"}
                onClick={() => {
                  this.onClickMenu();
                }}
                href="albums"
              >
                Albums
              </a>
              <a
                id={activeItem === "Genres" ? "v1" : "v2"}
                onClick={() => {
                  this.onClickMenu();
                }}
                href="genres"
              >
                Genres
              </a>
              <Divider orientation="vertical" flexItem />

              <a
                id={
                  this.state.isLogin
                    ? "hidden"
                    : activeItem === "Sign in"
                    ? "v1"
                    : "v2"
                }
                onClick={() => {
                  this.onClickMenu();
                }}
                href="signin"
              >
                Sing in
              </a>
              <a
                id={
                  this.state.isLogin
                    ? "hidden"
                    : activeItem === "Sign up"
                    ? "v1"
                    : "v2"
                }
                onClick={() => {
                  this.onClickMenu();
                }}
                style={{ paddingBottom: "30px" }}
                href="signup"
              >
                Sign up
              </a>
            </div>
          </div>
          <SearchSug />
        </div>
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: "/search",
              state: { property_id: this.state.query },
            }}
          />
        ) : null}
        ;
      </div>
    );
  }
}
