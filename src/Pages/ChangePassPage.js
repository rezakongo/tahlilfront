import React, { Component } from "react";
import Navbar from "./../Components/Navbar/navbar";
import "./ProfileEdit.css";
import Footer from "../Components/Footer/footer";
// core components
import GridItem from "../Components/ProfileEdit/Grid/GridItem.js";
import GridContainer from "../Components/ProfileEdit/Grid/GridContainer.js";
import CustomInput from "../Components/ProfileEdit/CustomInput/CustomInput.js";
import Button from "../Components/ProfileEdit/CustomButtons/Button.js";
import Upload from "../Components/ProfileEdit/CustomButtons/Upload";
import UploadModal from "../Components/ProfileEdit/UploadModal";

import Card from "../Components/ProfileEdit/Card/Card.js";
import CardHeader from "../Components/ProfileEdit/Card/CardHeader.js";
import CardAvatar from "../Components/ProfileEdit/Card/CardAvatar.js";
import CardBody from "../Components/ProfileEdit/Card/CardBody.js";
import CardFooter from "../Components/ProfileEdit/Card/CardFooter.js";
import avatarIcon from "../Components/ProfileEdit/avatar.png";
import axios from "axios";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { Loader } from "semantic-ui-react";
import { Redirect } from "react-router";

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

class ChangePassPage extends Component {
  state = {
    validPassword: true,
    validCPassword: true,
    validCurrentPassword: true,
    password: "",
    cPassword: "",
    currentPassword: "",
    error: false,
    redirect: false,
  };
  constructor(props) {
    super(props);
    this.inputFile = React.createRef();
  }

  componentWillMount() {
    const test = localStorage.getItem("autToken");
    if (test === null) this.setState({ redirect: true });
  }

  render() {
    const refreshPage = () => {
      window.location.reload();
    };

    const onChangePassword = (e) => {
      this.setState({ password: e.target.value });
      this.setState({ error: false });

      if (
        new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(
          this.state.password
        )
      )
        this.setState({ validPassword: true }, () => {
          if (this.state.cPassword === this.state.password)
            this.setState({ validCPassword: true });
          else {
            this.setState({ validCPassword: false });
            this.setState({ error: true });
          }
        });
      else
        this.setState({ validPassword: false }, () => {
          this.setState({ error: true });
          if (this.state.cPassword === this.state.password)
            this.setState({ validCPassword: true });
          else this.setState({ validCPassword: false });
        });
    };

    const onChangeCPassword = (e) => {
      this.setState({ error: false });
      this.setState({ cPassword: e.target.value }, () => {
        if (this.state.cPassword === this.state.password)
          this.setState({ validCPassword: true });
        else {
          this.setState({ validCPassword: false });
          this.setState({ error: true });
        }
      });
    };

    const onChangeCurrentPassword = (e) => {
      this.setState({ currentPassword: e.target.value });
    };

    const handleChangePassword = (e) => {
      e.preventDefault();

      if (!this.state.error) {
        const chngepass = {
          new_password: this.state.password,
          current_password: this.state.currentPassword,
        };
        const chngepassJSON = JSON.stringify(chngepass);
        axios
          .post(
            "http://127.0.0.1:8000/djoser/users/set_password/",
            chngepassJSON,
            {
              headers: {
                Authorization: `Token ${localStorage.getItem("autToken")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
              console.log("finish");
            }
          })
          .catch((error) => {
            console.log(error.response);

            if (error.response.data.hasOwnProperty("current_password")) {
              this.setState({ validCurrentPassword: false });
            }
          });
      }
    };

    if (this.state.loading1 || this.state.loading2) {
      return (
        <div>
          {this.state.redirect ? <Redirect push to="/signin" /> : null}
          <Loader content="Loading" size="large" inverted />{" "}
        </div>
      );
    } else {
      return (
        <div>
          <Navbar menuId="menu2" />
          <div className="hpFContainer2">
            <GridContainer id="testCife">
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <form onSubmit={handleChangePassword}>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Current Password"
                            id="password-repeat"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            onChange={onChangeCurrentPassword}
                            error={!this.state.validCurrentPassword}
                            tip="The entered password is not correct"
                            disabled={this.state.validCurrentPassword}
                            type="password"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="New Password"
                            id="password"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            onChange={onChangePassword}
                            error={!this.state.validPassword}
                            tip="Your password must contain at least one number and 8 or more
                            characters"
                            disabled={this.state.validPassword}
                            type="password"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Confirm New Password"
                            id="password"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            onChange={onChangeCPassword}
                            error={!this.state.validCPassword}
                            tip="The entered passwords do not match"
                            disabled={this.state.validCPassword}
                            type="password"
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      <Button color="primary" type="submit">
                        Change Password
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      );
    }
  }
}

export default ChangePassPage;
