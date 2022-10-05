/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./roboto/Roboto-Black.ttf */ "./src/roboto/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./roboto/Roboto-Medium.ttf */ "./src/roboto/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyHeaderFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'myFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: #efefef;\n}\n\n.hero {\n    background-color: #a9a9a9;\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    height: 10vh;\n    width: 100vw;\n    font-size: 2rem;\n    color: white;\n    padding-top: 1rem;\n    padding-left: 3rem;\n    padding: 1rem 0 1rem 3rem;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    font-size: large;\n    background-color: #caebf2;\n    box-shadow: 5px 10px black;\n    height: 100vh;\n    padding: 2rem;\n    flex: 0 0 15%;\n}\n\n.todoSection {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: #efefef;\n}\n\n#addProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    background-color: #caebf2;\n    border-color: lightgray;\n    width: 10rem;\n    box-shadow: 0 10px 6px -6px #777;\n    margin-left: -.5rem;\n}\n\n#addProjectBtn {\n    margin-top: .5rem;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'MyFont';\n}\n\n/* Hero */\n\n.heroTitle {\n    font-family: 'myHeaderFont';\n}\n\n.heroImg {\n    height: 4rem;\n    border-radius: 10px;\n}\n\n#thisWeeksTodos:hover,\n#todaysTodos:hover,\n#completedTodos:hover,\n#notCompletedTodos:hover,\nbutton:hover {\n    color: #aaa;\n    cursor: pointer;\n}\n\ninput,\nbutton,\nselect {\n    cursor: pointer;\n}\n\n.sidebarAndTodo {\n    display: flex;\n}\n\n/* Sidebar */\n#sidebarHeader {\n    padding-bottom: .5rem;\n    font-size: 1.5rem;\n}\n\n#sidebarHeader,\n.projects {\n    text-decoration: underline;\n    font-family: 'MyHeaderFont';\n}\n\n.projects {\n    margin-top: 2rem;\n    font-size: 1.5rem;\n}\n\n/* Todo Section */\n\n.todoAndAddBtn {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-top: 1rem;\n    border-radius: 20px;\n}\n\n.listItem {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    padding: .5rem 0 .5rem 2rem;\n    border: 2px solid black;\n    box-shadow: 0 10px 6px -3px #777;\n    height: 3rem;\n    width: 65vw;\n    margin-right: 2rem;\n    margin-top: 1rem;\n    gap: 1rem;\n    border-radius: 10px;\n}\n\n.checkboxTodoContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.priorityBtnContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 2rem;\n    align-content: center;\n    gap: 1rem;\n}\n\n.todoTextContent {\n    flex-basis: 50%;\n}\n\n.todoPriority {\n    margin-top: .5rem;\n    margin-right: 4rem;\n}\n\n#addItemBtn, \n#addProjectBtn,\n#deleteCurrentProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2.5rem;\n    width: 8rem;\n    margin-bottom: .3rem;\n    border-radius: 24px;\n}\n\n#addItemBtn, \n#deleteCurrentProjectBtn,\n.listItemBtn,\n#projectSubmitBtn {\n    box-shadow: 0 10px 6px -6px #777;\n    border-color: #a9a9a9;\n}\n\n#addItemBtnCont {\n    display: flex;\n    flex-direction: row;\n    gap: 2rem;\n    justify-content: center;\n}\n\n/* Btns */\n\n.itemTextInput {\n    width: 20vw;\n}\n\n.listItemBtn, \n#projectSubmitBtn {\n    height: 2rem;\n    width: 4rem;\n}\n\n.priorityBtnContainer > p {\n    display: flex;\n    font-size: medium;\n    /* margin-right: -.2rem; */\n    margin-bottom: .5rem;\n    min-width: fit-content;\n}\n\n.dueDate {\n    display: flex;\n    font-size: medium;\n    margin-right: 2rem;\n    margin-top: .5rem;\n    min-width: fit-content;\n}\n\n/* New project modal */\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n  }\n\n/* Modal Content/Box */\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #caebf2;\n    margin-top: 15%;\n    margin-left: 25%;\n    padding: 10px 10px;\n    border: 1px solid #888;\n    width: 60%; /* Could be more or less, depending on screen size */\n    border-radius: 20px;\n}\n\n/* The Close Button */\n.close {\n    color: #aaa;\n    margin-left: auto;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.modal-content > label {\n    font-size: x-large;\n}\n\n.modal-content > input {\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    width: 40vw;\n}\n\n#projectSubmitBtn {\n    margin-bottom: 1rem;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n.hamburgerIcon {\n    position: relative;\n    right: 1rem;\n}\n\n.sidebarCloseBtn {\n    display: none;\n}\n\n\n@media screen and (max-width: 480px) {\n\n    .listItem {\n        width: 95vw;\n        margin-right: 0;\n        height: 5rem;\n        padding: 0;\n        flex-direction: column;\n    }\n\n    .checkboxTodoContainer {\n        margin-right: auto;\n        margin-left: 1rem;\n        margin-top: 12px;\n    }\n\n    .priorityBtnContainer {\n        gap: .5rem;\n    }\n\n    .itemTextInput {\n        margin-top: 12px;\n        width: 85vw;\n    }\n\n    .listItemBtn {\n        width: 2rem;\n        height: 1.5rem;\n        margin-bottom: 8px;\n        font-size: .5rem;\n    }\n\n    .priorityInput, .todoPriority {\n        margin-left: 12px;\n    }\n    \n    /* Mobile side navigation menu */\n    .sidebar {\n        height: 100%; /* 100% Full-height */\n        width: 0; /* 0 width - change this with JavaScript */\n        position: fixed; /* Stay in place */\n        z-index: 0; /* Stay on top */\n        top: 0; /* Stay at the top */\n        left: 0;\n        overflow: hidden; /* Disable horizontal scroll */\n        padding-top: 60px; /* Place content 60px from the top */\n        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n        padding: 0;\n    }\n\n    .sidebarCloseBtn {\n        display: block;\n        font-size: 2rem;\n    }\n\n    /* The navigation menu links */\n    .sidenav div {\n        transition: 0.3s;\n    }\n    \n    /* Position and style the close button (top right corner) */\n    .sidenav .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n    }\n  \n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'MyHeaderFont';\n    src: url('./roboto/Roboto-Black.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'myFont';\n    src: url('./roboto/Roboto-Medium.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: #efefef;\n}\n\n.hero {\n    background-color: #a9a9a9;\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    height: 10vh;\n    width: 100vw;\n    font-size: 2rem;\n    color: white;\n    padding-top: 1rem;\n    padding-left: 3rem;\n    padding: 1rem 0 1rem 3rem;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    font-size: large;\n    background-color: #caebf2;\n    box-shadow: 5px 10px black;\n    height: 100vh;\n    padding: 2rem;\n    flex: 0 0 15%;\n}\n\n.todoSection {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: #efefef;\n}\n\n#addProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    background-color: #caebf2;\n    border-color: lightgray;\n    width: 10rem;\n    box-shadow: 0 10px 6px -6px #777;\n    margin-left: -.5rem;\n}\n\n#addProjectBtn {\n    margin-top: .5rem;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'MyFont';\n}\n\n/* Hero */\n\n.heroTitle {\n    font-family: 'myHeaderFont';\n}\n\n.heroImg {\n    height: 4rem;\n    border-radius: 10px;\n}\n\n#thisWeeksTodos:hover,\n#todaysTodos:hover,\n#completedTodos:hover,\n#notCompletedTodos:hover,\nbutton:hover {\n    color: #aaa;\n    cursor: pointer;\n}\n\ninput,\nbutton,\nselect {\n    cursor: pointer;\n}\n\n.sidebarAndTodo {\n    display: flex;\n}\n\n/* Sidebar */\n#sidebarHeader {\n    padding-bottom: .5rem;\n    font-size: 1.5rem;\n}\n\n#sidebarHeader,\n.projects {\n    text-decoration: underline;\n    font-family: 'MyHeaderFont';\n}\n\n.projects {\n    margin-top: 2rem;\n    font-size: 1.5rem;\n}\n\n/* Todo Section */\n\n.todoAndAddBtn {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-top: 1rem;\n    border-radius: 20px;\n}\n\n.listItem {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    padding: .5rem 0 .5rem 2rem;\n    border: 2px solid black;\n    box-shadow: 0 10px 6px -3px #777;\n    height: 3rem;\n    width: 65vw;\n    margin-right: 2rem;\n    margin-top: 1rem;\n    gap: 1rem;\n    border-radius: 10px;\n}\n\n.checkboxTodoContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.priorityBtnContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 2rem;\n    align-content: center;\n    gap: 1rem;\n}\n\n.todoTextContent {\n    flex-basis: 50%;\n}\n\n.todoPriority {\n    margin-top: .5rem;\n    margin-right: 4rem;\n}\n\n#addItemBtn, \n#addProjectBtn,\n#deleteCurrentProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2.5rem;\n    width: 8rem;\n    margin-bottom: .3rem;\n    border-radius: 24px;\n}\n\n#addItemBtn, \n#deleteCurrentProjectBtn,\n.listItemBtn,\n#projectSubmitBtn {\n    box-shadow: 0 10px 6px -6px #777;\n    border-color: #a9a9a9;\n}\n\n#addItemBtnCont {\n    display: flex;\n    flex-direction: row;\n    gap: 2rem;\n    justify-content: center;\n}\n\n/* Btns */\n\n.itemTextInput {\n    width: 20vw;\n}\n\n.listItemBtn, \n#projectSubmitBtn {\n    height: 2rem;\n    width: 4rem;\n}\n\n.priorityBtnContainer > p {\n    display: flex;\n    font-size: medium;\n    /* margin-right: -.2rem; */\n    margin-bottom: .5rem;\n    min-width: fit-content;\n}\n\n.dueDate {\n    display: flex;\n    font-size: medium;\n    margin-right: 2rem;\n    margin-top: .5rem;\n    min-width: fit-content;\n}\n\n/* New project modal */\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n  }\n\n/* Modal Content/Box */\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #caebf2;\n    margin-top: 15%;\n    margin-left: 25%;\n    padding: 10px 10px;\n    border: 1px solid #888;\n    width: 60%; /* Could be more or less, depending on screen size */\n    border-radius: 20px;\n}\n\n/* The Close Button */\n.close {\n    color: #aaa;\n    margin-left: auto;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.modal-content > label {\n    font-size: x-large;\n}\n\n.modal-content > input {\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    width: 40vw;\n}\n\n#projectSubmitBtn {\n    margin-bottom: 1rem;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n.hamburgerIcon {\n    position: relative;\n    right: 1rem;\n}\n\n.sidebarCloseBtn {\n    display: none;\n}\n\n\n@media screen and (max-width: 480px) {\n\n    .listItem {\n        width: 95vw;\n        margin-right: 0;\n        height: 5rem;\n        padding: 0;\n        flex-direction: column;\n    }\n\n    .checkboxTodoContainer {\n        margin-right: auto;\n        margin-left: 1rem;\n        margin-top: 12px;\n    }\n\n    .priorityBtnContainer {\n        gap: .5rem;\n    }\n\n    .itemTextInput {\n        margin-top: 12px;\n        width: 85vw;\n    }\n\n    .listItemBtn {\n        width: 2rem;\n        height: 1.5rem;\n        margin-bottom: 8px;\n        font-size: .5rem;\n    }\n\n    .priorityInput, .todoPriority {\n        margin-left: 12px;\n    }\n    \n    /* Mobile side navigation menu */\n    .sidebar {\n        height: 100%; /* 100% Full-height */\n        width: 0; /* 0 width - change this with JavaScript */\n        position: fixed; /* Stay in place */\n        z-index: 0; /* Stay on top */\n        top: 0; /* Stay at the top */\n        left: 0;\n        overflow: hidden; /* Disable horizontal scroll */\n        padding-top: 60px; /* Place content 60px from the top */\n        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n        padding: 0;\n    }\n\n    .sidebarCloseBtn {\n        display: block;\n        font-size: 2rem;\n    }\n\n    /* The navigation menu links */\n    .sidenav div {\n        transition: 0.3s;\n    }\n    \n    /* Position and style the close button (top right corner) */\n    .sidenav .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n    }\n  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createElementsFunctions.js":
/*!****************************************!*\
  !*** ./src/createElementsFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBtn": () => (/* binding */ createBtn),
