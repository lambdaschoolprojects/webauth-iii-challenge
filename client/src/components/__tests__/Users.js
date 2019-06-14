import React from "react";
import { shallow } from "enzyme";

import Users from "../Users";
import { findElementByAttrs } from "../../../test/testUtils";

const setup = props => {
  return shallow(<Users {...props} />);
};

describe("Users display", () => {
  let wrapper;
  const users = [
    {
      username: "Fred",
      department: "Kitchen"
    },
    {
      username: "Golla",
      department: "Leadership"
    },
    {
      username: "Cartina",
      department: "Zooming"
    }
  ];

  beforeEach(() => {
    wrapper = setup(users);
  });

  it("renders without error", () => {
    const component = findElementByAttrs(wrapper, "component-users");

    expect(component.length).toBe(1);
  });

  it("renders a list of users", () => {
    const users = findElementByAttrs(wrapper, "users");

    expect(users.length).not.toBe(0);
  });
});
