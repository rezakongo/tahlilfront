import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { IconButton, Input, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import "./login.css";

export default class SignUp extends Component {
  state = {
    showPassword: false,
  };
  render() {
    const handleClickShowPassword = () => {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
    };

    return (
      <div className="body-l">
        <div className="bg-image"></div>
        <div className="bg-l">
          <div className="container">
            <div className="padding"></div>
            <div className="row justify-content-center">
              <div className="col-xs-7 col-md-6 col-lg-5">
                <div className="outer">
                  <div className="inner">
                    <form className="form">
                      <h3 className="text">Register</h3>

                      <div className="form-group">
                        <TextField
                          id="firstname"
                          label="First Name"
                          margin="normal"
                          required
                          variant="filled"
                          className="input"
                        />
                      </div>

                      <div className="form-group">
                        <TextField
                          id="lastname"
                          label="Last Name"
                          margin="normal"
                          required
                          variant="filled"
                          className="input"
                        />
                      </div>

                      <div className="form-group">
                        <TextField
                          id="email"
                          label="Email"
                          margin="normal"
                          required
                          variant="filled"
                          autoComplete="email"
                          className="input"
                        />
                      </div>

                      <div className="form-group">
                        <TextField
                          label="Password"
                          margin="normal"
                          required
                          variant="filled"
                          className="input"
                          type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
                          InputProps={{
                            // <-- This is where the toggle button is added.
                            endAdornment: (
                              <InputAdornment position="end">
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
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                        style={{
                          backgroundColor: "#C5C6C7",
                          color: "#45A29E",
                          fontWeight: "bold",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        Register
                      </button>

                      <p className="forgot-password text-right">
                        <a href="login">Already registered log in?</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
