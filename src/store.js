import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";

// Here's a reducer...
const reducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { name: action.name };
    default:
      return state;
  }
};

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: true,
      latency: 0
    })
  : compose;
/* eslint-enable no-underscore-dangle */

const reducers = combineReducers({
  reducer,
  routerReducer
});

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(middleware))
);
