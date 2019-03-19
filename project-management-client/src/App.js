import React, { Component } from "react";
import "./App.css";
import ProjectList from "./Components/Projects/ProjectList";
import ProjectDetails from './Components/Projects/ProjectDetails';
import Navbar from "./Components/navbar/Navbar";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
