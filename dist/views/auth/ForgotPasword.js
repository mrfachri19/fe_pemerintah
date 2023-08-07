"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ForgotPassword;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _LogoKemenkoBidangKemaritimanDanInvestasi = _interopRequireDefault(require("../../assets/img/Logo Kemenko Bidang Kemaritiman Dan Investasi 1.png"));
var _api = require("../../api");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ForgotPassword() {
  var history = (0, _reactRouterDom.useHistory)();
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    newPassword = _useState4[0],
    setNewPassword = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    confirmPassword = _useState6[0],
    setConfirmPassword = _useState6[1];
  function ResetPaswordUser() {
    var data = {
      email: email,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    };
    (0, _api.ResetPassword)(data).then(function (res) {
      console.log(res);
      setTimeout(function () {
        history.push("/auth/login");
      }, 2000);
    });
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container mx-auto px-4 h-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex content-center items-center justify-center h-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full lg:w-5/12 px-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center mb-5"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "",
    src: _LogoKemenkoBidangKemaritimanDanInvestasi.default,
    alt: "img"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-black text-center mb-5 text-sm font-bold"
  }, "Kementrian Koordinator Kemaritiman", " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "block"
  }, "dan Investas")), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-t mb-0 px-6 py-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mb-3"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "text-black text-sm font-bold"
  }, "Change Password"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 py-10 pt-0"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
    placeholder: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
    placeholder: "Password",
    onChange: function onChange(e) {
      return setNewPassword(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
    placeholder: "Confirm Password",
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "inline-flex items-center cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: "customCheckLogin",
    type: "checkbox",
    className: "form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2 text-sm font-semibold text-slate-600"
  }, "Remember me")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center flex justify-center mt-6"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-slate-300 text-black active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150",
    type: "button",
    onClick: ResetPaswordUser
  }, "Change Password")))))))));
}