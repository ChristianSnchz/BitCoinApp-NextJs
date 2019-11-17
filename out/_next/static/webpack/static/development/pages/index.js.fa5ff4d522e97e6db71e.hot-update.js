webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Componentes/Precio.js":
/*!*******************************!*\
  !*** ./Componentes/Precio.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\BitCoinApp-NextJs\\Componentes\\Precio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Precio = function Precio(props) {
  var _props$precio$quotes$ = props.precio.quotes.USD,
      price = _props$precio$quotes$.price,
      percent_change_1h = _props$precio$quotes$.percent_change_1h,
      percent_change_7d = _props$precio$quotes$.percent_change_7d,
      percent_change_24h = _props$precio$quotes$.percent_change_24h;
  return __jsx("div", {
    className: "card text-white bg-success mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h4", {
    className: "card-tittle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Precio Actual: USD ", price, " "), __jsx("div", {
    className: "d-md-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Ultima hora: ", percent_change_1h)), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Ultimas 24 horas: ", percent_change_24h)), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Ultimos 7 dias: ", percent_change_7d)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.fa5ff4d522e97e6db71e.hot-update.js.map