"use strict";
(self["webpackChunkatelier"] = self["webpackChunkatelier"] || []).push([["client_src_Components_Ratings_Reviews_reviewMain_jsx"],{

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

/***/ "./client/src/Components/Ratings&Reviews/reviewMain.jsx":
/*!**************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/reviewMain.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subcomponents_reviewslist_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subcomponents/reviewslist.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/reviewslist.jsx");
/* harmony import */ var _subcomponents_ratingbreakdown_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcomponents/ratingbreakdown.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/ratingbreakdown.jsx");
/* harmony import */ var _Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/Reviews/bars.styled */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var _AppContext_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AppContext.jsx */ "./client/src/AppContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ReviewMain(_ref) {
  var product_id = _ref.product_id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      reviews = _useState2[0],
      setReviews = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('relevant'),
      _useState4 = _slicedToArray(_useState3, 2),
      sortOption = _useState4[0],
      setSortOption = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      overallRating = _useState8[0],
      setOverallRating = _useState8[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_AppContext_jsx__WEBPACK_IMPORTED_MODULE_4__.AppContext),
      setRating = _useContext.setRating,
      setCountRatings = _useContext.setCountRatings;

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      ratings = _useState10[0],
      setRatings = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      recommended = _useState12[0],
      setRecommended = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      characteristics = _useState14[0],
      setCharacteristics = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      numReviews = _useState16[0],
      setNumReviews = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState18 = _slicedToArray(_useState17, 2),
      currentFilters = _useState18[0],
      setCurrentFilters = _useState18[1];

  var loadMoreReviews = function loadMoreReviews() {
    setCount(function (prevCount) {
      return prevCount + 2;
    });
  };

  var getAverageRating = function getAverageRating(ratingsObj) {
    var total = 0;
    var numRatings = 0;

    for (var i = 1; i < 6; i++) {
      total += Number(ratingsObj[i]) * i;
      numRatings += Number(ratingsObj[i]);
    }

    var rounded = Math.round(total / numRatings / 0.25) * 0.25;
    return [rounded, numRatings];
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRating(overallRating);
    setCountRatings(numReviews);
  }, [overallRating, numReviews]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get('/reviews/reviews/meta', {
      params: {
        product_id: product_id
      }
    }).then(function (_ref2) {
      var data = _ref2.data;
      var roundedRating = getAverageRating(data.ratings)[0];
      var reviewCount = getAverageRating(data.ratings)[1];
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates(function () {
        setOverallRating(roundedRating.toFixed(2));
        setRecommended(data.recommended);
        setNumReviews(reviewCount);
        setRatings(data.ratings);
        setCharacteristics(Object.keys(data.characteristics).map(function (key) {
          var descriptionOne = '';
          var descriptionTwo = '';

          switch (key) {
            case 'Fit':
              descriptionOne = 'Too small';
              descriptionTwo = 'Too large';
              break;

            case 'Length':
              descriptionOne = 'Runs short';
              descriptionTwo = 'Runs large';
              break;

            case 'Comfort':
              descriptionOne = 'Uncomfortable';
              descriptionTwo = 'Perfect';
              break;

            case 'Quality':
              descriptionOne = 'Poor';
              descriptionTwo = 'Perfect';
              break;

            case 'Size':
              descriptionOne = 'A size too small';
              descriptionTwo = 'A size too wide';
              break;

            case 'Width':
              descriptionOne = 'Too narrow';
              descriptionTwo = 'Too wide';
              break;

            default:
              break;
          }

          return {
            name: key,
            id: data.characteristics[key].id,
            percent: (data.characteristics[key].value / 5 * 100).toFixed(),
            descriptionOne: descriptionOne,
            descriptionTwo: descriptionTwo
          };
        }));
      });
      return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/reviews/reviews', {
        params: {
          product_id: product_id,
          sort: sortOption,
          count: reviewCount
        }
      });
    }).then(function (_ref3) {
      var data = _ref3.data;
      setReviews(data.results); // setDidMount(true);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [sortOption, setReviews]);

  var selectHandler = function selectHandler(event) {
    setSortOption(event.target.value);
    setCount(2);
  };

  var filterReviews = function filterReviews() {
    return reviews.filter(function (item) {
      if (currentFilters.hasOwnProperty(item.rating)) {
        return true;
      }

      return false;
    });
  };

  var addFilter = function addFilter(rating) {
    if (!(rating in currentFilters)) {
      setCurrentFilters(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, rating, rating));
      });
      setCount(2);
    }
  };

  var deleteFilter = function deleteFilter(rating) {
    if (rating in currentFilters) {
      var filters = _objectSpread({}, currentFilters);

      delete filters[rating];
      setCurrentFilters(filters);
      setCount(2);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_5__.ReviewContainerStyled, {
    id: "review",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_5__.MainGridStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subcomponents_ratingbreakdown_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ratings: ratings,
        overallRating: overallRating,
        recommended: recommended,
        characteristics: characteristics,
        reviewCount: numReviews,
        addFilter: addFilter,
        deleteFilter: deleteFilter,
        style: {
          marginLeft: '-30px'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_subcomponents_reviewslist_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        reviews: Object.keys(currentFilters).length === 0 ? reviews.slice(0, count) : filterReviews().slice(0, count),
        loadMoreReviews: loadMoreReviews,
        style: {
          marginRight: '100px'
        },
        characteristics: characteristics,
        product_id: product_id,
        selectHandler: selectHandler,
        reviewCount: reviews.length
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ReviewMain));

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/Forms/addReview.jsx":
/*!*********************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/Forms/addReview.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddReview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Assets_cloudinaryUploadWidget_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Assets/cloudinaryUploadWidget.jsx */ "./client/src/Assets/cloudinaryUploadWidget.jsx");
/* harmony import */ var _formstarbutton_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formstarbutton.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/Forms/formstarbutton.jsx");
/* harmony import */ var _characteristicForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characteristicForm.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/Forms/characteristicForm.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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

 // import { Form } from '../../../Styles/Q&A/form.styled.js'







var initialValues = {
  product_id: 0,
  rating: 1,
  summary: '',
  recommend: false,
  body: '',
  name: '',
  email: '',
  photos: [],
  characteristics: {}
};
function AddReview(_ref) {
  var characteristics = _ref.characteristics,
      product_id = _ref.product_id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      images = _useState4[0],
      setImages = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      characteristicsObj = _useState6[0],
      setCharacteristicsObj = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      characteristics: characteristicsObj
    }));
  }, [characteristicsObj]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      product_id: product_id
    }));
  }, []);

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value))); // console.log(name, e.target.value);
  };

  var handleRecommended = function handleRecommended(e) {
    var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, Boolean(value)))); // console.log(name, e.target.value);
  };

  var handleRatingChange = function handleRatingChange(name) {
    return function (rating) {
      // console.log(e.target[name], e.target.value);
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, Number(rating))));
    };
  };

  var handleCharChange = function handleCharChange(e) {
    var _e$target3 = e.target,
        name = _e$target3.name,
        value = _e$target3.value; // console.log('name: ', name, 'value: ', value);
    // console.log(values);

    if (name) {
      setCharacteristicsObj(_objectSpread(_objectSpread({}, characteristicsObj), {}, _defineProperty({}, name, Number(value))));
    }
  };

  var imageUpload = function imageUpload(image) {
    setImages(function (previmages) {
      return [].concat(_toConsumableArray(previmages), [image]);
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    var data = values;
    data.photos = images;
    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/reviews/addreview', data).then(function (response) {
      return console.log(response);
    })["catch"](function (err) {
      return console.log(err);
    });
  }

  var characteristicReview = characteristics.map(function (value) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "text",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_characteristicForm_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        characteristic: value,
        handleClick: handleCharChange
      })
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "button",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_formstarbutton_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onChange: handleRatingChange('rating')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "recommended",
      onChange: handleRecommended,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Do you recommend this product?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "radio",
        id: "rec",
        name: "recommend",
        value: true,
        required: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "rec",
        children: "Yes"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "radio",
        id: "noRec",
        name: "recommend",
        value: false,
        required: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "noRec",
        children: "No"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
    }), characteristicReview, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "name",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        name: "name",
        placeholder: "Enter a name",
        value: values.name,
        onChange: handleInputChange,
        required: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "email",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "email",
        name: "email",
        placeholder: "Enter an email",
        maxLength: "60",
        value: values.email,
        onChange: handleInputChange,
        required: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "text",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        name: "summary",
        placeholder: "Enter a summary...",
        maxLength: "60",
        size: "50",
        value: values.summary,
        onChange: handleInputChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "text",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        name: "body",
        placeholder: "Enter an review...",
        maxLength: "1000",
        size: "100",
        value: values.body,
        onChange: handleInputChange,
        required: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Assets_cloudinaryUploadWidget_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      imageUpload: imageUpload
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "submit",
        value: "Submit Review"
      })
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/Forms/characteristicForm.jsx":
/*!******************************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/Forms/characteristicForm.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CharacteristicForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function CharacteristicForm(_ref) {
  var characteristic = _ref.characteristic,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: characteristic.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.CharacteristicRatingStyled, {
      children: _toConsumableArray(Array(5)).map(function (value, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.RadioButtonContainerStyled, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
            htmlFor: "".concat(characteristic.name, "_").concat(index),
            children: index + 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.RadioButtonStyled, {
            type: "radio",
            id: "".concat(characteristic.name, "_").concat(index),
            name: characteristic.id,
            value: index + 1,
            onClick: handleClick,
            required: true
          }), index + 1 === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
            htmlFor: "".concat(characteristic.name, "_").concat(index),
            children: characteristic.descriptionOne
          }) : null, index + 1 === 5 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
            htmlFor: "".concat(characteristic.name, "_").concat(index),
            children: characteristic.descriptionTwo
          }) : null]
        });
      })
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/Forms/formstarbutton.jsx":
/*!**************************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/Forms/formstarbutton.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormStarButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _staricon_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staricon.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/staricon.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function FormStarButton(_ref) {
  var onChange = _ref.onChange;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onChange(rating);
  }, [rating]);

  var handleClick = function handleClick(event) {
    setRating(event.target.getAttribute('data-star-id'));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    style: {
      cursor: 'pointer'
    },
    onClick: handleClick,
    children: _toConsumableArray(Array(5)).map(function (icon, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_staricon_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        percent: rating >= index + 1 ? '100' : '0',
        index: "StarButton_".concat(index),
        starId: index + 1
      }, "StarButton_".concat(index));
    })
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/Modal/Modal.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/Modal/Modal.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ModalHeader_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalHeader.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/Modal/ModalHeader.jsx");
/* harmony import */ var _Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/Q&A/modal.styled */ "./client/src/Components/Styles/Q&A/modal.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onCloseRequest = _ref.onCloseRequest,
      title = _ref.title,
      description = _ref.description,
      children = _ref.children;

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.ModalWrapperStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.ModalBackgroundStyled, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.ModalInnerStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalHeader_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        description: description,
        onClose: onCloseRequest
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.ModalContentStyled, {
        children: children
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/Modal/ModalHeader.jsx":
/*!***********************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/Modal/ModalHeader.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/Q&A/modal.styled */ "./client/src/Components/Styles/Q&A/modal.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function ModalHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.CloseButtonStyled, {
      onClick: function onClick() {
        return onClose();
      },
      children: "X"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Q_A_modal_styled__WEBPACK_IMPORTED_MODULE_2__.ModalHeaderContentStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: description
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/characteristicbar.jsx":
/*!***********************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/characteristicbar.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CharacteristicBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var _assets_down_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/down.png */ "./client/src/Components/Ratings&Reviews/assets/down.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function CharacteristicBar(_ref) {
  var characteristic = _ref.characteristic;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacteristicContainerStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterName, {
      children: characteristic.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterBarContainerStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterBarStyled, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterBarStyled, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterBarStyled, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.IconStyled, {
        style: {
          left: "".concat(characteristic.percent, "%")
        },
        src: _assets_down_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterDescriptionStyled, {
      style: {
        gridColumn: '1/3',
        justifySelf: 'start'
      },
      children: characteristic.descriptionOne
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.CharacterDescriptionStyled, {
      style: {
        gridColumn: '3/4',
        justifySelf: 'end'
      },
      children: characteristic.descriptionTwo
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/characteristiclist.jsx":
/*!************************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/characteristiclist.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CharacteristicList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _characteristicbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characteristicbar.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/characteristicbar.jsx");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function CharacteristicList(_ref) {
  var characteristics = _ref.characteristics;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.CharacterListStyled, {
    children: characteristics.map(function (value) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_characteristicbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        characteristic: value
      }, value.id);
    })
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/ratingbreakdown.jsx":
/*!*********************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/ratingbreakdown.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatingBreakdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _stars_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stars.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/stars.jsx");
/* harmony import */ var _starbarlist_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./starbarlist.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/starbarlist.jsx");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var _characteristiclist_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characteristiclist.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/characteristiclist.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable import/extensions */







function RatingBreakdown(_ref) {
  var ratings = _ref.ratings,
      recommended = _ref.recommended,
      characteristics = _ref.characteristics,
      reviewCount = _ref.reviewCount,
      overallRating = _ref.overallRating,
      addFilter = _ref.addFilter,
      deleteFilter = _ref.deleteFilter;
  var percentages = Object.keys(ratings).map(function (key) {
    return [Number(key), (Number(ratings[key]) / reviewCount).toFixed(2) * 100];
  }).reverse();
  var rating = Math.round(overallRating * 10) / 10;
  var recommendPercent = (recommended["true"] / reviewCount * 100).toFixed();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.RatingBreakdownStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
      style: {
        marginBottom: '-30px',
        marginLeft: '50px'
      },
      children: "Ratings & Reviews"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.OverallRatingStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        style: {
          fontSize: '50px',
          marginRight: '15px'
        },
        children: rating
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        style: {
          marginTop: '68px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_stars_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          rating: overallRating,
          review_id: 40344
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      style: {
        marginLeft: '50px'
      },
      children: "".concat(recommendPercent, "% of reviews recommend this product")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_starbarlist_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      percentages: percentages,
      addFilter: addFilter,
      deleteFilter: deleteFilter,
      ratings: ratings
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_characteristiclist_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      characteristics: characteristics
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/review.jsx":
/*!************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/review.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Review)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stars_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stars.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/stars.jsx");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var _assets_check_mark_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/check-mark.png */ "./client/src/Components/Ratings&Reviews/assets/check-mark.png");
/* harmony import */ var _Styles_Q_A_photo_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Styles/Q&A/photo.styled */ "./client/src/Components/Styles/Q&A/photo.styled.js");
/* harmony import */ var _Assets_photo_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Assets/photo.jsx */ "./client/src/Assets/photo.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
function Review(_ref) {
  var review = _ref.review;
  var reviewDate = new Date(review.date).toLocaleDateString('en-US', options);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(review.helpfulness),
      _useState2 = _slicedToArray(_useState, 2),
      helpCount = _useState2[0],
      setHelpCount = _useState2[1]; // const [notClicked, setClick] = useState(true); //One click per user


  var helpHandler = function helpHandler() {
    setHelpCount(helpCount + 1);
    axios__WEBPACK_IMPORTED_MODULE_1___default().put("/reviews/mark/helpful?review_id=".concat(review.review_id)).then(function (response) {// console.log(response);
      // setHelpCount(helpCount + 1);
      // setDidClick(false);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var reportHandler = function reportHandler() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().put("/reviews/mark/report?review_id=".concat(review.review_id)).then(function (response) {// console.log(response);
      // setDidClick(false);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.ReviewStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.StarStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stars_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rating: review.rating,
        review_id: review.review_id,
        styled: {
          marginTop: '100px'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.NameDateStyled, {
        children: "".concat(review.reviewer_name, ",  ").concat(reviewDate)
      })]
    }), review.summary.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.SummaryStyled, {
      children: review.summary.slice(0, 250)
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.BodyStyled, {
      children: review.body.slice(0, 250)
    }), review.response && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: review.response
    }), review.photos.length === 0 ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Q_A_photo_styled__WEBPACK_IMPORTED_MODULE_5__.PhotosContainerStyled, {
      children: [' ', review.photos.map(function (photo, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Assets_photo_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          photos: photo
        }, index);
      }), ' ']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.SmallStyled, {
      children: [review.recommend && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("small", {
        style: {
          marginBottom: '15px',
          marginTop: '-10px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.CheckStyled, {
          src: _assets_check_mark_png__WEBPACK_IMPORTED_MODULE_7__["default"]
        }), "I recommend this product"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.SpanStyled, {
          children: "Helpful?"
        }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.ReviewButtonStyled, {
          type: "button",
          onClick: helpHandler,
          children: "Yes"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.SpanStyled, {
          children: "(".concat(helpCount, ") | ")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.ReviewButtonStyled, {
          type: "button",
          onClick: reportHandler,
          children: "Report"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/reviewslist.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/reviewslist.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _review_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/review.jsx");
/* harmony import */ var _Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal/Modal.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/Modal/Modal.jsx");
/* harmony import */ var _Forms_addReview_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Forms/addReview.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/Forms/addReview.jsx");
/* harmony import */ var _sortview_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortview.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/sortview.jsx");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ReviewsList(_ref) {
  var reviews = _ref.reviews,
      loadMoreReviews = _ref.loadMoreReviews,
      characteristics = _ref.characteristics,
      product_id = _ref.product_id,
      selectHandler = _ref.selectHandler,
      reviewCount = _ref.reviewCount;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var onModalCloseRequest = function onModalCloseRequest() {
    setIsModalOpen(false);
  }; // const formValidator = () => {
  // };


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      marginBottom: '10px',
      marginTop: '20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sortview_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selectHandler: selectHandler,
      reviewCount: reviewCount
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.ReviewListStyled, {
      children: [isModalOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Modal_Modal_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Add a Review",
        description: "A short description of the modal's contents",
        isOpen: isModalOpen,
        onCloseRequest: onModalCloseRequest,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Forms_addReview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          characteristics: characteristics,
          product_id: product_id
        })
      }) : null, reviews.map(function (review) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_review_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          review: review
        }, review.review_id);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.ReviewListButtonStyled, {
        type: "button",
        onClick: loadMoreReviews,
        children: "More Reviews"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_3__.ReviewListButtonStyled, {
        type: "button",
        onClick: function onClick() {
          return setIsModalOpen(true);
        },
        children: "Add a Review"
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/sortview.jsx":
/*!**************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/sortview.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function SortBar(_ref) {
  var selectHandler = _ref.selectHandler,
      reviewCount = _ref.reviewCount;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.SortBarStyled, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
      htmlFor: "sort-select",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h3", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("b", {
          children: [reviewCount, ' ', "reviews"]
        }), ", sorted by", ' ']
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.SelectStyled, {
      name: "sort-select",
      id: "sort-select",
      onChange: selectHandler,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "relevance",
        children: "relevance"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "helpful",
        children: "helpful"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "newest",
        children: "newest"
      })]
    })]
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/starbar.jsx":
/*!*************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/starbar.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function StarBar(_ref) {
  var percentage = _ref.percentage,
      star = _ref.star,
      numStars = _ref.numStars,
      addFilter = _ref.addFilter,
      deleteFilter = _ref.deleteFilter;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      filterActive = _useState2[0],
      setFilterActive = _useState2[1];

  var toggleFilter = function toggleFilter() {
    setFilterActive(!filterActive);
    if (!filterActive) addFilter(star);else {
      deleteFilter(star);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.BarContainerStyled, {
      onClick: toggleFilter,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.StarSpanStyled, {
        children: [star, " star"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled__WEBPACK_IMPORTED_MODULE_2__.BarStyled, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          style: {
            width: "".concat(percentage, "%"),
            borderRadius: '10px;'
          },
          className: filterActive ? 'percentagefill-opened' : 'percentagefill'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        children: "".concat(numStars, " votes")
      })]
    })
  });
}

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/subcomponents/starbarlist.jsx":
/*!*****************************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/subcomponents/starbarlist.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarBarList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _starbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starbar.jsx */ "./client/src/Components/Ratings&Reviews/subcomponents/starbar.jsx");
/* harmony import */ var _Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styles/Reviews/bars.styled.js */ "./client/src/Components/Styles/Reviews/bars.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function StarBarList(_ref) {
  var percentages = _ref.percentages,
      addFilter = _ref.addFilter,
      deleteFilter = _ref.deleteFilter,
      ratings = _ref.ratings;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Styles_Reviews_bars_styled_js__WEBPACK_IMPORTED_MODULE_2__.StarListStyled, {
    children: percentages.map(function (value, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_starbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        percentage: value[1],
        star: value[0],
        numStars: ratings[value[0]],
        addFilter: addFilter,
        deleteFilter: deleteFilter
      }, index);
    })
  });
}

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

/***/ }),

/***/ "./client/src/Components/Styles/Reviews/bars.styled.js":
/*!*************************************************************!*\
  !*** ./client/src/Components/Styles/Reviews/bars.styled.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarContainerStyled": () => (/* binding */ BarContainerStyled),
