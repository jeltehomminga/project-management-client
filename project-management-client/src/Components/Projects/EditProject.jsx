import React, { Component } from "react";
import axios from "axios";

class EditProject extends Component {
  state = {
    title: this.props.theProject.title,
    description: this.props.theProject.description
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleFormSubmit = e => {
    const title = this.state.title;
    const description = this.state.description;
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:5000/api/projects/${this.props.theProject._id}`,
      data: { title, description },
      withCredentials: true
    }).then(() => {
      this.props.getTheProject();
      this.props.history.push("./projects");
    });
  };
  render() {
    return (
      <div>
        <h3>Edit Project</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="title" >Title: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default EditProject;
