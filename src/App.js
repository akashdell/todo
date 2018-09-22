import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
//import Task from "./components/task";
import Completed from "./components/completed";
import NotCompleted from "./components/notCompleted";
import All from "./components/all";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/all" exact component={All} />
            <Route path="/complete" component={Completed} />
            <Route path="/not-complete" component={NotCompleted} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/all" />
            <Redirect to="/not-found" component={NotFound} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
