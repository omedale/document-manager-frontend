webpackHotUpdate(0,{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var deleteDocument = _ref.deleteDocument,
      documents = _ref.documents;

  var newDocuments = documents.reverse();
  var List = newDocuments.map(function (document) {
    return _react2.default.createElement(
      'div',
      { key: document.id + document.title },
      _react2.default.createElement(
        'div',
        { className: 'col s1 m2' },
        _react2.default.createElement(
          'div',
          { className: 'card horizontal cardDoc' },
          _react2.default.createElement(
            'div',
            { className: 'card-stacked' },
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  return deleteDocument(document.id);
                }, className: 'button remove' },
              'x'
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content cardContentImage' },
              _react2.default.createElement('img', { className: 'thumb-image', src: 'img/thum.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-action  cardDocAction' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  key: document.id + document.title,
                  to: '/document/' + document.id
                },
                _react2.default.createElement(
                  'div',
                  { className: 'docText', key: document.id },
                  document.title
                )
              )
            )
          )
        )
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZGVsZXRlRG9jdW1lbnQiLCJkb2N1bWVudHMiLCJuZXdEb2N1bWVudHMiLCJyZXZlcnNlIiwiTGlzdCIsIm1hcCIsImRvY3VtZW50IiwiaWQiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBbUM7QUFBQSxNQUFoQ0MsY0FBZ0MsUUFBaENBLGNBQWdDO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDdEQsTUFBTUMsZUFBZUQsVUFBVUUsT0FBVixFQUFyQjtBQUNBLE1BQU1DLE9BQU9GLGFBQWFHLEdBQWIsQ0FBaUI7QUFBQSxXQUM1QjtBQUFBO0FBQUEsUUFBTSxLQUFLQyxTQUFTQyxFQUFULEdBQWNELFNBQVNFLEtBQWxDO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxTQUFTO0FBQUEseUJBQU1SLGVBQWVNLFNBQVNDLEVBQXhCLENBQU47QUFBQSxpQkFBWixFQUFnRCxXQUFVLGVBQTFEO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsK0JBQWY7QUFDRSxxREFBSyxXQUFVLGFBQWYsRUFBNkIsS0FBSSxjQUFqQztBQURGLGFBRkY7QUFLRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSw0QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFLRCxTQUFTQyxFQUFULEdBQWNELFNBQVNFLEtBRDlCO0FBRUUscUNBQWlCRixTQUFTQztBQUY1QjtBQUlFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLFNBQWYsRUFBeUIsS0FBS0QsU0FBU0MsRUFBdkM7QUFBNENELDJCQUFTRTtBQUFyRDtBQUpGO0FBREY7QUFMRjtBQURGO0FBREY7QUFERixLQUQ0QjtBQUFBLEdBQWpCLENBQWI7QUFzQkEsU0FDRTtBQUFBO0FBQUE7QUFDR0o7QUFESCxHQURGO0FBS0QsQ0E3QkQ7O0FBK0JBTCxhQUFhVSxTQUFiLEdBQXlCO0FBQ3ZCUixhQUFXLGdCQUFNUyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF6Qjs7a0JBSWViLFkiLCJmaWxlIjoiMC5iMGU0ODIxNDljNGNhZDA0MGYyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgRG9jdW1lbnRMaXN0ID0gKHsgZGVsZXRlRG9jdW1lbnQsIGRvY3VtZW50cyB9KSA9PiB7XG4gIGNvbnN0IG5ld0RvY3VtZW50cyA9IGRvY3VtZW50cy5yZXZlcnNlKCk7XG4gIGNvbnN0IExpc3QgPSBuZXdEb2N1bWVudHMubWFwKGRvY3VtZW50ID0+XG4gICAgPGRpdiAga2V5PXtkb2N1bWVudC5pZCArIGRvY3VtZW50LnRpdGxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxIG0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3Jpem9udGFsIGNhcmREb2NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3RhY2tlZFwiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gZGVsZXRlRG9jdW1lbnQoZG9jdW1lbnQuaWQpfSAgY2xhc3NOYW1lPVwiYnV0dG9uIHJlbW92ZVwiPng8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjYXJkQ29udGVudEltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGh1bWItaW1hZ2VcIiBzcmM9XCJpbWcvdGh1bS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbiAgY2FyZERvY0FjdGlvblwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17ZG9jdW1lbnQuaWQgKyBkb2N1bWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICB0bz17YC9kb2N1bWVudC8ke2RvY3VtZW50LmlkfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY1RleHRcIiBrZXk9e2RvY3VtZW50LmlkfT57ZG9jdW1lbnQudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7TGlzdH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRvY3VtZW50TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdCBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==