/* harmony export */   "createCheckbox": () => (/* binding */ createCheckbox),
/* harmony export */   "createDateInput": () => (/* binding */ createDateInput),
/* harmony export */   "createDueDate": () => (/* binding */ createDueDate),
/* harmony export */   "createProjectBtn": () => (/* binding */ createProjectBtn),
/* harmony export */   "createSelect": () => (/* binding */ createSelect),
/* harmony export */   "createTextInput": () => (/* binding */ createTextInput),
/* harmony export */   "createTodoContainer": () => (/* binding */ createTodoContainer),
/* harmony export */   "createTodoDescription": () => (/* binding */ createTodoDescription),
/* harmony export */   "createTodoPriorityText": () => (/* binding */ createTodoPriorityText)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


// STYLING DIVS FUNCTIONS
// Todo list item container
const createTodoContainer = () => {
  let todoListItem = document.createElement("div");
  todoListItem.classList.add("listItem");
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex] == "") {
    // eslint-disable-next-line no-undef
    editListItemFormat(todoListItem);
  }
  return todoListItem;
};

// FUNCTIONS FOR CREATING INPUTS
const createTextInput = () => {
  let textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.classList.add("itemTextInput");
  textInput.setAttribute("rows", "2");
  return textInput;
};

const createDateInput = () => {
  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.classList.add("dateInput");
  return dateInput;
};

// Creates priority select input
const createSelect = () => {
  const selectArr = ["Low Priority", "Medium Priority", "High Priority"];
  //Create and append select list
  const selectList = document.createElement("select");
  selectList.id = "selectList";
  //Create and append the options
  for (var i = 0; i < selectArr.length; i++) {
    const option = document.createElement("option");
    option.value = selectArr[i];
    option.text = selectArr[i];
    selectList.appendChild(option);
  }
  return selectList;
};

const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  return checkbox;
};

const createBtn = (btnName) => {
  const btn = document.createElement("button");
  btn.classList.add("listItemBtn", btnName);
  btn.textContent = capitalizeFirstLetter(btnName);

  return btn;
};

const createProjectBtn = (newProjectName) => {
  let newProjectBtn = document.createElement("button");
  newProjectBtn.textContent = newProjectName;
  newProjectBtn.classList.add("projectNameBtn");
  newProjectBtn.setAttribute("index", (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length - 1));
  return newProjectBtn;
};

// Capitalize first letter for button text
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Converts to text for confirmed todo item
const createTodoDescription = (todoDescription) => {
  const todoTextContent = document.createElement("p");
  todoTextContent.classList.add("todoDescription");
  todoTextContent.textContent = todoDescription;
  return todoTextContent;
};

const createDueDate = (dueDate) => {
  const dueDateText = document.createElement("p");
  dueDateText.classList.add("dueDate");
  dueDateText.textContent = dueDate;
  return dueDateText;
};

// Converts chosen todo option from select input to p element
const createTodoPriorityText = (todoListPriorityText) => {
  const todoPriority = document.createElement("p");
  todoPriority.classList.add("todoPriority");
  todoPriority.textContent = todoListPriorityText;
  return todoPriority;
};




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelBtnListener": () => (/* binding */ cancelBtnListener),
/* harmony export */   "deleteListItem": () => (/* binding */ deleteListItem),
/* harmony export */   "editBtnListener": () => (/* binding */ editBtnListener),
/* harmony export */   "editListItemFormat": () => (/* binding */ editListItemFormat),
/* harmony export */   "printTodoListToDom": () => (/* binding */ printTodoListToDom),
/* harmony export */   "submitListItem": () => (/* binding */ submitListItem)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createElementsFunctions.js */ "./src/createElementsFunctions.js");




const allListItemsContainer = document.querySelector(".allListItemsContainer"); // Container for todo list items

// APPEND THE TODO LIST TO THE DOM
const printTodoListToDom = (selectedListItem = undefined) => {
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.clearDomProject)();
  for (
    var i = 0;
    i < Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex]).length;
    i++
  ) {
    const todoListItem = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTodoContainer)();
    todoListItem.setAttribute("value", [i]);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].todoListOrder = i;
    todoListItem.classList.add();
    if (i == selectedListItem) {
      editListItemFormat(todoListItem, i);
    } else {
      confirmedListItemFormat(todoListItem, i);
    }
  }
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length > 2 || _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[1].length > 0) {
    let allProjectsSerialized = JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    localStorage.setItem("storedProjects", allProjectsSerialized);
  } else {
    localStorage.clear();
  }
};

const editListItemFormat = (todoListItem, i) => {
  let textInput = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTextInput)();

  // Create Select input for task priority
  let prioritySelectInput = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createSelect)();
  prioritySelectInput.classList.add("priorityInput");

  // Create date input
  let dateInput = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createDateInput)();

  // Fill in input to what was previous entered
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i] != undefined) {
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.fillInPreviousData)(textInput, prioritySelectInput, dateInput, i);
  }

  // Create cancel and submit btns
  let cancelBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("cancel");
  cancelBtn.addEventListener("click", function () {
    cancelBtnListener(todoListItem);
  });
  let submitBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("submit");
  submitBtn.addEventListener("click", function () {
    submitListItem(todoListItem);
  });

  // Container for styling
  const priorityBtnContainer = createEditPriorityBtnContainer(
    prioritySelectInput,
    dateInput,
    cancelBtn,
    submitBtn
  );

  return appendEditListItemToDom(todoListItem, priorityBtnContainer, textInput);
};

const confirmedListItemFormat = (todoListItem, i) => {
  const checkbox = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createCheckbox)();
  checkbox.checked = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].completed;

  const todoDescription = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTodoDescription)(
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].title
  );
  const todoPriority = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTodoPriorityText)(
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].priority
  );
  const dueDate = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createDueDate)(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].dueDate);
  // Used for applying changes to original array when list items are checked in allProjects[0]
  checkbox.setAttribute(
    "originalProjectIndex",
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].originalProjectIndex
  );
  checkbox.setAttribute(
    "todoListOrder",
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].todoListOrder
  );
  checkbox.addEventListener("change", function (event) {
    checkboxEventFunc(event, i);
  });

  // Create Edit and Delete Btn
  const editBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("edit");
  editBtn.addEventListener("click", editBtnListener);
  const deleteBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("delete");
  deleteBtn.addEventListener("click", deleteListItem);

  const checkboxTodoContainer = createCheckboxTodoContainer(checkbox, todoDescription);

  // Container for styling
  const priorityBtnContainer = createConfirmedPriorityBtnContainer(
    todoPriority,
    dueDate,
    editBtn,
    deleteBtn
  );
  return appendConfirmedListItemToDom(
    todoListItem,
    checkboxTodoContainer,
    priorityBtnContainer
  );
};

// Priority and button div container for todo list items for styling
const createCheckboxTodoContainer = (checkbox, todoDescription) => {
  const checkboxTodoContainer = document.createElement('div');
  checkboxTodoContainer.classList.add('checkboxTodoContainer')
  return appendCheckboxTodoContainer(checkboxTodoContainer, checkbox, todoDescription);
}

const appendCheckboxTodoContainer = (checkboxTodoContainer, checkbox, todoDescription) => {
  checkboxTodoContainer.appendChild(checkbox);
  checkboxTodoContainer.appendChild(todoDescription);
  return checkboxTodoContainer;
}

const createEditPriorityBtnContainer = (
  prioritySelectInput,
  dateInput,
  cancelBtn,
  submitBtn
) => {
  let priorityBtnContainer = document.createElement("div");
  priorityBtnContainer.classList.add("priorityBtnContainer");
  return appendEditPriorityContainer(
    priorityBtnContainer,
    prioritySelectInput,
    dateInput,
    cancelBtn,
    submitBtn
  );
};

const appendEditPriorityContainer = (
  priorityBtnContainer,
  prioritySelectInput,
  dateInput,
  cancelBtn,
  submitBtn
) => {
  priorityBtnContainer.appendChild(prioritySelectInput);
  priorityBtnContainer.appendChild(dateInput);
  priorityBtnContainer.appendChild(cancelBtn);
  priorityBtnContainer.appendChild(submitBtn);
  return priorityBtnContainer;
};

const createConfirmedPriorityBtnContainer = (
  todoPriority,
  dueDate,
  editBtn,
  deleteBtn
) => {
  let priorityBtnContainer = document.createElement("div");
  priorityBtnContainer.classList.add("priorityBtnContainer");
  return appendConfirmedPriorityContainer(
    priorityBtnContainer,
    todoPriority,
    dueDate,
    editBtn,
    deleteBtn
  );
};

const appendConfirmedPriorityContainer = (
  priorityBtnContainer,
  todoPriority,
  dueDate,
  editBtn,
  deleteBtn
) => {
  priorityBtnContainer.appendChild(todoPriority);
  priorityBtnContainer.appendChild(dueDate);
  priorityBtnContainer.appendChild(editBtn);
  priorityBtnContainer.appendChild(deleteBtn);
  return priorityBtnContainer;
};

const appendEditListItemToDom = (
  todoListItem,
  priorityBtnContainer,
  textInput
) => {
  todoListItem.appendChild(textInput);
  todoListItem.appendChild(priorityBtnContainer);
  allListItemsContainer.appendChild(todoListItem);
};

const appendConfirmedListItemToDom = (
  todoListItem,
  checkboxTodoContainer,
  priorityBtnContainer
) => {
  todoListItem.appendChild(checkboxTodoContainer);
  todoListItem.appendChild(priorityBtnContainer);
  allListItemsContainer.appendChild(todoListItem);
};

// Dynamic Btn Listener Functions
const submitListItem = (listItem) => {
  // eslint-disable-next-line no-undef
  addItemBtn.disabled = false;
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(listItem);
  printTodoListToDom();
};

