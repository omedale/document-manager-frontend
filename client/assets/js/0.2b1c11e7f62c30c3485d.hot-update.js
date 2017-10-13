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
        { key: doc },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiZG9jdW1lbnRSb3ciLCJkb2N1bWVudCIsImluZGV4IiwidGl0bGUiLCJEb2N1bWVudExpc3QiLCJkb2N1bWVudHMiLCJtYXAiLCJkb2MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUVnQkEsVyxHQUFBQSxXOztBQUZoQjs7Ozs7O0FBRU8sU0FBU0EsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQzNDLFNBQU87QUFBQTtBQUFBLE1BQUssS0FBS0EsS0FBVjtBQUFrQkQsYUFBU0U7QUFBM0IsR0FBUDtBQUNEOztBQUVELElBQU1DLGVBQWUsU0FBZkEsWUFBZSxPQUFpQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTs7QUFDcEMsU0FDRTtBQUFBO0FBQUE7QUFDR0EsY0FBVUMsR0FBVixDQUFjLG9CQUFZO0FBQ3pCO0FBQUE7QUFBQSxVQUFLLEtBQUtDLEdBQVY7QUFBZ0JOLGlCQUFTRTtBQUF6QjtBQUNELEtBRkE7QUFESCxHQURGO0FBT0QsQ0FSRDs7QUFVQUMsYUFBYUksU0FBYixHQUF5QjtBQUN2QkgsYUFBVyxnQkFBTUksU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRFYsQ0FBekI7O2tCQUllUCxZIiwiZmlsZSI6IjAuMmIxYzExZTdmNjJjMzBjMzQ4NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRSb3coZG9jdW1lbnQsIGluZGV4KSB7XG4gIHJldHVybiA8ZGl2IGtleT17aW5kZXh9Pntkb2N1bWVudC50aXRsZX08L2Rpdj5cbn1cblxuY29uc3QgRG9jdW1lbnRMaXN0ID0gKHtkb2N1bWVudHN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkb2N1bWVudHMubWFwKGRvY3VtZW50ID0+IHtcbiAgICAgICAgPGRpdiBrZXk9e2RvY30+e2RvY3VtZW50LnRpdGxlfTwvZGl2PlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Eb2N1bWVudExpc3QucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudExpc3QgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=