import React, { Component } from "react";

import User from "./User";
import api from "../helpers/api";
import withAuth from "../helpers/withAuth";

class Users extends Component {
  state = {
    users: null
  };

  async componentDidMount() {
    try {
      const result = await api.get("/users");

      this.setState(() => ({
        users: result.data.users
      }));
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div data-test="component-users">
        <ul data-test="users">
          {this.state.users &&
            this.state.users.map(user => {
              return (
                <li key={user.id} data-test="user">
                  <User key={user.id} {...user} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default withAuth(Users);
