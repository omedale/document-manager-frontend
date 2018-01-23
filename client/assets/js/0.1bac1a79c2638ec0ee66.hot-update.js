webpackHotUpdate(0,{

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _history = __webpack_require__(104);

var _reactRedux = __webpack_require__(47);

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewDocument = __webpack_require__(296);

var _ViewDocument2 = _interopRequireDefault(_ViewDocument);

var _Home = __webpack_require__(290);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(287);

var _Details2 = _interopRequireDefault(_Details);

var _ManageDocument = __webpack_require__(292);

var _ManageDocument2 = _interopRequireDefault(_ManageDocument);

var _Login = __webpack_require__(291);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(294);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(293);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(34);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createBrowserHistory)();

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.Router,
    { history: history },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/:id', component: _ViewDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/edit/:id', component: ViewDoManageDocumentcument }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document', component: _ManageDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiLCJWaWV3RG9NYW5hZ2VEb2N1bWVudGN1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsb0NBQWhCOztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFNBQ0U7QUFBQTtBQUFBLE1BQVEsU0FBU0QsT0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRSw2REFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBREY7QUFFRSw2REFBTyxNQUFLLFdBQVosRUFBd0IsNkJBQXhCLEdBRkY7QUFHRSw2REFBTyxNQUFLLGVBQVosRUFBNEIsaUNBQTVCLEdBSEY7QUFJRSw2REFBTyxNQUFLLG9CQUFaLEVBQWlDLFdBQVdFLDBCQUE1QyxHQUpGO0FBS0UsNkRBQU8sTUFBSyxXQUFaLEVBQXdCLG1DQUF4QixHQUxGO0FBTUUsNkRBQU8sTUFBSyxHQUFaLEVBQWdCLHlCQUFoQixHQU5GO0FBT0UsNkRBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQVBGO0FBREYsR0FERjtBQVlELENBYkQ7a0JBY2VELE0iLCJmaWxlIjoiMC4xYmFjMWE3OWMyNjM4ZWMwZWU2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2gsIGJyb3dzZXJIaXN0b3J5XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm92aWRlciBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFZpZXdEb2N1bWVudCBmcm9tICcuL2NvbXBvbmVudHMvVmlld0RvY3VtZW50JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCBNYW5hZ2VEb2N1bWVudCBmcm9tICcuL2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi91dGlsL0FwaUNhbGxzJztcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cbmNvbnN0IFJvdXRlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvY3VtZW50LzppZFwiIGNvbXBvbmVudD17Vmlld0RvY3VtZW50fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kb2N1bWVudC9lZGl0LzppZFwiIGNvbXBvbmVudD17Vmlld0RvTWFuYWdlRG9jdW1lbnRjdW1lbnR9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvY3VtZW50XCIgY29tcG9uZW50PXtNYW5hZ2VEb2N1bWVudH0gLz4gICAgICBcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L1JvdXRlcy5qc3giXSwic291cmNlUm9vdCI6IiJ9