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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Componentes_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/Header */ \"(app-client)/./app/Componentes/Header.tsx\");\n/* harmony import */ var _Componentes_Trails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/Trails */ \"(app-client)/./app/Componentes/Trails.tsx\");\n/* harmony import */ var _Pages_LandingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/LandingPage */ \"(app-client)/./app/Pages/LandingPage.tsx\");\n/* harmony import */ var _Pages_TrailPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/TrailPage */ \"(app-client)/./app/Pages/TrailPage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [submited, setSubmited] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [topics, setTopics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const onSubmit = async ()=>{\n        //todo:call backend\n        const trail_ = {\n            id: \"\",\n            title: \"\",\n            progress: {\n                done: 0,\n                total: 10,\n                pending: 10\n            },\n            steps: [\n                {\n                    title: \"\",\n                    topics: [\n                        {\n                            content: \"\",\n                            title: \"\"\n                        }\n                    ]\n                }\n            ]\n        };\n        setTopics(trail_.steps[step].topics);\n        setSubmited(true);\n    };\n    const handleClick = async ()=>{};\n    const trails = [\n        {\n            open: false,\n            id: \"eeee\",\n            topic: \"teste\",\n            progress: {\n                done: 0,\n                total: 10\n            }\n        },\n        {\n            open: false,\n            id: \"234234234\",\n            topic: \"teste\",\n            progress: {\n                done: 0,\n                total: 10\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Trails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        trails: trails\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 8\n                    }, this),\n                    submited ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_TrailPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        topics: topics,\n                        handleClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_LandingPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onSubmit: onSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"w+uLOeaovU2ALGYpZWQlP9DXDnQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFDSjtBQUdBO0FBR0k7QUFDSjtBQUUzQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUN0RCxNQUFNLENBQUNVLE1BQUtDLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFFaEMsTUFBTVksV0FBVztRQUNmLG1CQUFtQjtRQUNuQixNQUFNQyxTQUFpQjtZQUFDQyxJQUFHO1lBQUdDLE9BQU07WUFBR0MsVUFBUztnQkFBQ0MsTUFBSztnQkFBRUMsT0FBTTtnQkFBR0MsU0FBUTtZQUFFO1lBQUVDLE9BQU07Z0JBQUM7b0JBQUNMLE9BQU07b0JBQUdQLFFBQU87d0JBQUM7NEJBQUNhLFNBQVE7NEJBQUdOLE9BQU07d0JBQUU7cUJBQUU7Z0JBQUE7YUFBRTtRQUFBO1FBRTlITixVQUFVSSxPQUFPTyxLQUFLLENBQUNWLEtBQUssQ0FBQ0Y7UUFFN0JELFlBQVk7SUFFZDtJQUlBLE1BQU1lLGNBQWMsV0FBYTtJQUdqQyxNQUFNQyxTQUEwRjtRQUM5RjtZQUFDQyxNQUFLO1lBQU1WLElBQUc7WUFBT1csT0FBTTtZQUFRVCxVQUFTO2dCQUFDQyxNQUFLO2dCQUFFQyxPQUFNO1lBQUU7UUFBQztRQUM5RDtZQUFDTSxNQUFLO1lBQU1WLElBQUc7WUFBWVcsT0FBTTtZQUFRVCxVQUFTO2dCQUFDQyxNQUFLO2dCQUFFQyxPQUFNO1lBQUU7UUFBQztLQUNwRTtJQUVELHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQzFCLDJEQUFNQTs7Ozs7MEJBQ1AsOERBQUN5QjtnQkFBSUMsV0FBVTs7a0NBRWQsOERBQUN6QiwyREFBTUE7d0JBQUNxQixRQUFRQTs7Ozs7O29CQUVkakIseUJBQ0MsOERBQUNGLHdEQUFTQTt3QkFBQ0ksUUFBUUE7d0JBQVFjLGFBQWFBOzs7Ozs2Q0FFeEMsOERBQUNuQiwwREFBV0E7d0JBQUNTLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakM7R0F4Q3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Db21wb25lbnRlcy9IZWFkZXInO1xuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4vQ29tcG9uZW50ZXMvU2VhcmNoQmFyJztcbmltcG9ydCBUcmFpbHMgZnJvbSAnLi9Db21wb25lbnRlcy9UcmFpbHMnO1xuaW1wb3J0IHsgSVRvcGljIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3RvcGljLWludGVyZmFjZSc7XG5pbXBvcnQgeyBJVHJhaWwgfSBmcm9tICcuL2ludGVyZmFjZXMvdHJhaWwtaW50ZXJmYWNlJztcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuL1BhZ2VzL0xhbmRpbmdQYWdlJztcbmltcG9ydCBUcmFpbFBhZ2UgZnJvbSAnLi9QYWdlcy9UcmFpbFBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3VibWl0ZWQsIHNldFN1Ym1pdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvcGljcywgc2V0VG9waWNzXSA9IHVzZVN0YXRlPEFycmF5PElUb3BpYz4+KFtdKTtcbiAgY29uc3QgW3N0ZXAsc2V0U3RlcF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICAvL3RvZG86Y2FsbCBiYWNrZW5kXG4gICAgY29uc3QgdHJhaWxfIDpJVHJhaWwgPSB7aWQ6XCJcIix0aXRsZTpcIlwiLHByb2dyZXNzOntkb25lOjAsdG90YWw6MTAscGVuZGluZzoxMH0sc3RlcHM6W3t0aXRsZTpcIlwiLHRvcGljczpbe2NvbnRlbnQ6XCJcIix0aXRsZTonJ31dfV19XG4gICAgXG4gICAgc2V0VG9waWNzKHRyYWlsXy5zdGVwc1tzdGVwXS50b3BpY3MpIFxuXG4gICAgc2V0U3VibWl0ZWQodHJ1ZSk7XG4gIFxuICB9O1xuXG5cblxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHt9O1xuXG5cbiAgY29uc3QgdHJhaWxzOkFycmF5PHtvcGVuOmJvb2xlYW4saWQ6c3RyaW5nLHRvcGljOnN0cmluZyxwcm9ncmVzczp7ZG9uZTpudW1iZXIsdG90YWw6bnVtYmVyfX0+ID0gW1xuICAgIHtvcGVuOmZhbHNlLGlkOlwiZWVlZVwiLHRvcGljOlwidGVzdGVcIixwcm9ncmVzczp7ZG9uZTowLHRvdGFsOjEwfX0sXG4gICAge29wZW46ZmFsc2UsaWQ6XCIyMzQyMzQyMzRcIix0b3BpYzpcInRlc3RlXCIscHJvZ3Jlc3M6e2RvbmU6MCx0b3RhbDoxMH19XG4gIF1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgXG4gICAgICAgPFRyYWlscyB0cmFpbHM9e3RyYWlsc30gLz5cbiAgICAgIFxuICAgICAgICB7c3VibWl0ZWQgPyAoXG4gICAgICAgICAgPFRyYWlsUGFnZSB0b3BpY3M9e3RvcGljc30gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMYW5kaW5nUGFnZSBvblN1Ym1pdD17b25TdWJtaXR9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsIlRyYWlscyIsIkxhbmRpbmdQYWdlIiwiVHJhaWxQYWdlIiwiSG9tZSIsInN1Ym1pdGVkIiwic2V0U3VibWl0ZWQiLCJ0b3BpY3MiLCJzZXRUb3BpY3MiLCJzdGVwIiwic2V0U3RlcCIsIm9uU3VibWl0IiwidHJhaWxfIiwiaWQiLCJ0aXRsZSIsInByb2dyZXNzIiwiZG9uZSIsInRvdGFsIiwicGVuZGluZyIsInN0ZXBzIiwiY29udGVudCIsImhhbmRsZUNsaWNrIiwidHJhaWxzIiwib3BlbiIsInRvcGljIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});