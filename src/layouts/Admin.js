import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Submitted from "../views/admin/Submitted.js";
import BiroPerencanaan from "../views/admin/BiroPerencanaan.js";
import Penilaian from "../views/admin/Penilaian.js";

export default function Admin() {
  // views

  const Dashboard = lazy(() => import("../views/admin/Dashboard.js"));
  const renderLoader = () => <p className="">Loading</p>;

  return (
    <>
      <AdminNavbar />
      {/* Header */}
      <div className="px-4 md:mx-36 mx-auto h-full mt-10">
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path="/admin/home" exact component={Dashboard} />
            <Route path="/admin/submitted" exact component={Submitted} />
            {/* biro perencanaan */}
            <Route
              path="/admin/biroPerencanaan"
              exact
              component={BiroPerencanaan}
            />
            <Route path="/admin/penilaian/:id" exact component={Penilaian} />

            <Redirect from="/admin" to="/admin/Home" />
          </Switch>
        </Suspense>
        {/* <FooterAdmin /> */}
      </div>
    </>
  );
}
