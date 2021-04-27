import React, { Component } from "react";
import LandingTop from "../Components/LandingTop/LandingTop";
import Navbar from "./../Components/Navbar/navbar";
import ArtistsCarousel from "../Components/AtistsCarousel/ArtistsCarousel";
import HomePageTracks from "../Components/Cards/HomePageTracks";
import Container from "../Components/Container/Container";
import "./ProfileEdit.css";
import Footer from "../Components/Footer/footer";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../Components/ProfileEdit/Grid/GridItem.js";
import GridContainer from "../Components/ProfileEdit/Grid/GridContainer.js";
import CustomInput from "../Components/ProfileEdit/CustomInput/CustomInput.js";
import Button from "../Components/ProfileEdit/CustomButtons/Button.js";
import Card from "../Components/ProfileEdit/Card/Card.js";
import CardHeader from "../Components/ProfileEdit/Card/CardHeader.js";
import CardAvatar from "../Components/ProfileEdit/Card/CardAvatar.js";
import CardBody from "../Components/ProfileEdit/Card/CardBody.js";
import CardFooter from "../Components/ProfileEdit/Card/CardFooter.js";

import avatar from "../Components/Cards/cover-dsotm.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

class ProfileEdit extends Component {
  state = { menuId: "menu1" };
  onScrollNavbar = () => {
    if (document.getElementById("container-navabr").scrollTop > 330) {
      this.setState({ menuId: "menu2" });
    } else {
      this.setState({ menuId: "menu1" });
    }
  };
  render() {
    return (
      <div id="container-navabr" onScroll={this.onScrollNavbar}>
        <Navbar id="navbar" menuId={this.state.menuId} activeItem="Home" />
        <div className="hpFContainer">
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4>Edit Profile</h4>
                  <p>Complete your profile</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Repeat Password"
                        id="password-repeat"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>

                      <CustomInput
                        labelText="Description"
                        id="about-me"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary">Update Profile</Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h4 color="white">Test User</h4>
                  <p color="white">
                    Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                    Bio Bio Bio Bio Bio Bio Bio
                  </p>
                  <Button color="primary" round>
                    Change Avatar
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProfileEdit;
