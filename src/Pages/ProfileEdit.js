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

import Card from "../Components/ProfileEdit/Card/Card.js";
import CardHeader from "../Components/ProfileEdit/Card/CardHeader.js";
import CardAvatar from "../Components/ProfileEdit/Card/CardAvatar.js";
import CardBody from "../Components/ProfileEdit/Card/CardBody.js";
import CardFooter from "../Components/ProfileEdit/Card/CardFooter.js";
import axios from "axios";
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
  state = {
    validUsername: true,
    validEmail: true,
    validPassword: true,
    validCPassword: true,
    validCurrentPassword: true,
    loading: true,
    username: "",
    email: "",
    password: "",
    cPassword: "",
    currentPassword: "",
    FName: "",
    LName: "",
    imageFile: null,
    error: "",
    description: "",
    showError: false,
    image: null,
    usernameError: "",
    emailError: "",
  };

  componentWillMount() {
    console.log(avatar);
    const test = localStorage.getItem("autToken");
    this.APICallFunction();
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
        console.log(res.data);
        this.setState({ username: res.data.username });
        this.setState({ email: res.data.email });
        this.setState({ FName: res.data.first_name });
        this.setState({ LName: res.data.last_name });
        this.setState({ loading: false });
        console.log(this.state.username);
        console.log(this.state.email);
        console.log(this.state.FName);
      })
      .catch((error) => {
        console.log(this.state.token);
        console.log(error.response);
      });
  };

  render() {
    const onChangeUsername = (e) => {
      this.setState({ username: e.target.value });
    };

    const onChangeEmail = (e) => {
      this.setState({ email: e.target.value });

      if (
        new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
          this.state.email
        )
      )
        this.setState({ validEmail: true });
      else {
        this.setState({ validEmail: false });
        this.setState({ emailError: "Your Email address is not correct" });
      }
    };

    const onChangePassword = (e) => {
      this.setState({ password: e.target.value });

      if (
        new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(
          this.state.password
        )
      )
        this.setState({ validPassword: true });
      else
        this.setState({ validPassword: false }, () => {
          if (this.state.cPassword === this.state.password)
            this.setState({ validCPassword: true });
          else this.setState({ validCPassword: false });
        });
    };

    const onChangeCPassword = (e) => {
      this.setState({ cPassword: e.target.value }, () => {
        if (this.state.cPassword === this.state.password)
          this.setState({ validCPassword: true });
        else this.setState({ validCPassword: false });
      });
    };

    const onChangeCurrentPassword = (e) => {
      this.setState({ currentPassword: e.target.value });
    };

    const onChangeFName = (e) => {
      this.setState({ FName: e.target.value });
    };

    const onChangeLName = (e) => {
      this.setState({ LName: e.target.value });
    };

    const FileUploadHandler = (e) => {
      console.log(e.target.files[0]);
      const newImage = e.target?.files?.[0];
      this.setState({ image: URL.createObjectURL(newImage) });
      this.setState({ imageFile: newImage });
    };
    const onChangeDescription = (e) => {
      this.setState({ description: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();

      let formData = new FormData();

      formData.append("first_name", this.state.FName);
      formData.append("last_name", this.state.LName);
      formData.append("email", this.state.email);
      formData.append(
        "avatar",
        this.state.imageFile === null ? "" : this.state.imageFile
      );
      formData.append("description", this.state.description);

      console.log("hiii");
      console.log(formData);

      axios
        .put("http://127.0.0.1:8000/update_profile/", formData, {
          headers: {
            Authorization: `Token ${localStorage.getItem("autToken")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);

          if (error.response.data.hasOwnProperty("email")) {
            this.setState({ validEmail: false });
            this.setState({ emailError: error.response.data.email });
          }
        });

      const username = {
        username: this.state.username,
      };
      const usernameJSON = JSON.stringify(username);
    };

    if (this.state.loading) {
      return <div></div>;
    } else {
      return (
        <div>
          <Navbar menuId="menu2" />
          <div className="hpFContainer">
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <form onSubmit={handleSubmit}>
                    <CardHeader color="primary">
                      <h4>Edit Profile</h4>
                      <p>Complete your profile</p>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="Username"
                            id="username"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            onChange={onChangeUsername}
                            required
                            defaultValue={this.state.username}
                            error={!this.state.validUsername}
                            tip={this.state.usernameError}
                            disable={this.state.validUsername}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="Email"
                            id="email-address"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            required
                            onChange={onChangeEmail}
                            defaultValue={this.state.email}
                            error={!this.state.validEmail}
                            tip={this.state.emailError}
                            disable={this.state.validEmail}
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
                            onChange={onChangeFName}
                            defaultValue={this.state.FName}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <CustomInput
                            labelText="Last Name"
                            id="last-name"
                            formControlProps={{
                              fullWidth: true,
                            }}
                            onChange={onChangeLName}
                            defaultValue={this.state.LName}
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
                            onChange={onChangeDescription}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      <Button color="primary" type="submit">
                        Update Profile
                      </Button>
                    </CardFooter>
                  </form>
                  <form>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
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
                        <GridItem xs={12} sm={12} md={4}>
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
                        <GridItem xs={12} sm={12} md={4}>
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
                      <Button color="primary">Change Password</Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card profile>
                  <CardAvatar profile>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src={
                          this.state.image === null ? avatar : this.state.image
                        }
                        alt="..."
                        id="avatar2"
                      />
                    </a>
                  </CardAvatar>
                  <CardBody profile>
                    <h4 color="white">Test User</h4>
                    <p color="white">
                      Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                      Bio Bio Bio Bio Bio Bio Bio Bio
                    </p>
                    <Upload onChange={FileUploadHandler} />
                  </CardBody>
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

export default ProfileEdit;