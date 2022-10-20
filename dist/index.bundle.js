"use strict";
(self["webpackChunkcapstone_project_0x02"] = self["webpackChunkcapstone_project_0x02"] || []).push([["index"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-family: 'Nunito Sans', sans-serif;\n  background-color: hsl(207, 26%, 17%);\n  color: hsl(0, 0%, 100%);\n}\n\nheader {\n  background-color: hsl(209, 23%, 22%);\n  display: flex;\n  padding: 1% 10%;\n  justify-content: space-between;\n}\n\nheader h2 {\n  font-size: 30px;\n  letter-spacing: 2px;\n}\n\n#logo {\n  width: 90px;\n  height: 90px;\n}\n\n.like {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n\n.like:active {\n  width: 50px;\n  height: 50px;\n}\n\n.likes {\n  font-size: 14px;\n}\n\n.img-holder {\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nul {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 0 auto;\n  /* gap: 4rem 3.5rem; */\n}\n\n#countries {\n  display: flex;\n  align-self: center;\n  gap: 1rem;\n  align-items: center;\n}\n\narticle h2 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n#countries h2 {\n  padding-bottom: 2px;\n  border-bottom: 3px solid gray;\n  font-size: 25px;\n  margin-top: 2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.8rem;\n  background-color: hsl(209, 23%, 22%);\n  border-radius: 8px;\n  width: 300px;\n}\n\n.comment-btn {\n  padding: 2% 2%;\n  margin-bottom: 5%;\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  box-shadow: 1px 1.5px 3px #000;\n  background-color: hsl(207, 36%, 37%);\n  align-self: center;\n  border-radius: 5%;\n  color: #fff;\n  position: relative;\n  bottom: 0;\n}\n\narticle h3 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 23px;\n}\n\narticle span {\n  font-weight: 300;\n  font-size: 14px;\n}\n\nfooter {\n  width: 100%;\n  align-self: center;\n  border-radius: 0.5%;\n  border: 1px solid black;\n  background-color: hsl(209, 23%, 22%);\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.button1,\n#search {\n  width: 30%;\n  padding: 0.7% 2.5%;\n  border-radius: 8px;\n  border: 1px solid hsl(207, 26%, 17%);\n  background-size: 30px 25px;\n  background-repeat: no-repeat;\n  background-position: 3% center;\n  padding-left: 50px;\n  background-color: #fff;\n}\n\n#search {\n  background-color: #fff;\n}\n\n/* Pop up Code  */\n#popup-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#name-input {\n  width: 20em;\n  height: 2rem;\n}\n\n.popup-window {\n  top: 15px;\n  padding: 10px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  background-color: hsl(207, 26%, 17%);\n  position: absolute;\n  width: 80%;\n  align-self: center;\n  left: 80px;\n}\n\n.side-bars {\n  display: flex;\n  justify-content: space-between;\n  gap: 50px;\n  width: 90%;\n  padding: 40px;\n}\n\n.details {\n  display: flex;\n  text-align: justify;\n  gap: 50px;\n  padding: 20px;\n}\n\n.left-block,\n.right-block {\n  text-align: left;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n}\n\n.comment-details {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10rem;\n  align-items: center;\n}\n\n.comment-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 10px;\n}\n\n.form {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: flex-start;\n  border: #fff 1px solid;\n  padding: 10px;\n}\n\n.fa-x {\n  display: flex;\n  position: absolute;\n  padding-right: 10px;\n  top: 5px;\n  font-size: 30px;\n  font-weight: 1000;\n  margin-bottom: 10px;\n  align-self: flex-end;\n}\n\n.fa-x:hover {\n  color: red;\n}\n\n#comment-btn {\n  display: block;\n  color: blue;\n  background-color: aqua;\n  width: 12rem;\n  height: 2rem;\n  font-size: 18px;\n}\n\n.popUp-img {\n  width: 400px;\n  height: 400px;\n  background-color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-family: 'Nunito Sans', sans-serif;\n  background-color: hsl(207, 26%, 17%);\n  color: hsl(0, 0%, 100%);\n}\n\nheader {\n  background-color: hsl(209, 23%, 22%);\n  display: flex;\n  padding: 1% 10%;\n  justify-content: space-between;\n}\n\nheader h2 {\n  font-size: 30px;\n  letter-spacing: 2px;\n}\n\n#logo {\n  width: 90px;\n  height: 90px;\n}\n\n.like {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n\n.like:active {\n  width: 50px;\n  height: 50px;\n}\n\n.likes {\n  font-size: 14px;\n}\n\n.img-holder {\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nul {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 0 auto;\n  /* gap: 4rem 3.5rem; */\n}\n\n#countries {\n  display: flex;\n  align-self: center;\n  gap: 1rem;\n  align-items: center;\n}\n\narticle h2 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n#countries h2 {\n  padding-bottom: 2px;\n  border-bottom: 3px solid gray;\n  font-size: 25px;\n  margin-top: 2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.8rem;\n  background-color: hsl(209, 23%, 22%);\n  border-radius: 8px;\n  width: 300px;\n}\n\n.comment-btn {\n  padding: 2% 2%;\n  margin-bottom: 5%;\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  box-shadow: 1px 1.5px 3px #000;\n  background-color: hsl(207, 36%, 37%);\n  align-self: center;\n  border-radius: 5%;\n  color: #fff;\n  position: relative;\n  bottom: 0;\n}\n\narticle h3 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 23px;\n}\n\narticle span {\n  font-weight: 300;\n  font-size: 14px;\n}\n\nfooter {\n  width: 100%;\n  align-self: center;\n  border-radius: 0.5%;\n  border: 1px solid black;\n  background-color: hsl(209, 23%, 22%);\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.button1,\n#search {\n  width: 30%;\n  padding: 0.7% 2.5%;\n  border-radius: 8px;\n  border: 1px solid hsl(207, 26%, 17%);\n  background-size: 30px 25px;\n  background-repeat: no-repeat;\n  background-position: 3% center;\n  padding-left: 50px;\n  background-color: #fff;\n}\n\n#search {\n  background-color: #fff;\n}\n\n/* Pop up Code  */\n#popup-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#name-input {\n  width: 20em;\n  height: 2rem;\n}\n\n.popup-window {\n  top: 15px;\n  padding: 10px;\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  background-color: hsl(207, 26%, 17%);\n  position: absolute;\n  width: 80%;\n  align-self: center;\n  left: 80px;\n}\n\n.side-bars {\n  display: flex;\n  justify-content: space-between;\n  gap: 50px;\n  width: 90%;\n  padding: 40px;\n}\n\n.details {\n  display: flex;\n  text-align: justify;\n  gap: 50px;\n  padding: 20px;\n}\n\n.left-block,\n.right-block {\n  text-align: left;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n}\n\n.comment-details {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10rem;\n  align-items: center;\n}\n\n.comment-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 10px;\n}\n\n.form {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: flex-start;\n  border: #fff 1px solid;\n  padding: 10px;\n}\n\n.fa-x {\n  display: flex;\n  position: absolute;\n  padding-right: 10px;\n  top: 5px;\n  font-size: 30px;\n  font-weight: 1000;\n  margin-bottom: 10px;\n  align-self: flex-end;\n}\n\n.fa-x:hover {\n  color: red;\n}\n\n#comment-btn {\n  display: block;\n  color: blue;\n  background-color: aqua;\n  width: 12rem;\n  height: 2rem;\n  font-size: 18px;\n}\n\n.popUp-img {\n  width: 400px;\n  height: 400px;\n  background-color: #fff;\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup.js */ "./src/modules/popup.js");
/* harmony import */ var _images_globe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/globe.png */ "./src/images/globe.png");
/* harmony import */ var _images_hearts_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hearts.png */ "./src/images/hearts.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/countries.js */ "./src/modules/countries.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");
/* harmony import */ var _modules_populateDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/populateDisplay.js */ "./src/modules/populateDisplay.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_countries_js__WEBPACK_IMPORTED_MODULE_5__, _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__]);
([_modules_countries_js__WEBPACK_IMPORTED_MODULE_5__, _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ul = document.querySelector('ul');
(0,_modules_populateDisplay_js__WEBPACK_IMPORTED_MODULE_7__["default"])(ul, _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_likes_js__WEBPACK_IMPORTED_MODULE_6__.getLikesCount);

document.getElementById('logo').src = _images_globe_png__WEBPACK_IMPORTED_MODULE_2__;
document.getElementById('search').style.backgroundImage = `url(${_images_search_png__WEBPACK_IMPORTED_MODULE_4__})`;

document.querySelectorAll('.like').forEach((element) => {
  element.src = _images_hearts_png__WEBPACK_IMPORTED_MODULE_3__;
  element.addEventListener('click', () => (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_6__.addLike)(element));
});

document.querySelectorAll('.img-holder').forEach((val, index) => {
  val.style.backgroundImage = `url(${_modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"][index].flags.png})`;
});

const windowContainer = document.createElement('div');
windowContainer.className = 'popup-window';

const popWindow = document.querySelectorAll('.comment-btn');

popWindow.forEach((element) => {
  element.addEventListener('click', () => {
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element.id[1], windowContainer, _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    windowContainer.style.display = 'flex';
  });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComment": () => (/* binding */ getComment)
/* harmony export */ });
const addComment = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mxaGcXNlcZdj65Ijfypb/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
};

const getComment = async (id) => {
  const re = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mxaGcXNlcZdj65Ijfypb/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const ss = await re.json();
  return ss;
};



/***/ }),

