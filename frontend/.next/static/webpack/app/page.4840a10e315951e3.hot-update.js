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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Componentes_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/Header */ \"(app-client)/./app/Componentes/Header.tsx\");\n/* harmony import */ var _Componentes_Trails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/Trails */ \"(app-client)/./app/Componentes/Trails.tsx\");\n/* harmony import */ var _Pages_LandingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/LandingPage */ \"(app-client)/./app/Pages/LandingPage.tsx\");\n/* harmony import */ var _Pages_LoadingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/LoadingPage */ \"(app-client)/./app/Pages/LoadingPage.tsx\");\n/* harmony import */ var _Pages_TrailPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/TrailPage */ \"(app-client)/./app/Pages/TrailPage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [topics, setTopics] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onSubmit = async ()=>{\n        //todo:call backend\n        const trail_ = {\n            id: \"\",\n            title: \"sdfsdfsdfsdfsdf\",\n            progress: {\n                done: 0,\n                total: 10,\n                pending: 10\n            },\n            steps: [\n                {\n                    title: \"sdfsdfsdfsd \",\n                    topics: [\n                        {\n                            content: \"sdfsdfsdfsdfs\",\n                            title: \"sdfsdfsdfdsfs\"\n                        }\n                    ]\n                }\n            ]\n        };\n        setTopics(trail_.steps[step].topics);\n        setSubmitted(true);\n    };\n    const handleClick = async ()=>{};\n    const trails = [\n        {\n            open: false,\n            id: \"eeee\",\n            topic: \"teste\",\n            progress: {\n                done: 0,\n                total: 10\n            }\n        },\n        {\n            open: false,\n            id: \"234234234\",\n            topic: \"teste\",\n            progress: {\n                done: 0,\n                total: 10\n            }\n        }\n    ];\n    const onTrailPress = async (id)=>{\n        const trail_ = {\n            id: \"\",\n            title: \"sdfsdfsdfsdfsdf\",\n            progress: {\n                done: 0,\n                total: 10,\n                pending: 10\n            },\n            steps: [\n                {\n                    title: \"sdfsdfsdfsd \",\n                    topics: [\n                        {\n                            content: \"sdfsdfsdfsdfs\",\n                            title: \"sdfsdfsdfdsfs\"\n                        }\n                    ]\n                }\n            ]\n        };\n        setTopics(trail_.steps[step].topics);\n        setSubmitted(true);\n    };\n    const addTrailPress = ()=>{\n        setSubmitted(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componentes_Trails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onPress: onTrailPress,\n                        trails: trails,\n                        addTrailPress: addTrailPress\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 8\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_LoadingPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 18\n                    }, this) : submitted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_TrailPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        topics: topics,\n                        handleClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_LandingPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onSubmit: onSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"E3thBxZqqYzkhglQAUxloMYwSLk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRThDO0FBQ0o7QUFHQTtBQUdJO0FBQ0E7QUFDSjtBQUUzQixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUN0RCxNQUFNLENBQUNXLE1BQUtDLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDYSxTQUFRQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXBDLE1BQU1lLFdBQVc7UUFDZixtQkFBbUI7UUFDbkIsTUFBTUMsU0FBaUI7WUFBQ0MsSUFBRztZQUFHQyxPQUFNO1lBQWtCQyxVQUFTO2dCQUFDQyxNQUFLO2dCQUFFQyxPQUFNO2dCQUFHQyxTQUFRO1lBQUU7WUFBRUMsT0FBTTtnQkFBQztvQkFBQ0wsT0FBTTtvQkFBZVQsUUFBTzt3QkFBQzs0QkFBQ2UsU0FBUTs0QkFBZ0JOLE9BQU07d0JBQWU7cUJBQUU7Z0JBQUE7YUFBRTtRQUFBO1FBRW5MUixVQUFVTSxPQUFPTyxLQUFLLENBQUNaLEtBQUssQ0FBQ0Y7UUFFN0JELGFBQWE7SUFFZjtJQUlBLE1BQU1pQixjQUFjLFdBQWE7SUFFakMsTUFBTUMsU0FBMEY7UUFDOUY7WUFBQ0MsTUFBSztZQUFNVixJQUFHO1lBQU9XLE9BQU07WUFBUVQsVUFBUztnQkFBQ0MsTUFBSztnQkFBRUMsT0FBTTtZQUFFO1FBQUM7UUFDOUQ7WUFBQ00sTUFBSztZQUFNVixJQUFHO1lBQVlXLE9BQU07WUFBUVQsVUFBUztnQkFBQ0MsTUFBSztnQkFBRUMsT0FBTTtZQUFFO1FBQUM7S0FDcEU7SUFFRCxNQUFNUSxlQUFlLE9BQU9aO1FBRzFCLE1BQU1ELFNBQWlCO1lBQUNDLElBQUc7WUFBR0MsT0FBTTtZQUFrQkMsVUFBUztnQkFBQ0MsTUFBSztnQkFBRUMsT0FBTTtnQkFBR0MsU0FBUTtZQUFFO1lBQUVDLE9BQU07Z0JBQUM7b0JBQUNMLE9BQU07b0JBQWVULFFBQU87d0JBQUM7NEJBQUNlLFNBQVE7NEJBQWdCTixPQUFNO3dCQUFlO3FCQUFFO2dCQUFBO2FBQUU7UUFBQTtRQUVuTFIsVUFBVU0sT0FBT08sS0FBSyxDQUFDWixLQUFLLENBQUNGO1FBQzdCRCxhQUFhO0lBRWY7SUFHQSxNQUFNc0IsZ0JBQWdCO1FBQ3BCdEIsYUFBYTtJQUVmO0lBR0EscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQy9CLDJEQUFNQTs7Ozs7MEJBQ1AsOERBQUM4QjtnQkFBSUMsV0FBVTs7a0NBRWQsOERBQUM5QiwyREFBTUE7d0JBQUMrQixTQUFTSjt3QkFBY0gsUUFBUUE7d0JBQVFJLGVBQWVBOzs7Ozs7b0JBRTVEakIsd0JBQVEsOERBQUNULDBEQUFXQTs7OzsrQkFBS0csMEJBQ3hCLDhEQUFDRix3REFBU0E7d0JBQUNJLFFBQVFBO3dCQUFRZ0IsYUFBYUE7Ozs7OzZDQUV4Qyw4REFBQ3RCLDBEQUFXQTt3QkFBQ1ksVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQztHQXpEd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0NvbXBvbmVudGVzL0hlYWRlcic7XG5cbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9Db21wb25lbnRlcy9TZWFyY2hCYXInO1xuaW1wb3J0IFRyYWlscyBmcm9tICcuL0NvbXBvbmVudGVzL1RyYWlscyc7XG5pbXBvcnQgeyBJVG9waWMgfSBmcm9tICcuL2ludGVyZmFjZXMvdG9waWMtaW50ZXJmYWNlJztcbmltcG9ydCB7IElUcmFpbCB9IGZyb20gJy4vaW50ZXJmYWNlcy90cmFpbC1pbnRlcmZhY2UnO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gJy4vUGFnZXMvTGFuZGluZ1BhZ2UnO1xuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJy4vUGFnZXMvTG9hZGluZ1BhZ2UnO1xuaW1wb3J0IFRyYWlsUGFnZSBmcm9tICcuL1BhZ2VzL1RyYWlsUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3BpY3MsIHNldFRvcGljc10gPSB1c2VTdGF0ZTxBcnJheTxJVG9waWM+PihbXSk7XG4gIGNvbnN0IFtzdGVwLHNldFN0ZXBdID0gdXNlU3RhdGUoMCk7XG5jb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICAvL3RvZG86Y2FsbCBiYWNrZW5kXG4gICAgY29uc3QgdHJhaWxfIDpJVHJhaWwgPSB7aWQ6XCJcIix0aXRsZTpcInNkZnNkZnNkZnNkZnNkZlwiLHByb2dyZXNzOntkb25lOjAsdG90YWw6MTAscGVuZGluZzoxMH0sc3RlcHM6W3t0aXRsZTpcInNkZnNkZnNkZnNkIFwiLHRvcGljczpbe2NvbnRlbnQ6XCJzZGZzZGZzZGZzZGZzXCIsdGl0bGU6J3NkZnNkZnNkZmRzZnMnfV19XX1cblxuICAgIHNldFRvcGljcyh0cmFpbF8uc3RlcHNbc3RlcF0udG9waWNzKSBcblxuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgXG4gIH07XG5cblxuICAgXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge307XG5cbiAgY29uc3QgdHJhaWxzOkFycmF5PHtvcGVuOmJvb2xlYW4saWQ6c3RyaW5nLHRvcGljOnN0cmluZyxwcm9ncmVzczp7ZG9uZTpudW1iZXIsdG90YWw6bnVtYmVyfX0+ID0gW1xuICAgIHtvcGVuOmZhbHNlLGlkOlwiZWVlZVwiLHRvcGljOlwidGVzdGVcIixwcm9ncmVzczp7ZG9uZTowLHRvdGFsOjEwfX0sXG4gICAge29wZW46ZmFsc2UsaWQ6XCIyMzQyMzQyMzRcIix0b3BpYzpcInRlc3RlXCIscHJvZ3Jlc3M6e2RvbmU6MCx0b3RhbDoxMH19XG4gIF1cblxuICBjb25zdCBvblRyYWlsUHJlc3MgPSBhc3luYyAoaWQ6c3RyaW5nKT0+e1xuXG5cbiAgICBjb25zdCB0cmFpbF8gOklUcmFpbCA9IHtpZDpcIlwiLHRpdGxlOlwic2Rmc2Rmc2Rmc2Rmc2RmXCIscHJvZ3Jlc3M6e2RvbmU6MCx0b3RhbDoxMCxwZW5kaW5nOjEwfSxzdGVwczpbe3RpdGxlOlwic2Rmc2Rmc2Rmc2QgXCIsdG9waWNzOlt7Y29udGVudDpcInNkZnNkZnNkZnNkZnNcIix0aXRsZTonc2Rmc2Rmc2RmZHNmcyd9XX1dfVxuXG4gICAgc2V0VG9waWNzKHRyYWlsXy5zdGVwc1tzdGVwXS50b3BpY3MpXG4gICAgc2V0U3VibWl0dGVkKHRydWUpXG4gICAgXG4gIH0gIFxuXG5cbiAgY29uc3QgYWRkVHJhaWxQcmVzcyA9ICgpPT57XG4gICAgc2V0U3VibWl0dGVkKGZhbHNlKVxuXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgXG4gICAgICAgPFRyYWlscyBvblByZXNzPXtvblRyYWlsUHJlc3N9IHRyYWlscz17dHJhaWxzfSBhZGRUcmFpbFByZXNzPXthZGRUcmFpbFByZXNzfS8+XG4gICAgICBcbiAgICAgICAge2xvYWRpbmc/PExvYWRpbmdQYWdlIC8+OihzdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgPFRyYWlsUGFnZSB0b3BpY3M9e3RvcGljc30gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMYW5kaW5nUGFnZSBvblN1Ym1pdD17b25TdWJtaXR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIiLCJUcmFpbHMiLCJMYW5kaW5nUGFnZSIsIkxvYWRpbmdQYWdlIiwiVHJhaWxQYWdlIiwiSG9tZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsInRvcGljcyIsInNldFRvcGljcyIsInN0ZXAiLCJzZXRTdGVwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsInRyYWlsXyIsImlkIiwidGl0bGUiLCJwcm9ncmVzcyIsImRvbmUiLCJ0b3RhbCIsInBlbmRpbmciLCJzdGVwcyIsImNvbnRlbnQiLCJoYW5kbGVDbGljayIsInRyYWlscyIsIm9wZW4iLCJ0b3BpYyIsIm9uVHJhaWxQcmVzcyIsImFkZFRyYWlsUHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvblByZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});