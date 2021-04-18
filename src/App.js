import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage";
import Login from "./Pages/SignUp-In/login";
import SignUp from "./Pages/SignUp-In/signup";
import Dashboard from "Pages/Dashboard/Dashboard";
import Search from "./Pages/Search/SearchPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/Search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