/* harmony export */   "BarStyled": () => (/* binding */ BarStyled),
/* harmony export */   "BodyStyled": () => (/* binding */ BodyStyled),
/* harmony export */   "CharacterBarContainerStyled": () => (/* binding */ CharacterBarContainerStyled),
/* harmony export */   "CharacterBarStyled": () => (/* binding */ CharacterBarStyled),
/* harmony export */   "CharacterDescriptionStyled": () => (/* binding */ CharacterDescriptionStyled),
/* harmony export */   "CharacterListStyled": () => (/* binding */ CharacterListStyled),
/* harmony export */   "CharacterName": () => (/* binding */ CharacterName),
/* harmony export */   "CharacteristicContainerStyled": () => (/* binding */ CharacteristicContainerStyled),
/* harmony export */   "CharacteristicRatingStyled": () => (/* binding */ CharacteristicRatingStyled),
/* harmony export */   "CheckStyled": () => (/* binding */ CheckStyled),
/* harmony export */   "IconStyled": () => (/* binding */ IconStyled),
/* harmony export */   "MainGridStyled": () => (/* binding */ MainGridStyled),
/* harmony export */   "NameDateStyled": () => (/* binding */ NameDateStyled),
/* harmony export */   "OverallRatingStyled": () => (/* binding */ OverallRatingStyled),
/* harmony export */   "RadioButtonContainerStyled": () => (/* binding */ RadioButtonContainerStyled),
/* harmony export */   "RadioButtonStyled": () => (/* binding */ RadioButtonStyled),
/* harmony export */   "RatingBreakdownStyled": () => (/* binding */ RatingBreakdownStyled),
/* harmony export */   "ReviewButtonStyled": () => (/* binding */ ReviewButtonStyled),
/* harmony export */   "ReviewContainerStyled": () => (/* binding */ ReviewContainerStyled),
/* harmony export */   "ReviewListButtonStyled": () => (/* binding */ ReviewListButtonStyled),
/* harmony export */   "ReviewListStyled": () => (/* binding */ ReviewListStyled),
/* harmony export */   "ReviewStyled": () => (/* binding */ ReviewStyled),
/* harmony export */   "SelectStyled": () => (/* binding */ SelectStyled),
/* harmony export */   "SmallStyled": () => (/* binding */ SmallStyled),
/* harmony export */   "SortBarStyled": () => (/* binding */ SortBarStyled),
/* harmony export */   "SpanStyled": () => (/* binding */ SpanStyled),
/* harmony export */   "StarListStyled": () => (/* binding */ StarListStyled),
/* harmony export */   "StarSpanStyled": () => (/* binding */ StarSpanStyled),
/* harmony export */   "StarStyled": () => (/* binding */ StarStyled),
/* harmony export */   "SummaryStyled": () => (/* binding */ SummaryStyled)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ReviewContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  min-width: 600px;\n  margin-right: 100px;\n"])));
var ReviewListButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0;\n  border: 4px black;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 15px;\n  margin-left: 15px;\n  margin-right: 15px;\n"])));
var BarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 12px;\n  width: 180px;\n  border-radius: 10px;\n  background-color: rgb(210, 210, 210);\n  margin: 10px;\n  position: relative;\n  bottom: 4px;\n  .percentagefill {\n    height: 100%;\n    border-radius: 10px;\n    background-color: #5AC856;\n    text-align: right;\n    padding: 0;\n  }\n  .percentagefill-opened {\n    height: 100%;\n    border-radius: 10px;\n    background-color: #FE8214;\n    text-align: right;\n    padding: 0;\n  }\n"])));
var BarContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 340px;\n  cursor: pointer;\n  &:hover .percentagefill {\n    background-color: #E0EF5D;\n  }\n"])));
var StarSpanStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n"])));
var CharacterBarContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 2px;\n  width: 214px;\n  grid-row: 2;\n  grid-column: 1/4;\n  position: relative;\n"])));
var CharacterBarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  height: 9px;\n  width: 70px;\n  background-color: rgb(210, 210, 210);\n"])));
var IconStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 14px;\n  top: -6px;\n  z-index: 1;\n  margin-left: -7px;\n  padding: 0;\n"])));
var CharacteristicContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: grid;\n  position: relative;\n  width: 214px;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 25px 10px 15px;\n  padding-bottom: 20px;\n  word-break: break-all;\n"])));
var CharacterDescriptionStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  grid-row: 3;\n  font-size: 12px;\n"])));
var CharacterName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  grid-row: 1;\n  grid-column: 1/2;\n  font-size: 15px;\n"])));
var MainGridStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 40% 60%;\n  grid-gap: 50px;\n  margin-bottom: 130px;\n  margin-left: 50px;\n  margin-right: 30px;\n"])));
var RatingBreakdownStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n"])));
var CharacterListStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-right: 45px;\n"])));
var StarListStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var ReviewButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  padding: 0;\n  border: none;\n  background: none;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: light;\n  opacity:0.6;\n"])));
var SpanStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  padding-left: 2px;\n  font-size: 13px;\n  font-weight: light;\n  opacity: 0.6;\n"])));
var CharacteristicRatingStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-evenly;\n  margin-bottom: 0px;\n  width: 400px;\n"])));
var RadioButtonContainerStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var RadioButtonStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  align-self: center;\n"])));
var ReviewListStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  // border-style: groove;\n  width: 600px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  max-height: 500px;\n"])));
var ReviewStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 10px;\n  border-bottom: 1px dashed;\n  margin-top: 0px;\n"])));
var SummaryStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h3(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  color: #007185;\n  font-weight: bold;\n  margin-left: 0px;\n  width: 60%;\n"])));
var BodyStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n"])));
var NameDateStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].small(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  margin-bottom: 10px;\n"])));
var StarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
var CheckStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 20px;\n"])));
var SmallStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].small(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n"])));
var OverallRatingStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin-left: 50px;\n  margin-bottom: -40px;\n"])));
var SortBarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n"])));
var SelectStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  padding-left: 5px;\n  border-color: transparent;\n  display: flex;\n  min-height: 38px;\n  flex-wrap: wrap;\n  text-decoration: underline 2px;\n  font-size: 20px;\n\n  &:focus {\n    outline: none;\n  }\n"])));

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/assets/check-mark.png":
/*!*********************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/assets/check-mark.png ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "client/src/Components/Ratings&Reviews/assets/check-mark.0ad340259a8c140a65cdc05ef692831a.png");

/***/ }),

/***/ "./client/src/Components/Ratings&Reviews/assets/down.png":
/*!***************************************************************!*\
  !*** ./client/src/Components/Ratings&Reviews/assets/down.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "client/src/Components/Ratings&Reviews/assets/down.233460ca03dd45491ec5ec1031e22d18.png");

/***/ })

}]);
//# sourceMappingURL=client_src_Components_Ratings_Reviews_reviewMain_jsx.bundle.js.map