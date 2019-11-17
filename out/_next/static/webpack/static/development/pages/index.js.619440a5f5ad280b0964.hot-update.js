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

var Noticia = function Noticia(props) {
  var _props$noticia = props.noticia,
      urlToImage = _props$noticia.urlToImage,
      url = _props$noticia.url,
      title = _props$noticia.title,
      description = _props$noticia.description,
      source = _props$noticia.source;
  /* console.log(noticia); */

  var imagen = '';

  if (urlToImage != '') {
    imagen = __jsx("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  } else {
    imagen = __jsx("p", {
      className: "text-center my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Imagen no disponible");
  }

  console.log(imagen);
  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, imagen), __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title, " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.619440a5f5ad280b0964.hot-update.js.map