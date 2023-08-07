"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactRouterDom = require("react-router-dom");
require("@fortawesome/fontawesome-free/css/all.min.css");
require("./index.css");
var _Admin = _interopRequireDefault(require("./layouts/Admin"));
var _Auth = _interopRequireDefault(require("./layouts/Auth.js"));
// layouts

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/admin",
  component: _Admin.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/auth",
  component: _Auth.default
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
  from: "*",
  to: "/admin"
}))), document.getElementById("root"));