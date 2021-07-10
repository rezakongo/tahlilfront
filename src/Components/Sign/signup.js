import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import {
  IconButton,
  inputX,
  inputXAdornment,
  Snackbar,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import "./login.css";
import axios from "axios";
import { Redirect } from "react-router";
import ReactTooltip from "react-tooltip";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#d0e1f9",
    },
    "&$focused": {
      backgroundColor: "#d0e1f9",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function CustomInput(props) {
  const classes = useStylesReddit();

  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      {...props}
      margin="dense"
      size="small"
      required
      variant="filled"
      inputProps={props.inputXProps}
    />
  );
}

export default class SignUp extends Component {
  state = {
    showPassword: false,
    open: false,
    validEmail: true,
    validUsername: true,
    validPassword: true,
    validCPassword: true,
    redirect: false,
    isLogin: false,
    username: "",
    email: "",
    password: "",
    CPassword: "",
    error: "",
    showError: false,
  };

  componentDidMount() {
    const test = localStorage.getItem("autToken");
    this.setState({ isLogin: true });
    if (test === null) this.setState({ isLogin: false });
  }

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
      else this.setState({ validEmail: false });
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
          if (this.state.CPassword === this.state.password)
            this.setState({ validCPassword: true });
          else this.setState({ validCPassword: false });
        });
    };

    const onChangeCPassword = (e) => {
      this.setState({ CPassword: e.target.value }, () => {
        if (this.state.CPassword === this.state.password)
          this.setState({ validCPassword: true });
        else this.setState({ validCPassword: false });
      });
    };

    const handleClickShowPassword = () => {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      var err = false;
      if (
        new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
          this.state.email
        )
      )
        this.setState({ validEmail: true });
      else {
        this.setState({ validEmail: false });
        err = true;
        this.setState({ Password: "" });
        this.setState({ CPassword: "" });
      }

      if (
        new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/).test(
          this.state.password
        )
      )
        this.setState({ validPassword: true });
      else {
        this.setState({ validPassword: false });
        err = true;
        this.setState({ Password: "" });
        this.setState({ CPassword: "" });
      }

      if (this.state.CPassword === this.state.password)
        this.setState({ validCPassword: true });
      else {
        this.setState({ validCPassword: false });
        err = true;
        this.setState({ Password: "" });
        this.setState({ CPassword: "" });
      }

      if (!err) {
        const signup = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        };
        const signupJSON = JSON.stringify(signup);
        console.log(signupJSON);
        axios
          .post("http://37.152.182.41/djoser/users/", signupJSON, config)
          .then((res) => {
            console.log(res);
            this.setState({ redirect: true });
          })
          .catch((error) => {
            console.log(error.response);
            this.setState({ Password: "" });
            this.setState({ CPassword: "" });
            if (error.response.data.hasOwnProperty("username")) {
              this.setState({ showError: true });
              this.setState({ validUsername: false });
              this.setState({ error: error.response.data.username });
            }

            if (error.response.data.hasOwnProperty("email")) {
              this.setState({ showError: true });
              this.setState({ validEmail: false });
              this.setState({ error: error.response.data.email });
            }

            if (error.response.data.hasOwnProperty("password")) {
              this.setState({ showError: true });
              this.setState({ validPassword: false });
              this.setState({ error: error.response.data.password });
            }
          });
      }
    };

    return (
      <div className="body-l">
        <ReactTooltip />
        {this.state.isLogin ? <Redirect push to="/home" /> : null}
        {this.state.redirect ? <Redirect push to="/signin?s=true" /> : null}
        <div className="bg-l">
          <div className="container">
            <div className="padding"></div>
            <div className="outer">
              <div className="inner">
                <form className="form" onSubmit={handleSubmit} href="#">
                  <h3 className="login-header">Register</h3>
                  <div className="form-group" id="error">
                    <p id={this.state.showError ? "visible" : "hidden"}>
                      * {this.state.error}
                    </p>
                  </div>
                  <div className="form-group">
                    <CustomInput
                      id="username"
                      name="username"
                      label="Username"
                      className="inputX"
                      onChange={onChangeUsername}
                      error={!this.state.validUsername}
                    />
                  </div>

                  <div className="form-group">
                    <CustomInput
                      id="email"
                      name="email"
                      label="Email"
                      autoComplete="email"
                      className="inputX"
                      onChange={onChangeEmail}
                      tip="Your Email address is not correct"
                      data-type="error"
                      data-place="bottom"
                      data-effect="solid"
                      disable={this.state.validEmail}
                      error={!this.state.validEmail}
                    />
                  </div>

                  <div className="form-group">
                    <CustomInput
                      label="Password"
                      name="password"
                      className="inputX"
                      onChange={onChangePassword}
                      data-tip="Your password must contain at least one number and 8 or more
                      characters"
                      data-type="error"
                      data-place="bottom"
                      data-effect="solid"
                      data-tip-disable={this.state.validPassword}
                      error={!this.state.validPassword}
                      type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
                      inputXProps={{
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <inputXAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleClickShowPassword}
                            >
                              {this.state.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </inputXAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <CustomInput
                      label="Confirm Password"
                      className="inputX"
                      name="CPassword"
                      onChange={onChangeCPassword}
                      data-tip="The entered passwords do not match"
                      data-type="error"
                      data-place="bottom"
                      data-effect="solid"
                      data-tip-disable={this.state.validCPassword}
                      error={!this.state.validCPassword}
                      type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
                      inputXProps={{
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <inputXAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleClickShowPassword}
                            >
                              {this.state.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </inputXAdornment>
                        ),
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block submit-btn"
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    Register
                  </button>

                  <p className="signup-text">
                    <a className="signup-text" href="signin">
                      Already registered? Log in!
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
