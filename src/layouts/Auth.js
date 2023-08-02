import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import FooterSmall from "../components/Footers/FooterSmall.js";
import ForgotPassword from "../views/auth/ForgotPasword.js";

export default function Auth() {
  // views

  const Register = lazy(() => import("../views/auth/Register.js"));
  const Login = lazy(() => import("../views/auth/Login.js"));

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth/register" exact component={Register} />
              <Route
                path="/auth/forgot_password"
                exact
                component={ForgotPassword}
              />
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
          </Suspense>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
