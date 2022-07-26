"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_Components_Q_A_questions_jsx"],{

/***/ "./client/src/Assets/cloudinaryUploadWidget.jsx":
/*!******************************************************!*\
  !*** ./client/src/Assets/cloudinaryUploadWidget.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudinaryUploadWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function CloudinaryUploadWidget(_ref) {
  var imageUpload = _ref.imageUpload;
  // eslint-disable-next-line no-var
  var myWidget;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // eslint-disable-next-line no-var
    myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'space-invaders',
      uploadPreset: 'Atelier-space-invaders'
    }, function (error, result) {
      if (!error && result && result.event === 'success') {
        console.log('Done! Here is the image info: ', result.info);
        imageUpload(result.info.url);
      }
    });
    document.getElementById('upload_widget').addEventListener('click', function () {
      myWidget.open();
    }, false);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: "button",
    id: "upload_widget",
    children: "Upload"
  });
}

/***/ }),

/***/ "./client/src/Assets/photo.jsx":
/*!*************************************!*\
  !*** ./client/src/Assets/photo.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Photo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Components_Styles_Q_A_photo_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Styles/Q&A/photo.styled */ "./client/src/Components/Styles/Q&A/photo.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Photo(_ref) {
  var photos = _ref.photos;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: state ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: photos.url,
      alt: "imageOfLa",
      width: "100",
      height: "70",
      onClick: function onClick() {
        return setState(false);
      }
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Components_Styles_Q_A_photo_styled__WEBPACK_IMPORTED_MODULE_2__.PhotoEnlargeStyled, {
      src: photos.url,
      alt: "imageOfLa",
      onClick: function onClick() {
        return setState(true);
      }
    })
  });
}

/***/ }),

/***/ "./client/src/Components/Q&A/Forms/addAnswer.jsx":
/*!*******************************************************!*\
  !*** ./client/src/Components/Q&A/Forms/addAnswer.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddAnswer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _Assets_cloudinaryUploadWidget_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Assets/cloudinaryUploadWidget.jsx */ "./client/src/Assets/cloudinaryUploadWidget.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var initialValues = {
  body: '',
  name: '',
  email: ''
};
function AddAnswer(_ref) {
  var onFormValidation = _ref.onFormValidation;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      images = _useState4[0],
      setImages = _useState4[1];

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  };

  var imageUpload = function imageUpload(image) {
    setImages(function (previmages) {
      return [].concat(_toConsumableArray(previmages), [image]);
    });
  };

  function onSubmit(e) {
    e.preventDefault();

    var data = _objectSpread(_objectSpread({}, values), {}, {
      photos: images
    });

    onFormValidation(data);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: "Submit an answer"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "text",
          name: "body",
          placeholder: "Enter an answer...",
          maxLength: "1000",
          size: "100",
          value: values.body,
          onChange: handleInputChange,
          required: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "text",
          name: "name",
          placeholder: "Enter a name",
          value: values.name,
          onChange: handleInputChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "email",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
          children: ["Email", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "email",
            name: "email",
            placeholder: "Enter an email",
            value: values.email,
            onChange: handleInputChange
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Assets_cloudinaryUploadWidget_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        imageUpload: imageUpload
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "submit",
          value: "Submit Answer"
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Q&A/Forms/questionform.jsx":
/*!**********************************************************!*\
  !*** ./client/src/Components/Q&A/Forms/questionform.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddQuestion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Q&A/form.styled.js */ "./client/src/Components/Styles/Q&A/form.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function AddQuestion(_ref) {
  var onFormValidation = _ref.onFormValidation;
  var initialValues = {
    body: '',
    name: '',
    email: ''
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    onFormValidation(values);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__.BodyStyled, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__.LabelStyled, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          children: "Your Question *"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          name: "body",
          placeholder: "Enter your Question",
          maxLength: "1000",
          size: "100",
          value: values.body,
          onChange: handleInputChange,
          required: true
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__.PersonalInfoStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "name",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__.LabelStyled, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: "What is your nickname *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "text",
            name: "name",
            placeholder: "Example: jackson11!",
            maxLength: "60",
            value: values.name,
            onChange: handleInputChange,
            required: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "For privacy reasons, do not use your full name or email address"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "email",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__.LabelStyled, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: "Your email *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "email",
            name: "email",
            placeholder: "Why did you like the product or not?",
            value: values.email,
            onChange: handleInputChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "For authentication reasons, you will not be emailed"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_form_styled_js__WEBPACK_IMPORTED_MODULE_2__.ButtonsStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "submit",
        value: "Submit Question"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "button",
        value: "close",
        onClick: function onClick() {
          return setAddStatus(false);
        }
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Q&A/answerList.jsx":
/*!**************************************************!*\
  !*** ./client/src/Components/Q&A/answerList.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnswerList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Assets_photo_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/photo.jsx */ "./client/src/Assets/photo.jsx");
/* harmony import */ var _Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/Q&A/buttons.styled */ "./client/src/Components/Styles/Q&A/buttons.styled.js");
/* harmony import */ var _Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/Q&A/container.styled */ "./client/src/Components/Styles/Q&A/container.styled.js");
/* harmony import */ var _Styles_Q_A_photo_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/Q&A/photo.styled */ "./client/src/Components/Styles/Q&A/photo.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable import/extensions */







