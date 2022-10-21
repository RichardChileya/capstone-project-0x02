(self["webpackChunkcapstone_project_0x02"] = self["webpackChunkcapstone_project_0x02"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
<<<<<<< HEAD
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-family: 'Nunito Sans', sans-serif;\n  background-color: hsl(207, 26%, 17%);\n  color: hsl(0, 0%, 100%);\n}\n\nheader {\n  background-color: hsl(209, 23%, 22%);\n  display: flex;\n  padding: 1% 10%;\n  justify-content: space-between;\n}\n\nheader h2 {\n  font-size: 30px;\n  letter-spacing: 2px;\n}\n\n#logo {\n  width: 90px;\n  height: 90px;\n}\n\n.like {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n\n.like:active {\n  width: 50px;\n  height: 50px;\n}\n\n.likes {\n  font-size: 14px;\n}\n\n.img-holder {\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nul {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 0 auto;\n  gap: 4rem 3.5rem;\n}\n\n#countries {\n  display: flex;\n  align-self: center;\n  gap: 1rem;\n  align-items: center;\n}\n\narticle h2 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n#countries h2 {\n  padding-bottom: 2px;\n  border-bottom: 3px solid gray;\n  font-size: 25px;\n  margin-top: 2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.8rem;\n  background-color: hsl(209, 23%, 22%);\n  border-radius: 8px;\n  width: 300px;\n}\n\n.comment-btn {\n  padding: 2% 2%;\n  margin-bottom: 5%;\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  box-shadow: 1px 1.5px 3px #000;\n  background-color: hsl(207, 36%, 37%);\n  align-self: center;\n  border-radius: 5%;\n  color: #fff;\n  position: relative;\n  bottom: 0;\n}\n\narticle h3 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 23px;\n}\n\narticle span {\n  font-weight: 300;\n  font-size: 14px;\n}\n\nfooter {\n  width: 100%;\n  align-self: center;\n  border-radius: 0.5%;\n  border: 1px solid black;\n  background-color: hsl(209, 23%, 22%);\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.button1,\n#search {\n  width: 30%;\n  padding: 0.7% 2.5%;\n  border-radius: 8px;\n  border: 1px solid hsl(207, 26%, 17%);\n  background-size: 30px 25px;\n  background-repeat: no-repeat;\n  background-position: 3% center;\n  padding-left: 50px;\n  background-color: #fff;\n}\n\n#search {\n  background-color: #fff;\n}\n\n/* Pop up Code  */\n#popup-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#name-input {\n  width: 20em;\n  height: 2rem;\n}\n\n.popup-window {\n  top: 15%;\n  left: 20%;\n  right: 20%;\n  height: 70%;\n  display: none;\n  grid-template-rows: 1fr 1fr 1fr;\n  background-color: hsl(209, 23%, 22%);\n  position: fixed;\n  backdrop-filter: blur(10px);\n}\n\n.img-side-bar {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  padding: 40px;\n}\n\n.left-block,\n.right-block {\n  text-align: left;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n}\n\n.img-name {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n\n.right-side-bar {\n  display: flex;\n  justify-content: space-between;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-details {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  column-gap: 3rem;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.comment-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 10px;\n  text-align: left;\n  height: 60%;\n  overflow-y: scroll;\n}\n\n.form {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n\n.form button {\n  width: 30%;\n}\n\n.form input,\ntextarea {\n  padding: 1% 2%;\n  border-radius: 3px;\n}\n\n.fa-x {\n  position: absolute;\n  padding-right: 10px;\n  top: 5px;\n  right: 5px;\n  font-size: 30px;\n  font-weight: 1000;\n  margin-bottom: 10px;\n}\n\n.fa-x:hover {\n  color: red;\n}\n\n.popUp-img {\n  width: 80%;\n  height: 180px;\n  background-color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-family: 'Nunito Sans', sans-serif;\n  background-color: hsl(207, 26%, 17%);\n  color: hsl(0, 0%, 100%);\n}\n\nheader {\n  background-color: hsl(209, 23%, 22%);\n  display: flex;\n  padding: 1% 10%;\n  justify-content: space-between;\n}\n\nheader h2 {\n  font-size: 30px;\n  letter-spacing: 2px;\n}\n\n#logo {\n  width: 90px;\n  height: 90px;\n}\n\n.like {\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n\n.like:active {\n  width: 50px;\n  height: 50px;\n}\n\n.likes {\n  font-size: 14px;\n}\n\n.img-holder {\n  height: 180px;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\nul {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 0 auto;\n  gap: 4rem 3.5rem;\n}\n\n#countries {\n  display: flex;\n  align-self: center;\n  gap: 1rem;\n  align-items: center;\n}\n\narticle h2 {\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n\n#countries h2 {\n  padding-bottom: 2px;\n  border-bottom: 3px solid gray;\n  font-size: 25px;\n  margin-top: 2rem;\n}\n\n.info {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 5%;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 0.8rem;\n  background-color: hsl(209, 23%, 22%);\n  border-radius: 8px;\n  width: 300px;\n}\n\n.comment-btn {\n  padding: 2% 2%;\n  margin-bottom: 5%;\n  width: 80%;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  box-shadow: 1px 1.5px 3px #000;\n  background-color: hsl(207, 36%, 37%);\n  align-self: center;\n  border-radius: 5%;\n  color: #fff;\n  position: relative;\n  bottom: 0;\n}\n\narticle h3 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 23px;\n}\n\narticle span {\n  font-weight: 300;\n  font-size: 14px;\n}\n\nfooter {\n  width: 100%;\n  align-self: center;\n  border-radius: 0.5%;\n  border: 1px solid black;\n  background-color: hsl(209, 23%, 22%);\n  text-align: center;\n  padding: 1rem 0;\n}\n\n.button1,\n#search {\n  width: 30%;\n  padding: 0.7% 2.5%;\n  border-radius: 8px;\n  border: 1px solid hsl(207, 26%, 17%);\n  background-size: 30px 25px;\n  background-repeat: no-repeat;\n  background-position: 3% center;\n  padding-left: 50px;\n  background-color: #fff;\n}\n\n#search {\n  background-color: #fff;\n}\n\n/* Pop up Code  */\n#popup-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#name-input {\n  width: 20em;\n  height: 2rem;\n}\n\n.popup-window {\n  top: 15%;\n  left: 20%;\n  right: 20%;\n  height: 70%;\n  display: none;\n  grid-template-rows: 1fr 1fr 1fr;\n  background-color: hsl(209, 23%, 22%);\n  position: fixed;\n  backdrop-filter: blur(10px);\n}\n\n.img-side-bar {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  gap: 50px;\n  padding: 40px;\n}\n\n.left-block,\n.right-block {\n  text-align: left;\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  width: 100%;\n}\n\n.img-name {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n\n.right-side-bar {\n  display: flex;\n  justify-content: space-between;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-details {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  column-gap: 3rem;\n  width: 90%;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.comment-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin: 10px;\n  text-align: left;\n  height: 60%;\n  overflow-y: scroll;\n}\n\n.form {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n\n.form button {\n  width: 30%;\n}\n\n.form input,\ntextarea {\n  padding: 1% 2%;\n  border-radius: 3px;\n}\n\n.fa-x {\n  position: absolute;\n  padding-right: 10px;\n  top: 5px;\n  right: 5px;\n  font-size: 30px;\n  font-weight: 1000;\n  margin-bottom: 10px;\n}\n\n.fa-x:hover {\n  color: red;\n}\n\n.popUp-img {\n  width: 80%;\n  height: 180px;\n  background-color: #fff;\n}\n"],"sourceRoot":""}]);
=======
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  background-color: hsl(207, 26%, 17%);\r\n  color: hsl(0, 0%, 100%);\r\n}\r\n\r\nheader {\r\n  background-color: hsl(209, 23%, 22%);\r\n  display: flex;\r\n  padding: 1% 10%;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader h2 {\r\n  font-size: 30px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n#logo {\r\n  width: 90px;\r\n  height: 90px;\r\n}\r\n\r\n.like {\r\n  width: 40px;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.like:active {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.likes {\r\n  font-size: 14px;\r\n}\r\n\r\n.img-holder {\r\n  height: 180px;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n}\r\n\r\nul {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  margin: 0 auto;\r\n  gap: 4rem 3.5rem;\r\n}\r\n\r\n#countries {\r\n  display: flex;\r\n  align-self: center;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\narticle h2 {\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n#countries h2 {\r\n  padding-bottom: 2px;\r\n  border-bottom: 3px solid gray;\r\n  font-size: 25px;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 5%;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.8rem;\r\n  background-color: hsl(209, 23%, 22%);\r\n  border-radius: 8px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-btn {\r\n  padding: 2% 2%;\r\n  margin-bottom: 5%;\r\n  width: 80%;\r\n  font-size: 1rem;\r\n  letter-spacing: 2px;\r\n  box-shadow: 1px 1.5px 3px #000;\r\n  background-color: hsl(207, 36%, 37%);\r\n  align-self: center;\r\n  border-radius: 5%;\r\n  color: #fff;\r\n  position: relative;\r\n  bottom: 0;\r\n}\r\n\r\narticle h3 {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 23px;\r\n}\r\n\r\narticle span {\r\n  font-weight: 300;\r\n  font-size: 14px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  align-self: center;\r\n  border-radius: 0.5%;\r\n  border: 1px solid black;\r\n  background-color: hsl(209, 23%, 22%);\r\n  text-align: center;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.button1,\r\n#search {\r\n  width: 30%;\r\n  padding: 0.7% 2.5%;\r\n  border-radius: 8px;\r\n  border: 1px solid hsl(207, 26%, 17%);\r\n  background-size: 30px 25px;\r\n  background-repeat: no-repeat;\r\n  background-position: 3% center;\r\n  padding-left: 50px;\r\n  background-color: #fff;\r\n}\r\n\r\n#search {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Pop up Code  */\r\n#popup-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#name-input {\r\n  width: 20em;\r\n  height: 2rem;\r\n}\r\n\r\n.popup-window {\r\n  top: 15%;\r\n  left: 20%;\r\n  right: 20%;\r\n  height: 80%;\r\n  display: none;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n  background-color: hsl(209, 23%, 22%);\r\n  position: fixed;\r\n}\r\n\r\n.img-side-bar {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 50px;\r\n  padding: 40px;\r\n}\r\n\r\n.left-block,\r\n.right-block {\r\n  text-align: left;\r\n  gap: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.img-name {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3px;\r\n}\r\n\r\n.right-side-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-details {\r\n  display: grid;\r\n  grid-template-columns: 1.4fr 1fr;\r\n  column-gap: 3rem;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.comment-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin: 10px;\r\n  text-align: left;\r\n  height: 50%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.form {\r\n  margin: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n}\r\n\r\n.form button {\r\n  width: 30%;\r\n}\r\n\r\n.form input,\r\ntextarea {\r\n  padding: 1% 2%;\r\n  border-radius: 3px;\r\n}\r\n\r\n.fa-x {\r\n  position: absolute;\r\n  padding-right: 10px;\r\n  top: 5px;\r\n  right: 5px;\r\n  font-size: 30px;\r\n  font-weight: 1000;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.fa-x:hover {\r\n  color: red;\r\n}\r\n\r\n.popUp-img {\r\n  width: 80%;\r\n  height: 180px;\r\n  background-color: #fff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,sCAAsC;EACtC,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;EAC1B,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,UAAU;EACV,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;EACvB,oCAAoC;EACpC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;EACpC,0BAA0B;EAC1B,4BAA4B;EAC5B,8BAA8B;EAC9B,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;AAEA;;EAEE,gBAAgB;EAChB,QAAQ;EACR,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,gBAAgB;EAChB,UAAU;EACV,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;;EAEE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  background-color: hsl(207, 26%, 17%);\r\n  color: hsl(0, 0%, 100%);\r\n}\r\n\r\nheader {\r\n  background-color: hsl(209, 23%, 22%);\r\n  display: flex;\r\n  padding: 1% 10%;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader h2 {\r\n  font-size: 30px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n#logo {\r\n  width: 90px;\r\n  height: 90px;\r\n}\r\n\r\n.like {\r\n  width: 40px;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.like:active {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.likes {\r\n  font-size: 14px;\r\n}\r\n\r\n.img-holder {\r\n  height: 180px;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n}\r\n\r\nul {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  margin: 0 auto;\r\n  gap: 4rem 3.5rem;\r\n}\r\n\r\n#countries {\r\n  display: flex;\r\n  align-self: center;\r\n  gap: 1rem;\r\n  align-items: center;\r\n}\r\n\r\narticle h2 {\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n#countries h2 {\r\n  padding-bottom: 2px;\r\n  border-bottom: 3px solid gray;\r\n  font-size: 25px;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 5%;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.8rem;\r\n  background-color: hsl(209, 23%, 22%);\r\n  border-radius: 8px;\r\n  width: 300px;\r\n}\r\n\r\n.comment-btn {\r\n  padding: 2% 2%;\r\n  margin-bottom: 5%;\r\n  width: 80%;\r\n  font-size: 1rem;\r\n  letter-spacing: 2px;\r\n  box-shadow: 1px 1.5px 3px #000;\r\n  background-color: hsl(207, 36%, 37%);\r\n  align-self: center;\r\n  border-radius: 5%;\r\n  color: #fff;\r\n  position: relative;\r\n  bottom: 0;\r\n}\r\n\r\narticle h3 {\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 23px;\r\n}\r\n\r\narticle span {\r\n  font-weight: 300;\r\n  font-size: 14px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  align-self: center;\r\n  border-radius: 0.5%;\r\n  border: 1px solid black;\r\n  background-color: hsl(209, 23%, 22%);\r\n  text-align: center;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.button1,\r\n#search {\r\n  width: 30%;\r\n  padding: 0.7% 2.5%;\r\n  border-radius: 8px;\r\n  border: 1px solid hsl(207, 26%, 17%);\r\n  background-size: 30px 25px;\r\n  background-repeat: no-repeat;\r\n  background-position: 3% center;\r\n  padding-left: 50px;\r\n  background-color: #fff;\r\n}\r\n\r\n#search {\r\n  background-color: #fff;\r\n}\r\n\r\n/* Pop up Code  */\r\n#popup-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#name-input {\r\n  width: 20em;\r\n  height: 2rem;\r\n}\r\n\r\n.popup-window {\r\n  top: 15%;\r\n  left: 20%;\r\n  right: 20%;\r\n  height: 80%;\r\n  display: none;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n  background-color: hsl(209, 23%, 22%);\r\n  position: fixed;\r\n}\r\n\r\n.img-side-bar {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 50px;\r\n  padding: 40px;\r\n}\r\n\r\n.left-block,\r\n.right-block {\r\n  text-align: left;\r\n  gap: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.img-name {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3px;\r\n}\r\n\r\n.right-side-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-details {\r\n  display: grid;\r\n  grid-template-columns: 1.4fr 1fr;\r\n  column-gap: 3rem;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.comment-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin: 10px;\r\n  text-align: left;\r\n  height: 50%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.form {\r\n  margin: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n}\r\n\r\n.form button {\r\n  width: 30%;\r\n}\r\n\r\n.form input,\r\ntextarea {\r\n  padding: 1% 2%;\r\n  border-radius: 3px;\r\n}\r\n\r\n.fa-x {\r\n  position: absolute;\r\n  padding-right: 10px;\r\n  top: 5px;\r\n  right: 5px;\r\n  font-size: 30px;\r\n  font-weight: 1000;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.fa-x:hover {\r\n  color: red;\r\n}\r\n\r\n.popUp-img {\r\n  width: 80%;\r\n  height: 180px;\r\n  background-color: #fff;\r\n}\r\n"],"sourceRoot":""}]);
>>>>>>> 51524403160478b750d0b4e80911acf3c9ad4d6f
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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
    document.body.style.overflowY = 'hidden';
    ul.style.filter = 'blur(5px)';
    (0,_modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element.id[1], windowContainer, _modules_countries_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
    windowContainer.style.display = 'grid';
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComment": () => (/* binding */ getComment)
/* harmony export */ });
const addComment = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/comments', {
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
  const re = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const ss = await re.json();
  return ss;
};



