webpackHotUpdate(0,{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "select",
      {
        id: props.id,
        name: props.name,
        value: props.selectedOption,
        onChange: props.controlFunc },
      _react2.default.createElement(
        "option",
        { defaultValue: "", disabled: true },
        "Choose your option"
      ),
      _react2.default.createElement(
        "option",
        { value: "1" },
        "Option 1"
      ),
      _react2.default.createElement(
        "option",
        { value: "2" },
        "Option 2"
      ),
      _react2.default.createElement(
        "option",
        null,
        undefined.prop
      )
    ),
    _react2.default.createElement(
      "label",
      null,
      props.title
    )
  );
};

Select.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwicHJvcCIsInRpdGxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLFlBQUlBLE1BQU1DLEVBRFo7QUFFRSxjQUFNRCxNQUFNRSxJQUZkO0FBR0UsZUFBT0YsTUFBTUcsY0FIZjtBQUlFLGtCQUFVSCxNQUFNSSxXQUpsQjtBQUtFO0FBQUE7QUFBQSxVQUFRLGNBQWEsRUFBckIsRUFBd0IsY0FBeEI7QUFBQTtBQUFBLE9BTEY7QUFNRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BUEY7QUFRQztBQUFBO0FBQUE7QUFBUyxrQkFBS0M7QUFBZDtBQVJELEtBREY7QUFXRTtBQUFBO0FBQUE7QUFBUUwsWUFBTU07QUFBZDtBQVhGLEdBRGE7QUFBQSxDQUFmOztBQWdCQVAsT0FBT1EsU0FBUCxHQUFtQjtBQUNqQkwsUUFBTSxnQkFBTU0sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFo7QUFFakJKLFNBQU8sZ0JBQU1FLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUZiO0FBR2pCVCxNQUFJLGdCQUFNTyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFIVjtBQUlqQlAsa0JBQWdCLGdCQUFNSyxTQUFOLENBQWdCQyxNQUpmO0FBS2pCTCxlQUFhLGdCQUFNSSxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7QUFMakIsQ0FBbkI7O2tCQVFlWCxNIiwiZmlsZSI6IjAuNjQzZmY5NWZiZWIwYjRlMTdkZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdCA9IChwcm9wcykgPT4gKCAgXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5zZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jb250cm9sRnVuY30+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5PcHRpb24gMTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICA8b3B0aW9uPnt0aGlzLnByb3B9PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7ICBcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==