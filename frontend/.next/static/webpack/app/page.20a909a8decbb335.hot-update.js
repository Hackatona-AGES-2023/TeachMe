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

/***/ "(app-client)/./app/Componentes/Trails.tsx":
/*!************************************!*\
  !*** ./app/Componentes/Trails.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-client)/./node_modules/@phosphor-icons/react/dist/icons/BookOpen.es.js\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-client)/./node_modules/@phosphor-icons/react/dist/icons/Book.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Trail(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: props.onPress,\n        className: \"rounded-lg flex flex-row p-5 bg-bgreen-1 hover:opacity-80\",\n        children: [\n            props.topic,\n            \" \",\n            props.progress.done,\n            \"/\",\n            props.progress.total,\n            props.isTrailOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"pl-1\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 11,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"pl-1\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 11,\n                columnNumber: 67\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Trail;\nconst Trails = (props)=>{\n    _s();\n    const [trails, setTrails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.trails);\n    async function onPress(id) {\n        const aux = trails;\n        aux.forEach((trail, i)=>{\n            if (trail.id == id) {\n                aux[i].open = true;\n            } else {\n                aux[i].open = false;\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid pl-2 grid-flow-row gap-4 h-full bg-white \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Trail, {\n                trailId: \"id\",\n                topic: \"topic\",\n                progress: {\n                    done: 5,\n                    total: 10\n                }\n            }, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trails, \"6MC1t1Pob8D452178caqtijzBUw=\");\n_c1 = Trails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trails);\nvar _c, _c1;\n$RefreshReg$(_c, \"Trail\");\n$RefreshReg$(_c1, \"Trails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL0NvbXBvbmVudGVzL1RyYWlscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDZjtBQUd4QyxTQUFTSSxNQUFPQyxLQUFzSDtJQUdwSSxxQkFDRSw4REFBQ0M7UUFBSUMsU0FBU0YsTUFBTUc7UUFBU0MsV0FBVTs7WUFDcENKLE1BQU1LO1lBQU07WUFBRUwsTUFBTU0sU0FBU0M7WUFBSztZQUFFUCxNQUFNTSxTQUFTRTtZQUNuRFIsTUFBTVMsNEJBQVksOERBQUNiLDZEQUFRQTtnQkFBQ1EsV0FBWTtnQkFBT00sTUFBTTs7Ozs7cUNBQU0sOERBQUNmLDZEQUFJQTtnQkFBQ1MsV0FBWTtnQkFBT00sTUFBTTs7Ozs7Ozs7Ozs7O0FBR2pHO0tBVFNYO0FBV1QsTUFBTVksU0FBUyxDQUFDWDs7SUFDZCxNQUFNLENBQUNZLFFBQU9DLFVBQVUsR0FBR2YsK0NBQVFBLENBQW1GRSxNQUFNWTtJQUM1SCxlQUFlVCxRQUFRVyxFQUFTO1FBQzlCLE1BQU1DLE1BQU1IO1FBQ1pHLElBQUlDLFFBQVEsQ0FBQ0MsT0FBTUM7WUFDakIsSUFBSUQsTUFBTUgsTUFBTUEsSUFBRztnQkFDakJDLEdBQUcsQ0FBQ0csRUFBRSxDQUFDQyxPQUFPO1lBQ2hCLE9BQUs7Z0JBQ0hKLEdBQUcsQ0FBQ0csRUFBRSxDQUFDQyxPQUFPO1lBRWhCO1FBQ0Y7SUFDSjtJQUNFLHFCQUVFLDhEQUFDbEI7UUFBSUcsV0FBVTs7MEJBQ2YsOERBQUNIOzs7OzswQkFDQyw4REFBQ0Y7Z0JBQU1xQixTQUFRO2dCQUFLZixPQUFNO2dCQUFTQyxVQUFVO29CQUFDQyxNQUFLO29CQUFFQyxPQUFNO2dCQUFFOzs7Ozs7Ozs7Ozs7QUFHbkU7R0FwQk1HO01BQUFBO0FBc0JOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRlcy9UcmFpbHMudHN4PzFlMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vaywgQm9va09wZW4gfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmZ1bmN0aW9uIFRyYWlsIChwcm9wczp7aXNUcmFpbE9wZW46Ym9vbGVhbix0b3BpYzogc3RyaW5nLHByb2dyZXNzOntkb25lOm51bWJlcix0b3RhbDpudW1iZXJ9LHRyYWlsSWQ6c3RyaW5nLG9uUHJlc3M6KCk9PlByb21pc2U8dm9pZD59KXtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXtwcm9wcy5vblByZXNzfSBjbGFzc05hbWU9J3JvdW5kZWQtbGcgZmxleCBmbGV4LXJvdyBwLTUgYmctYmdyZWVuLTEgaG92ZXI6b3BhY2l0eS04MCc+IFxuICAgICAge3Byb3BzLnRvcGljfSB7cHJvcHMucHJvZ3Jlc3MuZG9uZX0ve3Byb3BzLnByb2dyZXNzLnRvdGFsfVxuICAgICAge3Byb3BzLmlzVHJhaWxPcGVuPzxCb29rT3BlbiBjbGFzc05hbWUgPSBcInBsLTFcIiBzaXplPXszMH0vPjo8Qm9vayBjbGFzc05hbWUgPSBcInBsLTFcIiBzaXplPXszMH0vPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBUcmFpbHMgPSAocHJvcHM6e3RyYWlsczpBcnJheTx7b3Blbjpib29sZWFuLGlkOnN0cmluZyx0b3BpYzpzdHJpbmcscHJvZ3Jlc3M6e2RvbmU6bnVtYmVyLHRvdGFsOm51bWJlcn19Pn0pID0+IHtcbiAgY29uc3QgW3RyYWlscyxzZXRUcmFpbHNdID0gdXNlU3RhdGU8QXJyYXk8e29wZW46Ym9vbGVhbixpZDpzdHJpbmcsdG9waWM6c3RyaW5nLHByb2dyZXNzOntkb25lOm51bWJlcix0b3RhbDpudW1iZXJ9fT4+KHByb3BzLnRyYWlscykgXG4gIGFzeW5jIGZ1bmN0aW9uIG9uUHJlc3MoaWQ6c3RyaW5nKXtcbiAgICBjb25zdCBhdXggPSB0cmFpbHNcbiAgICBhdXguZm9yRWFjaCgodHJhaWwsaSk9PntcbiAgICAgIGlmICh0cmFpbC5pZCA9PSBpZCl7XG4gICAgICAgIGF1eFtpXS5vcGVuID0gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICBhdXhbaV0ub3BlbiA9IGZhbHNlO1xuXG4gICAgICB9XG4gICAgfSlcbn1cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGwtMiBncmlkLWZsb3ctcm93IGdhcC00IGgtZnVsbCBiZy13aGl0ZSBcIj5cbiAgICA8ZGl2Lz5cbiAgICAgIDxUcmFpbCB0cmFpbElkPSdpZCcgdG9waWM9XCJ0b3BpY1wiICBwcm9ncmVzcz17e2RvbmU6NSx0b3RhbDoxMH19Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWlscztcbiJdLCJuYW1lcyI6WyJCb29rIiwiQm9va09wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiVHJhaWwiLCJwcm9wcyIsImRpdiIsIm9uQ2xpY2siLCJvblByZXNzIiwiY2xhc3NOYW1lIiwidG9waWMiLCJwcm9ncmVzcyIsImRvbmUiLCJ0b3RhbCIsImlzVHJhaWxPcGVuIiwic2l6ZSIsIlRyYWlscyIsInRyYWlscyIsInNldFRyYWlscyIsImlkIiwiYXV4IiwiZm9yRWFjaCIsInRyYWlsIiwiaSIsIm9wZW4iLCJ0cmFpbElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/Componentes/Trails.tsx\n"));

/***/ })

});