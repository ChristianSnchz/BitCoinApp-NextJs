webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Componentes/Noticia.js":
/*!********************************!*\
  !*** ./Componentes/Noticia.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\BitCoinApp-NextJs\\Componentes\\Noticia.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Noticia = function Noticia(noticia) {
  var urlToImage = noticia.urlToImage,
      url = noticia.url,
      title = noticia.title,
      description = noticia.description,
      source = noticia.source;
  console.log(noticia);
  var imagen = '';

  if (urlToImage != '') {
    imagen = __jsx("img", {
      src: noticia.urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }

  console.log(imagen);
  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, imagen)));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.51fb69eb682c7d48e0fe.hot-update.js.map