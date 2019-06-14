import React, { Component } from "react";
import axios from "axios";

import User from "./User";
import api from "../helpers/api";

class Users extends Component {
  state = {
    users: null
  };

  async componentDidMount() {
    try {
      const result = await api.get("/users");

      this.setState({
        users: result.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div data-test="component-users">
        <ul data-test="users">
          {this.state.users &&
            this.state.props.map(user => {
              return (
                <li data-test="user">
                  <User {...user} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Users;
