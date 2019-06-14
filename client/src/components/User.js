import React from "react";

const User = props => {
  return (
    <div data-test="user">
      <p>
        <span>Name: </span> <span>{props.username}</span>
      </p>
      <p>
        <span>Department: </span> <span>{props.department}</span>
      </p>
    </div>
  );
};

export default User;
