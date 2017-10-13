webpackHotUpdate(0,{

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentRow = documentRow;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function documentRow(document, index) {
  return _react2.default.createElement(
    'div',
    { key: index },
    document.title
  );
}

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  return _react2.default.createElement(
    'div',
    null,
    documents.map(function (document) {
      _react2.default.createElement(
        'div',
        { key: document.id },
        document.title
      );
    })
  );
};

DocumentList.propTypes = {
  documents: _react2.default.PropTypes.array.isRequired
};

exports.default = DocumentList;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiZG9jdW1lbnRSb3ciLCJkb2N1bWVudCIsImluZGV4IiwidGl0bGUiLCJEb2N1bWVudExpc3QiLCJkb2N1bWVudHMiLCJtYXAiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBRWdCQSxXLEdBQUFBLFc7O0FBRmhCOzs7Ozs7QUFFTyxTQUFTQSxXQUFULENBQXFCQyxRQUFyQixFQUErQkMsS0FBL0IsRUFBc0M7QUFDM0MsU0FBTztBQUFBO0FBQUEsTUFBSyxLQUFLQSxLQUFWO0FBQWtCRCxhQUFTRTtBQUEzQixHQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLE9BQWlCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlOztBQUNwQyxTQUNFO0FBQUE7QUFBQTtBQUNHQSxjQUFVQyxHQUFWLENBQWMsb0JBQVk7QUFDekI7QUFBQTtBQUFBLFVBQUssS0FBS0wsU0FBU00sRUFBbkI7QUFBd0JOLGlCQUFTRTtBQUFqQztBQUNELEtBRkE7QUFESCxHQURGO0FBT0QsQ0FSRDs7QUFVQUMsYUFBYUksU0FBYixHQUF5QjtBQUN2QkgsYUFBVyxnQkFBTUksU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRFYsQ0FBekI7O2tCQUllUCxZIiwiZmlsZSI6IjAuOWJjMTQ3NmE1NDg3ZWRjOTNlODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRSb3coZG9jdW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiA8ZGl2IGtleT17aW5kZXh9Pntkb2N1bWVudC50aXRsZX08L2Rpdj5cbn1cblxuY29uc3QgRG9jdW1lbnRMaXN0ID0gKHtkb2N1bWVudHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkb2N1bWVudHMubWFwKGRvY3VtZW50ID0+IHtcbiAgICAgICAgPGRpdiBrZXk9e2RvY3VtZW50LmlkfT57ZG9jdW1lbnQudGl0bGV9PC9kaXY+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRvY3VtZW50TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdCBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==