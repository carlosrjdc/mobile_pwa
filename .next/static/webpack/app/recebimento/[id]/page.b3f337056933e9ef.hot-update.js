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

/***/ "(app-pages-browser)/./src/pagina/recebimento/descarga/3_conferencia/form.tsx":
/*!****************************************************************!*\
  !*** ./src/pagina/recebimento/descarga/3_conferencia/form.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormularioConferencia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _data_produto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/produto */ \"(app-pages-browser)/./src/data/produto.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! idb-keyval */ \"(app-pages-browser)/./node_modules/idb-keyval/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _context_contextRecebimento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/contextRecebimento */ \"(app-pages-browser)/./src/pagina/recebimento/context/contextRecebimento.tsx\");\n/* harmony import */ var _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../states/recebimentoState */ \"(app-pages-browser)/./src/pagina/recebimento/states/recebimentoState.tsx\");\n/* harmony import */ var _lote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lote */ \"(app-pages-browser)/./src/pagina/recebimento/descarga/3_conferencia/lote/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_9__.object({\n    sku: zod__WEBPACK_IMPORTED_MODULE_9__.string(),\n    lote: zod__WEBPACK_IMPORTED_MODULE_9__.string().optional(),\n    idPallet: zod__WEBPACK_IMPORTED_MODULE_9__.string(),\n    quantidade: zod__WEBPACK_IMPORTED_MODULE_9__.number(),\n    peso: zod__WEBPACK_IMPORTED_MODULE_9__.number()\n});\nconsole.log(_data_produto__WEBPACK_IMPORTED_MODULE_3__.tabela);\n//ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null}\nfunction FormularioConferencia() {\n    _s();\n    const { dispatchPage } = (0,_context_contextRecebimento__WEBPACK_IMPORTED_MODULE_6__.useRecebimentoContext)();\n    const { register, handleSubmit, reset, getValues, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(schema)\n    });\n    const [infoSku, setInfoSku] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [variavel, setVariavel] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [empresa, setEmpresa] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"lactalis\");\n    const ADD_PRODUCT = (0,_states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore)((state)=>state.ADD_PRODUTO);\n    const infoProduct = (0,_states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore)((state)=>state.produtos);\n    const onSubmit = (data)=>{\n        console.log(data);\n        ADD_PRODUCT({\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(),\n            idPallet: data.idPallet,\n            lote: data.lote ? data.lote : \"\",\n            sku: data.sku,\n            quantidade: data.quantidade,\n            empresa: empresa,\n            descricao: infoSku\n        });\n        setInfoSku(\"\");\n        reset();\n    };\n    async function onChangeProduto(event) {\n        const produto = await (0,idb_keyval__WEBPACK_IMPORTED_MODULE_12__.get)(\"produtos\");\n        if (produto) {\n            const ajustado = JSON.parse(produto);\n            const verificar = ajustado.filter((item)=>item.sku === parseInt(event.target.value) || item.dum === event.target.value || item.ean === event.target.value);\n            if (verificar.length > 0) {\n                setInfoSku(verificar[0].desc);\n                setEmpresa(verificar[0].empresa);\n                if (verificar[0].tipo === \"PVAR\") {\n                    setVariavel(false);\n                } else {\n                    setVariavel(true);\n                }\n            } else {\n                setInfoSku(\"\");\n            }\n        }\n    }\n    console.log(getValues().lote);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-2 w-full\",\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"ID Pallet\",\n                ...register(\"idPallet\")\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"SKU\",\n                ...register(\"sku\", {\n                    onBlur (event) {\n                        onChangeProduto(event);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            infoSku !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center font bg-accent text-sm font-semibold uppercase p-1 rounded\",\n                children: infoSku\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mr-2\",\n                children: [\n                    getValues().lote && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        texto: \"Lote\",\n                        onChange: ()=>\"\",\n                        placeholder: \"Lote\",\n                        className: \"bg-green-400\",\n                        value: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this),\n                    getValues().lote !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        texto: \"Lote\",\n                        placeholder: \"Lote\",\n                        className: \"bg-red-400\",\n                        ...register(\"lote\")\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lote__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        empresa: empresa\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"Quantidade\",\n                ...register(\"quantidade\", {\n                    valueAsNumber: true\n                })\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"Peso\",\n                ...register(\"peso\", {\n                    valueAsNumber: true\n                })\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>dispatchPage({\n                                type: \"SET_PAGE\",\n                                payload: {\n                                    page: \"info_temperatura\"\n                                }\n                            }),\n                        type: \"button\",\n                        children: \"VOLTAR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        children: \"CADASTRAR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(FormularioConferencia, \"KE8VqJOxEK6/6X7yF24d5qbi/6A=\", false, function() {\n    return [\n        _context_contextRecebimento__WEBPACK_IMPORTED_MODULE_6__.useRecebimentoContext,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm,\n        _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore,\n        _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore\n    ];\n});\n_c = FormularioConferencia;\nvar _c;\n$RefreshReg$(_c, \"FormularioConferencia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdpbmEvcmVjZWJpbWVudG8vZGVzY2FyZ2EvM19jb25mZXJlbmNpYS9mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNGO0FBQ0c7QUFDSztBQUNyQjtBQUNBO0FBQ1M7QUFDTjtBQUNYO0FBQ2dEO0FBQ1Q7QUFDL0I7QUFFakMsTUFBTWEsU0FBU0osdUNBQVEsQ0FBQztJQUN0Qk0sS0FBS04sdUNBQVE7SUFDYlEsTUFBTVIsdUNBQVEsR0FBR1MsUUFBUTtJQUN6QkMsVUFBVVYsdUNBQVE7SUFDbEJXLFlBQVlYLHVDQUFRO0lBQ3BCYSxNQUFNYix1Q0FBUTtBQUNoQjtBQUlBYyxRQUFRQyxHQUFHLENBQUN0QixpREFBTUE7QUFFbEIsNkdBQTZHO0FBRTlGLFNBQVN1Qjs7SUFDdEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR2hCLGtGQUFxQkE7SUFFOUMsTUFBTSxFQUNKaUIsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUN0QixHQUFHMUIseURBQU9BLENBQVM7UUFDbEIyQixVQUFVOUIsb0VBQVdBLENBQUNVO0lBQ3hCO0lBRUEsTUFBTSxDQUFDcUIsU0FBU0MsV0FBVyxHQUFHOUIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDK0IsVUFBVUMsWUFBWSxHQUFHaEMsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUMsU0FBU0MsV0FBVyxHQUFHbEMsK0NBQVFBLENBQ3BDO0lBR0YsTUFBTW1DLGNBQWM3Qix5RUFBZUEsQ0FBQyxDQUFDOEIsUUFBU0EsTUFBTUMsV0FBVztJQUMvRCxNQUFNQyxjQUFjaEMseUVBQWVBLENBQUMsQ0FBQzhCLFFBQVNBLE1BQU1HLFFBQVE7SUFHNUQsTUFBTUMsV0FBVyxDQUFDQztRQUNoQnZCLFFBQVFDLEdBQUcsQ0FBQ3NCO1FBQ2JOLFlBQVk7WUFDVE8sSUFB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Ozs7S0FwQmJjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdpbmEvcmVjZWJpbWVudG8vZGVzY2FyZ2EvM19jb25mZXJlbmNpYS9mb3JtLnRzeD8xZTdlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBJVGFiZWxhLCB0YWJlbGEgfSBmcm9tIFwiQC9kYXRhL3Byb2R1dG9cIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tIFwiaWRiLWtleXZhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0ICogYXMgeiBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB1c2VSZWNlYmltZW50b0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9jb250ZXh0UmVjZWJpbWVudG9cIjtcbmltcG9ydCB7IHVzZVByb2R1Y3RTdG9yZSB9IGZyb20gXCIuLi8uLi9zdGF0ZXMvcmVjZWJpbWVudG9TdGF0ZVwiO1xuaW1wb3J0IExvdGVQcm9kdXRvIGZyb20gXCIuL2xvdGVcIjtcblxuY29uc3Qgc2NoZW1hID0gei5vYmplY3Qoe1xuICBza3U6IHouc3RyaW5nKCksXG4gIGxvdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgaWRQYWxsZXQ6IHouc3RyaW5nKCksXG4gIHF1YW50aWRhZGU6IHoubnVtYmVyKCksXG4gIHBlc286IHoubnVtYmVyKCksXG59KTtcblxudHlwZSBTY2hlbWEgPSB6LmluZmVyPHR5cGVvZiBzY2hlbWE+O1xuXG5jb25zb2xlLmxvZyh0YWJlbGEpO1xuXG4vL29jcjpzdHJpbmcsIGRvY2E6c3RyaW5nLCBwbGFjYTpzdHJpbmcsIGxhY3JlOnN0cmluZywgZm90b0NhcnJldGFGZWNoYWRhPzpGaWxlIHwgbnVsbCwgZm90b0xhY3JlPzpGaWxlfG51bGx9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm11bGFyaW9Db25mZXJlbmNpYSgpIHtcbiAgY29uc3QgeyBkaXNwYXRjaFBhZ2UgfSA9IHVzZVJlY2ViaW1lbnRvQ29udGV4dCgpO1xuXG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVzZXQsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08U2NoZW1hPih7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKHNjaGVtYSksXG4gIH0pO1xuXG4gIGNvbnN0IFtpbmZvU2t1LCBzZXRJbmZvU2t1XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFyaWF2ZWwsIHNldFZhcmlhdmVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VtcHJlc2EsIHNldEVtcHJlc2FdID0gdXNlU3RhdGU8XCJkcGFcIiB8IFwibGFjdGFsaXNcIiB8IFwiaXRhbWJlXCI+KFxuICAgIFwibGFjdGFsaXNcIlxuICApO1xuXG4gIGNvbnN0IEFERF9QUk9EVUNUID0gdXNlUHJvZHVjdFN0b3JlKChzdGF0ZSk9PiBzdGF0ZS5BRERfUFJPRFVUTylcbiAgY29uc3QgaW5mb1Byb2R1Y3QgPSB1c2VQcm9kdWN0U3RvcmUoKHN0YXRlKT0+IHN0YXRlLnByb2R1dG9zKVxuXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogU2NoZW1hKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgIEFERF9QUk9EVUNUKHtcbiAgICAgIGlkOiAgdXVpZHY0KCksXG4gICAgICBpZFBhbGxldDpkYXRhLmlkUGFsbGV0LFxuICAgICAgbG90ZTogZGF0YS5sb3RlID8gZGF0YS5sb3RlIDogXCJcIixcbiAgICAgIHNrdTogZGF0YS5za3UsXG4gICAgICBxdWFudGlkYWRlOiBkYXRhLnF1YW50aWRhZGUsXG4gICAgICBlbXByZXNhOmVtcHJlc2EsXG4gICAgICBkZXNjcmljYW86aW5mb1NrdVxuICAgIH0pXG4gICAgc2V0SW5mb1NrdShcIlwiKTtcbiAgICByZXNldCgpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlUHJvZHV0byhldmVudDogYW55KSB7XG4gICAgY29uc3QgcHJvZHV0byA9IGF3YWl0IGdldChcInByb2R1dG9zXCIpO1xuICAgIGlmIChwcm9kdXRvKSB7XG4gICAgICBjb25zdCBhanVzdGFkbzogSVRhYmVsYVtdID0gSlNPTi5wYXJzZShwcm9kdXRvKTtcblxuICAgICAgY29uc3QgdmVyaWZpY2FyID0gYWp1c3RhZG8uZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICBpdGVtLnNrdSA9PT0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSB8fFxuICAgICAgICAgIGl0ZW0uZHVtID09PSBldmVudC50YXJnZXQudmFsdWUgfHxcbiAgICAgICAgICBpdGVtLmVhbiA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAodmVyaWZpY2FyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0SW5mb1NrdSh2ZXJpZmljYXJbMF0uZGVzYyk7XG4gICAgICAgIHNldEVtcHJlc2EodmVyaWZpY2FyWzBdLmVtcHJlc2EpO1xuICAgICAgICBpZiAodmVyaWZpY2FyWzBdLnRpcG8gPT09IFwiUFZBUlwiKSB7XG4gICAgICAgICAgc2V0VmFyaWF2ZWwoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFZhcmlhdmVsKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJbmZvU2t1KFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKGdldFZhbHVlcygpLmxvdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMiB3LWZ1bGxcIlxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgPlxuICAgICAgPElucHV0IHRleHRvPVwiSUQgUGFsbGV0XCIgey4uLnJlZ2lzdGVyKFwiaWRQYWxsZXRcIil9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdGV4dG89XCJTS1VcIlxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJza3VcIiwge1xuICAgICAgICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICAgICAgb25DaGFuZ2VQcm9kdXRvKGV2ZW50KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgICB7aW5mb1NrdSAhPT0gXCJcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udCBiZy1hY2NlbnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSBwLTEgcm91bmRlZFwiPlxuICAgICAgICAgIHtpbmZvU2t1fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1yLTJcIj5cbiAgICAgICAge2dldFZhbHVlcygpLmxvdGUgJiYgKFxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdGV4dG89XCJMb3RlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+IFwiXCJ9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvdGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNDAwXCJcbiAgICAgICAgICAgIHZhbHVlPXtcIlwifVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtnZXRWYWx1ZXMoKS5sb3RlICE9PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgIDxJbnB1dCB0ZXh0bz1cIkxvdGVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMb3RlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC00MDBcIlxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibG90ZVwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxMb3RlUHJvZHV0byBlbXByZXNhPXtlbXByZXNhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdGV4dG89XCJRdWFudGlkYWRlXCJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwicXVhbnRpZGFkZVwiLCB7IHZhbHVlQXNOdW1iZXI6IHRydWUgfSl9XG4gICAgICAvPlxuICAgICAgPElucHV0IHRleHRvPVwiUGVzb1wiIHsuLi5yZWdpc3RlcihcInBlc29cIiwgeyB2YWx1ZUFzTnVtYmVyOiB0cnVlIH0pfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC00XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2hQYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJTRVRfUEFHRVwiLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7IHBhZ2U6IFwiaW5mb190ZW1wZXJhdHVyYVwiIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIFZPTFRBUlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q0FEQVNUUkFSPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJ0YWJlbGEiLCJ6b2RSZXNvbHZlciIsImdldCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInY0IiwidXVpZHY0IiwieiIsInVzZVJlY2ViaW1lbnRvQ29udGV4dCIsInVzZVByb2R1Y3RTdG9yZSIsIkxvdGVQcm9kdXRvIiwic2NoZW1hIiwib2JqZWN0Iiwic2t1Iiwic3RyaW5nIiwibG90ZSIsIm9wdGlvbmFsIiwiaWRQYWxsZXQiLCJxdWFudGlkYWRlIiwibnVtYmVyIiwicGVzbyIsImNvbnNvbGUiLCJsb2ciLCJGb3JtdWxhcmlvQ29uZmVyZW5jaWEiLCJkaXNwYXRjaFBhZ2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZ2V0VmFsdWVzIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVzb2x2ZXIiLCJpbmZvU2t1Iiwic2V0SW5mb1NrdSIsInZhcmlhdmVsIiwic2V0VmFyaWF2ZWwiLCJlbXByZXNhIiwic2V0RW1wcmVzYSIsIkFERF9QUk9EVUNUIiwic3RhdGUiLCJBRERfUFJPRFVUTyIsImluZm9Qcm9kdWN0IiwicHJvZHV0b3MiLCJvblN1Ym1pdCIsImRhdGEiLCJpZCIsImRlc2NyaWNhbyIsIm9uQ2hhbmdlUHJvZHV0byIsImV2ZW50IiwicHJvZHV0byIsImFqdXN0YWRvIiwiSlNPTiIsInBhcnNlIiwidmVyaWZpY2FyIiwiZmlsdGVyIiwiaXRlbSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJkdW0iLCJlYW4iLCJsZW5ndGgiLCJkZXNjIiwidGlwbyIsImZvcm0iLCJjbGFzc05hbWUiLCJ0ZXh0byIsIm9uQmx1ciIsImRpdiIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJ2YWx1ZUFzTnVtYmVyIiwib25DbGljayIsInR5cGUiLCJwYXlsb2FkIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pagina/recebimento/descarga/3_conferencia/form.tsx\n"));

/***/ })

});