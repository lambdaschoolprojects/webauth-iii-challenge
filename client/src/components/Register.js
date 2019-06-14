import React, { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/register";

class Register extends Component {
  state = {
    username: "",
    department: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const result = await axios.post(API_URL, {
        ...this.state
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState(prevState => ({
        username: "",
        department: "",
        password: ""
      }));
    }
  };
  render() {
    return (
      <div data-test="component-register">
        <form>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            data-test="username-input"
          />
          <label for="department">Department</label>
          <input
            type="text"
            name="department"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            data-test="password-input"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            data-test="password-input"
          />
          <button onClick={e => this.handleSubmit(e)} data-test="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
