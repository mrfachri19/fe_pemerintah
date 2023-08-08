import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./storage"

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = getToken("kominvomarves_access_token");
  //   console.log(rest);
  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;