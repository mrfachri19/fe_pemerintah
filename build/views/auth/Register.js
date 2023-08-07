"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Register;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _LogoKemenkoBidangKemaritimanDanInvestasi = _interopRequireDefault(require("../../assets/img/Logo Kemenko Bidang Kemaritiman Dan Investasi 1.png"));
var _api = require("../../api");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Register() {
  var history = (0, _reactRouterDom.useHistory)();
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    nama = _useState4[0],
    setNama = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    role = _useState8[0],
    setRole = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    active = _useState10[0],
    setActive = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    active1 = _useState12[0],
    setActive1 = _useState12[1];
  function Regist() {
    var data = {
      nama: nama,
      email: email,
      password: password,
      role: role
    };
    (0, _api.RegisterUser)(data).then(function (res) {
      console.log(res);
      setTimeout(function () {
        history.push("/auth/login");
      }, 2000);
    });
  }
  function signIn() {
    history.push("/auth/login");
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
  }, "Create an Account"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 py-10 pt-0"
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
    placeholder: "Name",
    onChange: function onChange(e) {
      return setNama(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    className: "border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
    placeholder: "Email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    className: "border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
    placeholder: "Set Password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "border px-3 py-3 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring hover:text-slate-600 hover:border-yellow-500 ease-linear transition-all duration-150\n                      ".concat(active === true ? "bg-yellow-500" : "", "\n                    "),
    onClick: function onClick(e) {
      e.preventDefault();
      setActive(!active);
      setActive1(false);
      setRole("sekretariatDeputi");
    }
  }, "Sekretariat Deputi"), /*#__PURE__*/_react.default.createElement("button", {
    className: "border px-3 py-3 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring hover:text-slate-600 hover:border-yellow-500 ease-linear transition-all duration-150\n                      ".concat(active1 === true ? "bg-yellow-500" : ""),
    onClick: function onClick(e) {
      e.preventDefault();
      setActive1(!active1);
      setActive(false);
      setRole("biroPerencanaan");
    }
  }, "Biro Perencanaan")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-6"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",
    type: "button",
    onClick: Regist
  }, "Create Account")), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center mt-8"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-base"
  }, "Have an Account ?", " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "text-yellow-500 cursor-pointer",
    onClick: signIn
  }, "Sign In"))))))))));
}