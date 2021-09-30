/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  font-size: 15px;\\n}\\n\\nbody {\\n  display: flex;\\n  font-family: sans-serif;\\n  background-color: #f1f2f5;\\n}\\n\\n#todo-list {\\n  box-sizing: border-box;\\n  border-radius: 3px;\\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\\n  margin: 0 auto;\\n  top: 0;\\n  max-width: 500px;\\n  width: 100%;\\n  text-align: left;\\n  list-style: none;\\n  padding: 0;\\n}\\n\\n.todo-title {\\n  display: flex;\\n  position: relative;\\n  height: 50px;\\n  background: #fff;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n}\\n\\n.todo-title h2 {\\n  color: #545862;\\n  font-size: 15px;\\n  font-weight: 400;\\n  padding: 1rem;\\n  line-height: 20px;\\n  margin: 0;\\n  width: 100%;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  white-space: nowrap;\\n}\\n\\n.todo-title button {\\n  border: none;\\n  padding-right: 15px;\\n}\\n\\nform {\\n  display: flex;\\n  align-items: baseline;\\n  background-color: white;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  padding-right: 7px;\\n}\\n\\n#add-item {\\n  width: 100%;\\n  line-height: 50px;\\n  height: 50px;\\n  border: none;\\n  font-style: italic;\\n  padding: 0;\\n  margin-left: 10px;\\n}\\n\\n#add-item::placeholder {\\n  padding-left: 20px;\\n}\\n\\n.fas {\\n  opacity: 0.2;\\n}\\n\\n.fa-long-arrow-alt-left {\\n  margin-right: 9px;\\n}\\n\\n.task {\\n  display: flex;\\n  position: relative;\\n  align-items: baseline;\\n  background-color: #fff;\\n  font-size: 1rem;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\n  font-weight: 500;\\n  box-sizing: content-box;\\n  padding: 12px;\\n}\\n\\n.task-pressed {\\n  background-color: #fffeca;\\n}\\n\\n.task label {\\n  width: 100%;\\n  padding: 0;\\n  line-height: 20px;\\n  word-wrap: break-word;\\n}\\n\\n.task input {\\n  margin-right: 15px;\\n}\\n\\n.task #move {\\n  text-align: end;\\n  cursor: move;\\n  padding-right: 7px;\\n}\\n\\n.link-button {\\n  appearance: none;\\n  outline: none;\\n  border: none;\\n  background-color: transparent;\\n  margin: 1rem auto;\\n  display: block;\\n  opacity: 0.5;\\n}\\n\\n.checked {\\n  color: grey;\\n  text-decoration-line: line-through;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clearAll.js":
/*!*************************!*\
  !*** ./src/clearAll.js ***!
  \*************************/
/***/ ((module) => {

eval("function clearAllCompletedTasks(toDoTasks) {\n  if (dataStorage !== null) {\n    toDoTasks = dataStorage;\n  }\n  toDoTasks = toDoTasks.filter((task) => task.completed === false);\n  toDoTasks.forEach((task, i) => {\n    task.index = i;\n  });\n}\n\nmodule.exports = clearAllCompletedTasks;\n\n\n//# sourceURL=webpack://todo-list/./src/clearAll.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-status */ \"./src/task-status.js\");\n/* harmony import */ var _task_status__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_task_status__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tasks_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-handler */ \"./src/tasks-handler.js\");\n/* harmony import */ var _tasks_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tasks_handler__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loadstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadstorage */ \"./src/loadstorage.js\");\n/* harmony import */ var _loadstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadstorage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clearAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearAll */ \"./src/clearAll.js\");\n/* harmony import */ var _clearAll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clearAll__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nlet toDoTasks = [];\n\nfunction setLocalStorage() {\n  localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));\n}\n\nlet dataStorage = _loadstorage__WEBPACK_IMPORTED_MODULE_3___default()();\n\nconst taskList = document.querySelector('#todo-list');\nconst clearButton = document.querySelector('.link-button');\n\nfunction addItem(task, index) {\n  const li = document.createElement('li');\n  const labelDes = document.createElement('label');\n  const checkBox = document.createElement('input');\n  const icon = document.createElement('i');\n  const trashIcon = document.createElement('i');\n\n  checkBox.type = 'checkbox';\n  checkBox.classList.add('checkBox');\n  checkBox.id = 'unmarked';\n  li.classList.add('task');\n  li.id = index;\n  icon.classList.add('fas');\n  icon.classList.add('fa-ellipsis-v');\n  icon.id = 'move';\n  labelDes.contentEditable = false;\n  trashIcon.classList.add('fas');\n  trashIcon.classList.add('fa-trash-alt');\n  trashIcon.classList.add('hidden');\n\n  labelDes.innerHTML = task.description;\n\n  li.appendChild(checkBox);\n  li.appendChild(labelDes);\n  li.appendChild(icon);\n  li.appendChild(trashIcon);\n  taskList.insertBefore(li, clearButton);\n\n  li.addEventListener('click', () => {\n    labelDes.contentEditable = true;\n    if (trashIcon.classList.contains('hidden')) {\n      li.classList.add('task-pressed');\n      trashIcon.classList.remove('hidden');\n      icon.classList.add('hidden');\n    } else {\n      li.classList.remove('task-pressed');\n      icon.classList.remove('hidden');\n      trashIcon.classList.add('hidden');\n    }\n  });\n\n  labelDes.addEventListener('input', () => {\n    _tasks_handler__WEBPACK_IMPORTED_MODULE_2___default().updateDescription(toDoTasks, li.id, labelDes.innerText);\n    setLocalStorage();\n  });\n\n  trashIcon.addEventListener('click', () => {\n    _tasks_handler__WEBPACK_IMPORTED_MODULE_2___default().removeTask(toDoTasks, li.id);\n    setLocalStorage();\n    taskListDisplayed();\n  });\n\n  const data = JSON.parse(localStorage.getItem('todoTasks'));\n  if (data) {\n    if (data[index].completed === true) {\n      checkBox.id = 'marked';\n      checkBox.checked = true;\n      labelDes.classList.add('checked');\n    } else {\n      checkBox.id = 'unmarked';\n      checkBox.checked = false;\n    }\n  }\n\n  checkBox.addEventListener('change', () => {\n    if (_task_status__WEBPACK_IMPORTED_MODULE_1___default().boxNotMarked(checkBox)) {\n      labelDes.classList.add('checked');\n      checkBox.id = 'marked';\n      toDoTasks[index].completed = true;\n      setLocalStorage();\n    } else {\n      labelDes.classList.remove('checked');\n      checkBox.id = 'unmarked';\n      toDoTasks[index].completed = false;\n      setLocalStorage();\n    }\n  });\n  \n  return li.outerHTML;\n}\n\nfunction taskListDisplayed() {\n  dataStorage = _loadstorage__WEBPACK_IMPORTED_MODULE_3___default()();\n  if (dataStorage !== null) {\n    toDoTasks = dataStorage;\n  }\n  if (taskList.hasChildNodes()) {\n    const nodesArray = document.querySelectorAll('.task');\n    nodesArray.forEach((node) => {\n      taskList.removeChild(node);\n    });\n  }\n  toDoTasks.forEach((task, index) => {\n    addItem(task, index);\n  });\n}\n\n// function clearAllCompletedTasks() {\n//   if (dataStorage !== null) {\n//     toDoTasks = dataStorage;\n//   }\n//   toDoTasks = toDoTasks.filter((task) => task.completed === false);\n//   toDoTasks.forEach((task, i) => {\n//     task.index = i;\n//   });\n//   setLocalStorage();\n//   taskListDisplayed();\n// }\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const divUl = document.createElement('div');\n  const h2 = document.createElement('h2');\n  const reloadButton = document.createElement('button');\n\n  divUl.classList.add('todo-title');\n  h2.innerHTML = \"Today's To Do\";\n  reloadButton.classList.add('fas');\n  reloadButton.classList.add('fa-sync-alt');\n\n  divUl.appendChild(h2);\n  divUl.appendChild(reloadButton);\n  taskList.insertBefore(divUl, clearButton);\n\n  const form = document.createElement('form');\n  const input = document.createElement('input');\n  const addIcon = document.createElement('icon');\n\n  input.placeholder = 'Add to your list...';\n  input.id = 'add-item';\n  addIcon.classList.add('fas');\n  addIcon.classList.add('fa-long-arrow-alt-left');\n\n  form.appendChild(input);\n  form.appendChild(addIcon);\n  taskList.insertBefore(form, clearButton);\n\n  if (addIcon) {\n    addIcon.addEventListener('click', () => {\n      _tasks_handler__WEBPACK_IMPORTED_MODULE_2___default().addTask(toDoTasks, input.value);\n      setLocalStorage();\n      taskListDisplayed();\n      input.value = '';\n    });\n  }\n\n  if (clearButton) {\n    clearButton.addEventListener('click', () => {\n      _clearAll__WEBPACK_IMPORTED_MODULE_4___default()(toDoTasks);\n      setLocalStorage();\n      taskListDisplayed();\n    });\n  }\n\n  taskListDisplayed();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/loadstorage.js":
/*!****************************!*\
  !*** ./src/loadstorage.js ***!
  \****************************/
/***/ ((module) => {

eval("const getLocalStorage = () => {\n  const data = JSON.parse(localStorage.getItem('todoTasks'));\n  if (data === null) {\n    localStorage.setItem('todoTasks', JSON.stringify([]));\n    return [];\n  }\n  return data;\n}\n\nmodule.exports = getLocalStorage;\n\n//# sourceURL=webpack://todo-list/./src/loadstorage.js?");

/***/ }),

/***/ "./src/task-status.js":
/*!****************************!*\
  !*** ./src/task-status.js ***!
  \****************************/
/***/ ((module) => {

eval("class Status {\n  static boxNotMarked(box) {\n    if (box.id === 'unmarked') {\n      return true;\n    }\n    return false;\n  }\n}\n\nmodule.exports = Status;\n\n\n//# sourceURL=webpack://todo-list/./src/task-status.js?");

/***/ }),

/***/ "./src/tasks-handler.js":
/*!******************************!*\
  !*** ./src/tasks-handler.js ***!
  \******************************/
/***/ ((module) => {

eval("class Crud {\n  static addTask(list, input) {\n    if (input !== '') {\n      const task = {\n        description: input,\n        completed: false,\n        index: list.length,\n      };\n      list.push(task);\n      return 1;\n    }\n    return 0;\n  }\n\n  static removeTask(list, id) {\n    if (list.length > 0) {\n      if (id >= 0) {\n        const lastitem = list.length - 1;\n        if (id === lastitem) {\n          list.splice(id, 1);\n        } else {\n          list.splice(id, 1);\n          let j = parseInt(id, 10);\n          for (j; j < list.length; j += 1) {\n            list[j].index -= 1;\n          }\n        }\n        return 1;\n      }\n      return 0;\n    }\n    return 0;\n  }\n\n  static updateDescription(list, index, input) {\n    list[index].description = input;\n    return list[index].description;\n  }\n}\n\nmodule.exports = Crud;\n\n\n//# sourceURL=webpack://todo-list/./src/tasks-handler.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;