const cancelBtnListener = () => {
  // eslint-disable-next-line no-undef
  addItemBtn.disabled = false;
  printTodoListToDom();
};

const editBtnListener = (event) => {
  const selectedListItem =
    event.target.parentNode.parentNode.getAttribute("value");
  printTodoListToDom(selectedListItem);
};

const deleteListItem = (event) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].splice(
    event.target.parentNode.parentNode.getAttribute("value"),
    1
  );
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.clearDomProject)();
  printTodoListToDom();
};

// Checkbox Event Listener
const checkboxEventFunc = (event, i) => {
  // Used for applying changes to original array
  let originalProjectIndex = event.target.getAttribute("originalProjectIndex");
  let todoListOrder = event.target.getAttribute("todoListOrder");
  // Used for adjusting list item if it's in originalProject[0]
  let currentItemOrder = event.target.parentNode.getAttribute("value");
  if (event.target.checked) {
    checkedCheckbox(originalProjectIndex, todoListOrder, currentItemOrder, i);
    printTodoListToDom();
  } else {
    notCheckedCheckbox(
      originalProjectIndex,
      todoListOrder,
      currentItemOrder,
      i
    );
    printTodoListToDom();
  }
};

const checkedCheckbox = (
  originalProjectIndex,
  todoListOrder,
  currentItemOrder,
  i
) => {
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex == 0) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex][todoListOrder].completed = true;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0][currentItemOrder].completed = true;
  } else {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].completed = true;
  }
};

const notCheckedCheckbox = (
  originalProjectIndex,
  todoListOrder,
  currentItemOrder,
  i
) => {
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex == 0) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex][todoListOrder].completed = false;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0][currentItemOrder].completed = false;
  } else {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].completed = false;
  }
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "currentProjectIndex": () => (/* binding */ currentProjectIndex)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElementsFunctions.js */ "./src/createElementsFunctions.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");






// allProjects empty arrays, 1) filteredTodos (todaysTodos, thisWeeksTodos, completedTodos, notCompletedTodos)
// 2) Default project
const allProjectsContainer = document.querySelector(".allProjectsContainer"); // Container for Project Btns
let currentProjectIndex = 1; // Default todo list array
let allProjects = [[], []];

// eslint-disable-next-line no-unused-vars
const todoListModule = (function () {
  // Check for local storage
  // If there is local storage, print out default todos
  if (localStorage.getItem("storedProjects") != null) {
    allProjects = JSON.parse(localStorage.getItem("storedProjects"));
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.printTodoListToDom)();
  }

  if (localStorage.getItem("storedProjectBtnNames") != null) {
    let allProjectBtnNamesDeserialized = JSON.parse(
      localStorage.getItem("storedProjectBtnNames")
    );
    for (let i = 0; i < allProjectBtnNamesDeserialized.length; i++) {
      let projectBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_1__.createProjectBtn)(allProjectBtnNamesDeserialized[i]);
      allProjectsContainer.appendChild(projectBtn);
      projectBtn.addEventListener("click", function () {
        showProjectList(event);
      });
    }
    (0,_logic__WEBPACK_IMPORTED_MODULE_2__.resetProjectBtnIndex)();
  }

  const addItemBtn = document.querySelector("#addItemBtn");
  const addProjectBtn = document.getElementById("addProjectBtn");
  const defaultProjectBtn = document.querySelector("#defaultProjectBtn");
  const projectSubmitBtn = document.querySelector("#projectSubmitBtn");
  const deleteCurrentProjectBtn = document.querySelector(
    "#deleteCurrentProjectBtn"
  );
  const todaysTodos = document.querySelector("#todaysTodos");
  const thisWeeksTodos = document.querySelector("#thisWeeksTodos");
  const completedTodos = document.querySelector("#completedTodos");
  const notCompletedTodos = document.querySelector("#notCompletedTodos");
  const addProjectModal = document.getElementById("addProjectModal");
  const closeModal = document.getElementsByClassName("close")[0]; // X That closes modal
  const hamburgerIcon = document.querySelector('.hamburgerIcon'); // Open collapsible sidebar for mobile
  const sidebar = document.querySelector('.sidebar');
  const sidebarCloseBtn = document.querySelector('.sidebarCloseBtn');

  // BUTTON CLICK EVENT LISTENERS
  addItemBtn.addEventListener("click", () => {
    addItemBtnListener();
  });
  addProjectBtn.addEventListener("click", () => {
    openProjectModal();
  });
  projectSubmitBtn.addEventListener("click", () => {
    projectSubmitBtnListener();
  });
  deleteCurrentProjectBtn.addEventListener("click", () => {
    deleteCurrentProjectBtnListener();
  });
  todaysTodos.addEventListener("click", function () {
    findTodos("today");
  });
  thisWeeksTodos.addEventListener("click", function () {
    findTodos("week");
  });
  completedTodos.addEventListener("click", function () {
    findTodos("completed");
  });
  notCompletedTodos.addEventListener("click", function () {
    findTodos("notCompleted");
  });
  defaultProjectBtn.addEventListener("click", function () {
    showProjectList(event);
  });
  hamburgerIcon.addEventListener("click", function () {
    showSideBar();
  });
  sidebarCloseBtn.addEventListener("click", function () {
    closeSideBar();
  })


  // EVENT LISTENER FUNCTIONS
  // Static btn functions
  const addItemBtnListener = () => {
    addItemBtn.disabled = true;
    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.editListItemFormat)(listItem);
  };

  const showSideBar = () => {
    sidebar.style.width = '250px';
    sidebar.style.padding = '2rem';
  }

  const closeSideBar = () => {
    sidebar.style.width = '0px';
    sidebar.style.padding = '0';
  }

  let allProjectBtnArr = [];

  const projectSubmitBtnListener = () => {
    let newProjectName = document.querySelector("#addProjectInput").value;
    // Save Project Btn names to local storage
    allProjectBtnArr.push(newProjectName);
    saveBtnToLocalStorage();

    let newProject = createProject(newProjectName);
    addProjectModal.style.display = "none";
    allProjectsContainer.appendChild(newProject);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.printTodoListToDom)();
  };

  const deleteCurrentProjectBtnListener = () => {
    addItemBtn.disabled = false;
    if (currentProjectIndex == 1) {
      allProjects[1] = []; // Default project array. Clearing the array instead of deleteing it.
    } else {
      const currentProjectBtn = document.querySelector(".allProjectsContainer")
        .children[currentProjectIndex - 2];
      currentProjectBtn.remove(); // Remove the project button for the removed project
      allProjects.splice(currentProjectIndex, 1); // Removing the array for deleted project

      allProjectBtnArr.splice(currentProjectIndex - 2, 1);
      saveBtnToLocalStorage();

      (0,_logic__WEBPACK_IMPORTED_MODULE_2__.resetProjectBtnIndex)();
    }
    currentProjectIndex = 1;
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.printTodoListToDom)();
  };

  const saveBtnToLocalStorage = () => {
    let allProjectBtnNamesSerialized = JSON.stringify(allProjectBtnArr);
    localStorage.setItem("storedProjectBtnNames", allProjectBtnNamesSerialized);
  };

  const findTodos = (sortFilter) => {
    currentProjectIndex = 0;
    (0,_logic__WEBPACK_IMPORTED_MODULE_2__.putTodosinArr)(sortFilter);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.printTodoListToDom)();
  };

  // New Project Modal Listners
  const openProjectModal = () => {
    addProjectModal.style.display = "block";
    let projectInput = document.querySelector("#addProjectInput");
    projectInput.value = "";
  };

  // When the user clicks on <span> (x), close the modal
  closeModal.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  });
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
    if (event.target == addProjectModal) {
      addProjectModal.style.display = "none";
    }
  });

  // NEW PROJECT
  // Create new project
  const createProject = (newProjectName) => {
    let newProjectBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_1__.createProjectBtn)(newProjectName);
    (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createNewProjectArr)();
    newProjectBtn.addEventListener("click", function () {
      showProjectList(event);
    });
    changeCurrentProjectIndex(newProjectBtn);
    return newProjectBtn;
  };

  const showProjectList = (event) => {
    let clickedProjectIndex = event.target;
    changeCurrentProjectIndex(clickedProjectIndex);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.printTodoListToDom)(allProjects[currentProjectIndex]);
  };

  const changeCurrentProjectIndex = (newProjectBtn) => {
    return (currentProjectIndex = newProjectBtn.getAttribute("index"));
  };
})();



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDomProject": () => (/* binding */ clearDomProject),
/* harmony export */   "createNewProjectArr": () => (/* binding */ createNewProjectArr),
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem),
/* harmony export */   "fillInPreviousData": () => (/* binding */ fillInPreviousData),
/* harmony export */   "formatDateForUseInNewDate": () => (/* binding */ formatDateForUseInNewDate),
/* harmony export */   "putTodosinArr": () => (/* binding */ putTodosinArr),
/* harmony export */   "resetProjectBtnIndex": () => (/* binding */ resetProjectBtnIndex)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const allListItemsContainer = document.querySelector(".allListItemsContainer");

// FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
// Convert input into an object and add to array
const createTodoItem = (listItem) => {
  let todoItem = {};
  todoItem.title = listItem.children[0].value;
  todoItem.priority = listItem.children[1].children[0].value;
  todoItem.dueDate = dateValue(listItem);
  todoItem.completed = "";
  todoItem.originalProjectIndex = _index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex;
  todoItem.todoListOrder = "";
  return addTodoToCurrentProjectArr(todoItem, listItem);
};

const addTodoToCurrentProjectArr = (todoItem, listItem) => {
  if (!listItem.hasAttribute("value")) {
    const addTodoToCurrentProject = (todoItem) =>
      _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(todoItem);
    addTodoToCurrentProject(todoItem); // add list item object to nested project array
    sortByDate();
  } else {
    let currentIndex = listItem.getAttribute("value");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].splice(currentIndex, 1, todoItem);
    sortByDate();
  }
};

// Sort todo's in order of due date
const sortByDate = () => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].sort(function (a, b) {
    new Date(formatDateForUseInNewDate(a.dueDate)) -
      new Date(formatDateForUseInNewDate(b.dueDate));
  });
};

const dateValue = (listItem) => {
  var hasNumber = /\d/;
  if (hasNumber.test(listItem.children[1].children[1].value) == false) {
    return "No Date";
  } else {
    return formattedDate(listItem);
  }
};

const formattedDate = (listItem) => {
  let dateInput = new Date(listItem.children[1].children[1].value);
  const day = dateInput.getUTCDate();
  const month = dateInput.getUTCMonth() + 1; // Return Value is 0 indexed
  const year = dateInput.getUTCFullYear();
  let fullDate = month + "/" + day + "/" + year;
  return fullDate;
};

// Fill in previous data after edit btn is clicked
const fillInPreviousData = (textInput, prioritySelectInput, dateInput, i) => {
  textInput.value = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].title;
  prioritySelectInput.value = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].priority;
  dateInput.valueAsDate = new Date(
    formatDateForUseInNewDate(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].dueDate)
  );
};

