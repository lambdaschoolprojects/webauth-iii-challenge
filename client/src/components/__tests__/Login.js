import React from "react";
import { shallow } from "enzyme";

import { findElementByAttrs } from "../../../test/testUtils";
import Login from "../Login";

const setup = () => {
  return shallow(<Login />);
};

describe("Login display", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it("renders without error", () => {
    const component = findElementByAttrs(wrapper, "component-login");

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

describe("Login functionality", () => {
  let wrapper;
  const testData = {
    username: "Clyde",
    password: "digdug"
  };

  beforeEach(() => {
    wrapper = setup();
  });
  it("controls input in the state", () => {
    const initialState = wrapper.state();
    const usernameInput = findElementByAttrs(wrapper, "username-input");
    const passwordInput = findElementByAttrs(wrapper, "password-input");

    usernameInput.simulate("change", { target: { value: testData.username } });
    passwordInput.simulate("change", { target: { value: testData.password } });

    const newState = wrapper.state();

    expect(initialState.username).toBe("");
    expect(initialState.password).toBe("");
    expect(newState.username).toBe(testData.username);
    expect(newState.password).toBe(testData.password);
  });
  it("submit button triggers api call when clicked", () => {});

  it("clears inputs on submit", async () => {
    wrapper.setState({ ...testData });
    const submitButton = findElementByAttrs(wrapper, "submit-button");

    submitButton.simulate("click", {
      preventDefault() {}
    });

    const newState = wrapper.state();

    expect(newState.username).toBe("");
    expect(newState.password).toBe("");
  });
});
