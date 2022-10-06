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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyHeaderFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'myFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: #efefef;\n}\n\n.hero {\n    background-color: #a9a9a9;\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    height: 10vh;\n    width: 100vw;\n    font-size: 2rem;\n    color: white;\n    padding-top: 1rem;\n    padding-left: 3rem;\n    padding: 1rem 0 1rem 3rem;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    font-size: large;\n    background-color: #caebf2;\n    box-shadow: 5px 10px black;\n    height: 100vh;\n    padding: 2rem;\n    flex: 0 0 15%;\n}\n\n.todoSection {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: #efefef;\n}\n\n#addProjectBtn,\n#deleteCurrentProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    background-color: #caebf2;\n    border-color: lightgray;\n    width: 10rem;\n    box-shadow: 0 10px 6px -6px #777;\n    margin-left: -.5rem;\n}\n\n#addProjectBtn {\n    margin-top: .5rem;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'MyFont';\n}\n\n/* Hero */\n\n.heroTitle {\n    font-family: 'myHeaderFont';\n}\n\n.heroImg {\n    height: 4rem;\n    border-radius: 10px;\n}\n\n#thisWeeksTodos:hover,\n#todaysTodos:hover,\n#completedTodos:hover,\n#notCompletedTodos:hover,\nbutton:hover {\n    color: #aaa;\n    cursor: pointer;\n}\n\ninput,\nbutton,\nselect {\n    cursor: pointer;\n}\n\n.sidebarAndTodo {\n    display: flex;\n}\n\n/* Sidebar */\n#sidebarHeader {\n    padding-bottom: .5rem;\n    font-size: 1.5rem;\n}\n\n#sidebarHeader,\n.projects {\n    text-decoration: underline;\n    font-family: 'MyHeaderFont';\n}\n\n.projects {\n    margin-top: 2rem;\n    font-size: 1.5rem;\n}\n\n/* Todo Section */\n\n.todoAndAddBtn {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-top: 1rem;\n    border-radius: 20px;\n}\n\n.listItem {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    padding: .5rem 0 .5rem 2rem;\n    border: 2px solid black;\n    box-shadow: 0 10px 6px -3px #777;\n    height: 3rem;\n    width: 65vw;\n    margin-right: 2rem;\n    margin-top: 1rem;\n    gap: 1rem;\n    border-radius: 10px;\n}\n\n.checkboxTodoContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.priorityBtnContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 2rem;\n    align-content: center;\n    gap: 1rem;\n}\n\n.todoTextContent {\n    flex-basis: 50%;\n}\n\n.todoPriority {\n    margin-top: .5rem;\n    margin-right: 4rem;\n}\n\n#addItemBtn, \n#addProjectBtn,\n#deleteCurrentProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2.5rem;\n    width: 8rem;\n    margin-bottom: .3rem;\n    border-radius: 24px;\n}\n\n#addItemBtn, \n.listItemBtn,\n#projectSubmitBtn {\n    box-shadow: 0 10px 6px -6px #777;\n    border-color: #a9a9a9;\n}\n\n#addItemBtnCont {\n    display: flex;\n    flex-direction: row;\n    gap: 2rem;\n    justify-content: center;\n}\n\n/* Btns */\n\n.itemTextInput {\n    width: 20vw;\n}\n\n.listItemBtn, \n#projectSubmitBtn {\n    height: 2rem;\n    width: 4rem;\n}\n\n.priorityBtnContainer > p {\n    display: flex;\n    font-size: medium;\n    /* margin-right: -.2rem; */\n    margin-bottom: .5rem;\n    min-width: fit-content;\n}\n\n.dueDate {\n    display: flex;\n    font-size: medium;\n    margin-right: 2rem;\n    margin-top: .5rem;\n    min-width: fit-content;\n}\n\n/* New project modal */\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n  }\n\n/* Modal Content/Box */\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #caebf2;\n    margin-top: 15%;\n    margin-left: 25%;\n    padding: 10px 10px;\n    border: 1px solid #888;\n    width: 60%; /* Could be more or less, depending on screen size */\n    border-radius: 20px;\n}\n\n/* The Close Button */\n.close {\n    color: #aaa;\n    margin-left: auto;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.modal-content > label {\n    font-size: x-large;\n}\n\n.modal-content > input {\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    width: 40vw;\n}\n\n#projectSubmitBtn {\n    margin-bottom: 1rem;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n.hamburgerIcon {\n    display: none;\n    position: relative;\n    right: 1rem;\n}\n\n.sidebarCloseBtn {\n    display: none;\n}\n\n\n@media screen and (max-width: 480px) {\n\n    .hamburgerIcon {\n        display: block;\n        position: relative;\n        right: 1rem;\n    }\n\n    .listItem {\n        width: 95vw;\n        margin-right: 0;\n        height: 5rem;\n        padding: 0;\n        flex-direction: column;\n    }\n\n    .checkboxTodoContainer {\n        margin-right: auto;\n        margin-left: 1rem;\n        margin-top: 12px;\n    }\n\n    .priorityBtnContainer {\n        gap: .5rem;\n    }\n\n    .itemTextInput {\n        margin-top: 12px;\n        width: 85vw;\n    }\n\n    .listItemBtn {\n        width: 2rem;\n        height: 1.5rem;\n        margin-bottom: 8px;\n        font-size: .5rem;\n    }\n\n    .priorityInput, .todoPriority {\n        margin-left: 12px;\n    }\n    \n    /* Mobile side navigation menu */\n    .sidebar {\n        height: 100%; /* 100% Full-height */\n        width: 0; /* 0 width - change this with JavaScript */\n        position: fixed; /* Stay in place */\n        z-index: 0; /* Stay on top */\n        top: 0; /* Stay at the top */\n        left: 0;\n        overflow: hidden; /* Disable horizontal scroll */\n        padding-top: 60px; /* Place content 60px from the top */\n        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n        padding: 0;\n    }\n\n    .sidebarCloseBtn {\n        display: block;\n        font-size: 2rem;\n    }\n\n    /* The navigation menu links */\n    .sidenav div {\n        transition: 0.3s;\n    }\n    \n    /* Position and style the close button (top right corner) */\n    .sidenav .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n    }\n  \n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'MyHeaderFont';\n    src: url('./roboto/Roboto-Black.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'myFont';\n    src: url('./roboto/Roboto-Medium.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background-color: #efefef;\n}\n\n.hero {\n    background-color: #a9a9a9;\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    height: 10vh;\n    width: 100vw;\n    font-size: 2rem;\n    color: white;\n    padding-top: 1rem;\n    padding-left: 3rem;\n    padding: 1rem 0 1rem 3rem;\n}\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    font-size: large;\n    background-color: #caebf2;\n    box-shadow: 5px 10px black;\n    height: 100vh;\n    padding: 2rem;\n    flex: 0 0 15%;\n}\n\n.todoSection {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    width: 100vw;\n    height: 100vh;\n    background-color: #efefef;\n}\n\n#addProjectBtn,\n#deleteCurrentProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    background-color: #caebf2;\n    border-color: lightgray;\n    width: 10rem;\n    box-shadow: 0 10px 6px -6px #777;\n    margin-left: -.5rem;\n}\n\n#addProjectBtn {\n    margin-top: .5rem;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'MyFont';\n}\n\n/* Hero */\n\n.heroTitle {\n    font-family: 'myHeaderFont';\n}\n\n.heroImg {\n    height: 4rem;\n    border-radius: 10px;\n}\n\n#thisWeeksTodos:hover,\n#todaysTodos:hover,\n#completedTodos:hover,\n#notCompletedTodos:hover,\nbutton:hover {\n    color: #aaa;\n    cursor: pointer;\n}\n\ninput,\nbutton,\nselect {\n    cursor: pointer;\n}\n\n.sidebarAndTodo {\n    display: flex;\n}\n\n/* Sidebar */\n#sidebarHeader {\n    padding-bottom: .5rem;\n    font-size: 1.5rem;\n}\n\n#sidebarHeader,\n.projects {\n    text-decoration: underline;\n    font-family: 'MyHeaderFont';\n}\n\n.projects {\n    margin-top: 2rem;\n    font-size: 1.5rem;\n}\n\n/* Todo Section */\n\n.todoAndAddBtn {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-top: 1rem;\n    border-radius: 20px;\n}\n\n.listItem {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n    padding: .5rem 0 .5rem 2rem;\n    border: 2px solid black;\n    box-shadow: 0 10px 6px -3px #777;\n    height: 3rem;\n    width: 65vw;\n    margin-right: 2rem;\n    margin-top: 1rem;\n    gap: 1rem;\n    border-radius: 10px;\n}\n\n.checkboxTodoContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.priorityBtnContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: 2rem;\n    align-content: center;\n    gap: 1rem;\n}\n\n.todoTextContent {\n    flex-basis: 50%;\n}\n\n.todoPriority {\n    margin-top: .5rem;\n    margin-right: 4rem;\n}\n\n#addItemBtn, \n#addProjectBtn,\n#deleteCurrentProjectBtn,\n#defaultProjectBtn,\n.projectNameBtn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 2.5rem;\n    width: 8rem;\n    margin-bottom: .3rem;\n    border-radius: 24px;\n}\n\n#addItemBtn, \n.listItemBtn,\n#projectSubmitBtn {\n    box-shadow: 0 10px 6px -6px #777;\n    border-color: #a9a9a9;\n}\n\n#addItemBtnCont {\n    display: flex;\n    flex-direction: row;\n    gap: 2rem;\n    justify-content: center;\n}\n\n/* Btns */\n\n.itemTextInput {\n    width: 20vw;\n}\n\n.listItemBtn, \n#projectSubmitBtn {\n    height: 2rem;\n    width: 4rem;\n}\n\n.priorityBtnContainer > p {\n    display: flex;\n    font-size: medium;\n    /* margin-right: -.2rem; */\n    margin-bottom: .5rem;\n    min-width: fit-content;\n}\n\n.dueDate {\n    display: flex;\n    font-size: medium;\n    margin-right: 2rem;\n    margin-top: .5rem;\n    min-width: fit-content;\n}\n\n/* New project modal */\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n  }\n\n/* Modal Content/Box */\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #caebf2;\n    margin-top: 15%;\n    margin-left: 25%;\n    padding: 10px 10px;\n    border: 1px solid #888;\n    width: 60%; /* Could be more or less, depending on screen size */\n    border-radius: 20px;\n}\n\n/* The Close Button */\n.close {\n    color: #aaa;\n    margin-left: auto;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.modal-content > label {\n    font-size: x-large;\n}\n\n.modal-content > input {\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    width: 40vw;\n}\n\n#projectSubmitBtn {\n    margin-bottom: 1rem;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n\n.hamburgerIcon {\n    display: none;\n    position: relative;\n    right: 1rem;\n}\n\n.sidebarCloseBtn {\n    display: none;\n}\n\n\n@media screen and (max-width: 480px) {\n\n    .hamburgerIcon {\n        display: block;\n        position: relative;\n        right: 1rem;\n    }\n\n    .listItem {\n        width: 95vw;\n        margin-right: 0;\n        height: 5rem;\n        padding: 0;\n        flex-direction: column;\n    }\n\n    .checkboxTodoContainer {\n        margin-right: auto;\n        margin-left: 1rem;\n        margin-top: 12px;\n    }\n\n    .priorityBtnContainer {\n        gap: .5rem;\n    }\n\n    .itemTextInput {\n        margin-top: 12px;\n        width: 85vw;\n    }\n\n    .listItemBtn {\n        width: 2rem;\n        height: 1.5rem;\n        margin-bottom: 8px;\n        font-size: .5rem;\n    }\n\n    .priorityInput, .todoPriority {\n        margin-left: 12px;\n    }\n    \n    /* Mobile side navigation menu */\n    .sidebar {\n        height: 100%; /* 100% Full-height */\n        width: 0; /* 0 width - change this with JavaScript */\n        position: fixed; /* Stay in place */\n        z-index: 0; /* Stay on top */\n        top: 0; /* Stay at the top */\n        left: 0;\n        overflow: hidden; /* Disable horizontal scroll */\n        padding-top: 60px; /* Place content 60px from the top */\n        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n        padding: 0;\n    }\n\n    .sidebarCloseBtn {\n        display: block;\n        font-size: 2rem;\n    }\n\n    /* The navigation menu links */\n    .sidenav div {\n        transition: 0.3s;\n    }\n    \n    /* Position and style the close button (top right corner) */\n    .sidenav .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n    }\n  \n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
  newProjectBtn.setAttribute("index", (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length));
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
const printTodoListToDom = (selectedListItem = undefined, selectedListItemId=undefined) => {
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.clearDomProject)();
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].length > 0) {
    for (
      var i = 0;
      i < Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex]).length;
      i++
    ) {
      const todoListItem = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createTodoContainer)();
      todoListItem.setAttribute("value", [i]);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex] = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.sortByDate)(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex])
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex > 0) {
        for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].length; i++) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].todoListOrder = i;
        }
      }
      _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].currentListOrder = i;
      todoListItem.classList.add();
      if (i == selectedListItem) {
        editListItemFormat(todoListItem, i, selectedListItemId);
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
  }
};

