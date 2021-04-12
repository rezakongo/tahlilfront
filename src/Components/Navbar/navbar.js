import { Divider, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Header, Icon, Input, Menu } from "semantic-ui-react";
import logo from "./logo.png";
import "./navbar.css";

export default class DNavbar extends Component {
  state = { menuId: "menu1", menuOpen: false };

  onScrollNavbar = () => {
    if (document.getElementById("navbar").scrollTop > 150) {
      this.setState({ menuId: "menu2" });
    } else {
      this.setState({ menuId: "menu1" });
    }
  };

  onClickMenu = () => {
    console.log(this.state.menuOpen);
    console.log("hi");
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    const { activeItem } = this.props;

    return (
      <div>
        <div id="navbar" onScroll={this.onScrollNavbar}>
          {/* desktop */}

          <Menu secondary id={"d" + this.state.menuId}>
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
            <Menu.Item name="Home" href="home" active={activeItem === "Home"} />
            <Menu.Item
              name="Artists"
              href="artists"
              active={activeItem === "Artists"}
            />
            <Menu.Item
              name="Albums"
              href="albums"
              active={activeItem === "Albums"}
            />
            <Menu.Item
              name="Genres"
              href="genres"
              active={activeItem === "Genres"}
            />
            <Menu.Menu position="right">
              <Menu.Item id="search-container">
                <Input id="search" icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="Sign in"
                href="signin"
                active={activeItem === "Sign in"}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name="Sign up"
                href="signup"
                active={activeItem === "Sign up"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>

          {/* mobile */}
          <div id={this.state.menuOpen ? "hidden" : "close"}>
            <Menu secondary id={"m" + this.state.menuId}>
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
                  <Icon name="bars" size="large" onClick={this.onClickMenu} />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </div>

          <div id={this.state.menuOpen ? "mmenu-container" : "hidden"}>
            <Menu secondary id="close-icon">
              <Menu.Menu position="right">
                <Menu.Item>
                  <Icon name="close" size="large" onClick={this.onClickMenu} />
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
                  id={activeItem === "Sign in" ? "v1" : "v2"}
                  onClick={() => {
                    this.onClickMenu();
                  }}
                  href="signin"
                >
                  Sing in
                </a>
                <a
                  id={activeItem === "Sign up" ? "v1" : "v2"}
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
            <Input id="search" icon="search" placeholder="Search..." />
          </div>
          <div id="test" />
        </div>
      </div>
    );
  }
}
