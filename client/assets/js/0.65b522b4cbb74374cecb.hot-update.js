webpackHotUpdate(0,{

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      selectedOption = _ref.selectedOption,
      controlFunc = _ref.controlFunc,
      _ref$docAccess = _ref.docAccess,
      docAccess = _ref$docAccess === undefined ? [] : _ref$docAccess;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "select",
      {
        id: id,
        name: name,
        value: selectedOption,
        onChange: controlFunc },
      _react2.default.createElement(
        "option",
        { defaultValue: "", disabled: true },
        "Select Access type"
      ),
      docAccess.map(function (opt) {
        return _react2.default.createElement(
          "option",
          { value: opt.value.toLowerCase(), key: opt.value },
          " ",
          opt.value,
          " "
        );
      })
    )
  );
};

Select.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  docAccess: _react2.default.PropTypes.arrayOf(_react.PropTypes.object),
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwiaWQiLCJuYW1lIiwidGl0bGUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwibWFwIiwib3B0IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxNQUFNQyxJQUFOLFFBQU1BLElBQU47QUFBQSxNQUFZQyxLQUFaLFFBQVlBLEtBQVo7QUFBQSxNQUFtQkMsY0FBbkIsUUFBbUJBLGNBQW5CO0FBQUEsTUFBbUNDLFdBQW5DLFFBQW1DQSxXQUFuQztBQUFBLDRCQUFnREMsU0FBaEQ7QUFBQSxNQUFnREEsU0FBaEQsa0NBQTRELEVBQTVEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxZQUFJTCxFQUROO0FBRUUsY0FBTUMsSUFGUjtBQUdFLGVBQU9FLGNBSFQ7QUFJRSxrQkFBVUMsV0FKWjtBQUtFO0FBQUE7QUFBQSxVQUFRLGNBQWEsRUFBckIsRUFBd0IsY0FBeEI7QUFBQTtBQUFBLE9BTEY7QUFNR0MsZ0JBQVVDLEdBQVYsQ0FBYyxlQUFPO0FBQ3BCLGVBQU87QUFBQTtBQUFBLFlBQVEsT0FBT0MsSUFBSUMsS0FBSixDQUFVQyxXQUFWLEVBQWYsRUFBd0MsS0FBS0YsSUFBSUMsS0FBakQ7QUFBQTtBQUEwREQsY0FBSUMsS0FBOUQ7QUFBQTtBQUFBLFNBQVA7QUFDRCxPQUZBO0FBTkg7QUFERixHQURhO0FBQUEsQ0FBZjs7QUFpQkFULE9BQU9XLFNBQVAsR0FBbUI7QUFDakJULFFBQU0sZ0JBQU1VLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURaO0FBRWpCWCxTQUFPLGdCQUFNUyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGYjtBQUdqQmIsTUFBSSxnQkFBTVcsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSFY7QUFJakJSLGFBQVcsZ0JBQU1NLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCLGlCQUFVQyxNQUFsQyxDQUpNO0FBS2pCWixrQkFBZ0IsZ0JBQU1RLFNBQU4sQ0FBZ0JDLE1BTGY7QUFNakJSLGVBQWEsZ0JBQU1PLFNBQU4sQ0FBZ0JLLElBQWhCLENBQXFCSDtBQU5qQixDQUFuQjs7a0JBU2VkLE0iLCJmaWxlIjoiMC42NWI1MjJiNGNiYjc0Mzc0Y2VjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdCA9ICh7aWQsIG5hbWUsIHRpdGxlLCBzZWxlY3RlZE9wdGlvbiwgY29udHJvbEZ1bmMsIGRvY0FjY2VzcyA9IFtdfSkgPT4gKCAgXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e2lkfVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXtjb250cm9sRnVuY30+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkPlNlbGVjdCBBY2Nlc3MgdHlwZTwvb3B0aW9uPlxuICAgICAge2RvY0FjY2Vzcy5tYXAob3B0ID0+IHtcbiAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e29wdC52YWx1ZS50b0xvd2VyQ2FzZSgpfSBrZXk9e29wdC52YWx1ZX0+IHtvcHQudmFsdWV9IDwvb3B0aW9uPjtcbiAgICAgIH0pXG4gICAgfVxuICAgIDwvc2VsZWN0PlxuICAgIFxuICA8L2Rpdj5cbik7XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7ICBcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkb2NBY2Nlc3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==