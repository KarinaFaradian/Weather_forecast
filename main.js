/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: #8bc1dc;\\n  font-family: Rubik, sans-serif;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nimg {\\n  display: block;\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n#app {\\n  position: fixed;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 1150px;\\n  background: rgb(255 255 255);\\n  border-radius: 4px;\\n  overflow: hidden;\\n  min-height: 500px;\\n}\\n\\n#root {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.popup {\\n  position: fixed;\\n  left: 0%;\\n  bottom: 0;\\n  width: 1150px;\\n  height: 500px;\\n  transform: translateX(-200%);\\n  background: #748bff;\\n  border-radius: 4px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: transform 0.3s ease-in-out;\\n  z-index: 9;\\n}\\n\\n.popup.active {\\n  transform: translateX(0);\\n}\\n\\n.popup-close {\\n  position: absolute;\\n  top: 20px;\\n  right: 15px;\\n  cursor: pointer;\\n  width: 22px;\\n  height: 22px;\\n}\\n\\n.popup-close span {\\n  display: block;\\n  margin-top: 10px;\\n  width: 22px;\\n  height: 2px;\\n  background: #fff;\\n  transform: rotate(45deg);\\n  position: relative;\\n}\\n\\n.popup-close span::after {\\n  content: '';\\n  display: block;\\n  width: 22px;\\n  height: 2px;\\n  background: #fff;\\n  transform: rotate(-90deg);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.form {\\n  width: 100%;\\n}\\n\\n.form-group {\\n  display: flex;\\n  padding: 0 15px;\\n  justify-content: left;\\n}\\n\\n.form-input {\\n  border: none;\\n  border-bottom: 2px solid #eee;\\n  color: #fff;\\n  background: transparent;\\n  outline: none;\\n  font-size: 19px;\\n  width: 300px;\\n  margin: 15px;\\n}\\n\\n.form-submit {\\n  background: rgb(255 255 255);\\n  color: rgb(0, 0, 0);\\n  width: 80px;\\n  margin: 15px;\\n  cursor: pointer;\\n  border: none;\\n  border-radius: 8px;\\n  outline: none;\\n}\\n\\n.form-input::placeholder {\\n  color: rgb(187 187 187);\\n}\\n\\n#city-list {\\n  background: rgb(255 255 255);\\n  color: rgb(0, 0, 0);\\n  width: 150px;\\n  height: 250px;\\n}\\n\\n.loader {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.container.before {\\n  content: '';\\n  display: block;\\n  background: rgb(106 105 105);\\n  width: 100%;\\n  height: 52%;\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 0;\\n}\\n\\n.container.is-day::before {\\n  content: '';\\n  display: block;\\n  background: rgb(255 255 255);\\n  width: 100%;\\n  height: 30%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 0;\\n}\\n\\n.top {\\n  position: relative;\\n  float: left;\\n  padding: 30px;\\n  overflow: hidden;\\n}\\n\\n.city-info {\\n  display: block;\\n  margin-top: 28px;\\n}\\n\\n.top-left {\\n  float: left;\\n  width: 38%;\\n}\\n\\n.city {\\n  width: max-content;\\n}\\n\\n.city-subtitle {\\n  font-size: 15px;\\n  line-height: 18px;\\n  color: #000;\\n}\\n\\n.city-title {\\n  background: #748bff;\\n  border-radius: 8px;\\n  font-weight: 700;\\n  font-size: 35px;\\n  line-height: 41px;\\n  color: #fff;\\n  padding: 1px 8px;\\n  margin-top: 6px;\\n  cursor: pointer;\\n  width: max-content;\\n  width: 220px;\\n}\\n\\n.city-info__subtitle {\\n  font-size: 13px;\\n  line-height: 15px;\\n  color: #000;\\n}\\n\\n.city-info__title {\\n  font-weight: 500;\\n  font-size: 53px;\\n  line-height: 77px;\\n  color: #000;\\n}\\n\\n.description {\\n  font-weight: 700;\\n  font-size: 25px;\\n  line-height: 36px;\\n  color: #000;\\n  position: absolute;\\n  top: 200px;\\n  left: 30px;\\n  display: block;\\n}\\n\\n.icon {\\n  padding: 20px;\\n  width: 68px;\\n  height: 68px;\\n  position: absolute;\\n  top: 200px;\\n  left: 140px;\\n  display: block;\\n}\\n\\n.property {\\n  width: 50%;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.property-icon {\\n  width: 30px;\\n  margin-right: 60px;\\n}\\n\\n.property-info__value {\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 18px;\\n  color: #000;\\n}\\n\\n.property-info__description {\\n  font-weight: 300;\\n  font-size: 12px;\\n  line-height: 12px;\\n  text-transform: uppercase;\\n  color: #6b6b6b;\\n  margin-top: 3px;\\n}\\n\\n#properties {\\n  position: absolute;\\n  top: 60%;\\n  z-index: 1;\\n  padding: 28px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  row-gap: 20px;\\n  justify-content: space-between;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\n\nconst mapAPI =\n  'https://api.tomtom.com/map/1/staticimage?key=qZdBoTXiUh0klHvOzvSbZZ8vviAbBJE9&zoom=5&width=350&height=250';\nconst positionAPI = 'https://api.ipregistry.co/?key=unv4cf1lm9iwwnzv';\n\nconst root = document.getElementById('root');\nconst popup = document.getElementById('popup');\nconst textInput = document.getElementById('text-input');\nconst form = document.getElementById('form');\nconst closing = document.getElementById('close');\n\nlet store = {\n  city: '',\n  temperature: 0,\n  description: '',\n  lat: 0,\n  lon: 0,\n  properties: {\n    cloudcover: {},\n    humidity: {},\n    pressure: {},\n    visibility: {},\n    wind: {},\n  },\n};\n\nasync function getCurrentPosition() {\n  try {\n    const response = await fetch(positionAPI);\n    const currentPosition = await response.json();\n    const {\n      location: { city, latitude, longitude },\n    } = currentPosition;\n    store = {\n      ...store,\n      city,\n      lat: latitude,\n      lon: longitude,\n    };\n  } catch (error) {\n    console.log(error);\n  }\n}\ngetCurrentPosition().then(fetchMap);\n\nconst renderProperty = (properties) =>\n  Object.values(properties)\n    .map(\n      ({ title, value, icon }) => `<div class=\"property\">\n              <div class=\"property-icon\">\n                <img src=\"${icon}\" alt=\"\">\n              </div>\n              <div class=\"property-info\">\n                <div class=\"property-info__value\">${value}</div>\n                <div class=\"property-info__description\">${title}</div>\n              </div>\n            </div>`\n    )\n    .join('');\n\nconst fetchData = async () => {\n  try {\n    const city = localStorage.getItem('city') || store.city;\n    const result = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=411ca8d96f45514a3505bcc663681805&units=metric`\n    );\n    const data = await result.json();\n    const {\n      coord: { lon, lat },\n      weather: [{ main: description }],\n      main: { temp: temperature, humidity, pressure },\n      visibility,\n      name,\n      wind,\n    } = data;\n\n    store = {\n      ...store,\n      city: name,\n      lat,\n      lon,\n      temperature,\n      description,\n      properties: {\n        humidity: {\n          title: 'humidity',\n          value: `${humidity} %`,\n          icon: './img/icons/humidity.png',\n        },\n        pressure: {\n          title: 'pressure',\n          value: `${pressure} mmHg`,\n          icon: './img/icons/gauge.png',\n        },\n        wind: {\n          title: 'wind speed',\n          value: `${wind.speed} km/h`,\n          icon: './img/icons/wind.png',\n        },\n        visibility: {\n          title: 'visibility',\n          value: `${visibility}`,\n          icon: './img/icons/visibility.png',\n        },\n      },\n    };\n    renderComponent();\n  } catch (err) {\n    console.log(err);\n  }\n};\nfetchData();\n\nconst getImage = (description) => {\n  switch (description) {\n    case 'Rain':\n      return './img/partly.png';\n    case 'Clouds':\n      return './img/cloudy.png';\n    case 'Haze':\n      return './img/fog.png';\n    case 'Sunny':\n      return './img/sunny.png';\n    case 'Clear':\n      return './img/clear.png';\n    default:\n      return './img/temp.png';\n  }\n};\n\nconst markup = () => {\n  const { city, description, temperature, isDay, properties } = store;\n\n  const containerClass = isDay === 'yes' ? 'is-day' : '';\n\n  return `<div class=\"container ${containerClass}\">\n            <div class=\"top\">\n              <div class=\"top-left\">\n                <div class=\"city\">\n                  <div class=\"city-subtitle\">Weather today in</div>\n                    <div class=\"city-title\" id=\"city\">\n                    <span>${city}</span>\n                    <div class=\"city-info__title\">${temperature}°</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div>\n                <img class=\"icon\" src=\"${getImage(description)}\" alt=\"hi\" />\n                <div class=\"description\">${description}</div>\n            </div>\n            <div>\n              <div id=\"properties\">${renderProperty(properties)}</div>\n            </div>\n          </div>`;\n};\n\nconst togglePopupClass = () => {\n  popup.classList.toggle('active');\n};\n\nconst renderComponent = () => {\n  root.innerHTML = markup();\n\n  const city = document.getElementById('city');\n  city.addEventListener('click', togglePopupClass);\n};\n\nconst handleInput = (e) => {\n  store = {\n    ...store,\n    city: e.target.value,\n  };\n};\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  const value = store.city;\n\n  if (!value) return null;\n\n  localStorage.setItem('query', value);\n  fetchData().then(fetchMap);\n  togglePopupClass();\n};\n\nasync function fetchMap() {\n  try {\n    const { lat, lon } = store;\n    const url = `${mapAPI}&center=${lon},${lat}&format=jpg`;\n    const response = await fetch(url);\n    const blob = await response.blob();\n    const map = document.getElementById('map');\n    map.style = 'position:absolute;top:30px;right:50px;';\n    map.src = URL.createObjectURL(blob);\n    fetchData();\n  } catch (error) {\n    console.log(error);\n  }\n}\nfetchMap();\n\nclosing.addEventListener('click', handleSubmit);\nform.addEventListener('submit', handleSubmit);\ntextInput.addEventListener('input', handleInput);\n\nlet cityList = [];\n// eslint-disable-next-line no-undef, eqeqeq\nif (localStorage.getItem('title') != undefined) {\n  cityList = JSON.parse(localStorage.getItem('title'));\n  showHistory();\n}\n\n// eslint-disable-next-line func-names\ndocument.getElementById('submit-button').onclick = function () {\n  const cityValue = textInput.value;\n  const cityStorage = {};\n  cityStorage.title = cityValue;\n  const i = cityList.length;\n  cityList[i] = cityStorage;\n  showHistory();\n  localStorage.setItem('title', JSON.stringify(cityList));\n};\n\nfunction showHistory() {\n  let history = '';\n  // eslint-disable-next-line no-restricted-syntax, guard-for-in\n  for (const key in cityList) {\n    history += `<ul>\n                <li id='li'>${cityList[key].title}</li>\n              </ul>`;\n  }\n  document.getElementById('city-list').innerHTML = history;\n}\n\n\n//# sourceURL=webpack://weather-app/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;