const formatDateForUseInNewDate = (dueDate) => {
  let dateSplitWithComma = dueDate.replaceAll("/", ", ");
  return dateSplitWithComma;
};

const resetProjectBtnIndex = () => {
  // Change project btn's index based on what was deleted
  const allProjectBtns = document.querySelectorAll(".projectNameBtn");
  for (var i = 0; i < allProjectBtns.length; i++) {
    let btnIndex = i + 2;
    allProjectBtns[i].setAttribute("index", btnIndex);
  }
};

// Figure out what we are trying to filter
const putTodosinArr = (sortFilter) => {
  clearTodayThisWeekTodoArr();
  for (var i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
    for (var j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].length; j++) {
      if (sortFilter == "week") {
        createThisWeeksTodoArr(i, j);
      } else if (sortFilter == "today") {
        createTodaysTodosArr(i, j);
      } else if (sortFilter == "completed") {
        createCompletedTodoArr(i, j);
      } else if (sortFilter == "notCompleted") {
        createnotCompletedTodoArr(i, j);
      }
    }
  }
};

// Push filtered todos to allProjects[0]
const createCompletedTodoArr = (i, j) => {
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].completed == true) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(
      JSON.parse(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j]))
    );
    sortByDate();
  }
};

const createnotCompletedTodoArr = (i, j) => {
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].completed != true) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(
      JSON.parse(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j]))
    );
    sortByDate();
  }
};

const createThisWeeksTodoArr = (i, j) => {
  if (
    (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(formatDateForUseInNewDate(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].dueDate)))
  ) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(
      JSON.parse(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j]))
    );
    sortByDate();
  }
};

const createTodaysTodosArr = (i, j) => {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(formatDateForUseInNewDate(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].dueDate)))) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(
      JSON.parse(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j]))
    );
  }
};

const clearTodayThisWeekTodoArr = () => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0] = [];
};

// NEW PROJECTS FUNCTIONS
// Creates a new array to hold new project todo list
const createNewProjectArr = () => {
  let newProjectTodoList = [];
  addProjectToArr(newProjectTodoList);
  return _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects;
};

const addProjectToArr = (project) => _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.push(project);

const clearDomProject = () => {
  allListItemsContainer.innerHTML = "";
};




/***/ }),

/***/ "./src/roboto/Roboto-Black.ttf":
/*!*************************************!*\
  !*** ./src/roboto/Roboto-Black.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a4285847db4a9acb97f.ttf";

/***/ }),

