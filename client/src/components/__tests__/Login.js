import React from 'react';
import { shallow } from 'enzyme';

import { findElementByAttrs} from '../../../test/testUtils';
import Login from '../Login';

const setup = () => {
    return shallow(<Login />);
}

describe("Login display", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it("renders without error", () => {
        const component = findElementByAttrs(wrapper, 'component-login');

        expect(component.length).toBe(1);
    });
    it("renders a username field", () => {
        const usernameInput = findElementByAttrs(wrapper, 'username-input');

        expect(usernameInput.length).toBe(1);
    });
    it("renders a password field", () => {
        const passwordInput = findElementByAttrs(wrapper, 'password-input');

        expect(passwordInput.length).toBe(1);
    });
    it("renders a submit button", ()=> {
        const submitButton = findElementByAttrs(wrapper, 'submit-button');

        expect(submitButton.length).toBe(1);
    });
});

describe("Login functionality", () => {
   it("controls input in the state", () => {

   }) ;
   it("submit button triggers api call when clicked", () => {

   });
   it("clears inputs on submit", () =>{

   });
});