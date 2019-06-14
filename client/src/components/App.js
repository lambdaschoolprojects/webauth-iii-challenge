import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Users from "./Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>

        <main>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
