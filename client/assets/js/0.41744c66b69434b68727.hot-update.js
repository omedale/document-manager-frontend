webpackHotUpdate(0,{

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DropDownMenu = __webpack_require__(480);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = __webpack_require__(487);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuSelect = function MenuSelect(_ref) {
  var title = _ref.title,
      selectedOption = _ref.selectedOption,
      controlFunc = _ref.controlFunc,
      _ref$docAccess = _ref.docAccess,
      docAccess = _ref$docAccess === undefined ? [] : _ref$docAccess;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DropDownMenu2.default,
      { value: selectedOption, onChange: controlFunc, openImmediately: true },
      _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never' }),
      _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night' }),
      _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights' }),
      _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends' }),
      _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly' })
    ),
    _react2.default.createElement(
      'label',
      null,
      title
    )
  );
};

MenuSelect.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  docAccess: _react2.default.PropTypes.arrayOf(_react.PropTypes.object),
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = MenuSelect;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MenuSelect.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9NZW51U2VsZWN0LmpzeD81ZjJhIl0sIm5hbWVzIjpbIk1lbnVTZWxlY3QiLCJ0aXRsZSIsInNlbGVjdGVkT3B0aW9uIiwiY29udHJvbEZ1bmMiLCJkb2NBY2Nlc3MiLCJwcm9wVHlwZXMiLCJuYW1lIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImlkIiwiYXJyYXlPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLGNBQVYsUUFBVUEsY0FBVjtBQUFBLE1BQTBCQyxXQUExQixRQUEwQkEsV0FBMUI7QUFBQSw0QkFBdUNDLFNBQXZDO0FBQUEsTUFBdUNBLFNBQXZDLGtDQUFtRCxFQUFuRDtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFjLE9BQU9GLGNBQXJCLEVBQXFDLFVBQVVDLFdBQS9DLEVBQTRELGlCQUFpQixJQUE3RTtBQUNFLDBEQUFVLE9BQU8sQ0FBakIsRUFBb0IsYUFBWSxPQUFoQyxHQURGO0FBRUUsMERBQVUsT0FBTyxDQUFqQixFQUFvQixhQUFZLGFBQWhDLEdBRkY7QUFHRSwwREFBVSxPQUFPLENBQWpCLEVBQW9CLGFBQVksWUFBaEMsR0FIRjtBQUlFLDBEQUFVLE9BQU8sQ0FBakIsRUFBb0IsYUFBWSxVQUFoQyxHQUpGO0FBS0UsMERBQVUsT0FBTyxDQUFqQixFQUFvQixhQUFZLFFBQWhDO0FBTEYsS0FERjtBQVFFO0FBQUE7QUFBQTtBQUFRRjtBQUFSO0FBUkYsR0FEaUI7QUFBQSxDQUFuQjs7QUFhQUQsV0FBV0ssU0FBWCxHQUF1QjtBQUNyQkMsUUFBTSxnQkFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFI7QUFFckJSLFNBQU8sZ0JBQU1NLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUZUO0FBR3JCQyxNQUFJLGdCQUFNSCxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFITjtBQUlyQkwsYUFBVyxnQkFBTUcsU0FBTixDQUFnQkksT0FBaEIsQ0FBd0IsaUJBQVVDLE1BQWxDLENBSlU7QUFLckJWLGtCQUFnQixnQkFBTUssU0FBTixDQUFnQkMsTUFMWDtBQU1yQkwsZUFBYSxnQkFBTUksU0FBTixDQUFnQk0sSUFBaEIsQ0FBcUJKO0FBTmIsQ0FBdkI7O2tCQVNlVCxVIiwiZmlsZSI6IjAuNDE3NDRjNjZiNjk0MzRiNjg3MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJ21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuXG5jb25zdCBNZW51U2VsZWN0ID0gKHsgdGl0bGUsIHNlbGVjdGVkT3B0aW9uLCBjb250cm9sRnVuYywgZG9jQWNjZXNzID0gW10gfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxEcm9wRG93bk1lbnUgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufSBvbkNoYW5nZT17Y29udHJvbEZ1bmN9IG9wZW5JbW1lZGlhdGVseT17dHJ1ZX0+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiTmV2ZXJcIiAvPlxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBwcmltYXJ5VGV4dD1cIkV2ZXJ5IE5pZ2h0XCIgLz5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gcHJpbWFyeVRleHQ9XCJXZWVrbmlnaHRzXCIgLz5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17NH0gcHJpbWFyeVRleHQ9XCJXZWVrZW5kc1wiIC8+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezV9IHByaW1hcnlUZXh0PVwiV2Vla2x5XCIgLz5cbiAgICA8L0Ryb3BEb3duTWVudT5cbiAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuTWVudVNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZG9jQWNjZXNzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgc2VsZWN0ZWRPcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRyb2xGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudVNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L01lbnVTZWxlY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==