/***/ "./src/modules/countries.js":
/*!**********************************!*\
  !*** ./src/modules/countries.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const promise = await fetch('https://restcountries.com/v2/all');
const countries = await promise.json();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countries);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikesCount": () => (/* binding */ getLikesCount)
/* harmony export */ });
const addLike = async (ele) => {
  const num = ele.nextSibling.nextSibling.textContent.split(' ')[0];
  ele.nextSibling.nextSibling.textContent = ''.concat(+num + 1, ' likes');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mxaGcXNlcZdj65Ijfypb/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: ele.id,
    }),
  });
};

const promise = async () => {
  const re = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mxaGcXNlcZdj65Ijfypb/likes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const ss = await re.json();
  return ss;
};
const like = await promise();

const getLikesCount = (id) => {
  const val = like.find((o) => o.item_id === id);
  return val === undefined ? 0 : val.likes;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/populateDisplay.js":
/*!****************************************!*\
  !*** ./src/modules/populateDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const populate = (ul, countries, getLikesCount) => {
  for (let i = 0; i < 12; i += 1) {
    const htmlText = `
    <li>
      <div class="img-holder"></div>
      <section class="info">
        <article>
          <h2>${countries[i].name}</h3>
          <h3>Region: <span>${countries[i].region}</span></h3>
          <h3>Capital: <span>${countries[i].capital}</span></h3>
        </article>
        <div>
          <img src="" id="${'l'.concat(i)}" class="like" alt="heart">
          <p class="likes">${getLikesCount('l'.concat(i))} likes</p>
        </div>
      </section>
      <button type="button" id="${'c'.concat(i)}" class="comment-btn">Comments</button>
    </li>
    `;
    ul.insertAdjacentHTML('beforeend', htmlText);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");


const section = document.querySelector('#popup-section');
const modal = async (i, windowContainer, countries) => {
  windowContainer.innerHTML = ` 

<i class="fa-solid fa-x">X</i>

<div class = 'side-bars'>

  <div class ='left-side-bar'>
    <img class="popUp-img" src="${countries[i].flags.svg}" alt="">
    <h2 class="title">${countries[i].name}</h2>
    
    <form id="f${i}" class='form' action="">
    <h2>Please Leave a comment</h2>
      <div class = 'error-msg'> </div>
      <input id = 'name-input' type="text" placeholder="Your Name" >
      <textarea name=" message" id="msg-input" cols="30" rows="10" placeholder="Your insights"></textarea>
      <button id="comment-btn" type="submit">Comment</button>
    </form>
  </div>
  

  <div class ='right-side-bar'>
    <div class="details">
      <div class="left-block">
        <p> Native name: ${countries[i].nativeName} </p>
        <p> Languages: ${countries[i].languages[0].name} </p>
        <p class ="population"> Population: ${countries[i].population} </p>
        <p> Capital: ${countries[i].capital} </p>
        <p>Area: ${countries[i].area}</p>
        
      </div>

      <div class="right-block">
        <p>Continent: ${countries[i].region} </p>
        <p>Region: ${countries[i].subregion} </p>
        <p>Currencies: ${countries[i].currencies[0].name}</p>
        <p> Time-Zome: ${countries[i].timezones} </p>
        <p class="borders">Borders: ${countries[i].borders} </p>
      </div>
    </div>
   

  <div class="comment-details">
    <h2>Comments</h2>

    <span class="comment-body">
      <p>NO COMMENT ENTERED</p>
    </span>
  </div>
</div>

  </div>
  
`;
  section.appendChild(windowContainer);

  let body = '';
  const comments = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(`f${i}`);

  if (Array.isArray(comments)) {
    comments.forEach((o) => {
      body += `<p>${o.creation_date} ${o.username}: ${o.comment}</p>`;
    });
  }

  document.querySelector('.comment-body').innerHTML = body;
  const form = document.getElementById(`f${i}`);
  const error = document.querySelector('.error-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input').value;
    const msgInput = document.querySelector('#msg-input').value;
    if (nameInput === '' || msgInput === '') {
      error.innerHTML = 'Please fill the fields';
      form.reset();
    }
    (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(form.id, nameInput, msgInput);
    form.reset();
  });

  const exitBtn = document.querySelector('.fa-x');
  exitBtn.addEventListener('click', () => {
    windowContainer.style.display = 'none';
    section.removeChild(windowContainer);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/images/globe.png":
/*!******************************!*\
  !*** ./src/images/globe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dca280fa184ac31467e.png";

/***/ }),

