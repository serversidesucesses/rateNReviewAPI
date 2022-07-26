"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_Components_RelatedProducts_relatedmain_jsx"],{

/***/ "./client/src/Components/RelatedProducts/productcard.jsx":
/*!***************************************************************!*\
  !*** ./client/src/Components/RelatedProducts/productcard.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_RelatedProducts_related_styled_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/RelatedProducts/related.styled.js */ "./client/src/Components/Styles/RelatedProducts/related.styled.js");
/* harmony import */ var _AppContext_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AppContext.jsx */ "./client/src/AppContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function ProductCard(_ref) {
  var product = _ref.product;

  var _useContext = useContext(_AppContext_jsx__WEBPACK_IMPORTED_MODULE_2__.AppContext),
      setProductID = _useContext.setProductID;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CardContainerStyled, {
    onClick: function onClick() {
      return setProductID(product.id);
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_RelatedProducts_related_styled_js__WEBPACK_IMPORTED_MODULE_3__.ImageStyled, {
      src: product.photo_url
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_RelatedProducts_related_styled_js__WEBPACK_IMPORTED_MODULE_3__.ProductInfoStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: product.category
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: product.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: product.default_price
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/RelatedProducts/productcarousel.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/Components/RelatedProducts/productcarousel.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCarousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _productcard_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productcard.jsx */ "./client/src/Components/RelatedProducts/productcard.jsx");
/* harmony import */ var _Styles_RelatedProducts_related_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/RelatedProducts/related.styled.js */ "./client/src/Components/Styles/RelatedProducts/related.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ProductCarousel(_ref) {
  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_RelatedProducts_related_styled_js__WEBPACK_IMPORTED_MODULE_2__.ProductsContainerStyled, {
    children: products.map(function (product) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_productcard_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        product: product
      });
    })
  });
}

/***/ }),

/***/ "./client/src/Components/RelatedProducts/relatedmain.jsx":
/*!***************************************************************!*\
  !*** ./client/src/Components/RelatedProducts/relatedmain.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RelatedProducts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _productcarousel_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productcarousel.jsx */ "./client/src/Components/RelatedProducts/productcarousel.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppContext.jsx */ "./client/src/AppContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function RelatedProducts() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext_jsx__WEBPACK_IMPORTED_MODULE_3__.AppContext),
      productID = _useContext.productID;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getProducts();
  }, []);

  var getProducts = function getProducts() {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'get',
      url: "/products/".concat(productID, "/related")
    }).then(function (response) {
      var data = response.data;
      return Promise.all(data.map(function (product) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/products/".concat(product.id)).then(function (response) {
          return {
            category: response.data.category,
            description: response.data.description,
            default_price: response.data.default_price,
            photo_url: response.data.photos[0] ? response.data.photos[0].thumbnail_url : null,
            id: response.data.id
          };
        })["catch"](function (err) {
          return console.log(err);
        });
      }));
    }).then(function (ProductData) {
      setProducts(ProductData);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_productcarousel_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      products: products
    })
  });
}

/***/ }),

/***/ "./client/src/Components/Styles/RelatedProducts/related.styled.js":
/*!************************************************************************!*\
  !*** ./client/src/Components/Styles/RelatedProducts/related.styled.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageStyled": () => (/* binding */ ImageStyled),
/* harmony export */   "ProductInfoStyled": () => (/* binding */ ProductInfoStyled),
/* harmony export */   "ProductsContainerStyled": () => (/* binding */ ProductsContainerStyled)
/* harmony export */ });
/* unused harmony export CardContainerStyled */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var CardContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid black;\n  width: 80px;\n"])));
var ImageStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 60%;\n"])));
var ProductInfoStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 40%;\n"])));
var ProductsContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));

/***/ })

}]);
//# sourceMappingURL=client_src_Components_RelatedProducts_relatedmain_jsx.bundle.js.map