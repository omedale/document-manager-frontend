webpackHotUpdate(0,{

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  var List = documents.map(function (document) {
    return _react2.default.createElement(
      _reactRouterDom.Link,
      {
        to: '/document/#{document.id}' },
      ' Home',
      _react2.default.createElement(
        'div',
        { key: document.id },
        document.title
      )
    );
  });
  return _react2.default.createElement(
    'div',
    null,
    List
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwiTGlzdCIsIm1hcCIsImRvY3VtZW50IiwiaWQiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBaUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0FBQ3BDLE1BQU1DLE9BQU9ELFVBQVVFLEdBQVYsQ0FBYztBQUFBLFdBQ3pCO0FBQUE7QUFBQTtBQUNBLFlBQUcsMEJBREg7QUFBQTtBQUVBO0FBQUE7QUFBQSxVQUFLLEtBQUtDLFNBQVNDLEVBQW5CO0FBQXdCRCxpQkFBU0U7QUFBakM7QUFGQSxLQUR5QjtBQUFBLEdBQWQsQ0FBYjtBQU1BLFNBQ0U7QUFBQTtBQUFBO0FBQ0dKO0FBREgsR0FERjtBQUtELENBWkQ7O0FBY0FGLGFBQWFPLFNBQWIsR0FBeUI7QUFDdkJOLGFBQVcsZ0JBQU1PLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXpCOztrQkFJZVYsWSIsImZpbGUiOiIwLmI2ODdiMzdhNTVkZTZkNzRkZjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IERvY3VtZW50TGlzdCA9ICh7ZG9jdW1lbnRzfSkgPT4ge1xuICBjb25zdCBMaXN0ID0gZG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PlxuICAgIDxMaW5rXG4gICAgdG89XCIvZG9jdW1lbnQvI3tkb2N1bWVudC5pZH1cIj4gSG9tZVxuICAgIDxkaXYga2V5PXtkb2N1bWVudC5pZH0+e2RvY3VtZW50LnRpdGxlfTwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge0xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Eb2N1bWVudExpc3QucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudExpc3QgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=