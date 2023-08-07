"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Auth;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _FooterSmall = _interopRequireDefault(require("../components/Footers/FooterSmall.js"));
var _ForgotPasword = _interopRequireDefault(require("../views/auth/ForgotPasword.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || (0, _typeof2.default)(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; } // components
function Auth() {
  // views

  var Register = /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/auth/Register.js"));
    });
  });
  var Login = /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/auth/Login.js"));
    });
  });
  var renderLoader = function renderLoader() {
    return /*#__PURE__*/_react.default.createElement("p", null, "Loading");
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("section", {
    className: "relative w-full h-full py-40 min-h-screen"
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: renderLoader()
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/auth/login",
    exact: true,
    component: Login
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/auth/register",
    exact: true,
    component: Register
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/auth/forgot_password",
    exact: true,
    component: _ForgotPasword.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    from: "/auth",
    to: "/auth/login"
  }))))));
}