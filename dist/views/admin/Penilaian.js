"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Penilaian;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _icons = require("@ant-design/icons");
var _reactRouterDom = require("react-router-dom");
var _api = require("../../api");
var _message = require("../../helper/message");
var _reactRouterDom2 = require("react-router-dom/cjs/react-router-dom.min");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function Penilaian() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var history = (0, _reactRouterDom2.useHistory)();
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    nilai1 = _useState4[0],
    setnilai1 = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    nilai2 = _useState6[0],
    setnilai2 = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    nilai3 = _useState8[0],
    setnilai3 = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    nilai4 = _useState10[0],
    setnilai4 = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    nilai5 = _useState12[0],
    setnilai5 = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
    nilai6 = _useState14[0],
    setnilai6 = _useState14[1];

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  function getIdRencanaKerja() {
    (0, _api.listrencanaKerja)("/".concat(id)).then(function (res) {
      var tempList;
      tempList = res.data.data[0];
      console.log("List Data => ", tempList);
      setData(tempList);
    });
  }
  (0, _react.useEffect)(function () {
    getIdRencanaKerja();
  }, []);
  var nilai = nilai1 + nilai2 + nilai3 + nilai4 + nilai5 + nilai6;
  var PostPenilaian = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            e.preventDefault();
            _context.next = 4;
            return (0, _api.updateRencanaKerja)("/".concat(id), {
              skor: nilai
            });
          case 4:
            response = _context.sent;
            (0, _message.Messaege)("Succes", "Success submitted", "success");
            setTimeout(function () {
              history.push("/admin/biroPerencanaan");
            }, 2000);
            console.log(response);
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            (0, _message.Messaege)("Failed", "failed submiited", "error");
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function PostPenilaian(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "font-bold text-2xl"
  }, "Rencana Kinerja dan Anggaran"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex mt-3"
  }, /*#__PURE__*/_react.default.createElement(_icons.UserOutlined, {
    className: "text-yellow-500 mr-1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-slate-500 mr-2"
  }, data.nama), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-slate-500 mr-2"
  }, "."), /*#__PURE__*/_react.default.createElement(_icons.ClockCircleOutlined, {
    className: "text-yellow-500 mr-1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-slate-500"
  }, data.updatedAt)), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 py-10 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "py-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-10"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Unit Kerja"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-slate-600  "
  }, data.unitKerja)), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-10"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Nomenklatur Komponen"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-slate-600  "
  }, data.nomenklatur)), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-10"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Anggaran Awal"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-slate-600  "
  }, data.anggaranAwal)), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-10"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Kegiatan Prioritas"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "text-grey-60 text-xs font-semibold text-slate-600  "
  }, "Kegiatan Prioritas"), data.prioritas == "true" ? /*#__PURE__*/_react.default.createElement(_icons.CheckCircleOutlined, {
    className: "text-yellow-500 ml-3"
  }) : /*#__PURE__*/_react.default.createElement(_icons.CloseCircleOutlined, {
    className: "text-yellow-500 ml-3"
  }))))))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 py-10 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "py-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full mb-10"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "font-bold text-xl mb-10"
  }, "RPJMN 2020-2024"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Prioritas Nasional"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-slate-600  "
  }, data.prioritasNasional)), /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs block text-slate-600"
  }, "Skor"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150",
    placeholder: "",
    onChange: function onChange(e) {
      return setnilai1(parseInt(e.target.value));
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between mb-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Program Prioritas", " "), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-slate-600  "
  }, data.prioritasProgram)), /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs block text-slate-600"
  }, "Skor"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150",
    placeholder: "",
    onChange: function onChange(e) {
      return setnilai2(parseInt(e.target.value));
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Kegiatan Prioritas"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-slate-600  "
  }, data.prioritasKegiatan)), /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs block text-slate-600"
  }, "Skor"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150",
    placeholder: "",
    onChange: function onChange(e) {
      return setnilai3(parseInt(e.target.value));
    }
  }))))))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col break-words mb-6 shadow-lg rounded-lg border bg-white  mt-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 py-10 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "py-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between mb-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Janji Presiden"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-slate-600  "
  }, data.janjiPresiden)), /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs block text-slate-600"
  }, "Skor"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150",
    placeholder: "",
    onChange: function onChange(e) {
      return setnilai4(parseInt(e.target.value));
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between mb-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Major Project"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-slate-600  "
  }, data.majorProject)), /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs block text-slate-600"
  }, "Skor"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150",
    placeholder: "",
    onChange: function onChange(e) {
      return setnilai5(parseInt(e.target.value));
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between mb-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold mb-2 text-grey-20  "
  }, "Total Anggaran Tambahan"), /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-slate-600  "
  }, data.totalAnggaranTambahan)), /*#__PURE__*/_react.default.createElement("div", {
    className: "block"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs block text-slate-600"
  }, "Skor"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    className: "border px-3 py-1 w-20 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150",
    placeholder: "",
    onChange: function onChange(e) {
      return setnilai6(parseInt(e.target.value));
    }
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col mb-6 shadow-lg rounded-lg border bg-white  mt-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 pt-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "py-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-grey-20  "
  }, "Total Skor"), /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2 text-sm font-medium text-slate-600"
  }, nilai))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col mb-6 shadow-lg rounded-lg border bg-white  mt-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-auto px-4 lg:px-10 pt-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "py-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "block text-grey-60 text-xs font-semibold text-grey-20  "
  }, "Total Anggaran Komponen"), /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2 text-sm font-medium text-slate-600"
  }, data.totalAnggaranKomponen))))), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-10 w-full ease-linear transition-all duration-150",
    type: "button",
    onClick: PostPenilaian
  }, "Submit"));
}