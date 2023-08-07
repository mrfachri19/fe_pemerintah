"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _api = require("../../api");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _moment = _interopRequireDefault(require("moment"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BiroPerencanaan = function BiroPerencanaan() {
  var history = (0, _reactRouterDom.useHistory)();
  var columns = [{
    title: "Nama",
    dataIndex: "name",
    key: "name",
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("a", null, text);
    }
  }, {
    title: "Nomenklatur",
    dataIndex: "unit",
    key: "unit",
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("a", null, text);
    }
  }, {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("a", null, (0, _moment.default)(text, "YYYY-MM-DD").format("D MMMM YYYY"));
    }
  }, {
    title: "Prioritas",
    key: "tags",
    dataIndex: "tags",
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("a", {
        className: "flex justify-center"
      }, text == 1 ? /*#__PURE__*/_react.default.createElement(_icons.CheckCircleOutlined, {
        className: "text-green-500"
      }) : /*#__PURE__*/_react.default.createElement(_icons.CloseCircleOutlined, {
        className: "text-gray-500"
      }));
    }
  }, {
    title: "Skor",
    dataIndex: "address",
    key: "address",
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("a", null, text);
    }
  }, {
    title: "Mean",
    dataIndex: "mean",
    key: "mean",
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("a", null, text);
    }
  }, {
    title: "",
    dataIndex: "action",
    key: "action",
    render: function render(id) {
      return /*#__PURE__*/_react.default.createElement(_antd.Space, {
        size: "middle"
      }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement(_icons.DownloadOutlined, null)), /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("button", {
        className: "bg-yellow-500 text-white text-xs font-normal px-2 py-1 rounded-lg shadow outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150",
        type: "button",
        onClick: function onClick() {
          history.push("/admin/penilaian/".concat(id));
        }
      }, "Nilai")));
    }
  }];
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dataRencanaKerja = _useState2[0],
    setdataRencanakerja = _useState2[1];
  function getrencanaKerja() {
    (0, _api.listrencanaKerja)().then(function (res) {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setdataRencanakerja(tempList);
    });
  }
  (0, _react.useEffect)(function () {
    getrencanaKerja();
  }, []);
  var items = dataRencanaKerja === null || dataRencanaKerja === void 0 ? void 0 : dataRencanaKerja.map(function (item) {
    var data = {};
    data.name = item.nama;
    data.unit = item.nomenklatur;
    data.tanggal = item.createdAt;
    data.tags = item.prioritas;
    data.address = item.skor ? item.skor : "-";
    data.mean = item.mean;
    data.action = item.id;
    return data;
  });
  return /*#__PURE__*/_react.default.createElement(_antd.Table, {
    columns: columns,
    dataSource: items
  });
};
var _default = BiroPerencanaan;
exports.default = _default;