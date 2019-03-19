import React, { Component } from "react";
import axios from "axios";
// import axios from "axios";
import { Link } from "react-router-dom";
import EditProject from "./EditProject";

class ProjectDetails extends Component {
  state = {};
  componentDidMount = () => this.getSingleProject();
  getSingleProject = () => {
    const { params } = this.props.match;
    axios({
      method: "get",
      url: `http://localhost:5000/api/projects/${params.id}`,
      withCredentials: true
    })
      .then(response => this.setState(response.data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <EditProject theProject={this.state} getTheProject={this.getSingleProject} {...this.props} />
        <Link to="/projects">Back to projects</Link>
      </div>
    );
  }
}

export default ProjectDetails;
