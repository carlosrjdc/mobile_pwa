"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/recebimento/[id]/page",{

/***/ "(app-pages-browser)/./src/pagina/recebimento/descarga/1_infoCarro/index.tsx":
/*!***************************************************************!*\
  !*** ./src/pagina/recebimento/descarga/1_infoCarro/index.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InfoCarro; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _types_infoCarro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/infoCarro */ \"(app-pages-browser)/./src/pagina/recebimento/types/infoCarro.tsx\");\n/* harmony import */ var _7_globals_infoPlacaOcr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../7_globals/infoPlacaOcr */ \"(app-pages-browser)/./src/pagina/recebimento/descarga/7_globals/infoPlacaOcr.tsx\");\n/* harmony import */ var _formulario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario */ \"(app-pages-browser)/./src/pagina/recebimento/descarga/1_infoCarro/formulario.tsx\");\n/** @format */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction InfoCarro() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    console.log(params);\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(_types_infoCarro__WEBPACK_IMPORTED_MODULE_4__.FormInfoCarro),\n        defaultValues: {\n            Ocr: \"\",\n            Doca: \"\",\n            Placa: \"\",\n            Lacre: \"\"\n        }\n    });\n    function onSubmit(data) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_1__.toast)({\n            title: \"You submitted the following values:\",\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"mt-2 w-[340px] rounded-md bg-slate-950 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    className: \"text-white\",\n                    children: JSON.stringify(data, null, 2)\n                }, void 0, false, {\n                    fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/1_infoCarro/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/1_infoCarro/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_7_globals_infoPlacaOcr__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/1_infoCarro/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-2 flex flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_formulario__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/1_infoCarro/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/1_infoCarro/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/1_infoCarro/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(InfoCarro, \"9b9QaEAhjt3g5A4N7gYmpbvvdIM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = InfoCarro;\nvar _c;\n$RefreshReg$(_c, \"InfoCarro\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdpbmEvcmVjZWJpbWVudG8vZGVzY2FyZ2EvMV9pbmZvQ2Fycm8vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLFlBQVk7O0FBR3NDO0FBQ0k7QUFDVjtBQUNGO0FBQ3dCO0FBQ2I7QUFDVDtBQUU3QixTQUFTTzs7SUFDdEIsTUFBTUMsU0FBU04sMERBQVNBO0lBRXhCTyxRQUFRQyxHQUFHLENBQUNGO0lBRVosTUFBTUcsT0FBT1Isd0RBQU9BLENBQWE7UUFDL0JTLFVBQVVYLG9FQUFXQSxDQUFDRywyREFBYUE7UUFDbkNTLGVBQWU7WUFDYkMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxTQUFTQyxTQUFTQyxJQUFnQjtRQUNoQ25CLCtEQUFLQSxDQUFDO1lBQ0pvQixPQUFPO1lBQ1BDLDJCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUtELFdBQVU7OEJBQWNFLEtBQUtDLFNBQVMsQ0FBQ1AsTUFBTSxNQUFNOzs7Ozs7Ozs7OztRQUcvRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlKLFdBQVU7OzBCQUNiLDhEQUFDbEIsK0RBQVlBOzs7OzswQkFDYiw4REFBQ3NCO2dCQUFJSixXQUFVOzBCQUNiLDRFQUFDakIsbURBQWdCQTs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QjtHQWxDd0JDOztRQUNQTCxzREFBU0E7UUFJWEMsb0RBQU9BOzs7S0FMRUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2luYS9yZWNlYmltZW50by9kZXNjYXJnYS8xX2luZm9DYXJyby9pbmRleC50c3g/YWRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgRm9ybUluZm9DYXJybywgSUluZm9DYXJybyB9IGZyb20gXCIuLi8uLi90eXBlcy9pbmZvQ2Fycm9cIjtcbmltcG9ydCBJbmZvUGxhY2FPY3IgZnJvbSBcIi4uLzdfZ2xvYmFscy9pbmZvUGxhY2FPY3JcIjtcbmltcG9ydCBGb3JtdWxhcmlvSUNhcnJvIGZyb20gXCIuL2Zvcm11bGFyaW9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0NhcnJvKCkge1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcblxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuXG4gIGNvbnN0IGZvcm0gPSB1c2VGb3JtPElJbmZvQ2Fycm8+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoRm9ybUluZm9DYXJybyksXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgT2NyOiBcIlwiLFxuICAgICAgRG9jYTogXCJcIixcbiAgICAgIFBsYWNhOiBcIlwiLFxuICAgICAgTGFjcmU6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25TdWJtaXQoZGF0YTogSUluZm9DYXJybykge1xuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiBcIllvdSBzdWJtaXR0ZWQgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XCIsXG4gICAgICBkZXNjcmlwdGlvbjogKFxuICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm10LTIgdy1bMzQwcHhdIHJvdW5kZWQtbWQgYmctc2xhdGUtOTUwIHAtNFwiPlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgICA8L3ByZT5cbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxJbmZvUGxhY2FPY3IgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggZmxleC0xXCI+XG4gICAgICAgIDxGb3JtdWxhcmlvSUNhcnJvIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ0b2FzdCIsInpvZFJlc29sdmVyIiwidXNlUGFyYW1zIiwidXNlRm9ybSIsIkZvcm1JbmZvQ2Fycm8iLCJJbmZvUGxhY2FPY3IiLCJGb3JtdWxhcmlvSUNhcnJvIiwiSW5mb0NhcnJvIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJPY3IiLCJEb2NhIiwiUGxhY2EiLCJMYWNyZSIsIm9uU3VibWl0IiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmUiLCJjbGFzc05hbWUiLCJjb2RlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pagina/recebimento/descarga/1_infoCarro/index.tsx\n"));

/***/ })

});