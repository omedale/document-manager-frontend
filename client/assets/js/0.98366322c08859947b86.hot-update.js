webpackHotUpdate(0,{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(232);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(95);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(218);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(217);

var _Details2 = _interopRequireDefault(_Details);

var _Login = __webpack_require__(219);

var _Login2 = _interopRequireDefault(_Login);

var _NotFound = __webpack_require__(220);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Proctected private Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} protected route
 */
function PrivateRoute(_ref) {
  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated;

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }
  }));
}

PrivateRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  isAuthenticated: _propTypes2.default.bool.isRequired
};

/**
 * Proctected public Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} public route
 */
function PublicRoute(_ref2) {
  var Component = _ref2.component,
      isAuthenticated = _ref2.isAuthenticated;

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === false ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/detals' });
    }
  }));
}

PublicRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  isAuthenticated: _propTypes2.default.bool.isRequired
};

/**
 * The component maintains all routes.
 * Checks for user signed in and signed out
 * @class App
 * @extends {React.Component}
 */

var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this));

    _this.state = {
      isAuthenticated: true
    };
    return _this;
  }

  /**
   * Renders the routes
   * @returns {void}
   * @memberof App
   */


  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(_NavigationBar2.default, null)
          ),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(PublicRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/',
              component: _Home2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/details',
              component: _Details2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/newsfeeds/:sourceId/:sortBy',
              component: _Login2.default
            }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
          ),
          _react2.default.createElement(Footer, null)
        )
      );
    }
  }]);

  return Routes;
}(_react2.default.Component);

exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJwcm9wcyIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIlB1YmxpY1JvdXRlIiwiUm91dGVzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUtBLFNBQVNBLFlBQVQsT0FBaUU7QUFBQSxNQUE5QkMsU0FBOEIsUUFBekNDLFNBQXlDO0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFDL0QsU0FDRSxrRUFDTUMsSUFETjtBQUVFLFlBQVE7QUFBQSxhQUFVRCxvQkFBb0IsSUFBcEIsR0FDZCw4QkFBQyxTQUFELEVBQWVFLEtBQWYsQ0FEYyxHQUVkLDBEQUFVLElBQUcsR0FBYixHQUZJO0FBQUE7QUFGVixLQURGO0FBUUQ7O0FBRURMLGFBQWFNLFNBQWIsR0FBeUI7QUFDdkJKLGFBQVcsb0JBQVVLLElBQVYsQ0FBZUMsVUFESDtBQUV2QkwsbUJBQWlCLG9CQUFVTSxJQUFWLENBQWVEO0FBRlQsQ0FBekI7O0FBS0E7Ozs7O0FBS0EsU0FBU0UsV0FBVCxRQUFnRTtBQUFBLE1BQTlCVCxTQUE4QixTQUF6Q0MsU0FBeUM7QUFBQSxNQUFuQkMsZUFBbUIsU0FBbkJBLGVBQW1COztBQUM5RCxTQUNFLGtFQUNNQyxJQUROO0FBRUUsWUFBUTtBQUFBLGFBQVVELG9CQUFvQixLQUFwQixHQUNkLDhCQUFDLFNBQUQsRUFBZUUsS0FBZixDQURjLEdBRWQsMERBQVUsSUFBRyxTQUFiLEdBRkk7QUFBQTtBQUZWLEtBREY7QUFRRDs7QUFFREssWUFBWUosU0FBWixHQUF3QjtBQUN0QkosYUFBVyxvQkFBVUssSUFBVixDQUFlQyxVQURKO0FBRXRCTCxtQkFBaUIsb0JBQVVNLElBQVYsQ0FBZUQ7QUFGVixDQUF4Qjs7QUFLQTs7Ozs7OztJQU1NRyxNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYVCx1QkFBaUI7QUFETixLQUFiO0FBRlk7QUFLYjs7QUFFRDs7Ozs7Ozs7OzZCQUtTO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUE7QUFDRSwwQ0FBQyxXQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLEdBSFA7QUFJRTtBQUpGLGNBREY7QUFPRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLFVBSFA7QUFJRTtBQUpGLGNBUEY7QUFhRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLDhCQUhQO0FBSUU7QUFKRixjQWJGO0FBbUJFLG1FQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFuQkYsV0FKRjtBQXlCRSx3Q0FBQyxNQUFEO0FBekJGO0FBREYsT0FERjtBQStCRDs7OztFQTdDa0IsZ0JBQU1GLFM7O2tCQWdEWlUsTSIsImZpbGUiOiIwLjk4MzY2MzIyYzA4ODU5OTQ3Yjg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLyoqXG4gKiBQcm9jdGVjdGVkIHByaXZhdGUgUm91dGVcbiAqIEBwYXJhbXMge29iamVjdH0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH1cbiAqIEByZXR1cm5zIHtjb21wb25lbnR9IHByb3RlY3RlZCByb3V0ZVxuICovXG5mdW5jdGlvbiBQcml2YXRlUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSB0cnVlXG4gICAgICAgID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL1wiIC8+KX1cbiAgICAvPlxuICApO1xufVxuXG5Qcml2YXRlUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBQcm9jdGVjdGVkIHB1YmxpYyBSb3V0ZVxuICogQHBhcmFtcyB7b2JqZWN0fSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfVxuICogQHJldHVybnMge2NvbXBvbmVudH0gcHVibGljIHJvdXRlXG4gKi9cbmZ1bmN0aW9uIFB1YmxpY1JvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17cHJvcHMgPT4gKGlzQXV0aGVudGljYXRlZCA9PT0gZmFsc2VcbiAgICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89XCIvZGV0YWxzXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblB1YmxpY1JvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCBtYWludGFpbnMgYWxsIHJvdXRlcy5cbiAqIENoZWNrcyBmb3IgdXNlciBzaWduZWQgaW4gYW5kIHNpZ25lZCBvdXRcbiAqIEBjbGFzcyBBcHBcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFJvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvZGV0YWlsc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RGV0YWlsc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvbmV3c2ZlZWRzLzpzb3VyY2VJZC86c29ydEJ5XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMb2dpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=