"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messaege = void 0;
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
// import React from 'react'

var Messaege = function Messaege(title, msg, icon) {
  _sweetalert.default.fire({
    title: title,
    text: msg,
    icon: icon,
    timer: 1500,
    showConfirmButton: false
  });
};
exports.Messaege = Messaege;