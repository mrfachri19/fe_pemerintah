"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FooterAdmin;
var _react = _interopRequireDefault(require("react"));
function FooterAdmin() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("footer", {
    className: "block py-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/_react.default.createElement("hr", {
    className: "mb-4 border-b-1 border-slate-200"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap items-center md:justify-between justify-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full md:w-4/12 px-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm text-slate-500 font-semibold py-1 text-center md:text-left"
  }, "Copyright \xA9 ", new Date().getFullYear(), " "))))));
}