/***/ "./src/roboto/Roboto-Medium.ttf":
/*!**************************************!*\
  !*** ./src/roboto/Roboto-Medium.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7429a63c09f79a1760b0.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0Isc0VBQVM7QUFDM0I7QUFDQSxvQkFBb0Isc0VBQVM7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQWM7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGtEQUFXLENBQUMsMERBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWU7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQVVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsS0Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVFbGVtZW50c0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3JvYm90by9Sb2JvdG8tQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8vUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlIZWFkZXJGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG5cXG4uaGVybyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZWJmMjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggYmxhY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGZsZXg6IDAgMCAxNSU7XFxufVxcblxcbi50b2RvU2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ0bixcXG4jZGVmYXVsdFByb2plY3RCdG4sXFxuLnByb2plY3ROYW1lQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZWJmMjtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XFxuICAgIG1hcmdpbi1sZWZ0OiAtLjVyZW07XFxufVxcblxcbiNhZGRQcm9qZWN0QnRuIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuXFxuLyogSGVybyAqL1xcblxcbi5oZXJvVGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ215SGVhZGVyRm9udCc7XFxufVxcblxcbi5oZXJvSW1nIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdGhpc1dlZWtzVG9kb3M6aG92ZXIsXFxuI3RvZGF5c1RvZG9zOmhvdmVyLFxcbiNjb21wbGV0ZWRUb2Rvczpob3ZlcixcXG4jbm90Q29tcGxldGVkVG9kb3M6aG92ZXIsXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXJBbmRUb2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbiNzaWRlYmFySGVhZGVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NpZGViYXJIZWFkZXIsXFxuLnByb2plY3RzIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlIZWFkZXJGb250JztcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIFRvZG8gU2VjdGlvbiAqL1xcblxcbi50b2RvQW5kQWRkQnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmxpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmc6IC41cmVtIDAgLjVyZW0gMnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTNweCAjNzc3O1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiA2NXZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNoZWNrYm94VG9kb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eUJ0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG9UZXh0Q29udGVudCB7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG59XFxuXFxuLnRvZG9Qcmlvcml0eSB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxufVxcblxcbiNhZGRJdGVtQnRuLCBcXG4jYWRkUHJvamVjdEJ0bixcXG4jZGVsZXRlQ3VycmVudFByb2plY3RCdG4sXFxuI2RlZmF1bHRQcm9qZWN0QnRuLFxcbi5wcm9qZWN0TmFtZUJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbn1cXG5cXG4jYWRkSXRlbUJ0biwgXFxuI2RlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuLFxcbi5saXN0SXRlbUJ0bixcXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xcbiAgICBib3JkZXItY29sb3I6ICNhOWE5YTk7XFxufVxcblxcbiNhZGRJdGVtQnRuQ29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIEJ0bnMgKi9cXG5cXG4uaXRlbVRleHRJbnB1dCB7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4ubGlzdEl0ZW1CdG4sIFxcbiNwcm9qZWN0U3VibWl0QnRuIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLnByaW9yaXR5QnRuQ29udGFpbmVyID4gcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IC0uMnJlbTsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi8qIE5ldyBwcm9qZWN0IG1vZGFsICovXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIH1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWViZjI7XFxuICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogNjAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCA+IGlucHV0IHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgd2lkdGg6IDQwdnc7XFxufVxcblxcbiNwcm9qZWN0U3VibWl0QnRuIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5oYW1idXJnZXJJY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnNpZGViYXJDbG9zZUJ0biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAgIC5saXN0SXRlbSB7XFxuICAgICAgICB3aWR0aDogOTV2dztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2JveFRvZG9Db250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5wcmlvcml0eUJ0bkNvbnRhaW5lciB7XFxuICAgICAgICBnYXA6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtVGV4dElucHV0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgfVxcblxcbiAgICAubGlzdEl0ZW1CdG4ge1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnByaW9yaXR5SW5wdXQsIC50b2RvUHJpb3JpdHkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC8qIE1vYmlsZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cXG4gICAgICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgICAgIHotaW5kZXg6IDA7IC8qIFN0YXkgb24gdG9wICovXFxuICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyQ2xvc2VCdG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xcbiAgICAuc2lkZW5hdiBkaXYge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgfVxcbiAgICBcXG4gICAgLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXFxuICAgIC5zaWRlbmF2IC5jbG9zZWJ0biB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICB9XFxuICBcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3Vy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QjtJQUNwQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQSxnQ0FBZ0M7SUFDaEM7UUFDSSxZQUFZLEVBQUUscUJBQXFCO1FBQ25DLFFBQVEsRUFBRSwwQ0FBMEM7UUFDcEQsZUFBZSxFQUFFLGtCQUFrQjtRQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsT0FBTztRQUNQLGdCQUFnQixFQUFFLDhCQUE4QjtRQUNoRCxpQkFBaUIsRUFBRSxvQ0FBb0M7UUFDdkQsZ0JBQWdCLEVBQUUseURBQXlEO1FBQzNFLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25COztJQUVBLDhCQUE4QjtJQUM5QjtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQSwyREFBMkQ7SUFDM0Q7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015SGVhZGVyRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL3JvYm90by9Sb2JvdG8tQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL3JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gM3JlbTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWViZjI7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmbGV4OiAwIDAgMTUlO1xcbn1cXG5cXG4udG9kb1NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuI2FkZFByb2plY3RCdG4sXFxuI2RlZmF1bHRQcm9qZWN0QnRuLFxcbi5wcm9qZWN0TmFtZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWViZjI7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xcbiAgICBtYXJnaW4tbGVmdDogLS41cmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdEJ0biB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi8qIEhlcm8gKi9cXG5cXG4uaGVyb1RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdteUhlYWRlckZvbnQnO1xcbn1cXG5cXG4uaGVyb0ltZyB7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RoaXNXZWVrc1RvZG9zOmhvdmVyLFxcbiN0b2RheXNUb2Rvczpob3ZlcixcXG4jY29tcGxldGVkVG9kb3M6aG92ZXIsXFxuI25vdENvbXBsZXRlZFRvZG9zOmhvdmVyLFxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyQW5kVG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4jc2lkZWJhckhlYWRlciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNzaWRlYmFySGVhZGVyLFxcbi5wcm9qZWN0cyB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LWZhbWlseTogJ015SGVhZGVyRm9udCc7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBUb2RvIFNlY3Rpb24gKi9cXG5cXG4udG9kb0FuZEFkZEJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5saXN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDJyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC0zcHggIzc3NztcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogNjV2dztcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jaGVja2JveFRvZG9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlCdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvVGV4dENvbnRlbnQge1xcbiAgICBmbGV4LWJhc2lzOiA1MCU7XFxufVxcblxcbi50b2RvUHJpb3JpdHkge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbn1cXG5cXG4jYWRkSXRlbUJ0biwgXFxuI2FkZFByb2plY3RCdG4sXFxuI2RlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuLFxcbiNkZWZhdWx0UHJvamVjdEJ0bixcXG4ucHJvamVjdE5hbWVCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuI2FkZEl0ZW1CdG4sIFxcbiNkZWxldGVDdXJyZW50UHJvamVjdEJ0bixcXG4ubGlzdEl0ZW1CdG4sXFxuI3Byb2plY3RTdWJtaXRCdG4ge1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTlhOWE5O1xcbn1cXG5cXG4jYWRkSXRlbUJ0bkNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBCdG5zICovXFxuXFxuLml0ZW1UZXh0SW5wdXQge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuLmxpc3RJdGVtQnRuLCBcXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5wcmlvcml0eUJ0bkNvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAtLjJyZW07ICovXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBOZXcgcHJvamVjdCBtb2RhbCAqL1xcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICB9XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FlYmYyO1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgPiBpbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VySWNvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyQ2xvc2VCdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgICAubGlzdEl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDk1dnc7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tib3hUb2RvQ29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgfVxcblxcbiAgICAucHJpb3JpdHlCdG5Db250YWluZXIge1xcbiAgICAgICAgZ2FwOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbVRleHRJbnB1dCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICAgICAgd2lkdGg6IDg1dnc7XFxuICAgIH1cXG5cXG4gICAgLmxpc3RJdGVtQnRuIHtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICBmb250LXNpemU6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wcmlvcml0eUlucHV0LCAudG9kb1ByaW9yaXR5IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAvKiBNb2JpbGUgc2lkZSBuYXZpZ2F0aW9uIG1lbnUgKi9cXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyAvKiAxMDAlIEZ1bGwtaGVpZ2h0ICovXFxuICAgICAgICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgICAgICB6LWluZGV4OiAwOyAvKiBTdGF5IG9uIHRvcCAqL1xcbiAgICAgICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAuc2lkZWJhckNsb3NlQnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cXG4gICAgLnNpZGVuYXYgZGl2IHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIH1cXG4gICAgXFxuICAgIC8qIFBvc2l0aW9uIGFuZCBzdHlsZSB0aGUgY2xvc2UgYnV0dG9uICh0b3AgcmlnaHQgY29ybmVyKSAqL1xcbiAgICAuc2lkZW5hdiAuY2xvc2VidG4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgcmlnaHQ6IDI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgfVxcbiAgXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SW5kZXggfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG4vLyBTVFlMSU5HIERJVlMgRlVOQ1RJT05TXG4vLyBUb2RvIGxpc3QgaXRlbSBjb250YWluZXJcbmNvbnN0IGNyZWF0ZVRvZG9Db250YWluZXIgPSAoKSA9PiB7XG4gIGxldCB0b2RvTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3RJdGVtXCIpO1xuICBpZiAoYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0gPT0gXCJcIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGVkaXRMaXN0SXRlbUZvcm1hdCh0b2RvTGlzdEl0ZW0pO1xuICB9XG4gIHJldHVybiB0b2RvTGlzdEl0ZW07XG59O1xuXG4vLyBGVU5DVElPTlMgRk9SIENSRUFUSU5HIElOUFVUU1xuY29uc3QgY3JlYXRlVGV4dElucHV0ID0gKCkgPT4ge1xuICBsZXQgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaXRlbVRleHRJbnB1dFwiKTtcbiAgdGV4dElucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCIyXCIpO1xuICByZXR1cm4gdGV4dElucHV0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0ZUlucHV0ID0gKCkgPT4ge1xuICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZUlucHV0XCIpO1xuICByZXR1cm4gZGF0ZUlucHV0O1xufTtcblxuLy8gQ3JlYXRlcyBwcmlvcml0eSBzZWxlY3QgaW5wdXRcbmNvbnN0IGNyZWF0ZVNlbGVjdCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0QXJyID0gW1wiTG93IFByaW9yaXR5XCIsIFwiTWVkaXVtIFByaW9yaXR5XCIsIFwiSGlnaCBQcmlvcml0eVwiXTtcbiAgLy9DcmVhdGUgYW5kIGFwcGVuZCBzZWxlY3QgbGlzdFxuICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0TGlzdC5pZCA9IFwic2VsZWN0TGlzdFwiO1xuICAvL0NyZWF0ZSBhbmQgYXBwZW5kIHRoZSBvcHRpb25zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBzZWxlY3RBcnJbaV07XG4gICAgb3B0aW9uLnRleHQgPSBzZWxlY3RBcnJbaV07XG4gICAgc2VsZWN0TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG4gIHJldHVybiBzZWxlY3RMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIHJldHVybiBjaGVja2JveDtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ0biA9IChidG5OYW1lKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1CdG5cIiwgYnRuTmFtZSk7XG4gIGJ0bi50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihidG5OYW1lKTtcblxuICByZXR1cm4gYnRuO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IChuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICBsZXQgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0TmFtZTtcbiAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVCdG5cIik7XG4gIG5ld1Byb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgKGFsbFByb2plY3RzLmxlbmd0aCAtIDEpKTtcbiAgcmV0dXJuIG5ld1Byb2plY3RCdG47XG59O1xuXG4vLyBDYXBpdGFsaXplIGZpcnN0IGxldHRlciBmb3IgYnV0dG9uIHRleHRcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuLy8gQ29udmVydHMgdG8gdGV4dCBmb3IgY29uZmlybWVkIHRvZG8gaXRlbVxuY29uc3QgY3JlYXRlVG9kb0Rlc2NyaXB0aW9uID0gKHRvZG9EZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCB0b2RvVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb1RleHRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGVzY3JpcHRpb25cIik7XG4gIHRvZG9UZXh0Q29udGVudC50ZXh0Q29udGVudCA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHRvZG9UZXh0Q29udGVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUR1ZURhdGUgPSAoZHVlRGF0ZSkgPT4ge1xuICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICByZXR1cm4gZHVlRGF0ZVRleHQ7XG59O1xuXG4vLyBDb252ZXJ0cyBjaG9zZW4gdG9kbyBvcHRpb24gZnJvbSBzZWxlY3QgaW5wdXQgdG8gcCBlbGVtZW50XG5jb25zdCBjcmVhdGVUb2RvUHJpb3JpdHlUZXh0ID0gKHRvZG9MaXN0UHJpb3JpdHlUZXh0KSA9PiB7XG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG9Qcmlvcml0eVwiKTtcbiAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb0xpc3RQcmlvcml0eVRleHQ7XG4gIHJldHVybiB0b2RvUHJpb3JpdHk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUb2RvQ29udGFpbmVyLFxuICBjcmVhdGVUZXh0SW5wdXQsXG4gIGNyZWF0ZURhdGVJbnB1dCxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVDaGVja2JveCxcbiAgY3JlYXRlQnRuLFxuICBjcmVhdGVQcm9qZWN0QnRuLFxuICBjcmVhdGVUb2RvRGVzY3JpcHRpb24sXG4gIGNyZWF0ZUR1ZURhdGUsXG4gIGNyZWF0ZVRvZG9Qcmlvcml0eVRleHQsXG59O1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SW5kZXggfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW0sIGZpbGxJblByZXZpb3VzRGF0YSwgY2xlYXJEb21Qcm9qZWN0IH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVRleHRJbnB1dCxcbiAgY3JlYXRlRGF0ZUlucHV0LFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZUNoZWNrYm94LFxuICBjcmVhdGVCdG4sXG4gIGNyZWF0ZVRvZG9EZXNjcmlwdGlvbixcbiAgY3JlYXRlRHVlRGF0ZSxcbiAgY3JlYXRlVG9kb1ByaW9yaXR5VGV4dCxcbiAgY3JlYXRlVG9kb0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNGdW5jdGlvbnMuanNcIjtcblxuY29uc3QgYWxsTGlzdEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxMaXN0SXRlbXNDb250YWluZXJcIik7IC8vIENvbnRhaW5lciBmb3IgdG9kbyBsaXN0IGl0ZW1zXG5cbi8vIEFQUEVORCBUSEUgVE9ETyBMSVNUIFRPIFRIRSBET01cbmNvbnN0IHByaW50VG9kb0xpc3RUb0RvbSA9IChzZWxlY3RlZExpc3RJdGVtID0gdW5kZWZpbmVkKSA9PiB7XG4gIGNsZWFyRG9tUHJvamVjdCgpO1xuICBmb3IgKFxuICAgIHZhciBpID0gMDtcbiAgICBpIDwgT2JqZWN0LmtleXMoYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0pLmxlbmd0aDtcbiAgICBpKytcbiAgKSB7XG4gICAgY29uc3QgdG9kb0xpc3RJdGVtID0gY3JlYXRlVG9kb0NvbnRhaW5lcigpO1xuICAgIHRvZG9MaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBbaV0pO1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLnRvZG9MaXN0T3JkZXIgPSBpO1xuICAgIHRvZG9MaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCk7XG4gICAgaWYgKGkgPT0gc2VsZWN0ZWRMaXN0SXRlbSkge1xuICAgICAgZWRpdExpc3RJdGVtRm9ybWF0KHRvZG9MaXN0SXRlbSwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm1lZExpc3RJdGVtRm9ybWF0KHRvZG9MaXN0SXRlbSwgaSk7XG4gICAgfVxuICB9XG4gIGlmIChhbGxQcm9qZWN0cy5sZW5ndGggPiAyIHx8IGFsbFByb2plY3RzWzFdLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgYWxsUHJvamVjdHNTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkUHJvamVjdHNcIiwgYWxsUHJvamVjdHNTZXJpYWxpemVkKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufTtcblxuY29uc3QgZWRpdExpc3RJdGVtRm9ybWF0ID0gKHRvZG9MaXN0SXRlbSwgaSkgPT4ge1xuICBsZXQgdGV4dElucHV0ID0gY3JlYXRlVGV4dElucHV0KCk7XG5cbiAgLy8gQ3JlYXRlIFNlbGVjdCBpbnB1dCBmb3IgdGFzayBwcmlvcml0eVxuICBsZXQgcHJpb3JpdHlTZWxlY3RJbnB1dCA9IGNyZWF0ZVNlbGVjdCgpO1xuICBwcmlvcml0eVNlbGVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUlucHV0XCIpO1xuXG4gIC8vIENyZWF0ZSBkYXRlIGlucHV0XG4gIGxldCBkYXRlSW5wdXQgPSBjcmVhdGVEYXRlSW5wdXQoKTtcblxuICAvLyBGaWxsIGluIGlucHV0IHRvIHdoYXQgd2FzIHByZXZpb3VzIGVudGVyZWRcbiAgaWYgKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldICE9IHVuZGVmaW5lZCkge1xuICAgIGZpbGxJblByZXZpb3VzRGF0YSh0ZXh0SW5wdXQsIHByaW9yaXR5U2VsZWN0SW5wdXQsIGRhdGVJbnB1dCwgaSk7XG4gIH1cblxuICAvLyBDcmVhdGUgY2FuY2VsIGFuZCBzdWJtaXQgYnRuc1xuICBsZXQgY2FuY2VsQnRuID0gY3JlYXRlQnRuKFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxCdG5MaXN0ZW5lcih0b2RvTGlzdEl0ZW0pO1xuICB9KTtcbiAgbGV0IHN1Ym1pdEJ0biA9IGNyZWF0ZUJ0bihcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc3VibWl0TGlzdEl0ZW0odG9kb0xpc3RJdGVtKTtcbiAgfSk7XG5cbiAgLy8gQ29udGFpbmVyIGZvciBzdHlsaW5nXG4gIGNvbnN0IHByaW9yaXR5QnRuQ29udGFpbmVyID0gY3JlYXRlRWRpdFByaW9yaXR5QnRuQ29udGFpbmVyKFxuICAgIHByaW9yaXR5U2VsZWN0SW5wdXQsXG4gICAgZGF0ZUlucHV0LFxuICAgIGNhbmNlbEJ0bixcbiAgICBzdWJtaXRCdG5cbiAgKTtcblxuICByZXR1cm4gYXBwZW5kRWRpdExpc3RJdGVtVG9Eb20odG9kb0xpc3RJdGVtLCBwcmlvcml0eUJ0bkNvbnRhaW5lciwgdGV4dElucHV0KTtcbn07XG5cbmNvbnN0IGNvbmZpcm1lZExpc3RJdGVtRm9ybWF0ID0gKHRvZG9MaXN0SXRlbSwgaSkgPT4ge1xuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KCk7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS5jb21wbGV0ZWQ7XG5cbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gY3JlYXRlVG9kb0Rlc2NyaXB0aW9uKFxuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLnRpdGxlXG4gICk7XG4gIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGNyZWF0ZVRvZG9Qcmlvcml0eVRleHQoXG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1baV0ucHJpb3JpdHlcbiAgKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUR1ZURhdGUoYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1baV0uZHVlRGF0ZSk7XG4gIC8vIFVzZWQgZm9yIGFwcGx5aW5nIGNoYW5nZXMgdG8gb3JpZ2luYWwgYXJyYXkgd2hlbiBsaXN0IGl0ZW1zIGFyZSBjaGVja2VkIGluIGFsbFByb2plY3RzWzBdXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcbiAgICBcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIsXG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1baV0ub3JpZ2luYWxQcm9qZWN0SW5kZXhcbiAgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFxuICAgIFwidG9kb0xpc3RPcmRlclwiLFxuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLnRvZG9MaXN0T3JkZXJcbiAgKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjaGVja2JveEV2ZW50RnVuYyhldmVudCwgaSk7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBFZGl0IGFuZCBEZWxldGUgQnRuXG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG4oXCJlZGl0XCIpO1xuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0QnRuTGlzdGVuZXIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVCdG4oXCJkZWxldGVcIik7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlTGlzdEl0ZW0pO1xuXG4gIGNvbnN0IGNoZWNrYm94VG9kb0NvbnRhaW5lciA9IGNyZWF0ZUNoZWNrYm94VG9kb0NvbnRhaW5lcihjaGVja2JveCwgdG9kb0Rlc2NyaXB0aW9uKTtcblxuICAvLyBDb250YWluZXIgZm9yIHN0eWxpbmdcbiAgY29uc3QgcHJpb3JpdHlCdG5Db250YWluZXIgPSBjcmVhdGVDb25maXJtZWRQcmlvcml0eUJ0bkNvbnRhaW5lcihcbiAgICB0b2RvUHJpb3JpdHksXG4gICAgZHVlRGF0ZSxcbiAgICBlZGl0QnRuLFxuICAgIGRlbGV0ZUJ0blxuICApO1xuICByZXR1cm4gYXBwZW5kQ29uZmlybWVkTGlzdEl0ZW1Ub0RvbShcbiAgICB0b2RvTGlzdEl0ZW0sXG4gICAgY2hlY2tib3hUb2RvQ29udGFpbmVyLFxuICAgIHByaW9yaXR5QnRuQ29udGFpbmVyXG4gICk7XG59O1xuXG4vLyBQcmlvcml0eSBhbmQgYnV0dG9uIGRpdiBjb250YWluZXIgZm9yIHRvZG8gbGlzdCBpdGVtcyBmb3Igc3R5bGluZ1xuY29uc3QgY3JlYXRlQ2hlY2tib3hUb2RvQ29udGFpbmVyID0gKGNoZWNrYm94LCB0b2RvRGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgY2hlY2tib3hUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWNrYm94VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2JveFRvZG9Db250YWluZXInKVxuICByZXR1cm4gYXBwZW5kQ2hlY2tib3hUb2RvQ29udGFpbmVyKGNoZWNrYm94VG9kb0NvbnRhaW5lciwgY2hlY2tib3gsIHRvZG9EZXNjcmlwdGlvbik7XG59XG5cbmNvbnN0IGFwcGVuZENoZWNrYm94VG9kb0NvbnRhaW5lciA9IChjaGVja2JveFRvZG9Db250YWluZXIsIGNoZWNrYm94LCB0b2RvRGVzY3JpcHRpb24pID0+IHtcbiAgY2hlY2tib3hUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgY2hlY2tib3hUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gIHJldHVybiBjaGVja2JveFRvZG9Db250YWluZXI7XG59XG5cbmNvbnN0IGNyZWF0ZUVkaXRQcmlvcml0eUJ0bkNvbnRhaW5lciA9IChcbiAgcHJpb3JpdHlTZWxlY3RJbnB1dCxcbiAgZGF0ZUlucHV0LFxuICBjYW5jZWxCdG4sXG4gIHN1Ym1pdEJ0blxuKSA9PiB7XG4gIGxldCBwcmlvcml0eUJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUJ0bkNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGFwcGVuZEVkaXRQcmlvcml0eUNvbnRhaW5lcihcbiAgICBwcmlvcml0eUJ0bkNvbnRhaW5lcixcbiAgICBwcmlvcml0eVNlbGVjdElucHV0LFxuICAgIGRhdGVJbnB1dCxcbiAgICBjYW5jZWxCdG4sXG4gICAgc3VibWl0QnRuXG4gICk7XG59O1xuXG5jb25zdCBhcHBlbmRFZGl0UHJpb3JpdHlDb250YWluZXIgPSAoXG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLFxuICBwcmlvcml0eVNlbGVjdElucHV0LFxuICBkYXRlSW5wdXQsXG4gIGNhbmNlbEJ0bixcbiAgc3VibWl0QnRuXG4pID0+IHtcbiAgcHJpb3JpdHlCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3RJbnB1dCk7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIHJldHVybiBwcmlvcml0eUJ0bkNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbmZpcm1lZFByaW9yaXR5QnRuQ29udGFpbmVyID0gKFxuICB0b2RvUHJpb3JpdHksXG4gIGR1ZURhdGUsXG4gIGVkaXRCdG4sXG4gIGRlbGV0ZUJ0blxuKSA9PiB7XG4gIGxldCBwcmlvcml0eUJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eUJ0bkNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGFwcGVuZENvbmZpcm1lZFByaW9yaXR5Q29udGFpbmVyKFxuICAgIHByaW9yaXR5QnRuQ29udGFpbmVyLFxuICAgIHRvZG9Qcmlvcml0eSxcbiAgICBkdWVEYXRlLFxuICAgIGVkaXRCdG4sXG4gICAgZGVsZXRlQnRuXG4gICk7XG59O1xuXG5jb25zdCBhcHBlbmRDb25maXJtZWRQcmlvcml0eUNvbnRhaW5lciA9IChcbiAgcHJpb3JpdHlCdG5Db250YWluZXIsXG4gIHRvZG9Qcmlvcml0eSxcbiAgZHVlRGF0ZSxcbiAgZWRpdEJ0bixcbiAgZGVsZXRlQnRuXG4pID0+IHtcbiAgcHJpb3JpdHlCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcbiAgcHJpb3JpdHlCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICByZXR1cm4gcHJpb3JpdHlCdG5Db250YWluZXI7XG59O1xuXG5jb25zdCBhcHBlbmRFZGl0TGlzdEl0ZW1Ub0RvbSA9IChcbiAgdG9kb0xpc3RJdGVtLFxuICBwcmlvcml0eUJ0bkNvbnRhaW5lcixcbiAgdGV4dElucHV0XG4pID0+IHtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUJ0bkNvbnRhaW5lcik7XG4gIGFsbExpc3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW0pO1xufTtcblxuY29uc3QgYXBwZW5kQ29uZmlybWVkTGlzdEl0ZW1Ub0RvbSA9IChcbiAgdG9kb0xpc3RJdGVtLFxuICBjaGVja2JveFRvZG9Db250YWluZXIsXG4gIHByaW9yaXR5QnRuQ29udGFpbmVyXG4pID0+IHtcbiAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94VG9kb0NvbnRhaW5lcik7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUJ0bkNvbnRhaW5lcik7XG4gIGFsbExpc3RJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW0pO1xufTtcblxuLy8gRHluYW1pYyBCdG4gTGlzdGVuZXIgRnVuY3Rpb25zXG5jb25zdCBzdWJtaXRMaXN0SXRlbSA9IChsaXN0SXRlbSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYWRkSXRlbUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICBjcmVhdGVUb2RvSXRlbShsaXN0SXRlbSk7XG4gIHByaW50VG9kb0xpc3RUb0RvbSgpO1xufTtcblxuY29uc3QgY2FuY2VsQnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBhZGRJdGVtQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIHByaW50VG9kb0xpc3RUb0RvbSgpO1xufTtcblxuY29uc3QgZWRpdEJ0bkxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdEl0ZW0gPVxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gIHByaW50VG9kb0xpc3RUb0RvbShzZWxlY3RlZExpc3RJdGVtKTtcbn07XG5cbmNvbnN0IGRlbGV0ZUxpc3RJdGVtID0gKGV2ZW50KSA9PiB7XG4gIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnNwbGljZShcbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpLFxuICAgIDFcbiAgKTtcbiAgY2xlYXJEb21Qcm9qZWN0KCk7XG4gIHByaW50VG9kb0xpc3RUb0RvbSgpO1xufTtcblxuLy8gQ2hlY2tib3ggRXZlbnQgTGlzdGVuZXJcbmNvbnN0IGNoZWNrYm94RXZlbnRGdW5jID0gKGV2ZW50LCBpKSA9PiB7XG4gIC8vIFVzZWQgZm9yIGFwcGx5aW5nIGNoYW5nZXMgdG8gb3JpZ2luYWwgYXJyYXlcbiAgbGV0IG9yaWdpbmFsUHJvamVjdEluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIpO1xuICBsZXQgdG9kb0xpc3RPcmRlciA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2RvTGlzdE9yZGVyXCIpO1xuICAvLyBVc2VkIGZvciBhZGp1c3RpbmcgbGlzdCBpdGVtIGlmIGl0J3MgaW4gb3JpZ2luYWxQcm9qZWN0WzBdXG4gIGxldCBjdXJyZW50SXRlbU9yZGVyID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgIGNoZWNrZWRDaGVja2JveChvcmlnaW5hbFByb2plY3RJbmRleCwgdG9kb0xpc3RPcmRlciwgY3VycmVudEl0ZW1PcmRlciwgaSk7XG4gICAgcHJpbnRUb2RvTGlzdFRvRG9tKCk7XG4gIH0gZWxzZSB7XG4gICAgbm90Q2hlY2tlZENoZWNrYm94KFxuICAgICAgb3JpZ2luYWxQcm9qZWN0SW5kZXgsXG4gICAgICB0b2RvTGlzdE9yZGVyLFxuICAgICAgY3VycmVudEl0ZW1PcmRlcixcbiAgICAgIGlcbiAgICApO1xuICAgIHByaW50VG9kb0xpc3RUb0RvbSgpO1xuICB9XG59O1xuXG5jb25zdCBjaGVja2VkQ2hlY2tib3ggPSAoXG4gIG9yaWdpbmFsUHJvamVjdEluZGV4LFxuICB0b2RvTGlzdE9yZGVyLFxuICBjdXJyZW50SXRlbU9yZGVyLFxuICBpXG4pID0+IHtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0SW5kZXggPT0gMCkge1xuICAgIGFsbFByb2plY3RzW29yaWdpbmFsUHJvamVjdEluZGV4XVt0b2RvTGlzdE9yZGVyXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIGFsbFByb2plY3RzWzBdW2N1cnJlbnRJdGVtT3JkZXJdLmNvbXBsZXRlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1baV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgbm90Q2hlY2tlZENoZWNrYm94ID0gKFxuICBvcmlnaW5hbFByb2plY3RJbmRleCxcbiAgdG9kb0xpc3RPcmRlcixcbiAgY3VycmVudEl0ZW1PcmRlcixcbiAgaVxuKSA9PiB7XG4gIGlmIChjdXJyZW50UHJvamVjdEluZGV4ID09IDApIHtcbiAgICBhbGxQcm9qZWN0c1tvcmlnaW5hbFByb2plY3RJbmRleF1bdG9kb0xpc3RPcmRlcl0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgYWxsUHJvamVjdHNbMF1bY3VycmVudEl0ZW1PcmRlcl0uY29tcGxldGVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1baV0uY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHByaW50VG9kb0xpc3RUb0RvbSxcbiAgZWRpdExpc3RJdGVtRm9ybWF0LFxuICBzdWJtaXRMaXN0SXRlbSxcbiAgY2FuY2VsQnRuTGlzdGVuZXIsXG4gIGVkaXRCdG5MaXN0ZW5lcixcbiAgZGVsZXRlTGlzdEl0ZW0sXG59O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEJ0biB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzRnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQge1xuICByZXNldFByb2plY3RCdG5JbmRleCxcbiAgY3JlYXRlTmV3UHJvamVjdEFycixcbiAgcHV0VG9kb3NpbkFycixcbn0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IHByaW50VG9kb0xpc3RUb0RvbSwgZWRpdExpc3RJdGVtRm9ybWF0IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbi8vIGFsbFByb2plY3RzIGVtcHR5IGFycmF5cywgMSkgZmlsdGVyZWRUb2RvcyAodG9kYXlzVG9kb3MsIHRoaXNXZWVrc1RvZG9zLCBjb21wbGV0ZWRUb2Rvcywgbm90Q29tcGxldGVkVG9kb3MpXG4vLyAyKSBEZWZhdWx0IHByb2plY3RcbmNvbnN0IGFsbFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9qZWN0c0NvbnRhaW5lclwiKTsgLy8gQ29udGFpbmVyIGZvciBQcm9qZWN0IEJ0bnNcbmxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMTsgLy8gRGVmYXVsdCB0b2RvIGxpc3QgYXJyYXlcbmxldCBhbGxQcm9qZWN0cyA9IFtbXSwgW11dO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IHRvZG9MaXN0TW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hlY2sgZm9yIGxvY2FsIHN0b3JhZ2VcbiAgLy8gSWYgdGhlcmUgaXMgbG9jYWwgc3RvcmFnZSwgcHJpbnQgb3V0IGRlZmF1bHQgdG9kb3NcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmVkUHJvamVjdHNcIikgIT0gbnVsbCkge1xuICAgIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZFByb2plY3RzXCIpKTtcbiAgICBwcmludFRvZG9MaXN0VG9Eb20oKTtcbiAgfVxuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZFByb2plY3RCdG5OYW1lc1wiKSAhPSBudWxsKSB7XG4gICAgbGV0IGFsbFByb2plY3RCdG5OYW1lc0Rlc2VyaWFsaXplZCA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZFByb2plY3RCdG5OYW1lc1wiKVxuICAgICk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0QnRuTmFtZXNEZXNlcmlhbGl6ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bihhbGxQcm9qZWN0QnRuTmFtZXNEZXNlcmlhbGl6ZWRbaV0pO1xuICAgICAgYWxsUHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG4gICAgICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dQcm9qZWN0TGlzdChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVzZXRQcm9qZWN0QnRuSW5kZXgoKTtcbiAgfVxuXG4gIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEl0ZW1CdG5cIik7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RCdG5cIik7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWZhdWx0UHJvamVjdEJ0blwiKTtcbiAgY29uc3QgcHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFN1Ym1pdEJ0blwiKTtcbiAgY29uc3QgZGVsZXRlQ3VycmVudFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2RlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuXCJcbiAgKTtcbiAgY29uc3QgdG9kYXlzVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5c1RvZG9zXCIpO1xuICBjb25zdCB0aGlzV2Vla3NUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhpc1dlZWtzVG9kb3NcIik7XG4gIGNvbnN0IGNvbXBsZXRlZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wbGV0ZWRUb2Rvc1wiKTtcbiAgY29uc3Qgbm90Q29tcGxldGVkVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vdENvbXBsZXRlZFRvZG9zXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RNb2RhbFwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTsgLy8gWCBUaGF0IGNsb3NlcyBtb2RhbFxuICBjb25zdCBoYW1idXJnZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlckljb24nKTsgLy8gT3BlbiBjb2xsYXBzaWJsZSBzaWRlYmFyIGZvciBtb2JpbGVcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gIGNvbnN0IHNpZGViYXJDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyQ2xvc2VCdG4nKTtcblxuICAvLyBCVVRUT04gQ0xJQ0sgRVZFTlQgTElTVEVORVJTXG4gIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRJdGVtQnRuTGlzdGVuZXIoKTtcbiAgfSk7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuUHJvamVjdE1vZGFsKCk7XG4gIH0pO1xuICBwcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdFN1Ym1pdEJ0bkxpc3RlbmVyKCk7XG4gIH0pO1xuICBkZWxldGVDdXJyZW50UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuTGlzdGVuZXIoKTtcbiAgfSk7XG4gIHRvZGF5c1RvZG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmluZFRvZG9zKFwidG9kYXlcIik7XG4gIH0pO1xuICB0aGlzV2Vla3NUb2Rvcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRUb2RvcyhcIndlZWtcIik7XG4gIH0pO1xuICBjb21wbGV0ZWRUb2Rvcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRUb2RvcyhcImNvbXBsZXRlZFwiKTtcbiAgfSk7XG4gIG5vdENvbXBsZXRlZFRvZG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmluZFRvZG9zKFwibm90Q29tcGxldGVkXCIpO1xuICB9KTtcbiAgZGVmYXVsdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzaG93UHJvamVjdExpc3QoZXZlbnQpO1xuICB9KTtcbiAgaGFtYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNob3dTaWRlQmFyKCk7XG4gIH0pO1xuICBzaWRlYmFyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZVNpZGVCYXIoKTtcbiAgfSlcblxuXG4gIC8vIEVWRU5UIExJU1RFTkVSIEZVTkNUSU9OU1xuICAvLyBTdGF0aWMgYnRuIGZ1bmN0aW9uc1xuICBjb25zdCBhZGRJdGVtQnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgYWRkSXRlbUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbVwiKTtcbiAgICBlZGl0TGlzdEl0ZW1Gb3JtYXQobGlzdEl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dTaWRlQmFyID0gKCkgPT4ge1xuICAgIHNpZGViYXIuc3R5bGUud2lkdGggPSAnMjUwcHgnO1xuICAgIHNpZGViYXIuc3R5bGUucGFkZGluZyA9ICcycmVtJztcbiAgfVxuXG4gIGNvbnN0IGNsb3NlU2lkZUJhciA9ICgpID0+IHtcbiAgICBzaWRlYmFyLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgc2lkZWJhci5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICB9XG5cbiAgbGV0IGFsbFByb2plY3RCdG5BcnIgPSBbXTtcblxuICBjb25zdCBwcm9qZWN0U3VibWl0QnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0SW5wdXRcIikudmFsdWU7XG4gICAgLy8gU2F2ZSBQcm9qZWN0IEJ0biBuYW1lcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgYWxsUHJvamVjdEJ0bkFyci5wdXNoKG5ld1Byb2plY3ROYW1lKTtcbiAgICBzYXZlQnRuVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBhbGxQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICBwcmludFRvZG9MaXN0VG9Eb20oKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVDdXJyZW50UHJvamVjdEJ0bkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGFkZEl0ZW1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFByb2plY3RJbmRleCA9PSAxKSB7XG4gICAgICBhbGxQcm9qZWN0c1sxXSA9IFtdOyAvLyBEZWZhdWx0IHByb2plY3QgYXJyYXkuIENsZWFyaW5nIHRoZSBhcnJheSBpbnN0ZWFkIG9mIGRlbGV0ZWluZyBpdC5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbFByb2plY3RzQ29udGFpbmVyXCIpXG4gICAgICAgIC5jaGlsZHJlbltjdXJyZW50UHJvamVjdEluZGV4IC0gMl07XG4gICAgICBjdXJyZW50UHJvamVjdEJ0bi5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSBwcm9qZWN0IGJ1dHRvbiBmb3IgdGhlIHJlbW92ZWQgcHJvamVjdFxuICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGN1cnJlbnRQcm9qZWN0SW5kZXgsIDEpOyAvLyBSZW1vdmluZyB0aGUgYXJyYXkgZm9yIGRlbGV0ZWQgcHJvamVjdFxuXG4gICAgICBhbGxQcm9qZWN0QnRuQXJyLnNwbGljZShjdXJyZW50UHJvamVjdEluZGV4IC0gMiwgMSk7XG4gICAgICBzYXZlQnRuVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgcmVzZXRQcm9qZWN0QnRuSW5kZXgoKTtcbiAgICB9XG4gICAgY3VycmVudFByb2plY3RJbmRleCA9IDE7XG4gICAgcHJpbnRUb2RvTGlzdFRvRG9tKCk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUJ0blRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBhbGxQcm9qZWN0QnRuTmFtZXNTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEJ0bkFycik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRQcm9qZWN0QnRuTmFtZXNcIiwgYWxsUHJvamVjdEJ0bk5hbWVzU2VyaWFsaXplZCk7XG4gIH07XG5cbiAgY29uc3QgZmluZFRvZG9zID0gKHNvcnRGaWx0ZXIpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gMDtcbiAgICBwdXRUb2Rvc2luQXJyKHNvcnRGaWx0ZXIpO1xuICAgIHByaW50VG9kb0xpc3RUb0RvbSgpO1xuICB9O1xuXG4gIC8vIE5ldyBQcm9qZWN0IE1vZGFsIExpc3RuZXJzXG4gIGNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdElucHV0XCIpO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhZGRQcm9qZWN0TW9kYWwpIHtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcblxuICAvLyBORVcgUFJPSkVDVFxuICAvLyBDcmVhdGUgbmV3IHByb2plY3RcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bihuZXdQcm9qZWN0TmFtZSk7XG4gICAgY3JlYXRlTmV3UHJvamVjdEFycigpO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNob3dQcm9qZWN0TGlzdChldmVudCk7XG4gICAgfSk7XG4gICAgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleChuZXdQcm9qZWN0QnRuKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdEJ0bjtcbiAgfTtcblxuICBjb25zdCBzaG93UHJvamVjdExpc3QgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgY2xpY2tlZFByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldDtcbiAgICBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KGNsaWNrZWRQcm9qZWN0SW5kZXgpO1xuICAgIHByaW50VG9kb0xpc3RUb0RvbShhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleCA9IChuZXdQcm9qZWN0QnRuKSA9PiB7XG4gICAgcmV0dXJuIChjdXJyZW50UHJvamVjdEluZGV4ID0gbmV3UHJvamVjdEJ0bi5nZXRBdHRyaWJ1dGUoXCJpbmRleFwiKSk7XG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBhbGxQcm9qZWN0cywgY3VycmVudFByb2plY3RJbmRleCB9OyIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzLCBjdXJyZW50UHJvamVjdEluZGV4IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgYWxsTGlzdEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxMaXN0SXRlbXNDb250YWluZXJcIik7XG5cbi8vIEZVTkNUSU9OUyBGT1IgQ09OVkVSVElORyBWQUxVRVMgRlJPTSBFRElUIFRPIENPTkZJUk1FRCBUT0RPIExJU1QgSVRFTVNcbi8vIENvbnZlcnQgaW5wdXQgaW50byBhbiBvYmplY3QgYW5kIGFkZCB0byBhcnJheVxuY29uc3QgY3JlYXRlVG9kb0l0ZW0gPSAobGlzdEl0ZW0pID0+IHtcbiAgbGV0IHRvZG9JdGVtID0ge307XG4gIHRvZG9JdGVtLnRpdGxlID0gbGlzdEl0ZW0uY2hpbGRyZW5bMF0udmFsdWU7XG4gIHRvZG9JdGVtLnByaW9yaXR5ID0gbGlzdEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udmFsdWU7XG4gIHRvZG9JdGVtLmR1ZURhdGUgPSBkYXRlVmFsdWUobGlzdEl0ZW0pO1xuICB0b2RvSXRlbS5jb21wbGV0ZWQgPSBcIlwiO1xuICB0b2RvSXRlbS5vcmlnaW5hbFByb2plY3RJbmRleCA9IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG4gIHRvZG9JdGVtLnRvZG9MaXN0T3JkZXIgPSBcIlwiO1xuICByZXR1cm4gYWRkVG9kb1RvQ3VycmVudFByb2plY3RBcnIodG9kb0l0ZW0sIGxpc3RJdGVtKTtcbn07XG5cbmNvbnN0IGFkZFRvZG9Ub0N1cnJlbnRQcm9qZWN0QXJyID0gKHRvZG9JdGVtLCBsaXN0SXRlbSkgPT4ge1xuICBpZiAoIWxpc3RJdGVtLmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSB7XG4gICAgY29uc3QgYWRkVG9kb1RvQ3VycmVudFByb2plY3QgPSAodG9kb0l0ZW0pID0+XG4gICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5wdXNoKHRvZG9JdGVtKTtcbiAgICBhZGRUb2RvVG9DdXJyZW50UHJvamVjdCh0b2RvSXRlbSk7IC8vIGFkZCBsaXN0IGl0ZW0gb2JqZWN0IHRvIG5lc3RlZCBwcm9qZWN0IGFycmF5XG4gICAgc29ydEJ5RGF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5zcGxpY2UoY3VycmVudEluZGV4LCAxLCB0b2RvSXRlbSk7XG4gICAgc29ydEJ5RGF0ZSgpO1xuICB9XG59O1xuXG4vLyBTb3J0IHRvZG8ncyBpbiBvcmRlciBvZiBkdWUgZGF0ZVxuY29uc3Qgc29ydEJ5RGF0ZSA9ICgpID0+IHtcbiAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIG5ldyBEYXRlKGZvcm1hdERhdGVGb3JVc2VJbk5ld0RhdGUoYS5kdWVEYXRlKSkgLVxuICAgICAgbmV3IERhdGUoZm9ybWF0RGF0ZUZvclVzZUluTmV3RGF0ZShiLmR1ZURhdGUpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkYXRlVmFsdWUgPSAobGlzdEl0ZW0pID0+IHtcbiAgdmFyIGhhc051bWJlciA9IC9cXGQvO1xuICBpZiAoaGFzTnVtYmVyLnRlc3QobGlzdEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udmFsdWUpID09IGZhbHNlKSB7XG4gICAgcmV0dXJuIFwiTm8gRGF0ZVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlKGxpc3RJdGVtKTtcbiAgfVxufTtcblxuY29uc3QgZm9ybWF0dGVkRGF0ZSA9IChsaXN0SXRlbSkgPT4ge1xuICBsZXQgZGF0ZUlucHV0ID0gbmV3IERhdGUobGlzdEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udmFsdWUpO1xuICBjb25zdCBkYXkgPSBkYXRlSW5wdXQuZ2V0VVRDRGF0ZSgpO1xuICBjb25zdCBtb250aCA9IGRhdGVJbnB1dC5nZXRVVENNb250aCgpICsgMTsgLy8gUmV0dXJuIFZhbHVlIGlzIDAgaW5kZXhlZFxuICBjb25zdCB5ZWFyID0gZGF0ZUlucHV0LmdldFVUQ0Z1bGxZZWFyKCk7XG4gIGxldCBmdWxsRGF0ZSA9IG1vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXI7XG4gIHJldHVybiBmdWxsRGF0ZTtcbn07XG5cbi8vIEZpbGwgaW4gcHJldmlvdXMgZGF0YSBhZnRlciBlZGl0IGJ0biBpcyBjbGlja2VkXG5jb25zdCBmaWxsSW5QcmV2aW91c0RhdGEgPSAodGV4dElucHV0LCBwcmlvcml0eVNlbGVjdElucHV0LCBkYXRlSW5wdXQsIGkpID0+IHtcbiAgdGV4dElucHV0LnZhbHVlID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1baV0udGl0bGU7XG4gIHByaW9yaXR5U2VsZWN0SW5wdXQudmFsdWUgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS5wcmlvcml0eTtcbiAgZGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoXG4gICAgZm9ybWF0RGF0ZUZvclVzZUluTmV3RGF0ZShhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS5kdWVEYXRlKVxuICApO1xufTtcblxuY29uc3QgZm9ybWF0RGF0ZUZvclVzZUluTmV3RGF0ZSA9IChkdWVEYXRlKSA9PiB7XG4gIGxldCBkYXRlU3BsaXRXaXRoQ29tbWEgPSBkdWVEYXRlLnJlcGxhY2VBbGwoXCIvXCIsIFwiLCBcIik7XG4gIHJldHVybiBkYXRlU3BsaXRXaXRoQ29tbWE7XG59O1xuXG5jb25zdCByZXNldFByb2plY3RCdG5JbmRleCA9ICgpID0+IHtcbiAgLy8gQ2hhbmdlIHByb2plY3QgYnRuJ3MgaW5kZXggYmFzZWQgb24gd2hhdCB3YXMgZGVsZXRlZFxuICBjb25zdCBhbGxQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdE5hbWVCdG5cIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsUHJvamVjdEJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYnRuSW5kZXggPSBpICsgMjtcbiAgICBhbGxQcm9qZWN0QnRuc1tpXS5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBidG5JbmRleCk7XG4gIH1cbn07XG5cbi8vIEZpZ3VyZSBvdXQgd2hhdCB3ZSBhcmUgdHJ5aW5nIHRvIGZpbHRlclxuY29uc3QgcHV0VG9kb3NpbkFyciA9IChzb3J0RmlsdGVyKSA9PiB7XG4gIGNsZWFyVG9kYXlUaGlzV2Vla1RvZG9BcnIoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWxsUHJvamVjdHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChzb3J0RmlsdGVyID09IFwid2Vla1wiKSB7XG4gICAgICAgIGNyZWF0ZVRoaXNXZWVrc1RvZG9BcnIoaSwgaik7XG4gICAgICB9IGVsc2UgaWYgKHNvcnRGaWx0ZXIgPT0gXCJ0b2RheVwiKSB7XG4gICAgICAgIGNyZWF0ZVRvZGF5c1RvZG9zQXJyKGksIGopO1xuICAgICAgfSBlbHNlIGlmIChzb3J0RmlsdGVyID09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgY3JlYXRlQ29tcGxldGVkVG9kb0FycihpLCBqKTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEZpbHRlciA9PSBcIm5vdENvbXBsZXRlZFwiKSB7XG4gICAgICAgIGNyZWF0ZW5vdENvbXBsZXRlZFRvZG9BcnIoaSwgaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBQdXNoIGZpbHRlcmVkIHRvZG9zIHRvIGFsbFByb2plY3RzWzBdXG5jb25zdCBjcmVhdGVDb21wbGV0ZWRUb2RvQXJyID0gKGksIGopID0+IHtcbiAgaWYgKGFsbFByb2plY3RzW2ldW2pdLmNvbXBsZXRlZCA9PSB0cnVlKSB7XG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0ucHVzaChcbiAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHNbaV1bal0pKVxuICAgICk7XG4gICAgc29ydEJ5RGF0ZSgpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVub3RDb21wbGV0ZWRUb2RvQXJyID0gKGksIGopID0+IHtcbiAgaWYgKGFsbFByb2plY3RzW2ldW2pdLmNvbXBsZXRlZCAhPSB0cnVlKSB7XG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0ucHVzaChcbiAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHNbaV1bal0pKVxuICAgICk7XG4gICAgc29ydEJ5RGF0ZSgpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUaGlzV2Vla3NUb2RvQXJyID0gKGksIGopID0+IHtcbiAgaWYgKFxuICAgIGlzVGhpc1dlZWsobmV3IERhdGUoZm9ybWF0RGF0ZUZvclVzZUluTmV3RGF0ZShhbGxQcm9qZWN0c1tpXVtqXS5kdWVEYXRlKSkpXG4gICkge1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnB1c2goXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzW2ldW2pdKSlcbiAgICApO1xuICAgIHNvcnRCeURhdGUoKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlVG9kYXlzVG9kb3NBcnIgPSAoaSwgaikgPT4ge1xuICBpZiAoaXNUb2RheShuZXcgRGF0ZShmb3JtYXREYXRlRm9yVXNlSW5OZXdEYXRlKGFsbFByb2plY3RzW2ldW2pdLmR1ZURhdGUpKSkpIHtcbiAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5wdXNoKFxuICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0c1tpXVtqXSkpXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJUb2RheVRoaXNXZWVrVG9kb0FyciA9ICgpID0+IHtcbiAgYWxsUHJvamVjdHNbMF0gPSBbXTtcbn07XG5cbi8vIE5FVyBQUk9KRUNUUyBGVU5DVElPTlNcbi8vIENyZWF0ZXMgYSBuZXcgYXJyYXkgdG8gaG9sZCBuZXcgcHJvamVjdCB0b2RvIGxpc3RcbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3RBcnIgPSAoKSA9PiB7XG4gIGxldCBuZXdQcm9qZWN0VG9kb0xpc3QgPSBbXTtcbiAgYWRkUHJvamVjdFRvQXJyKG5ld1Byb2plY3RUb2RvTGlzdCk7XG4gIHJldHVybiBhbGxQcm9qZWN0cztcbn07XG5cbmNvbnN0IGFkZFByb2plY3RUb0FyciA9IChwcm9qZWN0KSA9PiBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG5jb25zdCBjbGVhckRvbVByb2plY3QgPSAoKSA9PiB7XG4gIGFsbExpc3RJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVG9kb0l0ZW0sXG4gIGZpbGxJblByZXZpb3VzRGF0YSxcbiAgZm9ybWF0RGF0ZUZvclVzZUluTmV3RGF0ZSxcbiAgcmVzZXRQcm9qZWN0QnRuSW5kZXgsXG4gIHB1dFRvZG9zaW5BcnIsXG4gIGNyZWF0ZU5ld1Byb2plY3RBcnIsXG4gIGNsZWFyRG9tUHJvamVjdCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9