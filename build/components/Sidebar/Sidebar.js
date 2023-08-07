"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _NotificationDropdown = _interopRequireDefault(require("../../components/Dropdowns/NotificationDropdown.js"));
var _UserDropdown = _interopRequireDefault(require("../../components/Dropdowns/UserDropdown.js"));
/*eslint-disable*/

function Sidebar() {
  var _React$useState = _react.default.useState("hidden"),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    collapseShow = _React$useState2[0],
    setCollapseShow = _React$useState2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("nav", {
    className: "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
    type: "button",
    onClick: function onClick() {
      return setCollapseShow("bg-white m-2 py-3 px-6");
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-bars"
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "md:block text-center md:pb-2 mr-0 inline-block whitespace-nowrap text-sm px-4 font-bold",
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "...",
    src: require("../../assets/img/logo-swamedia.webp"),
    className: "h-12 align-center border-none"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "md:hidden items-center flex flex-wrap list-none"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "inline-block relative"
  }, /*#__PURE__*/_react.default.createElement(_NotificationDropdown.default, null)), /*#__PURE__*/_react.default.createElement("li", {
    className: "inline-block relative"
  }, /*#__PURE__*/_react.default.createElement(_UserDropdown.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-6/12"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
    to: "/"
  }, "DIARIUM APP")), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-6/12 flex justify-end"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
    onClick: function onClick() {
      return setCollapseShow("hidden");
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-times"
  }))))), /*#__PURE__*/_react.default.createElement("form", {
    className: "mt-6 mb-4 md:hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 pt-0"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search",
    className: "px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
  }))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-6 md:min-w-full"
  }), /*#__PURE__*/_react.default.createElement("h6", {
    className: "md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
  }, "Main Menu"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "md:flex-col md:min-w-full flex flex-col list-none"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "text-xs uppercase py-3 font-bold block " + (window.location.href.indexOf("/admin/settings") !== -1 ? "text-blue-500 hover:text-blue-600" : "text-slate-700 hover:text-slate-500"),
    to: "/admin/settings"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-tools mr-2 text-sm " + (window.location.href.indexOf("/admin/settings") !== -1 ? "opacity-75" : "text-slate-300")
  }), " ", "Dashboard")), /*#__PURE__*/_react.default.createElement("li", {
    className: "items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "text-xs uppercase py-3 font-bold block " + (window.location.href.indexOf("/admin/tables") !== -1 ? "text-blue-500 hover:text-blue-600" : "text-slate-700 hover:text-slate-500"),
    to: "/admin/tables"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-table mr-2 text-sm " + (window.location.href.indexOf("/admin/tables") !== -1 ? "opacity-75" : "text-slate-300")
  }), " ", "Users"))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-4 md:min-w-full"
  }), /*#__PURE__*/_react.default.createElement("h6", {
    className: "md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
  }, "Auth Layout Pages"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block",
    to: "/auth/login"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-fingerprint text-slate-400 mr-2 text-sm"
  }), " ", "Login")), /*#__PURE__*/_react.default.createElement("li", {
    className: "items-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block",
    to: "/auth/register"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-clipboard-list text-slate-300 mr-2 text-sm"
  }), " ", "Register")))))));
}