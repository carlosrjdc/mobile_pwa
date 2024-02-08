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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormularioConferencia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _data_produto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/produto */ \"(app-pages-browser)/./src/data/produto.ts\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! idb-keyval */ \"(app-pages-browser)/./node_modules/idb-keyval/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _context_contextRecebimento__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/contextRecebimento */ \"(app-pages-browser)/./src/pagina/recebimento/context/contextRecebimento.tsx\");\n/* harmony import */ var _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../states/recebimentoState */ \"(app-pages-browser)/./src/pagina/recebimento/states/recebimentoState.tsx\");\n/* harmony import */ var _lote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lote */ \"(app-pages-browser)/./src/pagina/recebimento/descarga/3_conferencia/lote/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_9__.object({\n    sku: zod__WEBPACK_IMPORTED_MODULE_9__.string(),\n    lote: zod__WEBPACK_IMPORTED_MODULE_9__.string().optional(),\n    idPallet: zod__WEBPACK_IMPORTED_MODULE_9__.string(),\n    quantidade: zod__WEBPACK_IMPORTED_MODULE_9__.number(),\n    peso: zod__WEBPACK_IMPORTED_MODULE_9__.number()\n});\nconsole.log(_data_produto__WEBPACK_IMPORTED_MODULE_3__.tabela);\n//ocr:string, doca:string, placa:string, lacre:string, fotoCarretaFechada?:File | null, fotoLacre?:File|null}\nfunction FormularioConferencia() {\n    _s();\n    const { dispatchPage } = (0,_context_contextRecebimento__WEBPACK_IMPORTED_MODULE_6__.useRecebimentoContext)();\n    const { register, handleSubmit, reset, getValues, setValue, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_4__.zodResolver)(schema)\n    });\n    const [infoSku, setInfoSku] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [variavel, setVariavel] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [empresa, setEmpresa] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"lactalis\");\n    const ADD_PRODUCT = (0,_states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore)((state)=>state.ADD_PRODUTO);\n    const infoProduct = (0,_states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore)((state)=>state.produtos);\n    const infoCarro = (0,_states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((state)=>state.infoCarro);\n    const onSubmit = (data)=>{\n        console.log(data);\n        ADD_PRODUCT({\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(),\n            idPallet: data.idPallet,\n            lote: data.lote ? data.lote : \"\",\n            sku: data.sku,\n            quantidade: data.quantidade,\n            empresa: empresa,\n            descricao: infoSku\n        });\n        setInfoSku(\"\");\n        reset();\n    };\n    async function onChangeProduto(event) {\n        const produto = await (0,idb_keyval__WEBPACK_IMPORTED_MODULE_12__.get)(\"produtos\");\n        if (produto) {\n            const ajustado = JSON.parse(produto);\n            const verificar = ajustado.filter((item)=>item.sku === parseInt(event.target.value) || item.dum === event.target.value || item.ean === event.target.value);\n            if (verificar.length > 0) {\n                setInfoSku(verificar[0].desc);\n                setEmpresa(verificar[0].empresa);\n                if (verificar[0].tipo === \"PVAR\") {\n                    setVariavel(false);\n                } else {\n                    setVariavel(true);\n                }\n            } else {\n                setInfoSku(\"\");\n            }\n        }\n    }\n    function ajustarValor() {\n        console.log(\"passei\");\n        setValue(\"lote\", \"433421555\");\n    }\n    console.log(getValues().lote);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-2 w-full\",\n        onSubmit: handleSubmit(ajustarValor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"ID Pallet\",\n                ...register(\"idPallet\")\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"SKU\",\n                ...register(\"sku\", {\n                    onBlur (event) {\n                        onChangeProduto(event);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            infoSku !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center font bg-accent text-sm font-semibold uppercase p-1 rounded\",\n                children: infoSku\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-2 mr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        texto: \"Lote\",\n                        placeholder: \"Lote\",\n                        className: \"bg-red-400\",\n                        ...register(\"lote\")\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lote__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        setValue: setValue,\n                        empresa: empresa\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"Quantidade\",\n                ...register(\"quantidade\", {\n                    valueAsNumber: true\n                })\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                texto: \"Peso\",\n                ...register(\"peso\", {\n                    valueAsNumber: true\n                })\n            }, void 0, false, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>setValue(\"lote\", \"433421555\"),\n                        children: \"Lote\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: ()=>dispatchPage({\n                                type: \"SET_PAGE\",\n                                payload: {\n                                    page: \"info_temperatura\"\n                                }\n                            }),\n                        type: \"button\",\n                        children: \"VOLTAR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        children: \"CADASTRAR\"\n                    }, void 0, false, {\n                        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/carlos/Documents/carlos/WMS/front/pwa/src/pagina/recebimento/descarga/3_conferencia/form.tsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(FormularioConferencia, \"wcXjAwS2T0qRCtP1YXX+x0YiNOY=\", false, function() {\n    return [\n        _context_contextRecebimento__WEBPACK_IMPORTED_MODULE_6__.useRecebimentoContext,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm,\n        _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore,\n        _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__.useProductStore,\n        _states_recebimentoState__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = FormularioConferencia;\nvar _c;\n$RefreshReg$(_c, \"FormularioConferencia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdpbmEvcmVjZWJpbWVudG8vZGVzY2FyZ2EvM19jb25mZXJlbmNpYS9mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNGO0FBQ0c7QUFDSztBQUNyQjtBQUNBO0FBQ1M7QUFDTjtBQUNYO0FBQ2dEO0FBR2xDO0FBQ047QUFFakMsTUFBTWMsU0FBU0wsdUNBQVEsQ0FBQztJQUN0Qk8sS0FBS1AsdUNBQVE7SUFDYlMsTUFBTVQsdUNBQVEsR0FBR1UsUUFBUTtJQUN6QkMsVUFBVVgsdUNBQVE7SUFDbEJZLFlBQVlaLHVDQUFRO0lBQ3BCYyxNQUFNZCx1Q0FBUTtBQUNoQjtBQUlBZSxRQUFRQyxHQUFHLENBQUN2QixpREFBTUE7QUFFbEIsNkdBQTZHO0FBRTlGLFNBQVN3Qjs7SUFDdEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR2pCLGtGQUFxQkE7SUFFOUMsTUFBTSxFQUNKa0IsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxRQUFRLEVBQ1JDLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEVBQ3RCLEdBQUc1Qix5REFBT0EsQ0FBUztRQUNsQjZCLFVBQVVoQyxvRUFBV0EsQ0FBQ1c7SUFDeEI7SUFFQSxNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUdoQywrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNpQyxVQUFVQyxZQUFZLEdBQUdsQywrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNtQyxTQUFTQyxXQUFXLEdBQUdwQywrQ0FBUUEsQ0FDcEM7SUFHRixNQUFNcUMsY0FBYzlCLHlFQUFlQSxDQUFDLENBQUMrQixRQUFVQSxNQUFNQyxXQUFXO0lBQ2hFLE1BQU1DLGNBQWNqQyx5RUFBZUEsQ0FBQyxDQUFDK0IsUUFBVUEsTUFBTUcsUUFBUTtJQUM3RCxNQUFNQyxZQUFZcEMsb0VBQWVBLENBQUMsQ0FBQ2dDLFFBQVVBLE1BQU1JLFNBQVM7SUFF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N0h3QnBEOztRQUNHaEIsOEVBQXFCQTtRQVMxQ0oscURBQU9BO1FBVVNNLHFFQUFlQTtRQUNmQSxxRUFBZUE7UUFDakJELGdFQUFlQTs7O0tBdEJYZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnaW5hL3JlY2ViaW1lbnRvL2Rlc2NhcmdhLzNfY29uZmVyZW5jaWEvZm9ybS50c3g/MWU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgSVRhYmVsYSwgdGFiZWxhIH0gZnJvbSBcIkAvZGF0YS9wcm9kdXRvXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImlkYi1rZXl2YWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCAqIGFzIHogZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgdXNlUmVjZWJpbWVudG9Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY29udGV4dFJlY2ViaW1lbnRvXCI7XG5pbXBvcnQgdXNlSW5mb0NhclN0b3JlLCB7XG4gIHVzZVByb2R1Y3RTdG9yZSxcbn0gZnJvbSBcIi4uLy4uL3N0YXRlcy9yZWNlYmltZW50b1N0YXRlXCI7XG5pbXBvcnQgTG90ZVByb2R1dG8gZnJvbSBcIi4vbG90ZVwiO1xuXG5jb25zdCBzY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNrdTogei5zdHJpbmcoKSxcbiAgbG90ZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBpZFBhbGxldDogei5zdHJpbmcoKSxcbiAgcXVhbnRpZGFkZTogei5udW1iZXIoKSxcbiAgcGVzbzogei5udW1iZXIoKSxcbn0pO1xuXG50eXBlIFNjaGVtYSA9IHouaW5mZXI8dHlwZW9mIHNjaGVtYT47XG5cbmNvbnNvbGUubG9nKHRhYmVsYSk7XG5cbi8vb2NyOnN0cmluZywgZG9jYTpzdHJpbmcsIHBsYWNhOnN0cmluZywgbGFjcmU6c3RyaW5nLCBmb3RvQ2FycmV0YUZlY2hhZGE/OkZpbGUgfCBudWxsLCBmb3RvTGFjcmU/OkZpbGV8bnVsbH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybXVsYXJpb0NvbmZlcmVuY2lhKCkge1xuICBjb25zdCB7IGRpc3BhdGNoUGFnZSB9ID0gdXNlUmVjZWJpbWVudG9Db250ZXh0KCk7XG5cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZXNldCxcbiAgICBnZXRWYWx1ZXMsXG4gICAgc2V0VmFsdWUsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxTY2hlbWE+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoc2NoZW1hKSxcbiAgfSk7XG5cbiAgY29uc3QgW2luZm9Ta3UsIHNldEluZm9Ta3VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt2YXJpYXZlbCwgc2V0VmFyaWF2ZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZW1wcmVzYSwgc2V0RW1wcmVzYV0gPSB1c2VTdGF0ZTxcImRwYVwiIHwgXCJsYWN0YWxpc1wiIHwgXCJpdGFtYmVcIj4oXG4gICAgXCJsYWN0YWxpc1wiXG4gICk7XG5cbiAgY29uc3QgQUREX1BST0RVQ1QgPSB1c2VQcm9kdWN0U3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5BRERfUFJPRFVUTyk7XG4gIGNvbnN0IGluZm9Qcm9kdWN0ID0gdXNlUHJvZHVjdFN0b3JlKChzdGF0ZSkgPT4gc3RhdGUucHJvZHV0b3MpO1xuICBjb25zdCBpbmZvQ2Fycm8gPSB1c2VJbmZvQ2FyU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5pbmZvQ2Fycm8pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IFNjaGVtYSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIEFERF9QUk9EVUNUKHtcbiAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgIGlkUGFsbGV0OiBkYXRhLmlkUGFsbGV0LFxuICAgICAgbG90ZTogZGF0YS5sb3RlID8gZGF0YS5sb3RlIDogXCJcIixcbiAgICAgIHNrdTogZGF0YS5za3UsXG4gICAgICBxdWFudGlkYWRlOiBkYXRhLnF1YW50aWRhZGUsXG4gICAgICBlbXByZXNhOiBlbXByZXNhLFxuICAgICAgZGVzY3JpY2FvOiBpbmZvU2t1LFxuICAgIH0pO1xuICAgIHNldEluZm9Ta3UoXCJcIik7XG4gICAgcmVzZXQoKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBvbkNoYW5nZVByb2R1dG8oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHByb2R1dG8gPSBhd2FpdCBnZXQoXCJwcm9kdXRvc1wiKTtcbiAgICBpZiAocHJvZHV0bykge1xuICAgICAgY29uc3QgYWp1c3RhZG86IElUYWJlbGFbXSA9IEpTT04ucGFyc2UocHJvZHV0byk7XG5cbiAgICAgIGNvbnN0IHZlcmlmaWNhciA9IGFqdXN0YWRvLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgaXRlbS5za3UgPT09IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkgfHxcbiAgICAgICAgICBpdGVtLmR1bSA9PT0gZXZlbnQudGFyZ2V0LnZhbHVlIHx8XG4gICAgICAgICAgaXRlbS5lYW4gPT09IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgKTtcblxuICAgICAgaWYgKHZlcmlmaWNhci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEluZm9Ta3UodmVyaWZpY2FyWzBdLmRlc2MpO1xuICAgICAgICBzZXRFbXByZXNhKHZlcmlmaWNhclswXS5lbXByZXNhKTtcbiAgICAgICAgaWYgKHZlcmlmaWNhclswXS50aXBvID09PSBcIlBWQVJcIikge1xuICAgICAgICAgIHNldFZhcmlhdmVsKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRWYXJpYXZlbCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SW5mb1NrdShcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhanVzdGFyVmFsb3IoKSB7XG4gICAgY29uc29sZS5sb2coXCJwYXNzZWlcIilcbiAgICBzZXRWYWx1ZShcImxvdGVcIiwgXCI0MzM0MjE1NTVcIik7XG4gIH1cblxuICBjb25zb2xlLmxvZyhnZXRWYWx1ZXMoKS5sb3RlKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHctZnVsbFwiXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFqdXN0YXJWYWxvcil9XG4gICAgPlxuICAgICAgPElucHV0IHRleHRvPVwiSUQgUGFsbGV0XCIgey4uLnJlZ2lzdGVyKFwiaWRQYWxsZXRcIil9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdGV4dG89XCJTS1VcIlxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJza3VcIiwge1xuICAgICAgICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICAgICAgb25DaGFuZ2VQcm9kdXRvKGV2ZW50KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgIC8+XG4gICAgICB7aW5mb1NrdSAhPT0gXCJcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udCBiZy1hY2NlbnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHVwcGVyY2FzZSBwLTEgcm91bmRlZFwiPlxuICAgICAgICAgIHtpbmZvU2t1fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1yLTJcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdGV4dG89XCJMb3RlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvdGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC00MDBcIlxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImxvdGVcIil9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPExvdGVQcm9kdXRvIHNldFZhbHVlPXtzZXRWYWx1ZX0gZW1wcmVzYT17ZW1wcmVzYX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPElucHV0XG4gICAgICAgIHRleHRvPVwiUXVhbnRpZGFkZVwiXG4gICAgICAgIHsuLi5yZWdpc3RlcihcInF1YW50aWRhZGVcIiwgeyB2YWx1ZUFzTnVtYmVyOiB0cnVlIH0pfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dCB0ZXh0bz1cIlBlc29cIiB7Li4ucmVnaXN0ZXIoXCJwZXNvXCIsIHsgdmFsdWVBc051bWJlcjogdHJ1ZSB9KX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtNFwiPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRWYWx1ZShcImxvdGVcIiwgXCI0MzM0MjE1NTVcIil9PlxuICAgICAgICAgIExvdGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2hQYWdlKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJTRVRfUEFHRVwiLFxuICAgICAgICAgICAgICBwYXlsb2FkOiB7IHBhZ2U6IFwiaW5mb190ZW1wZXJhdHVyYVwiIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIFZPTFRBUlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q0FEQVNUUkFSPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJ0YWJlbGEiLCJ6b2RSZXNvbHZlciIsImdldCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInY0IiwidXVpZHY0IiwieiIsInVzZVJlY2ViaW1lbnRvQ29udGV4dCIsInVzZUluZm9DYXJTdG9yZSIsInVzZVByb2R1Y3RTdG9yZSIsIkxvdGVQcm9kdXRvIiwic2NoZW1hIiwib2JqZWN0Iiwic2t1Iiwic3RyaW5nIiwibG90ZSIsIm9wdGlvbmFsIiwiaWRQYWxsZXQiLCJxdWFudGlkYWRlIiwibnVtYmVyIiwicGVzbyIsImNvbnNvbGUiLCJsb2ciLCJGb3JtdWxhcmlvQ29uZmVyZW5jaWEiLCJkaXNwYXRjaFBhZ2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZ2V0VmFsdWVzIiwic2V0VmFsdWUiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZXNvbHZlciIsImluZm9Ta3UiLCJzZXRJbmZvU2t1IiwidmFyaWF2ZWwiLCJzZXRWYXJpYXZlbCIsImVtcHJlc2EiLCJzZXRFbXByZXNhIiwiQUREX1BST0RVQ1QiLCJzdGF0ZSIsIkFERF9QUk9EVVRPIiwiaW5mb1Byb2R1Y3QiLCJwcm9kdXRvcyIsImluZm9DYXJybyIsIm9uU3VibWl0IiwiZGF0YSIsImlkIiwiZGVzY3JpY2FvIiwib25DaGFuZ2VQcm9kdXRvIiwiZXZlbnQiLCJwcm9kdXRvIiwiYWp1c3RhZG8iLCJKU09OIiwicGFyc2UiLCJ2ZXJpZmljYXIiLCJmaWx0ZXIiLCJpdGVtIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImR1bSIsImVhbiIsImxlbmd0aCIsImRlc2MiLCJ0aXBvIiwiYWp1c3RhclZhbG9yIiwiZm9ybSIsImNsYXNzTmFtZSIsInRleHRvIiwib25CbHVyIiwiZGl2IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZUFzTnVtYmVyIiwib25DbGljayIsInR5cGUiLCJwYXlsb2FkIiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pagina/recebimento/descarga/3_conferencia/form.tsx\n"));

/***/ })

});