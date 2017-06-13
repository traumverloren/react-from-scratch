import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from "./Main";

// Here's a reducer...
const reducer = (state = { name: "Wilbur" }, action) => {
  switch (action.type) {
    case "SET_NEW_NAME":
      return { name: action.newName };
    default:
      return state;
  }
};

// ... and store.
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
