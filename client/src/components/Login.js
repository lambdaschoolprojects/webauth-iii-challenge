import React, { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/login";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const result = await axios.post(API_URL, {
        ...this.state
      });

      console.log(result);

      localStorage.setItem("jwt", result.data.token);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState(prevState => ({
        username: "",
        password: ""
      }));
    }
  };
  render() {
    return (
      <div data-test="component-login">
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
            data-test="username-input"
          />
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

export default Login;
