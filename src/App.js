import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Task from "./components/task";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/all" exact component={Task} />
            <Route path="/complete" component={Task} />
            <Route path="/not-complete" component={Task} />
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
