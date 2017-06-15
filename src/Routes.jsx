import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import Woofers from "./Woofers";

console.log("I like pizza A LOT");

const Routes = () =>
  <div>
    <ul>
      <li><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
      <li><Link to={`${process.env.PUBLIC_URL}/login`}>Login</Link></li>
      <li><Link to={`${process.env.PUBLIC_URL}/sign-up`}>Sign Up</Link></li>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/woofers`}>Woofers & Doggos</Link>
      </li>
    </ul>

    <hr />
    <Route path={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/woofers" component={Woofers} />
      </Switch>
    </Route>
  </div>;

export default Routes;
