import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArtistsPage from "./Pages/ArtistsPage";
import AlbumsPage from "./Pages/AlbumsPage";
import GenresPage from "./Pages/GenresPage";
import SigninPage from "./Pages/SigninPage";
import SignupPage from "./Pages/SignupPage";
import SearchPageFunc from "./Pages/Search/SearchPageFunc";
import ProfileEdit from "./Pages/ProfileEdit";
import Profile from "./Pages/Profile/Profile";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Genres from "./Pages/Genres/Genres.js";
import ArtistPage from "./Pages/ArtistPage/ArtistPage"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/artists" component={ArtistsPage} />
            <Route exact path="/albums" component={AlbumsPage} />
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <Route exact path="/search" component={SearchPageFunc} />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={ProfileEdit} />
            <Route path="/genres" component={Genres} />
            <Route path="/artist" component={ArtistPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
