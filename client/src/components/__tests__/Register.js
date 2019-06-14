import React from "react";
import { shallow } from "enzyme";

import Register from "../Register";
import { findElementByAttrs } from "../../../test/testUtils";

const setup = _ => {
  return shallow(<Register />);
};

describe("Register display", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it("renders without error", () => {
    const component = findElementByAttrs(wrapper, "component-register");

    expect(component.length).toBe(1);
  });
  it("renders a username field", () => {
    const usernameInput = findElementByAttrs(wrapper, "username-input");

    expect(usernameInput.length).toBe(1);
  });
  it("renders a password field", () => {
    const passwordInput = findElementByAttrs(wrapper, "password-input");

    expect(passwordInput.length).toBe(1);
  });
  it("renders a submit button", () => {
    const submitButton = findElementByAttrs(wrapper, "submit-button");

    expect(submitButton.length).toBe(1);
  });
});