/***/ "./src/images/hearts.png":
/*!*******************************!*\
  !*** ./src/images/hearts.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab9ebcbe8f6bbba7e67.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1175f58cc6ff8a127f80.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksc0dBQXNHLElBQUksb0JBQW9CLE9BQU8sZUFBZSxjQUFj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QUFHO0FBQ0g7O0FBRUEsaUVBQWUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvcG9wdWxhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAzMDA7NjAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMjYlLCAxNyUpO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMSUgMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5saWtlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5saWtlOmFjdGl2ZSB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmltZy1ob2xkZXIge1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxufVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKiBnYXA6IDRyZW0gMy41cmVtOyAqL1xcbn1cXG5cXG4jY291bnRyaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hcnRpY2xlIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNjb3VudHJpZXMgaDIge1xcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCA1JTtcXG59XFxuXFxubGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIHBhZGRpbmc6IDIlIDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICB3aWR0aDogODAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAzcHggIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDM2JSwgMzclKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxufVxcblxcbmFydGljbGUgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbn1cXG5cXG5hcnRpY2xlIHNwYW4ge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4uYnV0dG9uMSxcXG4jc2VhcmNoIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiAwLjclIDIuNSU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA3LCAyNiUsIDE3JSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMjVweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIFBvcCB1cCBDb2RlICAqL1xcbiNwb3B1cC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hbWUtaW5wdXQge1xcbiAgd2lkdGg6IDIwZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wb3B1cC13aW5kb3cge1xcbiAgdG9wOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDI2JSwgMTclKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBsZWZ0OiA4MHB4O1xcbn1cXG5cXG4uc2lkZS1iYXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDUwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogNDBweDtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubGVmdC1ibG9jayxcXG4ucmlnaHQtYmxvY2sge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50LWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gIG1hcmdpbjogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXI6ICNmZmYgMXB4IHNvbGlkO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZhLXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZmEteDpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY29tbWVudC1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICB3aWR0aDogMTJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5wb3BVcC1pbWcge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztB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RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDMwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxJSAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogOTBweDtcXG59XFxuXFxuLmxpa2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpa2U6YWN0aXZlIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaW1nLWhvbGRlciB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8qIGdhcDogNHJlbSAzLjVyZW07ICovXFxufVxcblxcbiNjb3VudHJpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFydGljbGUgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2NvdW50cmllcyBoMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyYXk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDUlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgcGFkZGluZzogMiUgMiU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDEuNXB4IDNweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMzYlLCAzNyUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuYXJ0aWNsZSBoMyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxufVxcblxcbmFydGljbGUgc3BhbiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5idXR0b24xLFxcbiNzZWFyY2gge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDAuNyUgMi41JTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDI2JSwgMTclKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMlIGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogUG9wIHVwIENvZGUgICovXFxuI3BvcHVwLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmFtZS1pbnB1dCB7XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnBvcHVwLXdpbmRvdyB7XFxuICB0b3A6IDE1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMjYlLCAxNyUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGxlZnQ6IDgwcHg7XFxufVxcblxcbi5zaWRlLWJhcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogNTBweDtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5sZWZ0LWJsb2NrLFxcbi5yaWdodC1ibG9jayB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnQtZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlcjogI2ZmZiAxcHggc29saWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZmEteCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5mYS14OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNjb21tZW50LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnBvcFVwLWltZyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvcG9wdXAuanMnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2ltYWdlcy9nbG9iZS5wbmcnO1xuaW1wb3J0IGxpa2VJbWFnZSBmcm9tICcuL2ltYWdlcy9oZWFydHMucG5nJztcbmltcG9ydCBpY29uIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tICcuL21vZHVsZXMvY291bnRyaWVzLmpzJztcbmltcG9ydCB7IGdldExpa2VzQ291bnQsIGFkZExpa2UgfSBmcm9tICcuL21vZHVsZXMvbGlrZXMuanMnO1xuaW1wb3J0IHBvcHVsYXRlIGZyb20gJy4vbW9kdWxlcy9wb3B1bGF0ZURpc3BsYXkuanMnO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5wb3B1bGF0ZSh1bCwgY291bnRyaWVzLCBnZXRMaWtlc0NvdW50KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKS5zcmMgPSBsb2dvSW1hZ2U7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ljb259KWA7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnNyYyA9IGxpa2VJbWFnZTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZExpa2UoZWxlbWVudCkpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctaG9sZGVyJykuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICB2YWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvdW50cmllc1tpbmRleF0uZmxhZ3MucG5nfSlgO1xufSk7XG5cbmNvbnN0IHdpbmRvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud2luZG93Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdwb3B1cC13aW5kb3cnO1xuXG5jb25zdCBwb3BXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcblxucG9wV2luZG93LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbChlbGVtZW50LmlkWzFdLCB3aW5kb3dDb250YWluZXIsIGNvdW50cmllcyk7XG4gICAgd2luZG93Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvbXhhR2NYTmxjWmRqNjVJamZ5cGIvY29tbWVudHMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmUgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvbXhhR2NYTmxjWmRqNjVJamZ5cGIvY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHNzID0gYXdhaXQgcmUuanNvbigpO1xuICByZXR1cm4gc3M7XG59O1xuXG5leHBvcnQgeyBhZGRDb21tZW50LCBnZXRDb21tZW50IH07IiwiY29uc3QgcHJvbWlzZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YyL2FsbCcpO1xuY29uc3QgY291bnRyaWVzID0gYXdhaXQgcHJvbWlzZS5qc29uKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50cmllczsiLCJjb25zdCBhZGRMaWtlID0gYXN5bmMgKGVsZSkgPT4ge1xuICBjb25zdCBudW0gPSBlbGUubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcudGV4dENvbnRlbnQuc3BsaXQoJyAnKVswXTtcbiAgZWxlLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gJycuY29uY2F0KCtudW0gKyAxLCAnIGxpa2VzJyk7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9teGFHY1hObGNaZGo2NUlqZnlwYi9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogZWxlLmlkLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IHByb21pc2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL214YUdjWE5sY1pkajY1SWpmeXBiL2xpa2VzJywge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3Qgc3MgPSBhd2FpdCByZS5qc29uKCk7XG4gIHJldHVybiBzcztcbn07XG5jb25zdCBsaWtlID0gYXdhaXQgcHJvbWlzZSgpO1xuXG5jb25zdCBnZXRMaWtlc0NvdW50ID0gKGlkKSA9PiB7XG4gIGNvbnN0IHZhbCA9IGxpa2UuZmluZCgobykgPT4gby5pdGVtX2lkID09PSBpZCk7XG4gIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZCA/IDAgOiB2YWwubGlrZXM7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlc0NvdW50LCBhZGRMaWtlIH07IiwiY29uc3QgcG9wdWxhdGUgPSAodWwsIGNvdW50cmllcywgZ2V0TGlrZXNDb3VudCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDEpIHtcbiAgICBjb25zdCBodG1sVGV4dCA9IGBcbiAgICA8bGk+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW1nLWhvbGRlclwiPjwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMj4ke2NvdW50cmllc1tpXS5uYW1lfTwvaDM+XG4gICAgICAgICAgPGgzPlJlZ2lvbjogPHNwYW4+JHtjb3VudHJpZXNbaV0ucmVnaW9ufTwvc3Bhbj48L2gzPlxuICAgICAgICAgIDxoMz5DYXBpdGFsOiA8c3Bhbj4ke2NvdW50cmllc1tpXS5jYXBpdGFsfTwvc3Bhbj48L2gzPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiBpZD1cIiR7J2wnLmNvbmNhdChpKX1cIiBjbGFzcz1cImxpa2VcIiBhbHQ9XCJoZWFydFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIj4ke2dldExpa2VzQ291bnQoJ2wnLmNvbmNhdChpKSl9IGxpa2VzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiJHsnYycuY29uY2F0KGkpfVwiIGNsYXNzPVwiY29tbWVudC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICAgYDtcbiAgICB1bC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxUZXh0KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGU7IiwiaW1wb3J0IHsgYWRkQ29tbWVudCwgZ2V0Q29tbWVudCB9IGZyb20gJy4vY29tbWVudC5qcyc7XG5cbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtc2VjdGlvbicpO1xuY29uc3QgbW9kYWwgPSBhc3luYyAoaSwgd2luZG93Q29udGFpbmVyLCBjb3VudHJpZXMpID0+IHtcbiAgd2luZG93Q29udGFpbmVyLmlubmVySFRNTCA9IGAgXG5cbjxpIGNsYXNzPVwiZmEtc29saWQgZmEteFwiPlg8L2k+XG5cbjxkaXYgY2xhc3MgPSAnc2lkZS1iYXJzJz5cblxuICA8ZGl2IGNsYXNzID0nbGVmdC1zaWRlLWJhcic+XG4gICAgPGltZyBjbGFzcz1cInBvcFVwLWltZ1wiIHNyYz1cIiR7Y291bnRyaWVzW2ldLmZsYWdzLnN2Z31cIiBhbHQ9XCJcIj5cbiAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7Y291bnRyaWVzW2ldLm5hbWV9PC9oMj5cbiAgICBcbiAgICA8Zm9ybSBpZD1cImYke2l9XCIgY2xhc3M9J2Zvcm0nIGFjdGlvbj1cIlwiPlxuICAgIDxoMj5QbGVhc2UgTGVhdmUgYSBjb21tZW50PC9oMj5cbiAgICAgIDxkaXYgY2xhc3MgPSAnZXJyb3ItbXNnJz4gPC9kaXY+XG4gICAgICA8aW5wdXQgaWQgPSAnbmFtZS1pbnB1dCcgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiID5cbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiIG1lc3NhZ2VcIiBpZD1cIm1zZy1pbnB1dFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICA8YnV0dG9uIGlkPVwiY29tbWVudC1idG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gIFxuXG4gIDxkaXYgY2xhc3MgPSdyaWdodC1zaWRlLWJhcic+XG4gICAgPGRpdiBjbGFzcz1cImRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJsb2NrXCI+XG4gICAgICAgIDxwPiBOYXRpdmUgbmFtZTogJHtjb3VudHJpZXNbaV0ubmF0aXZlTmFtZX0gPC9wPlxuICAgICAgICA8cD4gTGFuZ3VhZ2VzOiAke2NvdW50cmllc1tpXS5sYW5ndWFnZXNbMF0ubmFtZX0gPC9wPlxuICAgICAgICA8cCBjbGFzcyA9XCJwb3B1bGF0aW9uXCI+IFBvcHVsYXRpb246ICR7Y291bnRyaWVzW2ldLnBvcHVsYXRpb259IDwvcD5cbiAgICAgICAgPHA+IENhcGl0YWw6ICR7Y291bnRyaWVzW2ldLmNhcGl0YWx9IDwvcD5cbiAgICAgICAgPHA+QXJlYTogJHtjb3VudHJpZXNbaV0uYXJlYX08L3A+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ibG9ja1wiPlxuICAgICAgICA8cD5Db250aW5lbnQ6ICR7Y291bnRyaWVzW2ldLnJlZ2lvbn0gPC9wPlxuICAgICAgICA8cD5SZWdpb246ICR7Y291bnRyaWVzW2ldLnN1YnJlZ2lvbn0gPC9wPlxuICAgICAgICA8cD5DdXJyZW5jaWVzOiAke2NvdW50cmllc1tpXS5jdXJyZW5jaWVzWzBdLm5hbWV9PC9wPlxuICAgICAgICA8cD4gVGltZS1ab21lOiAke2NvdW50cmllc1tpXS50aW1lem9uZXN9IDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJib3JkZXJzXCI+Qm9yZGVyczogJHtjb3VudHJpZXNbaV0uYm9yZGVyc30gPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICBcblxuICA8ZGl2IGNsYXNzPVwiY29tbWVudC1kZXRhaWxzXCI+XG4gICAgPGgyPkNvbW1lbnRzPC9oMj5cblxuICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudC1ib2R5XCI+XG4gICAgICA8cD5OTyBDT01NRU5UIEVOVEVSRUQ8L3A+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG4gIDwvZGl2PlxuICBcbmA7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQod2luZG93Q29udGFpbmVyKTtcblxuICBsZXQgYm9keSA9ICcnO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnQoYGYke2l9YCk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tbWVudHMpKSB7XG4gICAgY29tbWVudHMuZm9yRWFjaCgobykgPT4ge1xuICAgICAgYm9keSArPSBgPHA+JHtvLmNyZWF0aW9uX2RhdGV9ICR7by51c2VybmFtZX06ICR7by5jb21tZW50fTwvcD5gO1xuICAgIH0pO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYm9keScpLmlubmVySFRNTCA9IGJvZHk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZiR7aX1gKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbXNnJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBtc2dJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtc2ctaW5wdXQnKS52YWx1ZTtcbiAgICBpZiAobmFtZUlucHV0ID09PSAnJyB8fCBtc2dJbnB1dCA9PT0gJycpIHtcbiAgICAgIGVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgZmlsbCB0aGUgZmllbGRzJztcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9XG4gICAgYWRkQ29tbWVudChmb3JtLmlkLCBuYW1lSW5wdXQsIG1zZ0lucHV0KTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEteCcpO1xuICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvd0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQod2luZG93Q29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=