const editListItemFormat = (todoListItem, i, selectedListItemId=undefined) => {
  if (selectedListItemId !== undefined) {
    todoListItem.setAttribute("todoId", selectedListItemId)
  }
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
    const addItemBtn = document.querySelector("#addItemBtn");
    addItemBtn.disabled = false;
    cancelBtnListener(todoListItem);
  });
  let submitBtn = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("submit");
  submitBtn.addEventListener("click", function () {
    const addItemBtn = document.querySelector("#addItemBtn");
    addItemBtn.disabled = false;
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
  todoListItem.setAttribute("originalProjectIndex", _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].originalProjectIndex);
  todoListItem.setAttribute("todoId", _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][i].todoId);
  const checkbox = (0,_createElementsFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createCheckbox)();
  let originalProjectIndex;
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex.length > 0) {
    originalProjectIndex = todoListItem.getAttribute("originalProjectIndex")
  } else {
    originalProjectIndex = _index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex;
  }

  // if (todoListItem.getAttribute("originalProjectIndex")) {
  //   originalProjectIndex = todoListItem.getAttribute("originalProjectIndex")
  // } else {
  //   originalProjectIndex = currentProjectIndex;
  // }
  checkbox.checked = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex][i].completed;

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
    checkboxEventFunc(event);
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
  const selectedListItemId = listItem.getAttribute("todoId");
  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(listItem, selectedListItemId);
  printTodoListToDom();
};

const cancelBtnListener = () => {
  printTodoListToDom();
};

const editBtnListener = (event) => {
  const selectedListItemId = event.target.parentNode.parentNode.getAttribute("todoId");
  const selectedListItem =
    event.target.parentNode.parentNode.getAttribute("value");
  printTodoListToDom(selectedListItem, selectedListItemId);
};

const deleteListItem = (event) => {
  const originalProjectIndex = event.target.parentNode.parentNode.getAttribute("originalProjectIndex");
  let todoToBeDeleted = event.target.parentNode.parentNode.getAttribute("todoId")
  const index = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex].findIndex((obj) => obj.todoId === todoToBeDeleted);
  // Delete from original project array when list is filtered
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex].splice(
    index,
    1
  );
  // Delete from project array currently on DOM
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].splice(
    event.target.parentNode.parentNode.getAttribute("value"),
    1
  );
  printTodoListToDom();
};

// Checkbox Event Listener
const checkboxEventFunc = (event) => {
  // Used for applying changes to original array
  const originalProjectIndex = event.target.getAttribute("originalProjectIndex");
  const todoListOrder = event.target.getAttribute("todoListOrder");
  // Used for adjusting list item if it's in originalProject[0]
  if (event.target.checked) {
    checkedCheckbox(originalProjectIndex, todoListOrder);
    printTodoListToDom();
  } else {
    notCheckedCheckbox(
      originalProjectIndex,
      todoListOrder,
    );
    printTodoListToDom();
  }
};

const checkedCheckbox = (
  originalProjectIndex,
  todoListOrder,
) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex][todoListOrder].completed = true;
  if (originalProjectIndex != _index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex) {
    let currentListOrder = event.target.parentNode.parentNode.getAttribute("value");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][currentListOrder].completed = true;
  }
};

const notCheckedCheckbox = (
  originalProjectIndex,
  todoListOrder,
) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex][todoListOrder].completed = false;
  if (originalProjectIndex != _index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex) {
    let currentListOrder = event.target.parentNode.parentNode.getAttribute("value");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex][currentListOrder].completed = false; 
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






// allProjects empty arrays indexes
// 0) filteredTodos (todaysTodos, thisWeeksTodos, completedTodos, notCompletedTodos)
// 1) Default project
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
    // resetProjectBtnIndex();
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
    // resetProjectBtnIndex();
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
    } else if (currentProjectIndex == 0) {
        return
    } else if (currentProjectIndex > 1) {
      const currentProjectBtn = document.querySelector(".allProjectsContainer")
        .children[currentProjectIndex - 2];
      const deletedProjectIndex = currentProjectIndex;
      currentProjectBtn.remove(); // Remove the project button for the removed project
      allProjects.splice(currentProjectIndex, 1); // Removing the array for deleted project

      allProjectBtnArr.splice(currentProjectIndex - 1, 1); // Deleting projectBtn from local storage
      (0,_logic__WEBPACK_IMPORTED_MODULE_2__.resetProjectBtnIndex)(deletedProjectIndex - 2); // Subtracting 2 due to default and filtered arr
      (0,_logic__WEBPACK_IMPORTED_MODULE_2__.resetOriginalProjectIndex)(deletedProjectIndex);
      saveBtnToLocalStorage();
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
/* harmony export */   "resetOriginalProjectIndex": () => (/* binding */ resetOriginalProjectIndex),
/* harmony export */   "resetProjectBtnIndex": () => (/* binding */ resetProjectBtnIndex),
/* harmony export */   "sortByDate": () => (/* binding */ sortByDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





const allListItemsContainer = document.querySelector(".allListItemsContainer");

// FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
// Convert input into an object and add to array
const createTodoItem = (listItem, selectedListItemId=null) => {
  let todoItem = {}; 
  todoItem.title = listItem.children[0].value;
  todoItem.priority = listItem.children[1].children[0].value;
  todoItem.dueDate = dateValue(listItem);
  todoItem.completed = "";
  todoItem.originalProjectIndex = _index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex;
  // todoItem.todoListOrder = allProjects[currentProjectIndex].length;
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex != 0) {
    todoItem.todoId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
    todoItem.todoListOrder = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].length;
  } else {
    todoItem.todoId = selectedListItemId;
    todoItem.todoListOrder = _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[todoItem.originalProjectIndex].todoListOrder;
  }
  return addTodoToCurrentProjectArr(todoItem, listItem);
};

const addTodoToCurrentProjectArr = (todoItem, listItem) => {
  if (!listItem.hasAttribute("todoId")) {
    const addTodoToCurrentProject = (todoItem) =>{
      _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(todoItem);
    }
    addTodoToCurrentProject(todoItem); // add list item object to nested project array
  } else {
    // If todoItem exists, find it and update original project array
    const editedTodo = listItem.getAttribute("todoId")
    for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
      for (let j=0; j<_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].length; j++) {
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].todoId === editedTodo) {
          const index = j;
          const originalProjectIndex = i;
          _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[originalProjectIndex][index] = todoItem;
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.printTodoListToDom)()
        }
      }
    }
  }
};

// // Sort todo's in order of due date
const sortByDate = (currentProjectIndex) => {
  return currentProjectIndex.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(formatDateForUseInNewDate(a.dueDate)) - new Date(formatDateForUseInNewDate(b.dueDate));
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

const resetProjectBtnIndex = (deletedProjectIndex=0) => {
  // Change project btn's index based on what was deleted
  const allProjectBtns = document.querySelector(".allProjectsContainer").children;
  for (var i = deletedProjectIndex; i < allProjectBtns.length; i++) {
    let btnIndex = i + 2;
    allProjectBtns[i].setAttribute("index", btnIndex);
  }
};

const resetOriginalProjectIndex = (deletedProjectIndex) => {
  // Change the originalProjectIndex on todo elements
  // Allows edits and deletes to modify original project when filtered
  for (let i = deletedProjectIndex; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
    for (let j=0; j<_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].length; j++) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].originalProjectIndex = i;
    }
  }
}


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
  }
};

