"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-any";
exports.ids = ["vendor-chunks/p-any"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-any/index.js":
/*!*************************************!*\
  !*** ./node_modules/p-any/index.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AggregateError: () => (/* reexport safe */ p_some__WEBPACK_IMPORTED_MODULE_0__.AggregateError),\n/* harmony export */   \"default\": () => (/* binding */ pAny)\n/* harmony export */ });\n/* harmony import */ var p_some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-some */ \"(ssr)/./node_modules/p-some/index.js\");\n/* harmony import */ var p_cancelable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-cancelable */ \"(ssr)/./node_modules/p-cancelable/index.js\");\n\n\nfunction pAny(iterable, options) {\n    const anyCancelable = (0,p_some__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(iterable, {\n        ...options,\n        count: 1\n    });\n    return p_cancelable__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fn(async (onCancel)=>{\n        onCancel(()=>{\n            anyCancelable.cancel();\n        });\n        const [value] = await anyCancelable;\n        return value;\n    })();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1hbnkvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNZO0FBRXhCLFNBQVNFLEtBQUtDLFFBQVEsRUFBRUMsT0FBTztJQUM3QyxNQUFNQyxnQkFBZ0JMLGtEQUFLQSxDQUFDRyxVQUFVO1FBQUMsR0FBR0MsT0FBTztRQUFFRSxPQUFPO0lBQUM7SUFFM0QsT0FBT0wsb0RBQVdBLENBQUNNLEVBQUUsQ0FBQyxPQUFNQztRQUMzQkEsU0FBUztZQUNSSCxjQUFjSSxNQUFNO1FBQ3JCO1FBRUEsTUFBTSxDQUFDQyxNQUFNLEdBQUcsTUFBTUw7UUFDdEIsT0FBT0s7SUFDUjtBQUNEO0FBRXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9iaWxlLy4vbm9kZV9tb2R1bGVzL3AtYW55L2luZGV4LmpzP2MyMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBTb21lIGZyb20gJ3Atc29tZSc7XG5pbXBvcnQgUENhbmNlbGFibGUgZnJvbSAncC1jYW5jZWxhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcEFueShpdGVyYWJsZSwgb3B0aW9ucykge1xuXHRjb25zdCBhbnlDYW5jZWxhYmxlID0gcFNvbWUoaXRlcmFibGUsIHsuLi5vcHRpb25zLCBjb3VudDogMX0pO1xuXG5cdHJldHVybiBQQ2FuY2VsYWJsZS5mbihhc3luYyBvbkNhbmNlbCA9PiB7XG5cdFx0b25DYW5jZWwoKCkgPT4ge1xuXHRcdFx0YW55Q2FuY2VsYWJsZS5jYW5jZWwoKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IFt2YWx1ZV0gPSBhd2FpdCBhbnlDYW5jZWxhYmxlO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fSkoKTtcbn1cblxuZXhwb3J0IHtBZ2dyZWdhdGVFcnJvcn0gZnJvbSAncC1zb21lJztcbiJdLCJuYW1lcyI6WyJwU29tZSIsIlBDYW5jZWxhYmxlIiwicEFueSIsIml0ZXJhYmxlIiwib3B0aW9ucyIsImFueUNhbmNlbGFibGUiLCJjb3VudCIsImZuIiwib25DYW5jZWwiLCJjYW5jZWwiLCJ2YWx1ZSIsIkFnZ3JlZ2F0ZUVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-any/index.js\n");

/***/ })

};
;