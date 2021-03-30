import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./login.css";
import { Checkbox, IconButton, Input, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "grey",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "grey",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "grey",
      },
      "&.Mui-focused fieldset": {
        borderColor: "grey",
      },
    },
  },
})(TextField);

const GreyCheckbox = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
export default class Login extends Component {
  state = {
    showPassword: false,
  };

  render() {
    const handleClickShowPassword = () => {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
    };

    return (
      <div>
        <form className="form">
          <h3 className="text">Log in</h3>
          <div className="form-group">
            <TextField
              id="email"
              label="Email"
              margin="normal"
              required
              variant="filled"
              autoComplete="email"
              className="input"
              InputLabelProps={{
                style: { color: "#000" },
              }}
            />
          </div>
          <div className="form-group">
            <TextField
              className="input"
              label="Password"
              margin="normal"
              required
              variant="filled"
              InputLabelProps={{
                style: { color: "#000" },
              }}
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
            <p className="forgot-password text-right">
              <a href="#">Forgot password?</a>
            </p>
            <div className="form-group">
              <GreyCheckbox defaultChecked id="customCheck1" />
              <label htmlFor="customCheck1" style={{ color: "#C5C6C7" }}>
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            style={{
              backgroundColor: "#C5C6C7",
              color: "#45A29E",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          >
            Sign in
          </button>
          <div className="form-group">
            <p className="signup-text">
              <a className="signup-text" href="#">
                Don't have an account? sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
