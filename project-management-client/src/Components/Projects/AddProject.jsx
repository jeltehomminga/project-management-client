import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  state = {
    title: "",
    description: ""
  };
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/api/projects",
      data: this.state,
      withCredentials: true
    })
      .then(response => {
        this.props.getData();
        console.log(response);
      })
      .catch(error => console.log(error));
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label for="title">Title: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <label for="description">Description: </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
