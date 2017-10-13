webpackHotUpdate(0,{

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(273);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(232);

var _ApiCalls = __webpack_require__(292);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      errorStatus: false,
      errorMessage: '',
      email: '',
      password: '',
      phone: '',
      name: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        email: event.target.value.email,
        password: event.target.value.password,
        name: event.target.value.name,
        phone: event.target.value.phone
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var data = {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
        phone: event.target.phone.value
      };
      _ApiCalls2.default.RegisterUser(data).then(function (res) {
        console.log(res);
        if (res.data.message === 'Registration Successfull and Logged In') {
          _ApiCalls2.default.saveToken(res.data.user.saveToken);
        }
      });
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      var errorMessage = this.state.errorStatus ? _react2.default.createElement(
        'div',
        { className: 'alert alert-border alert-danger' },
        _react2.default.createElement(
          'strong',
          null,
          'Oh snap!'
        ),
        ' Change a few things up and try submitting again.'
      ) : '';
      return _react2.default.createElement(
        'div',
        { className: 'container regContainer' },
        _react2.default.createElement(
          'div',
          { className: 'row registerheader' },
          _react2.default.createElement(
            'h2',
            null,
            'Register'
          ),
          errorMessage
        ),
        _react2.default.createElement(
          'div',
          { className: 'row regCard card' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'label',
              { htmlFor: 'name' },
              'Enter your Fullname'
            ),
            _react2.default.createElement('input', { id: 'name', type: 'text', value: this.state.name, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'email' },
              'Enter your email'
            ),
            _react2.default.createElement('input', { id: 'email', type: 'email', value: this.state.email, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'password' },
              'Enter your password'
            ),
            _react2.default.createElement('input', { id: 'password', name: 'password', type: 'password', value: this.state.password, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'phone' },
              'Enter your Phone Number'
            ),
            _react2.default.createElement('input', { id: 'phone', type: 'text', value: this.state.phone, onChange: this.handleChange }),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'pull-left col s6' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/login' },
                  ' I Already Have an Account '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s6' },
                _react2.default.createElement(
                  'button',
                  { className: 'pull-right waves-effect waves-light btn' },
                  'Register'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

exports.default = Register;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Register.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9SZWdpc3Rlci5qc3g/ZTc2MyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInByb3BzIiwic3RhdGUiLCJlcnJvclN0YXR1cyIsImVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZSIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiUmVnaXN0ZXJVc2VyIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic2F2ZVRva2VuIiwidXNlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEtBREY7QUFFWEMsb0JBQWMsRUFGSDtBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxhQUFPLEVBTEk7QUFNWEMsWUFBTTtBQU5LLEtBQWI7QUFRQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVhpQjtBQVlsQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaUixlQUFPTyxNQUFNRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJWLEtBRGQ7QUFFWkMsa0JBQVVNLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlQsUUFGakI7QUFHWkUsY0FBTUksTUFBTUUsTUFBTixDQUFhQyxLQUFiLENBQW1CUCxJQUhiO0FBSVpELGVBQU9LLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlI7QUFKZCxPQUFkO0FBTUQ7OztpQ0FFWUssSyxFQUFPO0FBQ2xCQSxZQUFNSSxjQUFOO0FBQ0EsVUFBTUMsT0FBTztBQUNaWixlQUFPTyxNQUFNRSxNQUFOLENBQWFULEtBQWIsQ0FBbUJVLEtBRGQ7QUFFWlQsa0JBQVVNLE1BQU1FLE1BQU4sQ0FBYVIsUUFBYixDQUFzQlMsS0FGcEI7QUFHWlAsY0FBTUksTUFBTUUsTUFBTixDQUFhTixJQUFiLENBQWtCTyxLQUhaO0FBSVpSLGVBQU9LLE1BQU1FLE1BQU4sQ0FBYVAsS0FBYixDQUFtQlE7QUFKZCxPQUFiO0FBTUQseUJBQVFHLFlBQVIsQ0FBcUJELElBQXJCLEVBQTJCRSxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdENDLGdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxZQUFJQSxJQUFJSCxJQUFKLENBQVNNLE9BQVQsS0FBcUIsd0NBQXpCLEVBQW1FO0FBQ2pFLDZCQUFRQyxTQUFSLENBQWtCSixJQUFJSCxJQUFKLENBQVNRLElBQVQsQ0FBY0QsU0FBaEM7QUFDRDtBQUNGLE9BTEY7QUFNQztBQUNEOzs7NkJBRVE7QUFDUCxVQUFNcEIsZUFBZSxLQUFLRixLQUFMLENBQVdDLFdBQVgsR0FBeUI7QUFBQTtBQUFBLFVBQUssV0FBVSxpQ0FBZjtBQUM5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRDhDO0FBQUE7QUFBQSxPQUF6QixHQUM4RCxFQURuRjtBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFR0M7QUFGSCxTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFNLFVBQVUsS0FBS08sWUFBckI7QUFFQTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxhQUZBO0FBR0EscURBQU8sSUFBRyxNQUFWLEVBQWtCLE1BQUssTUFBdkIsRUFBOEIsT0FBTyxLQUFLVCxLQUFMLENBQVdNLElBQWhELEVBQXNELFVBQVUsS0FBS0MsWUFBckUsR0FIQTtBQUtFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBTEY7QUFNRSxxREFBTyxJQUFHLE9BQVYsRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0csS0FBbEQsRUFBeUQsVUFBVSxLQUFLSSxZQUF4RSxHQU5GO0FBUUU7QUFBQTtBQUFBLGdCQUFPLFNBQVEsVUFBZjtBQUFBO0FBQUEsYUFSRjtBQVNFLHFEQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLFVBQTFCLEVBQXFDLE1BQUssVUFBMUMsRUFBcUQsT0FBTyxLQUFLUCxLQUFMLENBQVdJLFFBQXZFLEVBQWlGLFVBQVUsS0FBS0csWUFBaEcsR0FURjtBQVdFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBWEY7QUFZRSxxREFBTyxJQUFHLE9BQVYsRUFBbUIsTUFBSyxNQUF4QixFQUErQixPQUFPLEtBQUtQLEtBQUwsQ0FBV0ssS0FBakQsRUFBd0QsVUFBVSxLQUFLRSxZQUF2RSxHQVpGO0FBY0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFNLElBQUcsUUFBVDtBQUFBO0FBQUE7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUE7QUFERjtBQUpGO0FBZEY7QUFERjtBQU5GLE9BREY7QUFrQ0Q7Ozs7RUE5RW9CLGdCQUFNaUIsUzs7a0JBaUZkMUIsUSIsImZpbGUiOiIwLjc1ZjRkMWNkZjAxZDlhNWZlMDhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi8uLi91dGlsL0FwaUNhbGxzJztcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JTdGF0dXM6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIG5hbWU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZS5wYXNzd29yZCxcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZS5uYW1lLFxuICAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZS5waG9uZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxuICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC5waG9uZS52YWx1ZSxcbiAgICB9O1xuICAgQXBpQ2FsbC5SZWdpc3RlclVzZXIoZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdSZWdpc3RyYXRpb24gU3VjY2Vzc2Z1bGwgYW5kIExvZ2dlZCBJbicpIHtcbiAgICAgICAgQXBpQ2FsbC5zYXZlVG9rZW4ocmVzLmRhdGEudXNlci5zYXZlVG9rZW4pXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuc3RhdGUuZXJyb3JTdGF0dXMgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWJvcmRlciBhbGVydC1kYW5nZXJcIj5cbiAgICA8c3Ryb25nPk9oIHNuYXAhPC9zdHJvbmc+IENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLjwvZGl2PiA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWdDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcmVnaXN0ZXJoZWFkZXJcIj5cbiAgICAgICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZWdDYXJkIGNhcmRcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+RW50ZXIgeW91ciBGdWxsbmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiICB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVudGVyIHlvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiAgdHlwZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkVudGVyIHlvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+RW50ZXIgeW91ciBQaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGhvbmVcIiAgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPiBJIEFscmVhZHkgSGF2ZSBhbiBBY2NvdW50IDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1JlZ2lzdGVyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=