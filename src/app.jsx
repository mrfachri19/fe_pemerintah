import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';

// layouts

import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/admin" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

