import React from "react";
import { render } from "react-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { store, history } from "./store";

render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
