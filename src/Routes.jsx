import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import Woofers from "./Woofers";

const Routes = () =>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/sign-up">Sign Up</Link></li>
      <li><Link to="/woofers">Woofers & Doggos</Link></li>
    </ul>

    <hr />
    <Route path="/">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/woofers" component={Woofers} />
      </Switch>
    </Route>
  </div>;

export default Routes;