/***/ }),

/***/ "./src/modules/commentCount.js":
/*!*************************************!*\
  !*** ./src/modules/commentCount.js ***!
  \*************************************/
/***/ ((module) => {

class Count {
  static commentCounter() {
    const commentCount = document.querySelector('.comment-body');
    const bodyChildren = commentCount.querySelectorAll('p');
    return (bodyChildren.length);
  }
}

module.exports = Count;

/***/ }),

/***/ "./src/modules/countries.js":
/*!**********************************!*\
  !*** ./src/modules/countries.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/modules/itemsCount.js":
/*!***********************************!*\
  !*** ./src/modules/itemsCount.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = class ItemsCount {
  static itemsCounter() {
    const itemsCount = document.querySelector('ul');
    const children = itemsCount.querySelectorAll('li');
    return (children.length);
  }
};

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getLikesCount": () => (/* binding */ getLikesCount)
/* harmony export */ });
const addLike = async (ele) => {
  const num = ele.nextSibling.nextSibling.textContent.split(' ')[0];
  ele.nextSibling.nextSibling.textContent = ''.concat(+num + 1, ' likes');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/likes', {
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
  const re = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UMu2QAb36PVSa0I3N71m/likes', {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _itemsCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemsCount.js */ "./src/modules/itemsCount.js");
/* harmony import */ var _itemsCount_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_itemsCount_js__WEBPACK_IMPORTED_MODULE_0__);


