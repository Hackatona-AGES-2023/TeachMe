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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-client)/./node_modules/@phosphor-icons/react/dist/icons/BookOpen.es.js\");\n/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor-icons/react */ \"(app-client)/./node_modules/@phosphor-icons/react/dist/icons/Book.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Trail(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>{\n            props.onPress(props.trailId);\n        },\n        className: \"rounded-lg flex flex-row p-5 bg-bgreen-1 hover:opacity-80\",\n        children: [\n            props.topic,\n            \" \",\n            props.progress.done,\n            \"/\",\n            props.progress.total,\n            props.isTrailOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"pl-1\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 10,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"pl-1\",\n                size: 30\n            }, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 10,\n                columnNumber: 67\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Trail;\nconst Trails = (props)=>{\n    _s();\n    const [trails, setTrails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.trails);\n    async function onPress(id) {\n        const aux = trails;\n        aux.forEach((trail, i)=>{\n            if (trail.id == id) {\n                aux[i].open = true;\n            } else {\n                aux[i].open = false;\n            }\n        });\n        setTrails(aux);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid pl-2 grid-flow-row gap-4 h-full bg-white \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, undefined),\n            trails.map((trail)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Trail, {\n                    onPress: onPress,\n                    isTrailOpen: trail.open,\n                    trailId: trail.id,\n                    topic: trail.topic,\n                    progress: props.trails\n                }, void 0, false, {\n                    fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gabrielguinterherter/Projects/teachMe/TeachMe/frontend/app/Componentes/Trails.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trails, \"6MC1t1Pob8D452178caqtijzBUw=\");\n_c1 = Trails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trails);\nvar _c, _c1;\n$RefreshReg$(_c, \"Trail\");\n$RefreshReg$(_c1, \"Trails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL0NvbXBvbmVudGVzL1RyYWlscy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUQ7QUFDZjtBQUd4QyxTQUFTSSxNQUFPQyxLQUErSDtJQUU3SSxxQkFDRSw4REFBQ0M7UUFBSUMsU0FBUztZQUFLRixNQUFNRyxRQUFRSCxNQUFNSTtRQUFRO1FBQUdDLFdBQVU7O1lBQ3pETCxNQUFNTTtZQUFNO1lBQUVOLE1BQU1PLFNBQVNDO1lBQUs7WUFBRVIsTUFBTU8sU0FBU0U7WUFDbkRULE1BQU1VLDRCQUFZLDhEQUFDZCw2REFBUUE7Z0JBQUNTLFdBQVk7Z0JBQU9NLE1BQU07Ozs7O3FDQUFNLDhEQUFDaEIsNkRBQUlBO2dCQUFDVSxXQUFZO2dCQUFPTSxNQUFNOzs7Ozs7Ozs7Ozs7QUFHakc7S0FSU1o7QUFVVCxNQUFNYSxTQUFTLENBQUNaOztJQUNkLE1BQU0sQ0FBQ2EsUUFBT0MsVUFBVSxHQUFHaEIsK0NBQVFBLENBQW1GRSxNQUFNYTtJQUM1SCxlQUFlVixRQUFRWSxFQUFTO1FBQzlCLE1BQU1DLE1BQU1IO1FBQ1pHLElBQUlDLFFBQVEsQ0FBQ0MsT0FBTUM7WUFDakIsSUFBSUQsTUFBTUgsTUFBTUEsSUFBRztnQkFDakJDLEdBQUcsQ0FBQ0csRUFBRSxDQUFDQyxPQUFPO1lBQ2hCLE9BQUs7Z0JBQ0hKLEdBQUcsQ0FBQ0csRUFBRSxDQUFDQyxPQUFPO1lBQ2hCO1FBQ0Y7UUFFQU4sVUFBVUU7SUFDZDtJQUNFLHFCQUVFLDhEQUFDZjtRQUFJSSxXQUFVOzswQkFDZiw4REFBQ0o7Ozs7O1lBQ0FZLE9BQU9RLElBQUksQ0FBQ0g7Z0JBQ1gscUJBQ0UsOERBQUNuQjtvQkFBTUksU0FBU0E7b0JBQVNPLGFBQWFRLE1BQU1FO29CQUFNaEIsU0FBU2MsTUFBTUg7b0JBQUlULE9BQU9ZLE1BQU1aO29CQUFRQyxVQUFVUCxNQUFNYTs7Ozs7O1lBRTlHOzs7Ozs7O0FBR0o7R0F6Qk1EO01BQUFBO0FBMkJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRlcy9UcmFpbHMudHN4PzFlMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vaywgQm9va09wZW4gfSBmcm9tICdAcGhvc3Bob3ItaWNvbnMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmZ1bmN0aW9uIFRyYWlsIChwcm9wczp7aXNUcmFpbE9wZW46Ym9vbGVhbix0b3BpYzogc3RyaW5nLHByb2dyZXNzOntkb25lOm51bWJlcix0b3RhbDpudW1iZXJ9LHRyYWlsSWQ6c3RyaW5nLG9uUHJlc3M6KGlkOnN0cmluZyk9PlByb21pc2U8dm9pZD59KXtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCk9Pntwcm9wcy5vblByZXNzKHByb3BzLnRyYWlsSWQpfX0gY2xhc3NOYW1lPSdyb3VuZGVkLWxnIGZsZXggZmxleC1yb3cgcC01IGJnLWJncmVlbi0xIGhvdmVyOm9wYWNpdHktODAnPiBcbiAgICAgIHtwcm9wcy50b3BpY30ge3Byb3BzLnByb2dyZXNzLmRvbmV9L3twcm9wcy5wcm9ncmVzcy50b3RhbH1cbiAgICAgIHtwcm9wcy5pc1RyYWlsT3Blbj88Qm9va09wZW4gY2xhc3NOYW1lID0gXCJwbC0xXCIgc2l6ZT17MzB9Lz46PEJvb2sgY2xhc3NOYW1lID0gXCJwbC0xXCIgc2l6ZT17MzB9Lz59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgVHJhaWxzID0gKHByb3BzOnt0cmFpbHM6QXJyYXk8e29wZW46Ym9vbGVhbixpZDpzdHJpbmcsdG9waWM6c3RyaW5nLHByb2dyZXNzOntkb25lOm51bWJlcix0b3RhbDpudW1iZXJ9fT59KSA9PiB7XG4gIGNvbnN0IFt0cmFpbHMsc2V0VHJhaWxzXSA9IHVzZVN0YXRlPEFycmF5PHtvcGVuOmJvb2xlYW4saWQ6c3RyaW5nLHRvcGljOnN0cmluZyxwcm9ncmVzczp7ZG9uZTpudW1iZXIsdG90YWw6bnVtYmVyfX0+Pihwcm9wcy50cmFpbHMpIFxuICBhc3luYyBmdW5jdGlvbiBvblByZXNzKGlkOnN0cmluZyl7XG4gICAgY29uc3QgYXV4ID0gdHJhaWxzXG4gICAgYXV4LmZvckVhY2goKHRyYWlsLGkpPT57XG4gICAgICBpZiAodHJhaWwuaWQgPT0gaWQpe1xuICAgICAgICBhdXhbaV0ub3BlbiA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYXV4W2ldLm9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc2V0VHJhaWxzKGF1eClcbn1cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGwtMiBncmlkLWZsb3ctcm93IGdhcC00IGgtZnVsbCBiZy13aGl0ZSBcIj5cbiAgICA8ZGl2Lz5cbiAgICB7dHJhaWxzLm1hcCgodHJhaWwpPT57XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxUcmFpbCBvblByZXNzPXtvblByZXNzfSBpc1RyYWlsT3Blbj17dHJhaWwub3Blbn0gdHJhaWxJZD17dHJhaWwuaWR9IHRvcGljPXt0cmFpbC50b3BpY30gIHByb2dyZXNzPXtwcm9wcy50cmFpbHN9Lz5cbiAgICAgIClcbiAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWlscztcbiJdLCJuYW1lcyI6WyJCb29rIiwiQm9va09wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiVHJhaWwiLCJwcm9wcyIsImRpdiIsIm9uQ2xpY2siLCJvblByZXNzIiwidHJhaWxJZCIsImNsYXNzTmFtZSIsInRvcGljIiwicHJvZ3Jlc3MiLCJkb25lIiwidG90YWwiLCJpc1RyYWlsT3BlbiIsInNpemUiLCJUcmFpbHMiLCJ0cmFpbHMiLCJzZXRUcmFpbHMiLCJpZCIsImF1eCIsImZvckVhY2giLCJ0cmFpbCIsImkiLCJvcGVuIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/Componentes/Trails.tsx\n"));

/***/ })

});