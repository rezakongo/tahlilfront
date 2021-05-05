import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./login.css";
import { Checkbox, IconButton, Snackbar } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router";
import { Alert } from "@material-ui/lab";

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
    redirect: false,
    isSignUp: false,
    username: "",
    password: "",
    showError: false,
    validUsername: true,
    validPassword: true,
  };

  componentDidMount() {
    const test = localStorage.getItem("autToken");
    this.setState({ redirect: true });
    if (test === null) this.setState({ redirect: false });

    this.setState({ isSignUp: this.props.open === "true" ? true : false });
  }
  closeSnackbar = () => {
    this.setState({ isSignUp: false });
  };
  render() {
    const handleClickShowPassword = () => {
      let showPassword = !this.state.showPassword;
      this.setState({ showPassword });
    };
    const onChange = (e) => {
      const field = e.target.name;
      const newValue = e.target.value;
      this.setState({ [field]: newValue });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const login = {
        username: this.state.username,
        password: this.state.password,
      };
      const loginJSON = JSON.stringify(login);
      console.log(loginJSON);
      axios
        .post("http://127.0.0.1:8000/djoser/token/login/", loginJSON, config)
        .then((res) => {
          console.log(res);
          localStorage.setItem("autToken", res.data.auth_token);
          this.setState({ isLogin: true }, () => {
            setTimeout(() => {
              this.setState({ redirect: true });
            }, 2000);
          });
        })
        .catch((error) => {
          this.setState({ showError: true });
          this.setState({ error: "The username or password is incorrect" });
        });
    };

    return (
      <div className="body-l">
        {this.state.redirect ? <Redirect push to="/home?l=true" /> : null}
        <Snackbar
          open={this.state.isSignUp}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
        >
          <Alert severity="success">You have successfully signed up!</Alert>
        </Snackbar>
        <div className="padding"></div>
        <div className="outer">
          <div className="inner">
            <form className="form" onSubmit={handleSubmit} href="#">
              <h3 className="login-header">Log in</h3>
              <div className="form-group" id="error">
                <p id={this.state.showError ? "visible" : "hidden"}>
                  * {this.state.error}
                </p>
              </div>
              <div className="form-group">
                <CustomInput
                  label="Username"
                  margin="normal"
                  size="small"
                  required
                  name="username"
                  className="inputX"
                  variant="filled"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <CustomInput
                  className="inputX"
                  label="Password"
                  margin="normal"
                  size="small"
                  required
                  name="password"
                  variant="filled"
                  onChange={onChange}
                  type={this.state.showPassword ? "text" : "password"} // <-- This is where the magic happens
                  inputXProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <inputAdornment position="end">
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
                      </inputAdornment>
                    ),
                  }}
                />
                <p className="forgot-password text-right">
                  <a href="#">Forgot password?</a>
                </p>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <GreyCheckbox defaultChecked id="customCheck1" />
                  <label htmlFor="customCheck1" style={{ color: "aliceblue" }}>
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block submit-btn"
              >
                Sign in
              </button>
              <div className="form-group">
                <p className="signup-text">
                  <a className="signup-text" href="signup">
                    Don't have an account? Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
