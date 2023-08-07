"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Admin;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _AdminNavbar = _interopRequireDefault(require("../components/Navbars/AdminNavbar.js"));
var _Submitted = _interopRequireDefault(require("../views/admin/Submitted.js"));
var _BiroPerencanaan = _interopRequireDefault(require("../views/admin/BiroPerencanaan.js"));
var _Penilaian = _interopRequireDefault(require("../views/admin/Penilaian.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || (0, _typeof2.default)(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; } // components
function Admin() {
  // views

  var Dashboard = /*#__PURE__*/(0, _react.lazy)(function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../views/admin/Dashboard.js"));
    });
  });
  var renderLoader = function renderLoader() {
    return /*#__PURE__*/_react.default.createElement("p", {
      className: ""
    }, "Loading");
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AdminNavbar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "px-4 md:mx-36 mx-auto h-full mt-10"
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: renderLoader()
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin/home",
    exact: true,
    component: Dashboard
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin/home/:id",
    exact: true,
    component: Dashboard
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin/submitted",
    exact: true,
    component: _Submitted.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin/biroPerencanaan",
    exact: true,
    component: _BiroPerencanaan.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/admin/penilaian/:id",
    exact: true,
    component: _Penilaian.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    from: "/admin",
    to: "/admin/Home"
  })))));
}