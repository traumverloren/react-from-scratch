import React from "react";
import { Route, Link } from "react-router-dom";
import Main from "./Main";

const Routes = () =>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/sign-up">Sign Up</Link></li>
      <li><Link to="/woofers">Woofers & Doggos</Link></li>
    </ul>

    <hr />

    <Route exact path="/" component={Main} />
    {/* <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/woofers" component={Woofers} />*/}
  </div>;

export default Routes;
