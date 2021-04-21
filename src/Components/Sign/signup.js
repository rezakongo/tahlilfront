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
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function CustomInput(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
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
    username: "",
    email: "",
    password: "",
    CPassword: "",
    error: "",
    showError: false,
  };

  render() {
    const onChange = (e) => {
      const field = e.target.name;
      const newValue = e.target.value;
      this.setState({ [field]: newValue });
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
      }

      if (
        new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).test(
          this.state.password
        )
      )
        this.setState({ validPassword: true });
      else {
        this.setState({ validPassword: false });
        err = true;
      }

      if (this.state.CPassword === this.state.password)
        this.setState({ validCPassword: true });
      else {
        this.setState({ validCPassword: false });
        err = true;
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
          .post("http://127.0.0.1:8000/djoser/users/", signupJSON, config)
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
              this.setState({ redirect: true });
            }
          })
          .catch((error) => {
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
        {this.state.redirect ? <Redirect push to="/signin" /> : null}
        <div className="bg-l">
          <div className="container">
            <div className="padding"></div>
            <div className="outer">
              <div className="inner">
                <form className="form" onSubmit={handleSubmit} href="#">
                  <h3 className="login-header">Register</h3>
                  <div className="form-group" id="error">
                    <p id={!this.state.validEmail ? "visible" : "hidden"}>
                      * Your Email address is not correct
                    </p>

                    <p id={!this.state.validPassword ? "visible" : "hidden"}>
                      * Password must contain at least one number and one
                      uppercase and lowercase letter, and at least 8 or more
                      characters
                    </p>

                    <p id={!this.state.validCPassword ? "visible" : "hidden"}>
                      * The entered passwords do not match
                    </p>

                    <p id={this.state.showError ? "visible" : "hidden"}>
                      * {this.state.error}
                    </p>
                  </div>
                  <div className="form-group">
                    <CustomInput
                      id="username"
                      name="username"
                      label="Username"
                      margin="dense"
                      size="small"
                      required
                      variant="filled"
                      className="inputX"
                      onChange={onChange}
                      error={!this.state.validUsername}
                    />
                  </div>

                  <div className="form-group">
                    <CustomInput
                      id="email"
                      name="email"
                      label="Email"
                      margin="dense"
                      size="small"
                      required
                      variant="filled"
                      autoComplete="email"
                      className="inputX"
                      onChange={onChange}
                      error={!this.state.validEmail}
                    />
                  </div>

                  <div className="form-group">
                    <CustomInput
                      label="Password"
                      name="password"
                      margin="dense"
                      size="small"
                      required
                      variant="filled"
                      className="inputX"
                      onChange={onChange}
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
                      margin="dense"
                      size="small"
                      required
                      variant="filled"
                      className="inputX"
                      name="CPassword"
                      onChange={onChange}
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
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Register
                  </button>

                  <p className="forgot-password text-right">
                    <a href="signin">Already registered? log in</a>
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
