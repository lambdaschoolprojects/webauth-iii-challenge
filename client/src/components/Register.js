import React, { Component } from "react";

import api from "../helpers/api";

class Register extends Component {
  state = {
    username: "",
    department: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const result = await api.post("/register", {
        ...this.state
      });

      console.log(result);
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            data-test="username-input"
          />
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={e => this.setState({ department: e.target.value })}
            data-test="department-input"
          />
          <label htmlFor="password">Password</label>
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
