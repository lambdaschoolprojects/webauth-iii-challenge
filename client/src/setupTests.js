import Enzyme, { shallow } from "enzyme/build";
import EnzymeAdapter from "enzyme-adapter-react-16/build";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

const mock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: mock
});
