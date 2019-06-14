import React, { Component } from "react";
import axios from "axios";

import User from "./User";
import api from "../helpers/api";

class Users extends Component {
  state = {
    users: []
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
          {props.users &&
            props.users.map(user => {
              <li data-test="user">
                <User {...user} />
              </li>;
            })}
          )}
        </ul>
      </div>
    );
  }
}

export default Users;
