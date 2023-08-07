"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _LogoKemenkoBidangKemaritimanDanInvestasi = _interopRequireDefault(require("../../assets/img/Logo Kemenko Bidang Kemaritiman Dan Investasi 1 (1).png"));
function Navbar() {
  var history = (0, _reactRouterDom.useHistory)();
  function LogOut() {
    localStorage.clear();
    history.push("/auth/login");
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("nav", {
    className: " bg-white w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 shadow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full mx-10 items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _LogoKemenkoBidangKemaritimanDanInvestasi.default,
    alt: "img",
    className: "mr-5"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-black cursor-pointer hover:text-yellow-500 text-base uppercase hidden mr-14 lg:inline-block font-bold",
    onClick: function onClick() {
      return history.push("/admin");
    }
  }, "KEMENKOMARVES"), localStorage.getItem("role") == "biroPerencanaan" ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "text-black cursor-pointer hover:text-yellow-500 text-base uppercase hidden mr-14 lg:inline-block font-bold  ".concat(window.location.href.indexOf("/admin/home") !== -1 ? "text-yellow-500" : "text-black"),
    onClick: function onClick() {
      return history.push("/admin/home");
    }
  }, "BUAT LEMBAR"), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-black cursor-pointer hover:text-yellow-500 text-base uppercase hidden mr-14 lg:inline-block font-bold  ".concat(window.location.href.indexOf("/admin/submitted") !== -1 ? "text-yellow-500" : "text-black"),
    onClick: function onClick() {
      return history.push("/admin/submitted");
    }
  }, "SUBMITTED")), /*#__PURE__*/_react.default.createElement("div", {
    className: "md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-slate-400 cursor-pointer hover:text-yellow-500 text-sm uppercase hidden lg:inline-block font-semibold",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, localStorage.getItem("nama")), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-black hover:text-yellow-500 font-medium text-sm uppercase hidden mx-5 lg:inline-block"
  }, "|"), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-black cursor-pointer hover:text-yellow-500 text-sm uppercase hidden lg:inline-block font-medium",
    onClick: LogOut
  }, "Logout")))));
}