const h2 = document.querySelector('#countries h2');
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

  const count = _itemsCount_js__WEBPACK_IMPORTED_MODULE_0___default().itemsCounter();
  h2.textContent = `Short Lists Of Countries (${count})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");
/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCount.js */ "./src/modules/commentCount.js");
/* harmony import */ var _commentCount_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commentCount_js__WEBPACK_IMPORTED_MODULE_1__);



const section = document.querySelector('#popup-section');
const modal = async (i, windowContainer, countries) => {
  windowContainer.innerHTML = ` 

<i class="fa-solid fa-x">X</i>

  <section  class = 'img-side-bar'>  
    <div class="img-name">
      <img class="popUp-img" src="${countries[i].flags.svg}" alt="">
      <h2 class="title">${countries[i].name}</h2>
    </div>


      <article class="right-block">
        <h3> Native name:<span> ${countries[i].nativeName}</span></h3>
        <h3> Languages:<span> ${countries[i].languages[0].name}</span></h3>
          <h3 class ="population">Population:<span> ${countries[i].population}</span></h3>
          <h3> Capital:<span> ${countries[i].capital}</pan></h3>
          <h3>Area:<span> ${countries[i].area}</span></h3>
      </article>

      <article class="right-block">
        <h3>Continent: <span>${countries[i].region}</span></h3>
        <h3>Region: <span>${countries[i].subregion}</span></h3>
        <h3>Currencies: <span>${countries[i].currencies[0].name}</span></h3>
        <h3> Time-Zome: <span>${countries[i].timezones}</span></h3>
        <h3 class="borders">Borders: <span>${countries[i].borders}</span></h3>
      </article>

  </section>   

  <section class="comment-details">
    <div class="form-div">
      <form id="f${i}" class='form' action="">
      <h2>Please Leave a comment</h2>
        <div class = 'error-msg'> </div>
        <input id = 'name-input' type="text" placeholder="Your Name" >
        <textarea name=" message" id="msg-input" cols="28" rows="5" placeholder="Your insights"></textarea>
        <button class="comment-btn" type="submit">Comment</button>
      </form>
    </div>

    <div class="comment-div">
          <h2>Comments</h2>

          <span class="comment-body">
            <span>No Comments...</span>
          </span>
        </div>
      </div>
    </div>

  </section>
  