function AnswerList(_ref) {
  var answer = _ref.answer,
      helpfulness = _ref.helpfulness,
      report = _ref.report,
      helpfulClicked = _ref.helpfulClicked;
  var options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  var date = new Date(answer.date.replace(/-/g, '/').replace(/T.+/, '')).toLocaleDateString('en-US', options);

  var clickHandler = function clickHandler() {
    helpfulness(answer.answer_id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.AnswerStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      style: {
        margin: 0
      },
      children: answer.body
    }), answer.photos.length === 0 ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_photo_styled__WEBPACK_IMPORTED_MODULE_3__.PhotosContainerStyled, {
      children: [' ', answer.photos.map(function (photo, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Assets_photo_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          photos: photo
        }, index);
      }), ' ']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_5__.ButtonContainerAnsStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [answer.answerer_name === 'Seller' || answer.answerer_name === 'seller' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.SpanStyled, {
          children: ["by", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
            children: "Seller"
          }), ",", ' ']
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.SpanStyled, {
          children: ["by", ' ', answer.answerer_name, ",", ' ']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.SpanStyled, {
          children: "".concat(date)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        style: {
          opacity: 0.5
        },
        children: "|"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        children: [helpfulClicked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.SpanStyled, {
          children: "Helpful?"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_5__.ButtonStyled, {
          type: "button",
          onClick: clickHandler,
          children: "Helpful?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.SpanStyled, {
          children: "  Yes (".concat(answer.helpfulness, ")")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        style: {
          opacity: 0.5
        },
        children: "|"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_5__.ButtonStyled, {
        type: "button",
        onClick: function onClick() {
          return report(answer.answer_id);
        },
        children: "Report"
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Q&A/questionList.jsx":
/*!****************************************************!*\
  !*** ./client/src/Components/Q&A/questionList.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _answerList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./answerList.jsx */ "./client/src/Components/Q&A/answerList.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal/Modal.jsx */ "./client/src/Components/Q&A/Modal/Modal.jsx");
/* harmony import */ var _Forms_addAnswer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forms/addAnswer.jsx */ "./client/src/Components/Q&A/Forms/addAnswer.jsx");
/* harmony import */ var _Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Styles/Q&A/buttons.styled */ "./client/src/Components/Styles/Q&A/buttons.styled.js");
/* harmony import */ var _Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/Q&A/container.styled */ "./client/src/Components/Styles/Q&A/container.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable react/prop-types */

/* eslint-disable import/extensions */











var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function QuestionList(_ref) {
  var question = _ref.question,
      helpfulness = _ref.helpfulness,
      reportQ = _ref.reportQ,
      seeMoreQuestion = _ref.seeMoreQuestion,
      helpfulClick = _ref.helpfulClick;

  // answers only first  two
  // get answers --> sort by helpfulness
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      allAnswers = _useState2[0],
      setAllAnswers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      answers = _useState4[0],
      setAnswers = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      status = _useState8[0],
      setStatus = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isModalOpen = _useState10[0],
      setIsModalOpen = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      reportA = _useState12[0],
      setReportA = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      answersLength = _useState14[0],
      setAnswerLength = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      helpfulClicked = _useState16[0],
      setHelpfulClick = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      helpfulDataA = _useState18[0],
      setHelpfulDataA = _useState18[1];

  console.log(question);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (count > 2) {
      console.log('questionList_1');
      setAnswers(allAnswers.slice(0, count));
    } else {
      console.log('questionList');
      axios({
        method: 'get',
        url: "/qa/questions/".concat(question.question_id, "/answers"),
        params: {
          page: 1,
          count: count
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates(function () {
          setAllAnswers(data.results);
          setAnswers(data.results.slice(0, count));
          setAnswerLength(data.results.length);
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, [count, helpfulDataA, reportA, isModalOpen]); // useEffect(() => {
  // }, [count]);
  // ----------setter functions being passed to child component-------------------------------------

  var fetchHelpfulData = function fetchHelpfulData(answer_id) {
    axios({
      method: 'put',
      url: "qa/answers/".concat(answer_id, "/helpful")
    }).then(function () {
      return setHelpfulDataA(!helpfulDataA);
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var report = function report(answer_id) {
    axios({
      method: 'put',
      url: "qa/answers/".concat(answer_id, "/report")
    }).then(function () {
      alert('Answer has been reported');
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var moreQuestions = function moreQuestions() {
    status ? setCount(2) : setCount(1000);
    status ? setStatus(false) : setStatus(true);
  };

  var onModalCloseRequest = function onModalCloseRequest() {
    setIsModalOpen(false);
  };

  var onFormValidation = function onFormValidation(data, questionId) {
    axios({
      method: 'post',
      url: "/qa/questions/".concat(questionId, "/answers"),
      data: data
    }).then(function () {
      alert('Thank you for your feedback');
    })["catch"](function () {
      return alert('error');
    });
    setIsModalOpen(false);
  };

  var clickHandler = function clickHandler() {
    helpfulness(question.question_id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    id: "".concat(question.question_id),
    style: {
      postion: 'relative'
    },
    children: [isModalOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "This is the modal's title",
      description: "A short description of the modal's contents",
      isOpen: isModalOpen,
      onCloseRequest: onModalCloseRequest,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Forms_addAnswer_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        helpfulClicked: helpfulClicked,
        onFormValidation: onFormValidation
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.QuestionListItemStyled, {
      style: {
        position: 'relative'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.QuestionStyled, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.QStyled, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: "Q: "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
            style: {
              margin: 0
            },
            children: question.question_body
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__.ButtonContainerStyled, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [helpfulClick ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.SpanStyled, {
              children: "Helpful?"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__.ButtonStyled, {
              type: "button",
              onClick: clickHandler,
              children: "Helpful?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.SpanStyled, {
              children: "Yes (".concat(question.question_helpfulness, ")")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.SpanStyled, {
            children: "|"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__.ButtonStyled, {
            type: "button",
            onClick: function onClick() {
              return reportQ(question.question_id);
            },
            children: "Report"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.SpanStyled, {
            children: "|"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__.ButtonStyled, {
            type: "button",
            onClick: function onClick() {
              return setIsModalOpen(true);
            },
            children: "Add Answer"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.AnswerContainerStyled, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.AStyled, {
          children: "A: "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.AnswerContainer_Styled, {
          children: status === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_5__.More_AnswerStyled, {
              children: answers.map(function (answer) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_answerList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  helpfulness: fetchHelpfulData,
                  report: report,
                  answer: answer
                }, answer.answer_id);
              })
            }), status ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnStyled, {
              type: "button",
              onClick: function onClick() {
                return moreQuestions();
              },
              children: "COLLAPSE"
            }) : null]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: answers.map(function (answer, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_answerList_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
                helpfulness: fetchHelpfulData,
                report: report,
                answer: answer
              }, index);
            })
          })
        }), !status && answersLength > 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_6__.SeeMoreBtnStyled, {
          type: "button",
          onClick: function onClick() {
            return moreQuestions();
          },
          children: "SEE MORE ANSWERS"
        }) : null]
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Q&A/questions.jsx":
/*!*************************************************!*\
  !*** ./client/src/Components/Q&A/questions.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionListContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _questionList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionList.jsx */ "./client/src/Components/Q&A/questionList.jsx");
/* harmony import */ var _searchBar_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchBar.jsx */ "./client/src/Components/Q&A/searchBar.jsx");
/* harmony import */ var _Forms_questionform_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Forms/questionform.jsx */ "./client/src/Components/Q&A/Forms/questionform.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal/Modal.jsx */ "./client/src/Components/Q&A/Modal/Modal.jsx");
/* harmony import */ var _Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Styles/Q&A/container.styled */ "./client/src/Components/Styles/Q&A/container.styled.js");
/* harmony import */ var _Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Styles/Q&A/buttons.styled */ "./client/src/Components/Styles/Q&A/buttons.styled.js");
/* harmony import */ var _AppContext_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppContext.jsx */ "./client/src/AppContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable import/extensions */













var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function QuestionListContainer(_ref) {
  var product_id = _ref.product_id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      questions = _useState2[0],
      setQuestions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      allQuestions = _useState4[0],
      setAllQuestions = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),
      _useState8 = _slicedToArray(_useState7, 2),
      count = _useState8[0],
      setCount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
      _useState10 = _slicedToArray(_useState9, 2),
      datalength = _useState10[0],
      setDataLength = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isModalOpen = _useState12[0],
      setIsModalOpen = _useState12[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext_jsx__WEBPACK_IMPORTED_MODULE_3__.AppContext),
      name = _useContext.name;

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      helpulBtn = _useState14[0],
      setHelpfulBtnClick = _useState14[1]; // const product_id = 40344; // --------product id need to standardize with all other components---


  function fetchData() {
    axios({
      method: 'get',
      url: "/qa/questions",
      params: {
        product_id: product_id,
        page: 1,
        count: 1000
      }
    }).then(function (_ref2) {
      var data = _ref2.data;
      console.log(data);
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates(function () {
        setQuestions(data.results.slice(0, count));
        setDataLength(data.results.length);
        setAllQuestions(data.results);
      });
    })["catch"](function (error) {
      return console.log(error);
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('questions');
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('questions_1');
    setQuestions(allQuestions.slice(0, count));
  }, [count]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('question_2');
    setQuestions(search);
  }, [search]);

  var fetchHelpfulData = function fetchHelpfulData(question_id) {
    setHelpfulBtnClick(true);
    axios({
      method: 'put',
      url: "/qa/answers/".concat(question_id, "/helpful")
    }).then(function () {
      fetchData();
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var reportQ = function reportQ(question_id) {
    axios({
      method: 'put',
      url: "/qa/questions/".concat(question_id, "/report")
    }).then(function () {
      fetchData();
      alert('Question has been reported successfully');
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  var question = null;

  if (questions !== undefined) {
    if (search.length === 0) {
      question = questions.map(function (question) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_questionList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          helpfulness: fetchHelpfulData,
          reportQ: reportQ,
          question: question,
          helpfulClick: helpulBtn,
          setHelpfulBtnClick: setHelpfulBtnClick
        }, question.question_id);
      });
    } else {
      question = search.map(function (question) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_questionList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          helpfulness: fetchHelpfulData,
          reportQ: reportQ,
          question: question,
          helpfulClick: helpulBtn,
          setHelpfulBtnClick: setHelpfulBtnClick
        }, question.question_id);
      });
    }
  }

  var onModalCloseRequest = function onModalCloseRequest() {
    setIsModalOpen(false);
  }; // need to validate form and then send to api


  var onFormValidation = function onFormValidation(data) {
    var questionData = _objectSpread(_objectSpread({}, data), {}, {
      product_id: product_id
    });

    axios.post("/questions/questions/", questionData).then(function () {
      return console.log('successful posting questions');
    })["catch"](function (error) {
      return console.log('failed to post question', error);
    });
    setIsModalOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [isModalOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Ask Your Question",
      description: "About ".concat(name),
      isOpen: isModalOpen,
      onCloseRequest: onModalCloseRequest,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Forms_questionform_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onFormValidation: onFormValidation
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_7__.Question_AnswerStyled, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_searchBar_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setSearch: setSearch,
        allQuestions: allQuestions
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_7__.Question_AnswerStyled, {
      children: question
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_7__.SeeMoreQuestionStyled, {
      children: [search.length === 0 && (datalength > count || questions.length > 4) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_9__.MoreQuestionBtnStyled, {
        type: "button",
        onClick: function onClick() {
          return setCount(function (prevCount) {
            return prevCount + 2;
          });
        },
        children: ["SEE", " (".concat(datalength - count, ")"), ' ', "MORE ANSWERED QUESTIONS"]
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Q_A_buttons_styled__WEBPACK_IMPORTED_MODULE_9__.MoreQuestionBtnStyled, {
        type: "button",
        onClick: function onClick() {
          return setIsModalOpen(true);
        },
        children: "ADD A QUESTION  +"
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Q&A/searchBar.jsx":
/*!*************************************************!*\
  !*** ./client/src/Components/Q&A/searchBar.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/Q&A/container.styled */ "./client/src/Components/Styles/Q&A/container.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Search(_ref) {
  var setSearch = _ref.setSearch,
      allQuestions = _ref.allQuestions;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var filter = function filter(searchWord) {
    if (searchWord.length > 2) {
      var searchArr = allQuestions.filter(function (q) {
        return q.question_body.toLowerCase().includes(searchWord.toLowerCase());
      });
      setSearch(searchArr);
    } else {
      setSearch([]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('filter');
    filter(value);
  }, [value]);

  var changeHandler = function changeHandler(e) {
    setValue(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_container_styled__WEBPACK_IMPORTED_MODULE_2__.SearchBarStyled, {
      type: "search",
      "max-length": "150",
      autoComplete: "off",
      value: value,
      placeholder: "HAVE A QUESTION? SEARCH FOR ANSWERS...",
      onChange: changeHandler
    })
  });
}

/***/ }),

/***/ "./client/src/Components/Styles/Q&A/buttons.styled.js":
/*!************************************************************!*\
  !*** ./client/src/Components/Styles/Q&A/buttons.styled.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonContainerAnsStyled": () => (/* binding */ ButtonContainerAnsStyled),
/* harmony export */   "ButtonContainerStyled": () => (/* binding */ ButtonContainerStyled),
/* harmony export */   "ButtonStyled": () => (/* binding */ ButtonStyled),
/* harmony export */   "MoreQuestionBtnStyled": () => (/* binding */ MoreQuestionBtnStyled),
/* harmony export */   "SeeMoreBtnStyled": () => (/* binding */ SeeMoreBtnStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n  font-family: 'Oswald', sans-serif;\n"])));
var ButtonContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 30%;\n  padding-right: 15px;\n  @media (max-width: 500px) {\n    width: 60%;\n  }\n"])));
var ButtonContainerAnsStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 18rem;\n  margin-top: -0.09em;\n  margin-bottom: 0.3em;\n"])));
var SeeMoreBtnStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity:0.4;\n  // font-family: 'Oswald', sans-serif;\n  // font-weight: 200;\n  // height: 30px;\n  // background-color: white;\n  // margin-left: 5px;\n  // font-size: 18px;\n  // cursor: pointer;\n  // &:hover {\n  //   background-color: #99AEAD;\n  // }\n"])));
var MoreQuestionBtnStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  // margin-left: 1rem;\n  // border: none;\n  // background: none;\n  // text-decoration: underline;\n  // cursor: pointer;\n  // font-size: 13px;\n  // font-weight: lighter;\n  // opacity:0.4;\n  margin-right: 5px;\n  font-family: 'Oswald', sans-serif;\n  font-weight: 200;\n  // font-size: 18px;\n  min-height: 3rem;\n  background-color: white;\n  cursor: pointer;\n  &:hover {\n    background-color: #99AEAD;\n  }\n"])));

/***/ }),

/***/ "./client/src/Components/Styles/Q&A/container.styled.js":
/*!**************************************************************!*\
  !*** ./client/src/Components/Styles/Q&A/container.styled.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AStyled": () => (/* binding */ AStyled),
/* harmony export */   "AnswerContainerStyled": () => (/* binding */ AnswerContainerStyled),
/* harmony export */   "AnswerContainer_Styled": () => (/* binding */ AnswerContainer_Styled),
/* harmony export */   "AnswerStyled": () => (/* binding */ AnswerStyled),
/* harmony export */   "More_AnswerStyled": () => (/* binding */ More_AnswerStyled),
/* harmony export */   "QStyled": () => (/* binding */ QStyled),
/* harmony export */   "QuestionListItemStyled": () => (/* binding */ QuestionListItemStyled),
/* harmony export */   "QuestionStyled": () => (/* binding */ QuestionStyled),
/* harmony export */   "Question_AnswerStyled": () => (/* binding */ Question_AnswerStyled),
/* harmony export */   "SearchBarStyled": () => (/* binding */ SearchBarStyled),
/* harmony export */   "SeeMoreQuestionStyled": () => (/* binding */ SeeMoreQuestionStyled),
/* harmony export */   "SpanStyled": () => (/* binding */ SpanStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable no-undef */

/* eslint-disable camelcase */

var Question_AnswerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: 600px;\n  width: 85vw;\n  margin: 0 auto;\n  overflow-y: auto;\n  padding: 15px;\n  font-size: 14px;\n  background: glacier-white;\n  margin-bottom: -0.8rem;\n"])));
var QuestionStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  @media (max-width: 500px) {\n    display: flex;\n    flex-direction: column;\n"])));
var QuestionListItemStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 5px;\n  margin-bottom: 10px;\n  list-style: none;\n  border-bottom: 1px dashed;\n\n\n}\n"])));
var SpanStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding-left: 2px;\n  font-size: 13px;\n  font-weight: lighter;\n  opacity: 0.4;\n  "])));
var More_AnswerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 250px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-right: 5px;\n  width: 98%;\n\n"])));
var AnswerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  margin-left: 5px;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 0.3rem;\n\n"])));
var AnswerContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  min-height: 40px;\n  padding: 5px;\n  width: 100%;\n\n"])));
var AnswerContainer_Styled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 5px;\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 0.3rem;\n"])));
var AStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-left: 6px;\n  font-size:  15px;\n  font-weight: bold;\n"])));
var QStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  color: #007185;\n  font-size: 17px;\n  font-weight: bold;\n  margin-left: 10px;\n  width: 60%;\n  span {\n    margin-right: 10px;\n  }\n  p {\n    margin: 0;\n  }\n"])));
var SearchBarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 4em;\n  padding: 1em;\n  margin: 0 auto;\n"])));
var SeeMoreQuestionStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  max-height: 50px;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0 auto;\n  width: 65%;\n  font-size: 15px;\n  padding: 1.5rem;\n  background: glacier-white;\n  margin-top: 0.5rem;\n  margin-bottom: 1.5rem;\n  border-bottom 1px solid black;\n"])));

/***/ }),

/***/ "./client/src/Components/Styles/Q&A/form.styled.js":
/*!*********************************************************!*\
  !*** ./client/src/Components/Styles/Q&A/form.styled.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyStyled": () => (/* binding */ BodyStyled),
/* harmony export */   "ButtonsStyled": () => (/* binding */ ButtonsStyled),
/* harmony export */   "LabelStyled": () => (/* binding */ LabelStyled),
/* harmony export */   "PersonalInfoStyled": () => (/* binding */ PersonalInfoStyled)
/* harmony export */ });
/* unused harmony exports FormStyled, HeadingStyled */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FormStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 10%;\n  left: 20%;\n  height: 70%;\n  width: 100%;\n  border-radius: 10px;\n  z-index: 10;\n  background: dodgerblue;\n  padding: 20px;\n\n  form {\n    margin-top: 30px;\n    width: 100%;\n    height: 60%;\n    position: absolute;\n    top: 15%;\n    left: 12%;\n    z-index: 11;\n\n    display: flex;\n    flex-direction: column;\n  }\n\n  input {\n    width: 30%;\n    height: 30px;\n    margin-bottom: 1em;\n    margin-top: 0.5em;\n    padding: 10px;\n  }\n  input[name=\"answer\"] {\n    height: 80px;\n  }\n  input[type=\"submit\"] {\n    width: 20%;\n    height: 40px;\n    margin-right: 30px;\n    margin-left: 40px;\n  }\n  input[type=\"button\"] {\n    width: 20%;\n    height: 40px;\n    margin-right: 30px;\n\n  }\n\n"])));
var BodyStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\ninput {\n  width: 72%;\n  height: 4em;\n}\n"])));
var HeadingStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 50px;\n"])));
var PersonalInfoStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  input {\n    width: 80%;\n    margin-bottom: -16px;\n  }\n\n  p {\n    width: 70%;\n    margin-bottom: 30px;\n  }\n"])));
var LabelStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"])));
var ButtonsStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  left: 10%;\n"])));

/***/ }),

/***/ "./client/src/Components/Styles/Q&A/photo.styled.js":
/*!**********************************************************!*\
  !*** ./client/src/Components/Styles/Q&A/photo.styled.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoEnlargeStyled": () => (/* binding */ PhotoEnlargeStyled),
/* harmony export */   "PhotosContainerStyled": () => (/* binding */ PhotosContainerStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PhotosContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  div {\n    padding-right: 20px;\n    width: 100px;\n  }\n  background: white;\n"])));
var PhotoEnlargeStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 50%;\n  height: 60%;\n  z-index: 3;\n  top: 20%;\n  left: 25%;\n  cursor: pointer;\n  backdrop-filter: blur(8px);\n"])));

/***/ })

}]);
//# sourceMappingURL=client_src_Components_Q_A_questions_jsx.bundle.js.map