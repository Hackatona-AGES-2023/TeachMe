"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Componentes_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/Header */ \"(app-client)/./app/Componentes/Header.tsx\");\n/* harmony import */ var _Componentes_Trails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/Trails */ \"(app-client)/./app/Componentes/Trails.tsx\");\n/* harmony import */ var _Pages_LandingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/LandingPage */ \"(app-client)/./app/Pages/LandingPage.tsx\");\n/* harmony import */ var _Pages_TrailPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/TrailPage */ \"(app-client)/./app/Pages/TrailPage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [submited, setSubmited] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onSubmit = async ()=>{\n        //todo:call backend\n        console.log(\"asdasdasdasd\");\n        setSubmited(true);\n    };\n    const handleClick = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Trails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    submited ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_TrailPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        handleClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_LandingPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onSubmit: onSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"oWYBVVhIi/6/iyhh5eeYSNYQtrM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFDSjtBQUdBO0FBQ0k7QUFDSjtBQUUzQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1RLFdBQVc7UUFDZixtQkFBbUI7UUFDbkJDLFFBQVFDLElBQUk7UUFDWkgsWUFBWTtJQUNkO0lBRUEsTUFBTUksY0FBYyxXQUFhO0lBRWpDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1osMkRBQU1BOzs7OzswQkFDUCw4REFBQ1c7Z0JBQUlDLFdBQVU7O2tDQUVYLDhEQUFDWCwyREFBTUE7Ozs7O29CQUVSSSx5QkFDQyw4REFBQ0Ysd0RBQVNBO3dCQUFDTyxhQUFhQTs7Ozs7NkNBRXhCLDhEQUFDUiwwREFBV0E7d0JBQUNLLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakM7R0F6QndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Db21wb25lbnRlcy9IZWFkZXInO1xuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vQ29tcG9uZW50ZXMvU2VhcmNoQmFyJztcbmltcG9ydCBUcmFpbHMgZnJvbSAnLi9Db21wb25lbnRlcy9UcmFpbHMnO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gJy4vUGFnZXMvTGFuZGluZ1BhZ2UnO1xuaW1wb3J0IFRyYWlsUGFnZSBmcm9tICcuL1BhZ2VzL1RyYWlsUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdWJtaXRlZCwgc2V0U3VibWl0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICAvL3RvZG86Y2FsbCBiYWNrZW5kXG4gICAgY29uc29sZS5sb2coJ2FzZGFzZGFzZGFzZCcpO1xuICAgIHNldFN1Ym1pdGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICBcbiAgICAgICAgICA8VHJhaWxzIC8+XG4gICAgICAgIFxuICAgICAgICB7c3VibWl0ZWQgPyAoXG4gICAgICAgICAgPFRyYWlsUGFnZSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExhbmRpbmdQYWdlIG9uU3VibWl0PXtvblN1Ym1pdH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwiVHJhaWxzIiwiTGFuZGluZ1BhZ2UiLCJUcmFpbFBhZ2UiLCJIb21lIiwic3VibWl0ZWQiLCJzZXRTdWJtaXRlZCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});