`;
  section.appendChild(windowContainer);
  let body = '';
  const comments = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(`f${i}`);
  const h2 = document.querySelector('.comment-div h2');

  if (Array.isArray(comments)) {
    comments.forEach((o) => {
      body += `<p>${o.creation_date} ${o.username}: ${o.comment}</p>`;
    });
  }

  if (body !== '') {
    document.querySelector('.comment-body').innerHTML = body;
  }
  const form = document.getElementById(`f${i}`);
  const error = document.querySelector('.error-msg');
  const cmtvalue = _commentCount_js__WEBPACK_IMPORTED_MODULE_1___default().commentCounter();

  h2.textContent += ` ( ${cmtvalue} )`;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input').value;
    const msgInput = document.querySelector('#msg-input').value;
    if (nameInput === '' || msgInput === '') {
      error.innerHTML = 'Please fill the fields';
      form.reset();
      return;
    }

    await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(form.id, nameInput, msgInput);
    form.reset();
    const cmt = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(`f${i}`);
    const last = cmt[cmt.length - 1];
    body += `<p>${last.creation_date} ${last.username}: ${last.comment}</p>`;
    document.querySelector('.comment-body').innerHTML = body;
    h2.textContent = ` Comments ( ${cmtvalue + 1} )`;
  });

  const exitBtn = document.querySelector('.fa-x');
  exitBtn.addEventListener('click', () => {
    windowContainer.style.display = 'none';
    section.removeChild(windowContainer);
    document.body.style.overflowY = 'scroll';
    document.querySelector('ul').style.filter = 'none';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/images/globe.png":
/*!******************************!*\
  !*** ./src/images/globe.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6dca280fa184ac31467e.png";

/***/ }),

/***/ "./src/images/hearts.png":
/*!*******************************!*\
  !*** ./src/images/hearts.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6ab9ebcbe8f6bbba7e67.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1175f58cc6ff8a127f80.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVks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QUFDQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQVUsS0FBSyxFQUFFO0FBQzFDOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCLEVBQUUsV0FBVyxJQUFJLFVBQVU7QUFDaEUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0EsbUJBQW1CLHNFQUFvQjs7QUFFdkMsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsdURBQVU7QUFDcEI7QUFDQSxzQkFBc0IsdURBQVUsS0FBSyxFQUFFO0FBQ3ZDO0FBQ0Esa0JBQWtCLG9CQUFvQixFQUFFLGNBQWMsSUFBSSxhQUFhO0FBQ3ZFO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9jb3VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvaXRlbXNDb3VudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9wb3B1bGF0ZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDMwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxJSAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogOTBweDtcXG59XFxuXFxuLmxpa2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpa2U6YWN0aXZlIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaW1nLWhvbGRlciB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGdhcDogNHJlbSAzLjVyZW07XFxufVxcblxcbiNjb3VudHJpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFydGljbGUgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2NvdW50cmllcyBoMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyYXk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDUlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgcGFkZGluZzogMiUgMiU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDEuNXB4IDNweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMzYlLCAzNyUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuYXJ0aWNsZSBoMyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxufVxcblxcbmFydGljbGUgc3BhbiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5idXR0b24xLFxcbiNzZWFyY2gge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDAuNyUgMi41JTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDI2JSwgMTclKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMlIGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogUG9wIHVwIENvZGUgICovXFxuI3BvcHVwLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmFtZS1pbnB1dCB7XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnBvcHVwLXdpbmRvdyB7XFxuICB0b3A6IDE1JTtcXG4gIGxlZnQ6IDIwJTtcXG4gIHJpZ2h0OiAyMCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4uaW1nLXNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5sZWZ0LWJsb2NrLFxcbi5yaWdodC1ibG9jayB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1nLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5yaWdodC1zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogM3JlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmZvcm0gaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMSUgMiU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5mYS14IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mYS14OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3BVcC1pbWcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFD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LGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDMwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA3LCAyNiUsIDE3JSk7XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxJSAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogOTBweDtcXG59XFxuXFxuLmxpa2Uge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpa2U6YWN0aXZlIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uaW1nLWhvbGRlciB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGdhcDogNHJlbSAzLjVyZW07XFxufVxcblxcbiNjb3VudHJpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFydGljbGUgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2NvdW50cmllcyBoMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyYXk7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDUlO1xcbn1cXG5cXG5saSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgcGFkZGluZzogMiUgMiU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDEuNXB4IDNweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMzYlLCAzNyUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuYXJ0aWNsZSBoMyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxufVxcblxcbmFydGljbGUgc3BhbiB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5idXR0b24xLFxcbiNzZWFyY2gge1xcbiAgd2lkdGg6IDMwJTtcXG4gIHBhZGRpbmc6IDAuNyUgMi41JTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDI2JSwgMTclKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAyNXB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMlIGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogUG9wIHVwIENvZGUgICovXFxuI3BvcHVwLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmFtZS1pbnB1dCB7XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnBvcHVwLXdpbmRvdyB7XFxuICB0b3A6IDE1JTtcXG4gIGxlZnQ6IDIwJTtcXG4gIHJpZ2h0OiAyMCU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4uaW1nLXNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5sZWZ0LWJsb2NrLFxcbi5yaWdodC1ibG9jayB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1nLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5yaWdodC1zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9ybS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50LWRldGFpbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogM3JlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLmZvcm0gaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMSUgMiU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5mYS14IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5mYS14OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wb3BVcC1pbWcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kdWxlcy9wb3B1cC5qcyc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vaW1hZ2VzL2dsb2JlLnBuZyc7XG5pbXBvcnQgbGlrZUltYWdlIGZyb20gJy4vaW1hZ2VzL2hlYXJ0cy5wbmcnO1xuaW1wb3J0IGljb24gZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnBuZyc7XG5pbXBvcnQgY291bnRyaWVzIGZyb20gJy4vbW9kdWxlcy9jb3VudHJpZXMuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXNDb3VudCwgYWRkTGlrZSB9IGZyb20gJy4vbW9kdWxlcy9saWtlcy5qcyc7XG5pbXBvcnQgcG9wdWxhdGUgZnJvbSAnLi9tb2R1bGVzL3BvcHVsYXRlRGlzcGxheS5qcyc7XG5cbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbnBvcHVsYXRlKHVsLCBjb3VudHJpZXMsIGdldExpa2VzQ291bnQpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpLnNyYyA9IGxvZ29JbWFnZTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aWNvbn0pYDtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuc3JjID0gbGlrZUltYWdlO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkTGlrZShlbGVtZW50KSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1ob2xkZXInKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gIHZhbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y291bnRyaWVzW2luZGV4XS5mbGFncy5wbmd9KWA7XG59KTtcblxuY29uc3Qgd2luZG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53aW5kb3dDb250YWluZXIuY2xhc3NOYW1lID0gJ3BvcHVwLXdpbmRvdyc7XG5cbmNvbnN0IHBvcFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpO1xuXG5wb3BXaW5kb3cuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsKGVsZW1lbnQuaWRbMV0sIHdpbmRvd0NvbnRhaW5lciwgY291bnRyaWVzKTtcbiAgICB3aW5kb3dDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59KTtcbiIsImNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9jb21tZW50cycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3Qgc3MgPSBhd2FpdCByZS5qc29uKCk7XG4gIHJldHVybiBzcztcbn07XG5cbmV4cG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnQgfTsiLCJjbGFzcyBDb3VudCB7XG4gIHN0YXRpYyBjb21tZW50Q291bnRlcigpIHtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1ib2R5Jyk7XG4gICAgY29uc3QgYm9keUNoaWxkcmVuID0gY29tbWVudENvdW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcbiAgICByZXR1cm4gKGJvZHlDaGlsZHJlbi5sZW5ndGgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ291bnQ7IiwiY29uc3QgcHJvbWlzZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YyL2FsbCcpO1xuY29uc3QgY291bnRyaWVzID0gYXdhaXQgcHJvbWlzZS5qc29uKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50cmllczsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEl0ZW1zQ291bnQge1xuICBzdGF0aWMgaXRlbXNDb3VudGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbXNDb3VudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIHJldHVybiAoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgfVxufTsiLCJjb25zdCBhZGRMaWtlID0gYXN5bmMgKGVsZSkgPT4ge1xuICBjb25zdCBudW0gPSBlbGUubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcudGV4dENvbnRlbnQuc3BsaXQoJyAnKVswXTtcbiAgZWxlLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gJycuY29uY2F0KCtudW0gKyAxLCAnIGxpa2VzJyk7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogZWxlLmlkLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IHByb21pc2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1VNdTJRQWIzNlBWU2EwSTNONzFtL2xpa2VzJywge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3Qgc3MgPSBhd2FpdCByZS5qc29uKCk7XG4gIHJldHVybiBzcztcbn07XG5jb25zdCBsaWtlID0gYXdhaXQgcHJvbWlzZSgpO1xuXG5jb25zdCBnZXRMaWtlc0NvdW50ID0gKGlkKSA9PiB7XG4gIGNvbnN0IHZhbCA9IGxpa2UuZmluZCgobykgPT4gby5pdGVtX2lkID09PSBpZCk7XG4gIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZCA/IDAgOiB2YWwubGlrZXM7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlc0NvdW50LCBhZGRMaWtlIH07XG4iLCJpbXBvcnQgSXRlbXNDb3VudCBmcm9tICcuL2l0ZW1zQ291bnQuanMnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJpZXMgaDInKTtcbmNvbnN0IHBvcHVsYXRlID0gKHVsLCBjb3VudHJpZXMsIGdldExpa2VzQ291bnQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAxKSB7XG4gICAgY29uc3QgaHRtbFRleHQgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdiBjbGFzcz1cImltZy1ob2xkZXJcIj48L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDI+JHtjb3VudHJpZXNbaV0ubmFtZX08L2gzPlxuICAgICAgICAgIDxoMz5SZWdpb246IDxzcGFuPiR7Y291bnRyaWVzW2ldLnJlZ2lvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgICA8aDM+Q2FwaXRhbDogPHNwYW4+JHtjb3VudHJpZXNbaV0uY2FwaXRhbH08L3NwYW4+PC9oMz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgaWQ9XCIkeydsJy5jb25jYXQoaSl9XCIgY2xhc3M9XCJsaWtlXCIgYWx0PVwiaGVhcnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCI+JHtnZXRMaWtlc0NvdW50KCdsJy5jb25jYXQoaSkpfSBsaWtlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7J2MnLmNvbmNhdChpKX1cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sVGV4dCk7XG4gIH1cblxuICBjb25zdCBjb3VudCA9IEl0ZW1zQ291bnQuaXRlbXNDb3VudGVyKCk7XG4gIGgyLnRleHRDb250ZW50ID0gYFNob3J0IExpc3RzIE9mIENvdW50cmllcyAoJHtjb3VudH0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlOyIsImltcG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnQgfSBmcm9tICcuL2NvbW1lbnQuanMnO1xuaW1wb3J0IENvdW50IGZyb20gJy4vY29tbWVudENvdW50LmpzJztcblxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1zZWN0aW9uJyk7XG5jb25zdCBtb2RhbCA9IGFzeW5jIChpLCB3aW5kb3dDb250YWluZXIsIGNvdW50cmllcykgPT4ge1xuICB3aW5kb3dDb250YWluZXIuaW5uZXJIVE1MID0gYCBcblxuPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14XCI+WDwvaT5cblxuICA8c2VjdGlvbiAgY2xhc3MgPSAnaW1nLXNpZGUtYmFyJz4gIFxuICAgIDxkaXYgY2xhc3M9XCJpbWctbmFtZVwiPlxuICAgICAgPGltZyBjbGFzcz1cInBvcFVwLWltZ1wiIHNyYz1cIiR7Y291bnRyaWVzW2ldLmZsYWdzLnN2Z31cIiBhbHQ9XCJcIj5cbiAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtjb3VudHJpZXNbaV0ubmFtZX08L2gyPlxuICAgIDwvZGl2PlxuXG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicmlnaHQtYmxvY2tcIj5cbiAgICAgICAgPGgzPiBOYXRpdmUgbmFtZTo8c3Bhbj4gJHtjb3VudHJpZXNbaV0ubmF0aXZlTmFtZX08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPiBMYW5ndWFnZXM6PHNwYW4+ICR7Y291bnRyaWVzW2ldLmxhbmd1YWdlc1swXS5uYW1lfTwvc3Bhbj48L2gzPlxuICAgICAgICAgIDxoMyBjbGFzcyA9XCJwb3B1bGF0aW9uXCI+UG9wdWxhdGlvbjo8c3Bhbj4gJHtjb3VudHJpZXNbaV0ucG9wdWxhdGlvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgICA8aDM+IENhcGl0YWw6PHNwYW4+ICR7Y291bnRyaWVzW2ldLmNhcGl0YWx9PC9wYW4+PC9oMz5cbiAgICAgICAgICA8aDM+QXJlYTo8c3Bhbj4gJHtjb3VudHJpZXNbaV0uYXJlYX08L3NwYW4+PC9oMz5cbiAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyaWdodC1ibG9ja1wiPlxuICAgICAgICA8aDM+Q29udGluZW50OiA8c3Bhbj4ke2NvdW50cmllc1tpXS5yZWdpb259PC9zcGFuPjwvaDM+XG4gICAgICAgIDxoMz5SZWdpb246IDxzcGFuPiR7Y291bnRyaWVzW2ldLnN1YnJlZ2lvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPkN1cnJlbmNpZXM6IDxzcGFuPiR7Y291bnRyaWVzW2ldLmN1cnJlbmNpZXNbMF0ubmFtZX08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPiBUaW1lLVpvbWU6IDxzcGFuPiR7Y291bnRyaWVzW2ldLnRpbWV6b25lc308L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzIGNsYXNzPVwiYm9yZGVyc1wiPkJvcmRlcnM6IDxzcGFuPiR7Y291bnRyaWVzW2ldLmJvcmRlcnN9PC9zcGFuPjwvaDM+XG4gICAgICA8L2FydGljbGU+XG5cbiAgPC9zZWN0aW9uPiAgIFxuXG4gIDxzZWN0aW9uIGNsYXNzPVwiY29tbWVudC1kZXRhaWxzXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZGl2XCI+XG4gICAgICA8Zm9ybSBpZD1cImYke2l9XCIgY2xhc3M9J2Zvcm0nIGFjdGlvbj1cIlwiPlxuICAgICAgPGgyPlBsZWFzZSBMZWF2ZSBhIGNvbW1lbnQ8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzID0gJ2Vycm9yLW1zZyc+IDwvZGl2PlxuICAgICAgICA8aW5wdXQgaWQgPSAnbmFtZS1pbnB1dCcgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiID5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCIgbWVzc2FnZVwiIGlkPVwibXNnLWlucHV0XCIgY29scz1cIjI4XCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtZGl2XCI+XG4gICAgICAgICAgPGgyPkNvbW1lbnRzPC9oMj5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudC1ib2R5XCI+XG4gICAgICAgICAgICA8c3Bhbj5ObyBDb21tZW50cy4uLjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9zZWN0aW9uPlxuICBcbmA7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQod2luZG93Q29udGFpbmVyKTtcbiAgbGV0IGJvZHkgPSAnJztcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50KGBmJHtpfWApO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWRpdiBoMicpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbW1lbnRzKSkge1xuICAgIGNvbW1lbnRzLmZvckVhY2goKG8pID0+IHtcbiAgICAgIGJvZHkgKz0gYDxwPiR7by5jcmVhdGlvbl9kYXRlfSAke28udXNlcm5hbWV9OiAke28uY29tbWVudH08L3A+YDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChib2R5ICE9PSAnJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWJvZHknKS5pbm5lckhUTUwgPSBib2R5O1xuICB9XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZiR7aX1gKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbXNnJyk7XG4gIGNvbnN0IGNtdHZhbHVlID0gQ291bnQuY29tbWVudENvdW50ZXIoKTtcblxuICBoMi50ZXh0Q29udGVudCArPSBgICggJHtjbXR2YWx1ZX0gKWA7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBtc2dJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtc2ctaW5wdXQnKS52YWx1ZTtcbiAgICBpZiAobmFtZUlucHV0ID09PSAnJyB8fCBtc2dJbnB1dCA9PT0gJycpIHtcbiAgICAgIGVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgZmlsbCB0aGUgZmllbGRzJztcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBhZGRDb21tZW50KGZvcm0uaWQsIG5hbWVJbnB1dCwgbXNnSW5wdXQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBjb25zdCBjbXQgPSBhd2FpdCBnZXRDb21tZW50KGBmJHtpfWApO1xuICAgIGNvbnN0IGxhc3QgPSBjbXRbY210Lmxlbmd0aCAtIDFdO1xuICAgIGJvZHkgKz0gYDxwPiR7bGFzdC5jcmVhdGlvbl9kYXRlfSAke2xhc3QudXNlcm5hbWV9OiAke2xhc3QuY29tbWVudH08L3A+YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1ib2R5JykuaW5uZXJIVE1MID0gYm9keTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGAgQ29tbWVudHMgKCAke2NtdHZhbHVlICsgMX0gKWA7XG4gIH0pO1xuXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEteCcpO1xuICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvd0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQod2luZG93Q29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFX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Qix1QkFBdUI7QUFDbkQsZ0NBQWdDLGdDQUFnQztBQUNoRSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZELDZDQUE2QyxxQkFBcUI7QUFDbEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQVUsS0FBSyxFQUFFO0FBQzFDOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCLEVBQUUsV0FBVyxJQUFJLFVBQVU7QUFDaEUsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxFQUFFO0FBQzdDO0FBQ0EsbUJBQW1CLHNFQUFvQjs7QUFFdkMsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsdURBQVU7QUFDcEI7QUFDQSxzQkFBc0IsdURBQVUsS0FBSyxFQUFFO0FBQ3ZDO0FBQ0Esa0JBQWtCLG9CQUFvQixFQUFFLGNBQWMsSUFBSSxhQUFhO0FBQ3ZFO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0LTB4MDIvLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvY291bnRyaWVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9tb2R1bGVzL2l0ZW1zQ291bnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC0weDAyLy4vc3JjL21vZHVsZXMvcG9wdWxhdGVEaXNwbGF5LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QtMHgwMi8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAzMDA7NjAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMjYlLCAxNyUpO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMSUgMTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDIge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlOmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1ob2xkZXIge1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBnYXA6IDRyZW0gMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY291bnRyaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb3VudHJpZXMgaDIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDIlIDIlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAzcHggIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDM2JSwgMzclKTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uMSxcXHJcXG4jc2VhcmNoIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nOiAwLjclIDIuNSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA3LCAyNiUsIDE3JSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMjVweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcCB1cCBDb2RlICAqL1xcclxcbiNwb3B1cC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUtaW5wdXQge1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICByaWdodDogMjAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zaWRlLWJhciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1ibG9jayxcXHJcXG4ucmlnaHQtYmxvY2sge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZS1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDNyZW07XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDElIDIlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEteCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEteDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtaW1nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMs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QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAzMDA7NjAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwNywgMjYlLCAxNyUpO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjA5LCAyMyUsIDIyJSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMSUgMTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDIge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlOmFjdGl2ZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1ob2xkZXIge1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBnYXA6IDRyZW0gMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY291bnRyaWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb3VudHJpZXMgaDIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDIlIDIlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxLjVweCAzcHggIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDcsIDM2JSwgMzclKTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUgaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41JTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIwOSwgMjMlLCAyMiUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uMSxcXHJcXG4jc2VhcmNoIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwYWRkaW5nOiAwLjclIDIuNSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA3LCAyNiUsIDE3JSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMjVweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzJSBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcCB1cCBDb2RlICAqL1xcclxcbiNwb3B1cC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUtaW5wdXQge1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiAyMCU7XFxyXFxuICByaWdodDogMjAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMDksIDIzJSwgMjIlKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zaWRlLWJhciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1ibG9jayxcXHJcXG4ucmlnaHQtYmxvY2sge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZS1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmcjtcXHJcXG4gIGNvbHVtbi1nYXA6IDNyZW07XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDElIDIlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEteCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEteDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtaW1nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvcG9wdXAuanMnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2ltYWdlcy9nbG9iZS5wbmcnO1xuaW1wb3J0IGxpa2VJbWFnZSBmcm9tICcuL2ltYWdlcy9oZWFydHMucG5nJztcbmltcG9ydCBpY29uIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0IGNvdW50cmllcyBmcm9tICcuL21vZHVsZXMvY291bnRyaWVzLmpzJztcbmltcG9ydCB7IGdldExpa2VzQ291bnQsIGFkZExpa2UgfSBmcm9tICcuL21vZHVsZXMvbGlrZXMuanMnO1xuaW1wb3J0IHBvcHVsYXRlIGZyb20gJy4vbW9kdWxlcy9wb3B1bGF0ZURpc3BsYXkuanMnO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG5wb3B1bGF0ZSh1bCwgY291bnRyaWVzLCBnZXRMaWtlc0NvdW50KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28nKS5zcmMgPSBsb2dvSW1hZ2U7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ljb259KWA7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnNyYyA9IGxpa2VJbWFnZTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZExpa2UoZWxlbWVudCkpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctaG9sZGVyJykuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICB2YWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvdW50cmllc1tpbmRleF0uZmxhZ3MucG5nfSlgO1xufSk7XG5cbmNvbnN0IHdpbmRvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud2luZG93Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdwb3B1cC13aW5kb3cnO1xuXG5jb25zdCBwb3BXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcblxucG9wV2luZG93LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIHVsLnN0eWxlLmZpbHRlciA9ICdibHVyKDVweCknO1xuICAgIG1vZGFsKGVsZW1lbnQuaWRbMV0sIHdpbmRvd0NvbnRhaW5lciwgY291bnRyaWVzKTtcbiAgICB3aW5kb3dDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfSk7XG59KTtcbiIsImNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoaWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9jb21tZW50cycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3Qgc3MgPSBhd2FpdCByZS5qc29uKCk7XG4gIHJldHVybiBzcztcbn07XG5cbmV4cG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnQgfTsiLCJjbGFzcyBDb3VudCB7XG4gIHN0YXRpYyBjb21tZW50Q291bnRlcigpIHtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1ib2R5Jyk7XG4gICAgY29uc3QgYm9keUNoaWxkcmVuID0gY29tbWVudENvdW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcbiAgICByZXR1cm4gKGJvZHlDaGlsZHJlbi5sZW5ndGgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ291bnQ7IiwiY29uc3QgcHJvbWlzZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YyL2FsbCcpO1xuY29uc3QgY291bnRyaWVzID0gYXdhaXQgcHJvbWlzZS5qc29uKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50cmllczsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEl0ZW1zQ291bnQge1xuICBzdGF0aWMgaXRlbXNDb3VudGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbXNDb3VudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIHJldHVybiAoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgfVxufTsiLCJjb25zdCBhZGRMaWtlID0gYXN5bmMgKGVsZSkgPT4ge1xuICBjb25zdCBudW0gPSBlbGUubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcudGV4dENvbnRlbnQuc3BsaXQoJyAnKVswXTtcbiAgZWxlLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gJycuY29uY2F0KCtudW0gKyAxLCAnIGxpa2VzJyk7XG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VTXUyUUFiMzZQVlNhMEkzTjcxbS9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogZWxlLmlkLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IHByb21pc2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1VNdTJRQWIzNlBWU2EwSTNONzFtL2xpa2VzJywge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3Qgc3MgPSBhd2FpdCByZS5qc29uKCk7XG4gIHJldHVybiBzcztcbn07XG5jb25zdCBsaWtlID0gYXdhaXQgcHJvbWlzZSgpO1xuXG5jb25zdCBnZXRMaWtlc0NvdW50ID0gKGlkKSA9PiB7XG4gIGNvbnN0IHZhbCA9IGxpa2UuZmluZCgobykgPT4gby5pdGVtX2lkID09PSBpZCk7XG4gIHJldHVybiB2YWwgPT09IHVuZGVmaW5lZCA/IDAgOiB2YWwubGlrZXM7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlc0NvdW50LCBhZGRMaWtlIH07XG4iLCJpbXBvcnQgSXRlbXNDb3VudCBmcm9tICcuL2l0ZW1zQ291bnQuanMnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJpZXMgaDInKTtcbmNvbnN0IHBvcHVsYXRlID0gKHVsLCBjb3VudHJpZXMsIGdldExpa2VzQ291bnQpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSArPSAxKSB7XG4gICAgY29uc3QgaHRtbFRleHQgPSBgXG4gICAgPGxpPlxuICAgICAgPGRpdiBjbGFzcz1cImltZy1ob2xkZXJcIj48L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDI+JHtjb3VudHJpZXNbaV0ubmFtZX08L2gzPlxuICAgICAgICAgIDxoMz5SZWdpb246IDxzcGFuPiR7Y291bnRyaWVzW2ldLnJlZ2lvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgICA8aDM+Q2FwaXRhbDogPHNwYW4+JHtjb3VudHJpZXNbaV0uY2FwaXRhbH08L3NwYW4+PC9oMz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiXCIgaWQ9XCIkeydsJy5jb25jYXQoaSl9XCIgY2xhc3M9XCJsaWtlXCIgYWx0PVwiaGVhcnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCI+JHtnZXRMaWtlc0NvdW50KCdsJy5jb25jYXQoaSkpfSBsaWtlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIiR7J2MnLmNvbmNhdChpKX1cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2xpPlxuICAgIGA7XG4gICAgdWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sVGV4dCk7XG4gIH1cblxuICBjb25zdCBjb3VudCA9IEl0ZW1zQ291bnQuaXRlbXNDb3VudGVyKCk7XG4gIGgyLnRleHRDb250ZW50ID0gYFNob3J0IExpc3RzIE9mIENvdW50cmllcyAoJHtjb3VudH0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlOyIsImltcG9ydCB7IGFkZENvbW1lbnQsIGdldENvbW1lbnQgfSBmcm9tICcuL2NvbW1lbnQuanMnO1xuaW1wb3J0IENvdW50IGZyb20gJy4vY29tbWVudENvdW50LmpzJztcblxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1zZWN0aW9uJyk7XG5jb25zdCBtb2RhbCA9IGFzeW5jIChpLCB3aW5kb3dDb250YWluZXIsIGNvdW50cmllcykgPT4ge1xuICB3aW5kb3dDb250YWluZXIuaW5uZXJIVE1MID0gYCBcblxuPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14XCI+WDwvaT5cblxuICA8c2VjdGlvbiAgY2xhc3MgPSAnaW1nLXNpZGUtYmFyJz4gIFxuICAgIDxkaXYgY2xhc3M9XCJpbWctbmFtZVwiPlxuICAgICAgPGltZyBjbGFzcz1cInBvcFVwLWltZ1wiIHNyYz1cIiR7Y291bnRyaWVzW2ldLmZsYWdzLnN2Z31cIiBhbHQ9XCJcIj5cbiAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtjb3VudHJpZXNbaV0ubmFtZX08L2gyPlxuICAgIDwvZGl2PlxuXG5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicmlnaHQtYmxvY2tcIj5cbiAgICAgICAgPGgzPiBOYXRpdmUgbmFtZTo8c3Bhbj4gJHtjb3VudHJpZXNbaV0ubmF0aXZlTmFtZX08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPiBMYW5ndWFnZXM6PHNwYW4+ICR7Y291bnRyaWVzW2ldLmxhbmd1YWdlc1swXS5uYW1lfTwvc3Bhbj48L2gzPlxuICAgICAgICAgIDxoMyBjbGFzcyA9XCJwb3B1bGF0aW9uXCI+UG9wdWxhdGlvbjo8c3Bhbj4gJHtjb3VudHJpZXNbaV0ucG9wdWxhdGlvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgICA8aDM+IENhcGl0YWw6PHNwYW4+ICR7Y291bnRyaWVzW2ldLmNhcGl0YWx9PC9wYW4+PC9oMz5cbiAgICAgICAgICA8aDM+QXJlYTo8c3Bhbj4gJHtjb3VudHJpZXNbaV0uYXJlYX08L3NwYW4+PC9oMz5cbiAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyaWdodC1ibG9ja1wiPlxuICAgICAgICA8aDM+Q29udGluZW50OiA8c3Bhbj4ke2NvdW50cmllc1tpXS5yZWdpb259PC9zcGFuPjwvaDM+XG4gICAgICAgIDxoMz5SZWdpb246IDxzcGFuPiR7Y291bnRyaWVzW2ldLnN1YnJlZ2lvbn08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPkN1cnJlbmNpZXM6IDxzcGFuPiR7Y291bnRyaWVzW2ldLmN1cnJlbmNpZXNbMF0ubmFtZX08L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzPiBUaW1lLVpvbWU6IDxzcGFuPiR7Y291bnRyaWVzW2ldLnRpbWV6b25lc308L3NwYW4+PC9oMz5cbiAgICAgICAgPGgzIGNsYXNzPVwiYm9yZGVyc1wiPkJvcmRlcnM6IDxzcGFuPiR7Y291bnRyaWVzW2ldLmJvcmRlcnN9PC9zcGFuPjwvaDM+XG4gICAgICA8L2FydGljbGU+XG5cbiAgPC9zZWN0aW9uPiAgIFxuXG4gIDxzZWN0aW9uIGNsYXNzPVwiY29tbWVudC1kZXRhaWxzXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZGl2XCI+XG4gICAgICA8Zm9ybSBpZD1cImYke2l9XCIgY2xhc3M9J2Zvcm0nIGFjdGlvbj1cIlwiPlxuICAgICAgPGgyPlBsZWFzZSBMZWF2ZSBhIGNvbW1lbnQ8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzID0gJ2Vycm9yLW1zZyc+IDwvZGl2PlxuICAgICAgICA8aW5wdXQgaWQgPSAnbmFtZS1pbnB1dCcgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiID5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCIgbWVzc2FnZVwiIGlkPVwibXNnLWlucHV0XCIgY29scz1cIjI4XCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtZGl2XCI+XG4gICAgICAgICAgPGgyPkNvbW1lbnRzPC9oMj5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudC1ib2R5XCI+XG4gICAgICAgICAgICA8c3Bhbj5ObyBDb21tZW50cy4uLjwvc3Bhbj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9zZWN0aW9uPlxuICBcbmA7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQod2luZG93Q29udGFpbmVyKTtcbiAgbGV0IGJvZHkgPSAnJztcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50KGBmJHtpfWApO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWRpdiBoMicpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbW1lbnRzKSkge1xuICAgIGNvbW1lbnRzLmZvckVhY2goKG8pID0+IHtcbiAgICAgIGJvZHkgKz0gYDxwPiR7by5jcmVhdGlvbl9kYXRlfSAke28udXNlcm5hbWV9OiAke28uY29tbWVudH08L3A+YDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChib2R5ICE9PSAnJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWJvZHknKS5pbm5lckhUTUwgPSBib2R5O1xuICB9XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZiR7aX1gKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbXNnJyk7XG4gIGNvbnN0IGNtdHZhbHVlID0gQ291bnQuY29tbWVudENvdW50ZXIoKTtcblxuICBoMi50ZXh0Q29udGVudCArPSBgICggJHtjbXR2YWx1ZX0gKWA7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBtc2dJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtc2ctaW5wdXQnKS52YWx1ZTtcbiAgICBpZiAobmFtZUlucHV0ID09PSAnJyB8fCBtc2dJbnB1dCA9PT0gJycpIHtcbiAgICAgIGVycm9yLmlubmVySFRNTCA9ICdQbGVhc2UgZmlsbCB0aGUgZmllbGRzJztcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBhZGRDb21tZW50KGZvcm0uaWQsIG5hbWVJbnB1dCwgbXNnSW5wdXQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBjb25zdCBjbXQgPSBhd2FpdCBnZXRDb21tZW50KGBmJHtpfWApO1xuICAgIGNvbnN0IGxhc3QgPSBjbXRbY210Lmxlbmd0aCAtIDFdO1xuICAgIGJvZHkgKz0gYDxwPiR7bGFzdC5jcmVhdGlvbl9kYXRlfSAke2xhc3QudXNlcm5hbWV9OiAke2xhc3QuY29tbWVudH08L3A+YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1ib2R5JykuaW5uZXJIVE1MID0gYm9keTtcbiAgICBoMi50ZXh0Q29udGVudCA9IGAgQ29tbWVudHMgKCAke2NtdHZhbHVlICsgMX0gKWA7XG4gIH0pO1xuXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEteCcpO1xuICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvd0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQod2luZG93Q29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> 51524403160478b750d0b4e80911acf3c9ad4d6f
