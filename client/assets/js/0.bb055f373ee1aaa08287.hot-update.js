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

var _Register = __webpack_require__(265);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(220);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(292);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Proctected private Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} protected route
 */
var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    }
  }));
};

PrivateRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  isAuthenticated: _propTypes2.default.bool.isRequired
};

/**
 * Proctected public Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} public route
 */
var PublicRoute = function PublicRoute(_ref2) {
  var Component = _ref2.component,
      isAuthenticated = _ref2.isAuthenticated,
      rest = _objectWithoutProperties(_ref2, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === false ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });
    }
  }));
};

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
   * Checks for user signin or signout
   * set the state
   * @memberof App
   * @return {string|bolean} displayName, isAuthenticated
   */


  _createClass(Routes, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        console.log(res);
        if (res.data.message === 'Registration Successfull and Logged In') {
          _ApiCalls2.default.saveToken(res.data.user.token);
          _this2.props.history.push('/home');
        } else {
          _this2.setState({ errorStatus: false });
        }
      });
    }

    /**
     * Renders the routes
     * @returns {void}
     * @memberof App
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
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
              path: '/home',
              component: _Home2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/login',
              component: _Login2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/register',
              component: _Register2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/newsfeeds/:sourceId/:sortBy',
              component: _Login2.default
            }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
          )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJwcm9wcyIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIlB1YmxpY1JvdXRlIiwiUm91dGVzIiwic3RhdGUiLCJ0b2tlbiIsImdldFRva2VuIiwidmVyaWZ5VG9rZW4iLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwic2F2ZVRva2VuIiwidXNlciIsImhpc3RvcnkiLCJwdXNoIiwic2V0U3RhdGUiLCJlcnJvclN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQXdEO0FBQUEsTUFBMUNDLFNBQTBDLFFBQXJEQyxTQUFxRDtBQUFBLE1BQS9CQyxlQUErQixRQUEvQkEsZUFBK0I7QUFBQSxNQUFYQyxJQUFXOztBQUMzRSxTQUNFLGtFQUNNQSxJQUROO0FBRUUsWUFBUTtBQUFBLGFBQVVELG9CQUFvQixJQUFwQixHQUNkLDhCQUFDLFNBQUQsRUFBZUUsS0FBZixDQURjLEdBRWQsMERBQVUsSUFBRyxHQUFiLEdBRkk7QUFBQTtBQUZWLEtBREY7QUFRRCxDQVREOztBQVdBTCxhQUFhTSxTQUFiLEdBQXlCO0FBQ3ZCSixhQUFXLG9CQUFVSyxJQUFWLENBQWVDLFVBREg7QUFFdkJMLG1CQUFpQixvQkFBVU0sSUFBVixDQUFlRDtBQUZULENBQXpCOztBQUtBOzs7OztBQUtBLElBQU1FLGNBQWMsU0FBZEEsV0FBYyxRQUF3RDtBQUFBLE1BQTFDVCxTQUEwQyxTQUFyREMsU0FBcUQ7QUFBQSxNQUEvQkMsZUFBK0IsU0FBL0JBLGVBQStCO0FBQUEsTUFBWEMsSUFBVzs7QUFDMUUsU0FDRSxrRUFDTUEsSUFETjtBQUVFLFlBQVE7QUFBQSxhQUFVRCxvQkFBb0IsS0FBcEIsR0FDZCw4QkFBQyxTQUFELEVBQWVFLEtBQWYsQ0FEYyxHQUVkLDBEQUFVLElBQUcsT0FBYixHQUZJO0FBQUE7QUFGVixLQURGO0FBUUQsQ0FURDs7QUFXQUssWUFBWUosU0FBWixHQUF3QjtBQUN0QkosYUFBVyxvQkFBVUssSUFBVixDQUFlQyxVQURKO0FBRXRCTCxtQkFBaUIsb0JBQVVNLElBQVYsQ0FBZUQ7QUFGVixDQUF4Qjs7QUFLQTs7Ozs7OztJQU1NRyxNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYVCx1QkFBaUI7QUFETixLQUFiO0FBRlk7QUFLYjs7QUFHRDs7Ozs7Ozs7Ozt5Q0FNcUI7QUFBQTs7QUFDbkIsVUFBTVUsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EseUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkNDLGdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxZQUFJQSxJQUFJRyxJQUFKLENBQVNDLE9BQVQsS0FBcUIsd0NBQXpCLEVBQW1FO0FBQ2pFLDZCQUFRQyxTQUFSLENBQWtCTCxJQUFJRyxJQUFKLENBQVNHLElBQVQsQ0FBY1YsS0FBaEM7QUFDQSxpQkFBS1IsS0FBTCxDQUFXbUIsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsT0FBeEI7QUFDRCxTQUhELE1BR087QUFDTCxpQkFBS0MsUUFBTCxDQUFjLEVBQUNDLGFBQWEsS0FBZCxFQUFkO0FBQ0Q7QUFDRixPQVJEO0FBU0Q7O0FBRUQ7Ozs7Ozs7OzZCQUtTO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSwwQ0FBQyxXQUFEO0FBQ0UsK0JBQWlCLEtBQUtmLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLEdBSFA7QUFJRTtBQUpGLGNBREY7QUFPRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLFVBSFA7QUFJRTtBQUpGLGNBUEY7QUFhRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLE9BSFA7QUFJRTtBQUpGLGNBYkY7QUFtQkUsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLUyxLQUFMLENBQVdULGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxRQUhQO0FBSUU7QUFKRixjQW5CRjtBQXlCRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLFdBSFA7QUFJRTtBQUpGLGNBekJGO0FBK0JFLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1MsS0FBTCxDQUFXVCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssOEJBSFA7QUFJRTtBQUpGLGNBL0JGO0FBcUNFLG1FQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFyQ0Y7QUFERjtBQURGLE9BREY7QUE2Q0Q7Ozs7RUEvRWtCLGdCQUFNRixTOztrQkFrRlpVLE0iLCJmaWxlIjoiMC5iYjA1NWYzNzNlZTFhYWEwODI4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vdXRpbC9BcGlDYWxscyc7XG5cbi8qKlxuICogUHJvY3RlY3RlZCBwcml2YXRlIFJvdXRlXG4gKiBAcGFyYW1zIHtvYmplY3R9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9XG4gKiBAcmV0dXJucyB7Y29tcG9uZW50fSBwcm90ZWN0ZWQgcm91dGVcbiAqL1xuY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17cHJvcHMgPT4gKGlzQXV0aGVudGljYXRlZCA9PT0gdHJ1ZVxuICAgICAgICA/IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9cIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHJpdmF0ZVJvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogUHJvY3RlY3RlZCBwdWJsaWMgUm91dGVcbiAqIEBwYXJhbXMge29iamVjdH0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH1cbiAqIEByZXR1cm5zIHtjb21wb25lbnR9IHB1YmxpYyByb3V0ZVxuICovXG5jb25zdCBQdWJsaWNSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9e3Byb3BzID0+IChpc0F1dGhlbnRpY2F0ZWQgPT09IGZhbHNlXG4gICAgICAgID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHVibGljUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IG1haW50YWlucyBhbGwgcm91dGVzLlxuICogQ2hlY2tzIGZvciB1c2VyIHNpZ25lZCBpbiBhbmQgc2lnbmVkIG91dFxuICogQGNsYXNzIEFwcFxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgdXNlciBzaWduaW4gb3Igc2lnbm91dFxuICAgKiBzZXQgdGhlIHN0YXRlXG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICogQHJldHVybiB7c3RyaW5nfGJvbGVhbn0gZGlzcGxheU5hbWUsIGlzQXV0aGVudGljYXRlZFxuICAgKi9cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHRva2VuID0gQXBpQ2FsbC5nZXRUb2tlbigpO1xuICAgIEFwaUNhbGwudmVyaWZ5VG9rZW4odG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnUmVnaXN0cmF0aW9uIFN1Y2Nlc3NmdWxsIGFuZCBMb2dnZWQgSW4nKSB7XG4gICAgICAgIEFwaUNhbGwuc2F2ZVRva2VuKHJlcy5kYXRhLnVzZXIudG9rZW4pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvaG9tZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JTdGF0dXM6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvZGV0YWlsc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RGV0YWlsc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvaG9tZVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvbG9naW5cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17UmVnaXN0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3NmZWVkcy86c291cmNlSWQvOnNvcnRCeVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=