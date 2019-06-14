import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      username: "",
      password: ""
    }));
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
