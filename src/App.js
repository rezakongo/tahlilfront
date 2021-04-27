import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArtistsPage from "./Pages/ArtistsPage";
import AlbumsPage from "./Pages/AlbumsPage";
import GenresPage from "./Pages/GenresPage";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import SearchPage from "./Pages/Search/SearchPage"
import ProfileEdit from "./Pages/ProfileEdit"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import DashboardPage from "./Pages/DashboardPage";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/artists" component={ArtistsPage} />
            <Route exact path="/albums" component={AlbumsPage} />
            <Route exact path="/genres" component={GenresPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/editprofile" component={ProfileEdit} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