const createnotCompletedTodoArr = (i, j) => {
  if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].completed != true) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(
      JSON.parse(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j]))
    );
  }
};

const createThisWeeksTodoArr = (i, j) => {
  if (
    (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(formatDateForUseInNewDate(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].dueDate)), { weekStartsOn: 0 })
  ) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[_index_js__WEBPACK_IMPORTED_MODULE_0__.currentProjectIndex].push(
      JSON.parse(JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j]))
    );
  }
};

const createTodaysTodosArr = (i, j) => {
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(formatDateForUseInNewDate(_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i][j].dueDate)))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlRWxlbWVudHNGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8vUm9ib3RvLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcm9ib3RvL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015SGVhZGVyRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gM3JlbTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWViZjI7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmbGV4OiAwIDAgMTUlO1xcbn1cXG5cXG4udG9kb1NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuI2FkZFByb2plY3RCdG4sXFxuI2RlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuLFxcbiNkZWZhdWx0UHJvamVjdEJ0bixcXG4ucHJvamVjdE5hbWVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FlYmYyO1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gICAgbWFyZ2luLWxlZnQ6IC0uNXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3RCdG4ge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuXFxuLmhlcm9UaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlIZWFkZXJGb250JztcXG59XFxuXFxuLmhlcm9JbWcge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aGlzV2Vla3NUb2Rvczpob3ZlcixcXG4jdG9kYXlzVG9kb3M6aG92ZXIsXFxuI2NvbXBsZXRlZFRvZG9zOmhvdmVyLFxcbiNub3RDb21wbGV0ZWRUb2Rvczpob3ZlcixcXG5idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhckFuZFRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuI3NpZGViYXJIZWFkZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jc2lkZWJhckhlYWRlcixcXG4ucHJvamVjdHMge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUhlYWRlckZvbnQnO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogVG9kbyBTZWN0aW9uICovXFxuXFxuLnRvZG9BbmRBZGRCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtM3B4ICM3Nzc7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDY1dnc7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tib3hUb2RvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5QnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kb1RleHRDb250ZW50IHtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbn1cXG5cXG4udG9kb1ByaW9yaXR5IHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG59XFxuXFxuI2FkZEl0ZW1CdG4sIFxcbiNhZGRQcm9qZWN0QnRuLFxcbiNkZWxldGVDdXJyZW50UHJvamVjdEJ0bixcXG4jZGVmYXVsdFByb2plY3RCdG4sXFxuLnByb2plY3ROYW1lQnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbiNhZGRJdGVtQnRuLCBcXG4ubGlzdEl0ZW1CdG4sXFxuI3Byb2plY3RTdWJtaXRCdG4ge1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTlhOWE5O1xcbn1cXG5cXG4jYWRkSXRlbUJ0bkNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBCdG5zICovXFxuXFxuLml0ZW1UZXh0SW5wdXQge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuLmxpc3RJdGVtQnRuLCBcXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5wcmlvcml0eUJ0bkNvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAtLjJyZW07ICovXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBOZXcgcHJvamVjdCBtb2RhbCAqL1xcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICB9XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FlYmYyO1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgPiBpbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VySWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyQ2xvc2VCdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgICAuaGFtYnVyZ2VySWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5saXN0SXRlbSB7XFxuICAgICAgICB3aWR0aDogOTV2dztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2JveFRvZG9Db250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5wcmlvcml0eUJ0bkNvbnRhaW5lciB7XFxuICAgICAgICBnYXA6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtVGV4dElucHV0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgfVxcblxcbiAgICAubGlzdEl0ZW1CdG4ge1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnByaW9yaXR5SW5wdXQsIC50b2RvUHJpb3JpdHkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC8qIE1vYmlsZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cXG4gICAgICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgICAgIHotaW5kZXg6IDA7IC8qIFN0YXkgb24gdG9wICovXFxuICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyQ2xvc2VCdG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xcbiAgICAuc2lkZW5hdiBkaXYge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgfVxcbiAgICBcXG4gICAgLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXFxuICAgIC5zaWRlbmF2IC5jbG9zZWJ0biB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICB9XFxuICBcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiwrREFBd0Q7SUFDeEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwrREFBeUQ7SUFDekQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTs7OztJQUlJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQSxTQUFTOztBQUVUO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsWUFBWTtBQUNaO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7SUFLSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUEsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM5Qzs7QUFFRixzQkFBc0I7QUFDdEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0lBQ2hFLG1CQUFtQjtBQUN2Qjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7SUFFSTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtRQUNWLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQSxnQ0FBZ0M7SUFDaEM7UUFDSSxZQUFZLEVBQUUscUJBQXFCO1FBQ25DLFFBQVEsRUFBRSwwQ0FBMEM7UUFDcEQsZUFBZSxFQUFFLGtCQUFrQjtRQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsT0FBTztRQUNQLGdCQUFnQixFQUFFLDhCQUE4QjtRQUNoRCxpQkFBaUIsRUFBRSxvQ0FBb0M7UUFDdkQsZ0JBQWdCLEVBQUUseURBQXlEO1FBQzNFLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25COztJQUVBLDhCQUE4QjtJQUM5QjtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQSwyREFBMkQ7SUFDM0Q7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFdBQVc7UUFDWCxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015SGVhZGVyRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL3JvYm90by9Sb2JvdG8tQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL3JvYm90by9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTlhOWE5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gM3JlbTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWViZjI7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmbGV4OiAwIDAgMTUlO1xcbn1cXG5cXG4udG9kb1NlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG59XFxuXFxuI2FkZFByb2plY3RCdG4sXFxuI2RlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuLFxcbiNkZWZhdWx0UHJvamVjdEJ0bixcXG4ucHJvamVjdE5hbWVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FlYmYyO1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gICAgbWFyZ2luLWxlZnQ6IC0uNXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3RCdG4ge1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG4vKiBIZXJvICovXFxuXFxuLmhlcm9UaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlIZWFkZXJGb250JztcXG59XFxuXFxuLmhlcm9JbWcge1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0aGlzV2Vla3NUb2Rvczpob3ZlcixcXG4jdG9kYXlzVG9kb3M6aG92ZXIsXFxuI2NvbXBsZXRlZFRvZG9zOmhvdmVyLFxcbiNub3RDb21wbGV0ZWRUb2Rvczpob3ZlcixcXG5idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhckFuZFRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuI3NpZGViYXJIZWFkZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jc2lkZWJhckhlYWRlcixcXG4ucHJvamVjdHMge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUhlYWRlckZvbnQnO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogVG9kbyBTZWN0aW9uICovXFxuXFxuLnRvZG9BbmRBZGRCdG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ubGlzdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogLjVyZW0gMCAuNXJlbSAycmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtM3B4ICM3Nzc7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDY1dnc7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tib3hUb2RvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5QnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kb1RleHRDb250ZW50IHtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbn1cXG5cXG4udG9kb1ByaW9yaXR5IHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG59XFxuXFxuI2FkZEl0ZW1CdG4sIFxcbiNhZGRQcm9qZWN0QnRuLFxcbiNkZWxldGVDdXJyZW50UHJvamVjdEJ0bixcXG4jZGVmYXVsdFByb2plY3RCdG4sXFxuLnByb2plY3ROYW1lQnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbiNhZGRJdGVtQnRuLCBcXG4ubGlzdEl0ZW1CdG4sXFxuI3Byb2plY3RTdWJtaXRCdG4ge1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcXG4gICAgYm9yZGVyLWNvbG9yOiAjYTlhOWE5O1xcbn1cXG5cXG4jYWRkSXRlbUJ0bkNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBCdG5zICovXFxuXFxuLml0ZW1UZXh0SW5wdXQge1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuLmxpc3RJdGVtQnRuLCBcXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5wcmlvcml0eUJ0bkNvbnRhaW5lciA+IHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAtLjJyZW07ICovXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBOZXcgcHJvamVjdCBtb2RhbCAqL1xcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICB9XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FlYmYyO1xcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDYwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgPiBpbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4jcHJvamVjdFN1Ym1pdEJ0biB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uaGFtYnVyZ2VySWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyQ2xvc2VCdG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgICAuaGFtYnVyZ2VySWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5saXN0SXRlbSB7XFxuICAgICAgICB3aWR0aDogOTV2dztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGVja2JveFRvZG9Db250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5wcmlvcml0eUJ0bkNvbnRhaW5lciB7XFxuICAgICAgICBnYXA6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtVGV4dElucHV0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgICAgICB3aWR0aDogODV2dztcXG4gICAgfVxcblxcbiAgICAubGlzdEl0ZW1CdG4ge1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnByaW9yaXR5SW5wdXQsIC50b2RvUHJpb3JpdHkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC8qIE1vYmlsZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cXG4gICAgICAgIHdpZHRoOiAwOyAvKiAwIHdpZHRoIC0gY2hhbmdlIHRoaXMgd2l0aCBKYXZhU2NyaXB0ICovXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgICAgIHotaW5kZXg6IDA7IC8qIFN0YXkgb24gdG9wICovXFxuICAgICAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlYmFyQ2xvc2VCdG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xcbiAgICAuc2lkZW5hdiBkaXYge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgfVxcbiAgICBcXG4gICAgLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXFxuICAgIC5zaWRlbmF2IC5jbG9zZWJ0biB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICB9XFxuICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgY3VycmVudFByb2plY3RJbmRleCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbi8vIFNUWUxJTkcgRElWUyBGVU5DVElPTlNcbi8vIFRvZG8gbGlzdCBpdGVtIGNvbnRhaW5lclxuY29uc3QgY3JlYXRlVG9kb0NvbnRhaW5lciA9ICgpID0+IHtcbiAgbGV0IHRvZG9MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9MaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XG4gIGlmIChhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XSA9PSBcIlwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgZWRpdExpc3RJdGVtRm9ybWF0KHRvZG9MaXN0SXRlbSk7XG4gIH1cbiAgcmV0dXJuIHRvZG9MaXN0SXRlbTtcbn07XG5cbi8vIEZVTkNUSU9OUyBGT1IgQ1JFQVRJTkcgSU5QVVRTXG5jb25zdCBjcmVhdGVUZXh0SW5wdXQgPSAoKSA9PiB7XG4gIGxldCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJpdGVtVGV4dElucHV0XCIpO1xuICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjJcIik7XG4gIHJldHVybiB0ZXh0SW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVEYXRlSW5wdXQgPSAoKSA9PiB7XG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJkYXRlSW5wdXRcIik7XG4gIHJldHVybiBkYXRlSW5wdXQ7XG59O1xuXG4vLyBDcmVhdGVzIHByaW9yaXR5IHNlbGVjdCBpbnB1dFxuY29uc3QgY3JlYXRlU2VsZWN0ID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RBcnIgPSBbXCJMb3cgUHJpb3JpdHlcIiwgXCJNZWRpdW0gUHJpb3JpdHlcIiwgXCJIaWdoIFByaW9yaXR5XCJdO1xuICAvL0NyZWF0ZSBhbmQgYXBwZW5kIHNlbGVjdCBsaXN0XG4gIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3RMaXN0LmlkID0gXCJzZWxlY3RMaXN0XCI7XG4gIC8vQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIG9wdGlvbnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHNlbGVjdEFycltpXTtcbiAgICBvcHRpb24udGV4dCA9IHNlbGVjdEFycltpXTtcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdExpc3Q7XG59O1xuXG5jb25zdCBjcmVhdGVDaGVja2JveCA9ICgpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxuY29uc3QgY3JlYXRlQnRuID0gKGJ0bk5hbWUpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJsaXN0SXRlbUJ0blwiLCBidG5OYW1lKTtcbiAgYnRuLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ0bk5hbWUpO1xuXG4gIHJldHVybiBidG47XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gKG5ld1Byb2plY3ROYW1lKSA9PiB7XG4gIGxldCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lO1xuICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZUJ0blwiKTtcbiAgbmV3UHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCAoYWxsUHJvamVjdHMubGVuZ3RoKSk7XG4gIHJldHVybiBuZXdQcm9qZWN0QnRuO1xufTtcblxuLy8gQ2FwaXRhbGl6ZSBmaXJzdCBsZXR0ZXIgZm9yIGJ1dHRvbiB0ZXh0XG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbi8vIENvbnZlcnRzIHRvIHRleHQgZm9yIGNvbmZpcm1lZCB0b2RvIGl0ZW1cbmNvbnN0IGNyZWF0ZVRvZG9EZXNjcmlwdGlvbiA9ICh0b2RvRGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdG9kb1RleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9UZXh0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xuICB0b2RvVGV4dENvbnRlbnQudGV4dENvbnRlbnQgPSB0b2RvRGVzY3JpcHRpb247XG4gIHJldHVybiB0b2RvVGV4dENvbnRlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVEdWVEYXRlID0gKGR1ZURhdGUpID0+IHtcbiAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgcmV0dXJuIGR1ZURhdGVUZXh0O1xufTtcblxuLy8gQ29udmVydHMgY2hvc2VuIHRvZG8gb3B0aW9uIGZyb20gc2VsZWN0IGlucHV0IHRvIHAgZWxlbWVudFxuY29uc3QgY3JlYXRlVG9kb1ByaW9yaXR5VGV4dCA9ICh0b2RvTGlzdFByaW9yaXR5VGV4dCkgPT4ge1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvUHJpb3JpdHlcIik7XG4gIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9MaXN0UHJpb3JpdHlUZXh0O1xuICByZXR1cm4gdG9kb1ByaW9yaXR5O1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVG9kb0NvbnRhaW5lcixcbiAgY3JlYXRlVGV4dElucHV0LFxuICBjcmVhdGVEYXRlSW5wdXQsXG4gIGNyZWF0ZVNlbGVjdCxcbiAgY3JlYXRlQ2hlY2tib3gsXG4gIGNyZWF0ZUJ0bixcbiAgY3JlYXRlUHJvamVjdEJ0bixcbiAgY3JlYXRlVG9kb0Rlc2NyaXB0aW9uLFxuICBjcmVhdGVEdWVEYXRlLFxuICBjcmVhdGVUb2RvUHJpb3JpdHlUZXh0LFxufTtcbiIsImltcG9ydCB7IGFsbFByb2plY3RzLCBjdXJyZW50UHJvamVjdEluZGV4IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtLCBmaWxsSW5QcmV2aW91c0RhdGEsIGNsZWFyRG9tUHJvamVjdCwgc29ydEJ5RGF0ZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQge1xuICBjcmVhdGVUZXh0SW5wdXQsXG4gIGNyZWF0ZURhdGVJbnB1dCxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVDaGVja2JveCxcbiAgY3JlYXRlQnRuLFxuICBjcmVhdGVUb2RvRGVzY3JpcHRpb24sXG4gIGNyZWF0ZUR1ZURhdGUsXG4gIGNyZWF0ZVRvZG9Qcmlvcml0eVRleHQsXG4gIGNyZWF0ZVRvZG9Db250YWluZXIsXG59IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzRnVuY3Rpb25zLmpzXCI7XG5cbmNvbnN0IGFsbExpc3RJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsTGlzdEl0ZW1zQ29udGFpbmVyXCIpOyAvLyBDb250YWluZXIgZm9yIHRvZG8gbGlzdCBpdGVtc1xuXG4vLyBBUFBFTkQgVEhFIFRPRE8gTElTVCBUTyBUSEUgRE9NXG5jb25zdCBwcmludFRvZG9MaXN0VG9Eb20gPSAoc2VsZWN0ZWRMaXN0SXRlbSA9IHVuZGVmaW5lZCwgc2VsZWN0ZWRMaXN0SXRlbUlkPXVuZGVmaW5lZCkgPT4ge1xuICBjbGVhckRvbVByb2plY3QoKTtcbiAgaWYgKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIGkgPSAwO1xuICAgICAgaSA8IE9iamVjdC5rZXlzKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdKS5sZW5ndGg7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0SXRlbSA9IGNyZWF0ZVRvZG9Db250YWluZXIoKTtcbiAgICAgIHRvZG9MaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBbaV0pO1xuICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0gPSBzb3J0QnlEYXRlKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdKVxuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0SW5kZXggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLnRvZG9MaXN0T3JkZXIgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS5jdXJyZW50TGlzdE9yZGVyID0gaTtcbiAgICAgIHRvZG9MaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCk7XG4gICAgICBpZiAoaSA9PSBzZWxlY3RlZExpc3RJdGVtKSB7XG4gICAgICAgIGVkaXRMaXN0SXRlbUZvcm1hdCh0b2RvTGlzdEl0ZW0sIGksIHNlbGVjdGVkTGlzdEl0ZW1JZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtZWRMaXN0SXRlbUZvcm1hdCh0b2RvTGlzdEl0ZW0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID4gMiB8fCBhbGxQcm9qZWN0c1sxXS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgYWxsUHJvamVjdHNTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRQcm9qZWN0c1wiLCBhbGxQcm9qZWN0c1NlcmlhbGl6ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGVkaXRMaXN0SXRlbUZvcm1hdCA9ICh0b2RvTGlzdEl0ZW0sIGksIHNlbGVjdGVkTGlzdEl0ZW1JZD11bmRlZmluZWQpID0+IHtcbiAgaWYgKHNlbGVjdGVkTGlzdEl0ZW1JZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdG9kb0xpc3RJdGVtLnNldEF0dHJpYnV0ZShcInRvZG9JZFwiLCBzZWxlY3RlZExpc3RJdGVtSWQpXG4gIH1cbiAgbGV0IHRleHRJbnB1dCA9IGNyZWF0ZVRleHRJbnB1dCgpO1xuXG4gIC8vIENyZWF0ZSBTZWxlY3QgaW5wdXQgZm9yIHRhc2sgcHJpb3JpdHlcbiAgbGV0IHByaW9yaXR5U2VsZWN0SW5wdXQgPSBjcmVhdGVTZWxlY3QoKTtcbiAgcHJpb3JpdHlTZWxlY3RJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlJbnB1dFwiKTtcblxuICAvLyBDcmVhdGUgZGF0ZSBpbnB1dFxuICBsZXQgZGF0ZUlucHV0ID0gY3JlYXRlRGF0ZUlucHV0KCk7XG5cbiAgLy8gRmlsbCBpbiBpbnB1dCB0byB3aGF0IHdhcyBwcmV2aW91cyBlbnRlcmVkXG4gIGlmIChhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXSAhPSB1bmRlZmluZWQpIHtcbiAgICBmaWxsSW5QcmV2aW91c0RhdGEodGV4dElucHV0LCBwcmlvcml0eVNlbGVjdElucHV0LCBkYXRlSW5wdXQsIGkpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGNhbmNlbCBhbmQgc3VibWl0IGJ0bnNcbiAgbGV0IGNhbmNlbEJ0biA9IGNyZWF0ZUJ0bihcImNhbmNlbFwiKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkSXRlbUJ0blwiKTtcbiAgICBhZGRJdGVtQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY2FuY2VsQnRuTGlzdGVuZXIodG9kb0xpc3RJdGVtKTtcbiAgfSk7XG4gIGxldCBzdWJtaXRCdG4gPSBjcmVhdGVCdG4oXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEl0ZW1CdG5cIik7XG4gICAgYWRkSXRlbUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHN1Ym1pdExpc3RJdGVtKHRvZG9MaXN0SXRlbSk7XG4gIH0pO1xuXG4gIC8vIENvbnRhaW5lciBmb3Igc3R5bGluZ1xuICBjb25zdCBwcmlvcml0eUJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVkaXRQcmlvcml0eUJ0bkNvbnRhaW5lcihcbiAgICBwcmlvcml0eVNlbGVjdElucHV0LFxuICAgIGRhdGVJbnB1dCxcbiAgICBjYW5jZWxCdG4sXG4gICAgc3VibWl0QnRuXG4gICk7XG5cbiAgcmV0dXJuIGFwcGVuZEVkaXRMaXN0SXRlbVRvRG9tKHRvZG9MaXN0SXRlbSwgcHJpb3JpdHlCdG5Db250YWluZXIsIHRleHRJbnB1dCk7XG59O1xuXG5jb25zdCBjb25maXJtZWRMaXN0SXRlbUZvcm1hdCA9ICh0b2RvTGlzdEl0ZW0sIGkpID0+IHtcbiAgdG9kb0xpc3RJdGVtLnNldEF0dHJpYnV0ZShcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIsIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLm9yaWdpbmFsUHJvamVjdEluZGV4KTtcbiAgdG9kb0xpc3RJdGVtLnNldEF0dHJpYnV0ZShcInRvZG9JZFwiLCBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS50b2RvSWQpO1xuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KCk7XG4gIGxldCBvcmlnaW5hbFByb2plY3RJbmRleDtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0SW5kZXgubGVuZ3RoID4gMCkge1xuICAgIG9yaWdpbmFsUHJvamVjdEluZGV4ID0gdG9kb0xpc3RJdGVtLmdldEF0dHJpYnV0ZShcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIpXG4gIH0gZWxzZSB7XG4gICAgb3JpZ2luYWxQcm9qZWN0SW5kZXggPSBjdXJyZW50UHJvamVjdEluZGV4O1xuICB9XG5cbiAgLy8gaWYgKHRvZG9MaXN0SXRlbS5nZXRBdHRyaWJ1dGUoXCJvcmlnaW5hbFByb2plY3RJbmRleFwiKSkge1xuICAvLyAgIG9yaWdpbmFsUHJvamVjdEluZGV4ID0gdG9kb0xpc3RJdGVtLmdldEF0dHJpYnV0ZShcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgb3JpZ2luYWxQcm9qZWN0SW5kZXggPSBjdXJyZW50UHJvamVjdEluZGV4O1xuICAvLyB9XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBhbGxQcm9qZWN0c1tvcmlnaW5hbFByb2plY3RJbmRleF1baV0uY29tcGxldGVkO1xuXG4gIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGNyZWF0ZVRvZG9EZXNjcmlwdGlvbihcbiAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS50aXRsZVxuICApO1xuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBjcmVhdGVUb2RvUHJpb3JpdHlUZXh0KFxuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLnByaW9yaXR5XG4gICk7XG4gIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVEdWVEYXRlKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLmR1ZURhdGUpO1xuICAvLyBVc2VkIGZvciBhcHBseWluZyBjaGFuZ2VzIHRvIG9yaWdpbmFsIGFycmF5IHdoZW4gbGlzdCBpdGVtcyBhcmUgY2hlY2tlZCBpbiBhbGxQcm9qZWN0c1swXVxuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJvcmlnaW5hbFByb2plY3RJbmRleFwiLFxuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLm9yaWdpbmFsUHJvamVjdEluZGV4XG4gICk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcbiAgICBcInRvZG9MaXN0T3JkZXJcIixcbiAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS50b2RvTGlzdE9yZGVyXG4gICk7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY2hlY2tib3hFdmVudEZ1bmMoZXZlbnQpO1xuICB9KTtcblxuICAvLyBDcmVhdGUgRWRpdCBhbmQgRGVsZXRlIEJ0blxuICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnRuKFwiZWRpdFwiKTtcbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdEJ0bkxpc3RlbmVyKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQnRuKFwiZGVsZXRlXCIpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUxpc3RJdGVtKTtcblxuICBjb25zdCBjaGVja2JveFRvZG9Db250YWluZXIgPSBjcmVhdGVDaGVja2JveFRvZG9Db250YWluZXIoY2hlY2tib3gsIHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgLy8gQ29udGFpbmVyIGZvciBzdHlsaW5nXG4gIGNvbnN0IHByaW9yaXR5QnRuQ29udGFpbmVyID0gY3JlYXRlQ29uZmlybWVkUHJpb3JpdHlCdG5Db250YWluZXIoXG4gICAgdG9kb1ByaW9yaXR5LFxuICAgIGR1ZURhdGUsXG4gICAgZWRpdEJ0bixcbiAgICBkZWxldGVCdG5cbiAgKTtcbiAgcmV0dXJuIGFwcGVuZENvbmZpcm1lZExpc3RJdGVtVG9Eb20oXG4gICAgdG9kb0xpc3RJdGVtLFxuICAgIGNoZWNrYm94VG9kb0NvbnRhaW5lcixcbiAgICBwcmlvcml0eUJ0bkNvbnRhaW5lclxuICApO1xufTtcblxuLy8gUHJpb3JpdHkgYW5kIGJ1dHRvbiBkaXYgY29udGFpbmVyIGZvciB0b2RvIGxpc3QgaXRlbXMgZm9yIHN0eWxpbmdcbmNvbnN0IGNyZWF0ZUNoZWNrYm94VG9kb0NvbnRhaW5lciA9IChjaGVja2JveCwgdG9kb0Rlc2NyaXB0aW9uKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGVja2JveFRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hUb2RvQ29udGFpbmVyJylcbiAgcmV0dXJuIGFwcGVuZENoZWNrYm94VG9kb0NvbnRhaW5lcihjaGVja2JveFRvZG9Db250YWluZXIsIGNoZWNrYm94LCB0b2RvRGVzY3JpcHRpb24pO1xufVxuXG5jb25zdCBhcHBlbmRDaGVja2JveFRvZG9Db250YWluZXIgPSAoY2hlY2tib3hUb2RvQ29udGFpbmVyLCBjaGVja2JveCwgdG9kb0Rlc2NyaXB0aW9uKSA9PiB7XG4gIGNoZWNrYm94VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNoZWNrYm94VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICByZXR1cm4gY2hlY2tib3hUb2RvQ29udGFpbmVyO1xufVxuXG5jb25zdCBjcmVhdGVFZGl0UHJpb3JpdHlCdG5Db250YWluZXIgPSAoXG4gIHByaW9yaXR5U2VsZWN0SW5wdXQsXG4gIGRhdGVJbnB1dCxcbiAgY2FuY2VsQnRuLFxuICBzdWJtaXRCdG5cbikgPT4ge1xuICBsZXQgcHJpb3JpdHlCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlCdG5Db250YWluZXJcIik7XG4gIHJldHVybiBhcHBlbmRFZGl0UHJpb3JpdHlDb250YWluZXIoXG4gICAgcHJpb3JpdHlCdG5Db250YWluZXIsXG4gICAgcHJpb3JpdHlTZWxlY3RJbnB1dCxcbiAgICBkYXRlSW5wdXQsXG4gICAgY2FuY2VsQnRuLFxuICAgIHN1Ym1pdEJ0blxuICApO1xufTtcblxuY29uc3QgYXBwZW5kRWRpdFByaW9yaXR5Q29udGFpbmVyID0gKFxuICBwcmlvcml0eUJ0bkNvbnRhaW5lcixcbiAgcHJpb3JpdHlTZWxlY3RJbnB1dCxcbiAgZGF0ZUlucHV0LFxuICBjYW5jZWxCdG4sXG4gIHN1Ym1pdEJ0blxuKSA9PiB7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0SW5wdXQpO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICByZXR1cm4gcHJpb3JpdHlCdG5Db250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDb25maXJtZWRQcmlvcml0eUJ0bkNvbnRhaW5lciA9IChcbiAgdG9kb1ByaW9yaXR5LFxuICBkdWVEYXRlLFxuICBlZGl0QnRuLFxuICBkZWxldGVCdG5cbikgPT4ge1xuICBsZXQgcHJpb3JpdHlCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlCdG5Db250YWluZXJcIik7XG4gIHJldHVybiBhcHBlbmRDb25maXJtZWRQcmlvcml0eUNvbnRhaW5lcihcbiAgICBwcmlvcml0eUJ0bkNvbnRhaW5lcixcbiAgICB0b2RvUHJpb3JpdHksXG4gICAgZHVlRGF0ZSxcbiAgICBlZGl0QnRuLFxuICAgIGRlbGV0ZUJ0blxuICApO1xufTtcblxuY29uc3QgYXBwZW5kQ29uZmlybWVkUHJpb3JpdHlDb250YWluZXIgPSAoXG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLFxuICB0b2RvUHJpb3JpdHksXG4gIGR1ZURhdGUsXG4gIGVkaXRCdG4sXG4gIGRlbGV0ZUJ0blxuKSA9PiB7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gIHByaW9yaXR5QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBwcmlvcml0eUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgcHJpb3JpdHlCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgcmV0dXJuIHByaW9yaXR5QnRuQ29udGFpbmVyO1xufTtcblxuY29uc3QgYXBwZW5kRWRpdExpc3RJdGVtVG9Eb20gPSAoXG4gIHRvZG9MaXN0SXRlbSxcbiAgcHJpb3JpdHlCdG5Db250YWluZXIsXG4gIHRleHRJbnB1dFxuKSA9PiB7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG5Db250YWluZXIpO1xuICBhbGxMaXN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtKTtcbn07XG5cbmNvbnN0IGFwcGVuZENvbmZpcm1lZExpc3RJdGVtVG9Eb20gPSAoXG4gIHRvZG9MaXN0SXRlbSxcbiAgY2hlY2tib3hUb2RvQ29udGFpbmVyLFxuICBwcmlvcml0eUJ0bkNvbnRhaW5lclxuKSA9PiB7XG4gIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja2JveFRvZG9Db250YWluZXIpO1xuICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG5Db250YWluZXIpO1xuICBhbGxMaXN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3RJdGVtKTtcbn07XG5cbi8vIER5bmFtaWMgQnRuIExpc3RlbmVyIEZ1bmN0aW9uc1xuY29uc3Qgc3VibWl0TGlzdEl0ZW0gPSAobGlzdEl0ZW0pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0SXRlbUlkID0gbGlzdEl0ZW0uZ2V0QXR0cmlidXRlKFwidG9kb0lkXCIpO1xuICBjcmVhdGVUb2RvSXRlbShsaXN0SXRlbSwgc2VsZWN0ZWRMaXN0SXRlbUlkKTtcbiAgcHJpbnRUb2RvTGlzdFRvRG9tKCk7XG59O1xuXG5jb25zdCBjYW5jZWxCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgcHJpbnRUb2RvTGlzdFRvRG9tKCk7XG59O1xuXG5jb25zdCBlZGl0QnRuTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0SXRlbUlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJ0b2RvSWRcIik7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdEl0ZW0gPVxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gIHByaW50VG9kb0xpc3RUb0RvbShzZWxlY3RlZExpc3RJdGVtLCBzZWxlY3RlZExpc3RJdGVtSWQpO1xufTtcblxuY29uc3QgZGVsZXRlTGlzdEl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxQcm9qZWN0SW5kZXggPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIpO1xuICBsZXQgdG9kb1RvQmVEZWxldGVkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJ0b2RvSWRcIilcbiAgY29uc3QgaW5kZXggPSBhbGxQcm9qZWN0c1tvcmlnaW5hbFByb2plY3RJbmRleF0uZmluZEluZGV4KChvYmopID0+IG9iai50b2RvSWQgPT09IHRvZG9Ub0JlRGVsZXRlZCk7XG4gIC8vIERlbGV0ZSBmcm9tIG9yaWdpbmFsIHByb2plY3QgYXJyYXkgd2hlbiBsaXN0IGlzIGZpbHRlcmVkXG4gIGFsbFByb2plY3RzW29yaWdpbmFsUHJvamVjdEluZGV4XS5zcGxpY2UoXG4gICAgaW5kZXgsXG4gICAgMVxuICApO1xuICAvLyBEZWxldGUgZnJvbSBwcm9qZWN0IGFycmF5IGN1cnJlbnRseSBvbiBET01cbiAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uc3BsaWNlKFxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksXG4gICAgMVxuICApO1xuICBwcmludFRvZG9MaXN0VG9Eb20oKTtcbn07XG5cbi8vIENoZWNrYm94IEV2ZW50IExpc3RlbmVyXG5jb25zdCBjaGVja2JveEV2ZW50RnVuYyA9IChldmVudCkgPT4ge1xuICAvLyBVc2VkIGZvciBhcHBseWluZyBjaGFuZ2VzIHRvIG9yaWdpbmFsIGFycmF5XG4gIGNvbnN0IG9yaWdpbmFsUHJvamVjdEluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm9yaWdpbmFsUHJvamVjdEluZGV4XCIpO1xuICBjb25zdCB0b2RvTGlzdE9yZGVyID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRvZG9MaXN0T3JkZXJcIik7XG4gIC8vIFVzZWQgZm9yIGFkanVzdGluZyBsaXN0IGl0ZW0gaWYgaXQncyBpbiBvcmlnaW5hbFByb2plY3RbMF1cbiAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgY2hlY2tlZENoZWNrYm94KG9yaWdpbmFsUHJvamVjdEluZGV4LCB0b2RvTGlzdE9yZGVyKTtcbiAgICBwcmludFRvZG9MaXN0VG9Eb20oKTtcbiAgfSBlbHNlIHtcbiAgICBub3RDaGVja2VkQ2hlY2tib3goXG4gICAgICBvcmlnaW5hbFByb2plY3RJbmRleCxcbiAgICAgIHRvZG9MaXN0T3JkZXIsXG4gICAgKTtcbiAgICBwcmludFRvZG9MaXN0VG9Eb20oKTtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tlZENoZWNrYm94ID0gKFxuICBvcmlnaW5hbFByb2plY3RJbmRleCxcbiAgdG9kb0xpc3RPcmRlcixcbikgPT4ge1xuICBhbGxQcm9qZWN0c1tvcmlnaW5hbFByb2plY3RJbmRleF1bdG9kb0xpc3RPcmRlcl0uY29tcGxldGVkID0gdHJ1ZTtcbiAgaWYgKG9yaWdpbmFsUHJvamVjdEluZGV4ICE9IGN1cnJlbnRQcm9qZWN0SW5kZXgpIHtcbiAgICBsZXQgY3VycmVudExpc3RPcmRlciA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF1bY3VycmVudExpc3RPcmRlcl0uY29tcGxldGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qgbm90Q2hlY2tlZENoZWNrYm94ID0gKFxuICBvcmlnaW5hbFByb2plY3RJbmRleCxcbiAgdG9kb0xpc3RPcmRlcixcbikgPT4ge1xuICBhbGxQcm9qZWN0c1tvcmlnaW5hbFByb2plY3RJbmRleF1bdG9kb0xpc3RPcmRlcl0uY29tcGxldGVkID0gZmFsc2U7XG4gIGlmIChvcmlnaW5hbFByb2plY3RJbmRleCAhPSBjdXJyZW50UHJvamVjdEluZGV4KSB7XG4gICAgbGV0IGN1cnJlbnRMaXN0T3JkZXIgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2N1cnJlbnRMaXN0T3JkZXJdLmNvbXBsZXRlZCA9IGZhbHNlOyBcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgcHJpbnRUb2RvTGlzdFRvRG9tLFxuICBlZGl0TGlzdEl0ZW1Gb3JtYXQsXG4gIHN1Ym1pdExpc3RJdGVtLFxuICBjYW5jZWxCdG5MaXN0ZW5lcixcbiAgZWRpdEJ0bkxpc3RlbmVyLFxuICBkZWxldGVMaXN0SXRlbSxcbn07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0QnRuIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNGdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7XG4gIHJlc2V0UHJvamVjdEJ0bkluZGV4LFxuICByZXNldE9yaWdpbmFsUHJvamVjdEluZGV4LFxuICBjcmVhdGVOZXdQcm9qZWN0QXJyLFxuICBwdXRUb2Rvc2luQXJyLFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgcHJpbnRUb2RvTGlzdFRvRG9tLCBlZGl0TGlzdEl0ZW1Gb3JtYXQgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuLy8gYWxsUHJvamVjdHMgZW1wdHkgYXJyYXlzIGluZGV4ZXNcbi8vIDApIGZpbHRlcmVkVG9kb3MgKHRvZGF5c1RvZG9zLCB0aGlzV2Vla3NUb2RvcywgY29tcGxldGVkVG9kb3MsIG5vdENvbXBsZXRlZFRvZG9zKVxuLy8gMSkgRGVmYXVsdCBwcm9qZWN0XG5jb25zdCBhbGxQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsUHJvamVjdHNDb250YWluZXJcIik7IC8vIENvbnRhaW5lciBmb3IgUHJvamVjdCBCdG5zXG5sZXQgY3VycmVudFByb2plY3RJbmRleCA9IDE7IC8vIERlZmF1bHQgdG9kbyBsaXN0IGFycmF5XG5sZXQgYWxsUHJvamVjdHMgPSBbW10sIFtdXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCB0b2RvTGlzdE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENoZWNrIGZvciBsb2NhbCBzdG9yYWdlXG4gIC8vIElmIHRoZXJlIGlzIGxvY2FsIHN0b3JhZ2UsIHByaW50IG91dCBkZWZhdWx0IHRvZG9zXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JlZFByb2plY3RzXCIpICE9IG51bGwpIHtcbiAgICBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdG9yZWRQcm9qZWN0c1wiKSk7XG4gICAgcHJpbnRUb2RvTGlzdFRvRG9tKCk7XG4gIH1cblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdG9yZWRQcm9qZWN0QnRuTmFtZXNcIikgIT0gbnVsbCkge1xuICAgIGxldCBhbGxQcm9qZWN0QnRuTmFtZXNEZXNlcmlhbGl6ZWQgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdG9yZWRQcm9qZWN0QnRuTmFtZXNcIilcbiAgICApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdEJ0bk5hbWVzRGVzZXJpYWxpemVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcHJvamVjdEJ0biA9IGNyZWF0ZVByb2plY3RCdG4oYWxsUHJvamVjdEJ0bk5hbWVzRGVzZXJpYWxpemVkW2ldKTtcbiAgICAgIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93UHJvamVjdExpc3QoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHJlc2V0UHJvamVjdEJ0bkluZGV4KCk7XG4gIH1cblxuICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRJdGVtQnRuXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0QnRuXCIpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVmYXVsdFByb2plY3RCdG5cIik7XG4gIGNvbnN0IHByb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RTdWJtaXRCdG5cIik7XG4gIGNvbnN0IGRlbGV0ZUN1cnJlbnRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNkZWxldGVDdXJyZW50UHJvamVjdEJ0blwiXG4gICk7XG4gIGNvbnN0IHRvZGF5c1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheXNUb2Rvc1wiKTtcbiAgY29uc3QgdGhpc1dlZWtzVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoaXNXZWVrc1RvZG9zXCIpO1xuICBjb25zdCBjb21wbGV0ZWRUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGxldGVkVG9kb3NcIik7XG4gIGNvbnN0IG5vdENvbXBsZXRlZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RDb21wbGV0ZWRUb2Rvc1wiKTtcbiAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0TW9kYWxcIik7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07IC8vIFggVGhhdCBjbG9zZXMgbW9kYWxcbiAgY29uc3QgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXJJY29uJyk7IC8vIE9wZW4gY29sbGFwc2libGUgc2lkZWJhciBmb3IgbW9iaWxlXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICBjb25zdCBzaWRlYmFyQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhckNsb3NlQnRuJyk7XG5cbiAgLy8gQlVUVE9OIENMSUNLIEVWRU5UIExJU1RFTkVSU1xuICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkSXRlbUJ0bkxpc3RlbmVyKCk7XG4gIH0pO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3BlblByb2plY3RNb2RhbCgpO1xuICB9KTtcbiAgcHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RTdWJtaXRCdG5MaXN0ZW5lcigpO1xuICB9KTtcbiAgZGVsZXRlQ3VycmVudFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVDdXJyZW50UHJvamVjdEJ0bkxpc3RlbmVyKCk7XG4gIH0pO1xuICB0b2RheXNUb2Rvcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRUb2RvcyhcInRvZGF5XCIpO1xuICB9KTtcbiAgdGhpc1dlZWtzVG9kb3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmaW5kVG9kb3MoXCJ3ZWVrXCIpO1xuICB9KTtcbiAgY29tcGxldGVkVG9kb3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmaW5kVG9kb3MoXCJjb21wbGV0ZWRcIik7XG4gIH0pO1xuICBub3RDb21wbGV0ZWRUb2Rvcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZpbmRUb2RvcyhcIm5vdENvbXBsZXRlZFwiKTtcbiAgfSk7XG4gIGRlZmF1bHRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2hvd1Byb2plY3RMaXN0KGV2ZW50KTtcbiAgfSk7XG4gIGhhbWJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzaG93U2lkZUJhcigpO1xuICB9KTtcbiAgc2lkZWJhckNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VTaWRlQmFyKCk7XG4gIH0pXG5cblxuICAvLyBFVkVOVCBMSVNURU5FUiBGVU5DVElPTlNcbiAgLy8gU3RhdGljIGJ0biBmdW5jdGlvbnNcbiAgY29uc3QgYWRkSXRlbUJ0bkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGFkZEl0ZW1CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdEl0ZW1cIik7XG4gICAgZWRpdExpc3RJdGVtRm9ybWF0KGxpc3RJdGVtKTtcbiAgfTtcblxuICBjb25zdCBzaG93U2lkZUJhciA9ICgpID0+IHtcbiAgICBzaWRlYmFyLnN0eWxlLndpZHRoID0gJzI1MHB4JztcbiAgICBzaWRlYmFyLnN0eWxlLnBhZGRpbmcgPSAnMnJlbSc7XG4gIH1cblxuICBjb25zdCBjbG9zZVNpZGVCYXIgPSAoKSA9PiB7XG4gICAgc2lkZWJhci5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgIHNpZGViYXIuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgfVxuXG4gIGxldCBhbGxQcm9qZWN0QnRuQXJyID0gW107XG5cbiAgY29uc3QgcHJvamVjdFN1Ym1pdEJ0bkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdElucHV0XCIpLnZhbHVlO1xuICAgIC8vIFNhdmUgUHJvamVjdCBCdG4gbmFtZXMgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGFsbFByb2plY3RCdG5BcnIucHVzaChuZXdQcm9qZWN0TmFtZSk7XG4gICAgLy8gcmVzZXRQcm9qZWN0QnRuSW5kZXgoKTtcbiAgICBzYXZlQnRuVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBhbGxQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICBwcmludFRvZG9MaXN0VG9Eb20oKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVDdXJyZW50UHJvamVjdEJ0bkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGFkZEl0ZW1CdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFByb2plY3RJbmRleCA9PSAxKSB7XG4gICAgICBhbGxQcm9qZWN0c1sxXSA9IFtdOyAvLyBEZWZhdWx0IHByb2plY3QgYXJyYXkuIENsZWFyaW5nIHRoZSBhcnJheSBpbnN0ZWFkIG9mIGRlbGV0ZWluZyBpdC5cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0SW5kZXggPT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQcm9qZWN0SW5kZXggPiAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsUHJvamVjdHNDb250YWluZXJcIilcbiAgICAgICAgLmNoaWxkcmVuW2N1cnJlbnRQcm9qZWN0SW5kZXggLSAyXTtcbiAgICAgIGNvbnN0IGRlbGV0ZWRQcm9qZWN0SW5kZXggPSBjdXJyZW50UHJvamVjdEluZGV4O1xuICAgICAgY3VycmVudFByb2plY3RCdG4ucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgcHJvamVjdCBidXR0b24gZm9yIHRoZSByZW1vdmVkIHByb2plY3RcbiAgICAgIGFsbFByb2plY3RzLnNwbGljZShjdXJyZW50UHJvamVjdEluZGV4LCAxKTsgLy8gUmVtb3ZpbmcgdGhlIGFycmF5IGZvciBkZWxldGVkIHByb2plY3RcblxuICAgICAgYWxsUHJvamVjdEJ0bkFyci5zcGxpY2UoY3VycmVudFByb2plY3RJbmRleCAtIDEsIDEpOyAvLyBEZWxldGluZyBwcm9qZWN0QnRuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgcmVzZXRQcm9qZWN0QnRuSW5kZXgoZGVsZXRlZFByb2plY3RJbmRleCAtIDIpOyAvLyBTdWJ0cmFjdGluZyAyIGR1ZSB0byBkZWZhdWx0IGFuZCBmaWx0ZXJlZCBhcnJcbiAgICAgIHJlc2V0T3JpZ2luYWxQcm9qZWN0SW5kZXgoZGVsZXRlZFByb2plY3RJbmRleCk7XG4gICAgICBzYXZlQnRuVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgY3VycmVudFByb2plY3RJbmRleCA9IDE7XG4gICAgcHJpbnRUb2RvTGlzdFRvRG9tKCk7XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUJ0blRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBhbGxQcm9qZWN0QnRuTmFtZXNTZXJpYWxpemVkID0gSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEJ0bkFycik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRQcm9qZWN0QnRuTmFtZXNcIiwgYWxsUHJvamVjdEJ0bk5hbWVzU2VyaWFsaXplZCk7XG4gIH07XG5cbiAgY29uc3QgZmluZFRvZG9zID0gKHNvcnRGaWx0ZXIpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gMDtcbiAgICBwdXRUb2Rvc2luQXJyKHNvcnRGaWx0ZXIpO1xuICAgIHByaW50VG9kb0xpc3RUb0RvbSgpO1xuICB9O1xuXG4gIC8vIE5ldyBQcm9qZWN0IE1vZGFsIExpc3RuZXJzXG4gIGNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSAoKSA9PiB7XG4gICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdElucHV0XCIpO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhZGRQcm9qZWN0TW9kYWwpIHtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcblxuICAvLyBORVcgUFJPSkVDVFxuICAvLyBDcmVhdGUgbmV3IHByb2plY3RcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCBuZXdQcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bihuZXdQcm9qZWN0TmFtZSk7XG4gICAgY3JlYXRlTmV3UHJvamVjdEFycigpO1xuICAgIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNob3dQcm9qZWN0TGlzdChldmVudCk7XG4gICAgfSk7XG4gICAgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleChuZXdQcm9qZWN0QnRuKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdEJ0bjtcbiAgfTtcblxuICBjb25zdCBzaG93UHJvamVjdExpc3QgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgY2xpY2tlZFByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldDtcbiAgICBjaGFuZ2VDdXJyZW50UHJvamVjdEluZGV4KGNsaWNrZWRQcm9qZWN0SW5kZXgpO1xuICAgIHByaW50VG9kb0xpc3RUb0RvbShhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3RJbmRleCA9IChuZXdQcm9qZWN0QnRuKSA9PiB7XG4gICAgcmV0dXJuIChjdXJyZW50UHJvamVjdEluZGV4ID0gbmV3UHJvamVjdEJ0bi5nZXRBdHRyaWJ1dGUoXCJpbmRleFwiKSk7XG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBhbGxQcm9qZWN0cywgY3VycmVudFByb2plY3RJbmRleCB9OyIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzLCBjdXJyZW50UHJvamVjdEluZGV4IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgcHJpbnRUb2RvTGlzdFRvRG9tIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbmNvbnN0IGFsbExpc3RJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsTGlzdEl0ZW1zQ29udGFpbmVyXCIpO1xuXG4vLyBGVU5DVElPTlMgRk9SIENPTlZFUlRJTkcgVkFMVUVTIEZST00gRURJVCBUTyBDT05GSVJNRUQgVE9ETyBMSVNUIElURU1TXG4vLyBDb252ZXJ0IGlucHV0IGludG8gYW4gb2JqZWN0IGFuZCBhZGQgdG8gYXJyYXlcbmNvbnN0IGNyZWF0ZVRvZG9JdGVtID0gKGxpc3RJdGVtLCBzZWxlY3RlZExpc3RJdGVtSWQ9bnVsbCkgPT4ge1xuICBsZXQgdG9kb0l0ZW0gPSB7fTsgXG4gIHRvZG9JdGVtLnRpdGxlID0gbGlzdEl0ZW0uY2hpbGRyZW5bMF0udmFsdWU7XG4gIHRvZG9JdGVtLnByaW9yaXR5ID0gbGlzdEl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0udmFsdWU7XG4gIHRvZG9JdGVtLmR1ZURhdGUgPSBkYXRlVmFsdWUobGlzdEl0ZW0pO1xuICB0b2RvSXRlbS5jb21wbGV0ZWQgPSBcIlwiO1xuICB0b2RvSXRlbS5vcmlnaW5hbFByb2plY3RJbmRleCA9IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG4gIC8vIHRvZG9JdGVtLnRvZG9MaXN0T3JkZXIgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5sZW5ndGg7XG4gIGlmIChjdXJyZW50UHJvamVjdEluZGV4ICE9IDApIHtcbiAgICB0b2RvSXRlbS50b2RvSWQgPSB1dWlkdjQoKTtcbiAgICB0b2RvSXRlbS50b2RvTGlzdE9yZGVyID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0ubGVuZ3RoO1xuICB9IGVsc2Uge1xuICAgIHRvZG9JdGVtLnRvZG9JZCA9IHNlbGVjdGVkTGlzdEl0ZW1JZDtcbiAgICB0b2RvSXRlbS50b2RvTGlzdE9yZGVyID0gYWxsUHJvamVjdHNbdG9kb0l0ZW0ub3JpZ2luYWxQcm9qZWN0SW5kZXhdLnRvZG9MaXN0T3JkZXI7XG4gIH1cbiAgcmV0dXJuIGFkZFRvZG9Ub0N1cnJlbnRQcm9qZWN0QXJyKHRvZG9JdGVtLCBsaXN0SXRlbSk7XG59O1xuXG5jb25zdCBhZGRUb2RvVG9DdXJyZW50UHJvamVjdEFyciA9ICh0b2RvSXRlbSwgbGlzdEl0ZW0pID0+IHtcbiAgaWYgKCFsaXN0SXRlbS5oYXNBdHRyaWJ1dGUoXCJ0b2RvSWRcIikpIHtcbiAgICBjb25zdCBhZGRUb2RvVG9DdXJyZW50UHJvamVjdCA9ICh0b2RvSXRlbSkgPT57XG4gICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG4gICAgYWRkVG9kb1RvQ3VycmVudFByb2plY3QodG9kb0l0ZW0pOyAvLyBhZGQgbGlzdCBpdGVtIG9iamVjdCB0byBuZXN0ZWQgcHJvamVjdCBhcnJheVxuICB9IGVsc2Uge1xuICAgIC8vIElmIHRvZG9JdGVtIGV4aXN0cywgZmluZCBpdCBhbmQgdXBkYXRlIG9yaWdpbmFsIHByb2plY3QgYXJyYXlcbiAgICBjb25zdCBlZGl0ZWRUb2RvID0gbGlzdEl0ZW0uZ2V0QXR0cmlidXRlKFwidG9kb0lkXCIpXG4gICAgZm9yIChsZXQgaT0wOyBpPGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqPTA7IGo8YWxsUHJvamVjdHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGFsbFByb2plY3RzW2ldW2pdLnRvZG9JZCA9PT0gZWRpdGVkVG9kbykge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gajtcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbFByb2plY3RJbmRleCA9IGk7XG4gICAgICAgICAgYWxsUHJvamVjdHNbb3JpZ2luYWxQcm9qZWN0SW5kZXhdW2luZGV4XSA9IHRvZG9JdGVtO1xuICAgICAgICAgIHByaW50VG9kb0xpc3RUb0RvbSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIC8vIFNvcnQgdG9kbydzIGluIG9yZGVyIG9mIGR1ZSBkYXRlXG5jb25zdCBzb3J0QnlEYXRlID0gKGN1cnJlbnRQcm9qZWN0SW5kZXgpID0+IHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0SW5kZXguc29ydChmdW5jdGlvbihhLGIpe1xuICAgIC8vIFR1cm4geW91ciBzdHJpbmdzIGludG8gZGF0ZXMsIGFuZCB0aGVuIHN1YnRyYWN0IHRoZW1cbiAgICAvLyB0byBnZXQgYSB2YWx1ZSB0aGF0IGlzIGVpdGhlciBuZWdhdGl2ZSwgcG9zaXRpdmUsIG9yIHplcm8uXG4gICAgcmV0dXJuIG5ldyBEYXRlKGZvcm1hdERhdGVGb3JVc2VJbk5ld0RhdGUoYS5kdWVEYXRlKSkgLSBuZXcgRGF0ZShmb3JtYXREYXRlRm9yVXNlSW5OZXdEYXRlKGIuZHVlRGF0ZSkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRhdGVWYWx1ZSA9IChsaXN0SXRlbSkgPT4ge1xuICB2YXIgaGFzTnVtYmVyID0gL1xcZC87XG4gIGlmIChoYXNOdW1iZXIudGVzdChsaXN0SXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS52YWx1ZSkgPT0gZmFsc2UpIHtcbiAgICByZXR1cm4gXCJObyBEYXRlXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGUobGlzdEl0ZW0pO1xuICB9XG59O1xuXG5jb25zdCBmb3JtYXR0ZWREYXRlID0gKGxpc3RJdGVtKSA9PiB7XG4gIGxldCBkYXRlSW5wdXQgPSBuZXcgRGF0ZShsaXN0SXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS52YWx1ZSk7XG4gIGNvbnN0IGRheSA9IGRhdGVJbnB1dC5nZXRVVENEYXRlKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZUlucHV0LmdldFVUQ01vbnRoKCkgKyAxOyAvLyBSZXR1cm4gVmFsdWUgaXMgMCBpbmRleGVkXG4gIGNvbnN0IHllYXIgPSBkYXRlSW5wdXQuZ2V0VVRDRnVsbFllYXIoKTtcbiAgbGV0IGZ1bGxEYXRlID0gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcjtcbiAgcmV0dXJuIGZ1bGxEYXRlO1xufTtcblxuLy8gRmlsbCBpbiBwcmV2aW91cyBkYXRhIGFmdGVyIGVkaXQgYnRuIGlzIGNsaWNrZWRcbmNvbnN0IGZpbGxJblByZXZpb3VzRGF0YSA9ICh0ZXh0SW5wdXQsIHByaW9yaXR5U2VsZWN0SW5wdXQsIGRhdGVJbnB1dCwgaSkgPT4ge1xuICB0ZXh0SW5wdXQudmFsdWUgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XVtpXS50aXRsZTtcbiAgcHJpb3JpdHlTZWxlY3RJbnB1dC52YWx1ZSA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLnByaW9yaXR5O1xuICBkYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZShcbiAgICBmb3JtYXREYXRlRm9yVXNlSW5OZXdEYXRlKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdW2ldLmR1ZURhdGUpXG4gICk7XG59O1xuXG5jb25zdCBmb3JtYXREYXRlRm9yVXNlSW5OZXdEYXRlID0gKGR1ZURhdGUpID0+IHtcbiAgbGV0IGRhdGVTcGxpdFdpdGhDb21tYSA9IGR1ZURhdGUucmVwbGFjZUFsbChcIi9cIiwgXCIsIFwiKTtcbiAgcmV0dXJuIGRhdGVTcGxpdFdpdGhDb21tYTtcbn07XG5cbmNvbnN0IHJlc2V0UHJvamVjdEJ0bkluZGV4ID0gKGRlbGV0ZWRQcm9qZWN0SW5kZXg9MCkgPT4ge1xuICAvLyBDaGFuZ2UgcHJvamVjdCBidG4ncyBpbmRleCBiYXNlZCBvbiB3aGF0IHdhcyBkZWxldGVkXG4gIGNvbnN0IGFsbFByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxQcm9qZWN0c0NvbnRhaW5lclwiKS5jaGlsZHJlbjtcbiAgZm9yICh2YXIgaSA9IGRlbGV0ZWRQcm9qZWN0SW5kZXg7IGkgPCBhbGxQcm9qZWN0QnRucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBidG5JbmRleCA9IGkgKyAyO1xuICAgIGFsbFByb2plY3RCdG5zW2ldLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGJ0bkluZGV4KTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRPcmlnaW5hbFByb2plY3RJbmRleCA9IChkZWxldGVkUHJvamVjdEluZGV4KSA9PiB7XG4gIC8vIENoYW5nZSB0aGUgb3JpZ2luYWxQcm9qZWN0SW5kZXggb24gdG9kbyBlbGVtZW50c1xuICAvLyBBbGxvd3MgZWRpdHMgYW5kIGRlbGV0ZXMgdG8gbW9kaWZ5IG9yaWdpbmFsIHByb2plY3Qgd2hlbiBmaWx0ZXJlZFxuICBmb3IgKGxldCBpID0gZGVsZXRlZFByb2plY3RJbmRleDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaj0wOyBqPGFsbFByb2plY3RzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBhbGxQcm9qZWN0c1tpXVtqXS5vcmlnaW5hbFByb2plY3RJbmRleCA9IGk7XG4gICAgfVxuICB9XG59XG5cblxuLy8gRmlndXJlIG91dCB3aGF0IHdlIGFyZSB0cnlpbmcgdG8gZmlsdGVyXG5jb25zdCBwdXRUb2Rvc2luQXJyID0gKHNvcnRGaWx0ZXIpID0+IHtcbiAgY2xlYXJUb2RheVRoaXNXZWVrVG9kb0FycigpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBhbGxQcm9qZWN0c1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHNvcnRGaWx0ZXIgPT0gXCJ3ZWVrXCIpIHtcbiAgICAgICAgY3JlYXRlVGhpc1dlZWtzVG9kb0FycihpLCBqKTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEZpbHRlciA9PSBcInRvZGF5XCIpIHtcbiAgICAgICAgY3JlYXRlVG9kYXlzVG9kb3NBcnIoaSwgaik7XG4gICAgICB9IGVsc2UgaWYgKHNvcnRGaWx0ZXIgPT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgICBjcmVhdGVDb21wbGV0ZWRUb2RvQXJyKGksIGopO1xuICAgICAgfSBlbHNlIGlmIChzb3J0RmlsdGVyID09IFwibm90Q29tcGxldGVkXCIpIHtcbiAgICAgICAgY3JlYXRlbm90Q29tcGxldGVkVG9kb0FycihpLCBqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIFB1c2ggZmlsdGVyZWQgdG9kb3MgdG8gYWxsUHJvamVjdHNbMF1cbmNvbnN0IGNyZWF0ZUNvbXBsZXRlZFRvZG9BcnIgPSAoaSwgaikgPT4ge1xuICBpZiAoYWxsUHJvamVjdHNbaV1bal0uY29tcGxldGVkID09IHRydWUpIHtcbiAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5wdXNoKFxuICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0c1tpXVtqXSkpXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlbm90Q29tcGxldGVkVG9kb0FyciA9IChpLCBqKSA9PiB7XG4gIGlmIChhbGxQcm9qZWN0c1tpXVtqXS5jb21wbGV0ZWQgIT0gdHJ1ZSkge1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnB1c2goXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzW2ldW2pdKSlcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUaGlzV2Vla3NUb2RvQXJyID0gKGksIGopID0+IHtcbiAgaWYgKFxuICAgIGlzVGhpc1dlZWsobmV3IERhdGUoZm9ybWF0RGF0ZUZvclVzZUluTmV3RGF0ZShhbGxQcm9qZWN0c1tpXVtqXS5kdWVEYXRlKSksIHsgd2Vla1N0YXJ0c09uOiAwIH0pXG4gICkge1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnB1c2goXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzW2ldW2pdKSlcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUb2RheXNUb2Rvc0FyciA9IChpLCBqKSA9PiB7XG4gIGlmIChpc1RvZGF5KG5ldyBEYXRlKGZvcm1hdERhdGVGb3JVc2VJbk5ld0RhdGUoYWxsUHJvamVjdHNbaV1bal0uZHVlRGF0ZSkpKSkge1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnB1c2goXG4gICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzW2ldW2pdKSlcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBjbGVhclRvZGF5VGhpc1dlZWtUb2RvQXJyID0gKCkgPT4ge1xuICBhbGxQcm9qZWN0c1swXSA9IFtdO1xufTtcblxuLy8gTkVXIFBST0pFQ1RTIEZVTkNUSU9OU1xuLy8gQ3JlYXRlcyBhIG5ldyBhcnJheSB0byBob2xkIG5ldyBwcm9qZWN0IHRvZG8gbGlzdFxuY29uc3QgY3JlYXRlTmV3UHJvamVjdEFyciA9ICgpID0+IHtcbiAgbGV0IG5ld1Byb2plY3RUb2RvTGlzdCA9IFtdO1xuICBhZGRQcm9qZWN0VG9BcnIobmV3UHJvamVjdFRvZG9MaXN0KTtcbiAgcmV0dXJuIGFsbFByb2plY3RzO1xufTtcblxuY29uc3QgYWRkUHJvamVjdFRvQXJyID0gKHByb2plY3QpID0+IGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbmNvbnN0IGNsZWFyRG9tUHJvamVjdCA9ICgpID0+IHtcbiAgYWxsTGlzdEl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUb2RvSXRlbSxcbiAgZmlsbEluUHJldmlvdXNEYXRhLFxuICBmb3JtYXREYXRlRm9yVXNlSW5OZXdEYXRlLFxuICByZXNldFByb2plY3RCdG5JbmRleCxcbiAgcHV0VG9kb3NpbkFycixcbiAgY3JlYXRlTmV3UHJvamVjdEFycixcbiAgY2xlYXJEb21Qcm9qZWN0LFxuICBzb3J0QnlEYXRlLFxuICByZXNldE9yaWdpbmFsUHJvamVjdEluZGV4LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=