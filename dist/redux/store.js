"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validKodifikasi = exports.validAssignee = exports.urlify = exports.truncate = exports.todayDate = exports.quartalToDate = exports.quartalNow = exports.noValue = exports.isStringValidDate = exports.isPeriodeRepetitif = exports.isPeriodeKontinue = exports.isNumber = exports.hasValidValue = exports.getStartEndLabel = exports.getInitial = exports.getByte = exports.findURL = exports.default = exports.compareTime = exports.changeCurrency = exports.capitalizeTexteachWord = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _redux = require("redux");
var _excluded = ["type"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  // initial state
};
var changeState = function changeState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments.length > 1 ? arguments[1] : undefined,
    type = _ref.type,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  switch (type) {
    case "set":
      return _objectSpread(_objectSpread({}, state), rest);
    default:
      return state;
  }
};
var noValue = function noValue(val) {
  if ((0, _typeof2.default)(val) === "object") return val && Object.keys(val).length > 0 ? false : true;
  if (Array.isArray(val)) return val && val.length > 0 ? false : true;
  if (val == "") return true;
  return val ? false : true;
};
exports.noValue = noValue;
var isNumber = function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
};
exports.isNumber = isNumber;
var validAssignee = function validAssignee(val) {
  val = String(val);
  if (val.charAt(val.length - 1) == " ") {
    val = val.slice(0, -1);
  }
  if (val.charAt(0) == " ") {
    val = val.substring(1);
  }
  var result = false;
  if (val.replace(/[a-zA-Z0-9]/g, "") == "") {
    result = true;
  }
  return result;
};
exports.validAssignee = validAssignee;
var validKodifikasi = function validKodifikasi(str, format) {
  var kodifikasi = String(str).split(".");
  var formatsplit = String(format).split(".");
  var valid = false;
  if (kodifikasi.length == formatsplit.length) {
    valid = true;
  }
  return valid;
};
exports.validKodifikasi = validKodifikasi;
var isPeriodeRepetitif = function isPeriodeRepetitif(val) {
  return val.indexOf(",") > -1;
};
exports.isPeriodeRepetitif = isPeriodeRepetitif;
var isPeriodeKontinue = function isPeriodeKontinue(val) {
  return val.indexOf("-") > -1;
};
exports.isPeriodeKontinue = isPeriodeKontinue;
var quartalToDate = function quartalToDate(val, year) {
  var result = {};
  if (val && year) {
    var ms = "01",
      me = "12",
      de = "31";
    if (parseInt(val) == 1) {
      me = "03";
    } else if (parseInt(val) == 2) {
      ms = "04";
      me = "06";
      de = "30";
    } else if (parseInt(val) == 3) {
      ms = "07";
      me = "09";
      de = "30";
    } else if (parseInt(val) == 4) {
      ms = "10";
    }
    result.startDate = "".concat(year, "-").concat(ms, "-01");
    result.endDate = "".concat(year, "-").concat(me, "-").concat(de);
  }
  return result;
};
exports.quartalToDate = quartalToDate;
var isStringValidDate = function isStringValidDate(str, format) {
  var nospaceStr = String(str).replace(/ /g, "");
  var strsplit = nospaceStr.split("-");
  var formatsplit = format.split("-");
  var valid = false;
  if (nospaceStr.length == format.length && strsplit.length == formatsplit.length) {
    valid = true;
    for (var i = 0; i < formatsplit.length; i++) {
      valid = valid && strsplit[i].length == formatsplit[i].length;
    }
    if (valid) valid = moment(nospaceStr, format).isValid();
  }
  return valid;
};
exports.isStringValidDate = isStringValidDate;
var getInitial = function getInitial(val) {
  var words = val.toUpperCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i][0]) {
      words[i] = words[i][0];
    }
  }
  return words.join("").replace(/[^A-Z]+/g, "");
};
exports.getInitial = getInitial;
var capitalizeTexteachWord = function capitalizeTexteachWord(val) {
  if (typeof val !== "string") return val;
  val = val.replace(/ /g, " ");
  val = val.replace(/`/g, "'");
  var words = val.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i][0]) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join(" ");
};
exports.capitalizeTexteachWord = capitalizeTexteachWord;
var hasValidValue = function hasValidValue(val) {
  if (typeof val === "number") return val > 0;
  if (typeof val === "string") return val && val !== "" && val !== "-";
  if ((0, _typeof2.default)(val) === "object") return val && Object.keys(val).length > 0;
  if (Array.isArray(val)) return val && val.length > 0;
  return val;
};
exports.hasValidValue = hasValidValue;
var getByte = function getByte(str) {
  str = str.toString();
  var sizeNumber = Number(str.replace(/[^0-9.]+/g, ""));
  var sizeUnit = str.replace(sizeNumber, "").toUpperCase();
  var actualSize = sizeNumber;
  if (sizeUnit == "TB") {
    actualSize = sizeNumber * 1024 * 1024 * 1024 * 1024;
  } else if (sizeUnit == "GB") {
    actualSize = sizeNumber * 1024 * 1024 * 1024;
  } else if (sizeUnit == "MB") {
    actualSize = sizeNumber * 1024 * 1024;
  } else if (sizeUnit == "KB") {
    actualSize = sizeNumber * 1024;
  }
  return actualSize;
};
exports.getByte = getByte;
var changeCurrency = function changeCurrency(el, target) {
  $(".currency-select").html("".concat($(el).data("label"), " <span className=\"caret\"></span>"));
  if (target) {
    $(target).val($(el).data("value"));
  }
  $(el).closest(".dropdown-menu").toggleClass("show-custom");
};
exports.changeCurrency = changeCurrency;
var getStartEndLabel = function getStartEndLabel(start, end) {
  var startArr = start.split(" ");
  var endArr = end.split(" ");
  var result = "";
  if (start != end) {
    start = "";
    end = "";
    for (var i = 0; i < startArr.length; i++) {
      if (startArr[i] != endArr[i]) {
        start = i == 0 ? startArr[i] : "".concat(start, " ").concat(startArr[i]);
      }
      end = i == 0 ? endArr[i] : "".concat(end, " ").concat(endArr[i]);
    }
    result = "".concat(start, " - ").concat(end);
  } else {
    result = end;
  }
  return result;
};
exports.getStartEndLabel = getStartEndLabel;
var urlify = function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '">' + url + "</a>";
  });
};
exports.urlify = urlify;
var findURL = function findURL(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return "true";
  });
};
exports.findURL = findURL;
var truncate = function truncate(input) {
  if (input.length > 45) {
    return input.substring(0, 45) + "...";
  }
  return input;
};
exports.truncate = truncate;
var todayDate = function todayDate() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
};
exports.todayDate = todayDate;
var quartalNow = function quartalNow() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear(),
    result = "Q";
  if (month < 4) result += "1 - ";else if (month < 7) result += "2 - ";else if (month < 10) result += "3 - ";else result += "4 - ";
  result += year;
  return result;
};
exports.quartalNow = quartalNow;
var compareTime = function compareTime(val1, val2) {
  var result = false;
  var time1 = val1.toString().split(":");
  var time2 = val2.toString().split(":");
  if (parseInt(time1[0]) > parseInt(time2[0])) {
    result = true;
  } else if (parseInt(time1[0]) == parseInt(time2[0]) && parseInt(time1[1]) > parseInt(time2[1])) {
    result = true;
  }
  return result;
};
exports.compareTime = compareTime;
var store = (0, _redux.createStore)(changeState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var _default = store;
exports.default = _default;