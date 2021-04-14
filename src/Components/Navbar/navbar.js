import { Divider, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Header, Icon, Input, Menu } from "semantic-ui-react";
import logo from "./logo.png";
import "./navbar.css";

export default class DNavbar extends Component {
  state = { menuOpen: false };

  onClickMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    const { activeItem } = this.props;

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
            id="text"
            name="Home"
            href="home"
            active={activeItem === "Home"}
          />
          <Menu.Item
            id="text"
            name="Artists"
            href="artists"
            active={activeItem === "Artists"}
          />
          <Menu.Item
            id="text"
            name="Albums"
            href="albums"
            active={activeItem === "Albums"}
          />
          <Menu.Item
            id="text"
            name="Genres"
            href="genres"
            active={activeItem === "Genres"}
          />
          <Menu.Menu position="right">
            <Menu.Item id="search-container">
              <Input id="search" icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              id="text"
              name="Sign in"
              href="signin"
              active={activeItem === "Sign in"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              id="text"
              name="Sign up"
              href="signup"
              active={activeItem === "Sign up"}
              onClick={this.handleItemClick}
            />
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
      </div>
    );
  }
}
