webpackHotUpdate(0,{

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TinyMce react component class
 * @class TinyMceComponent
 * @extends {Component}
 */
var TinyMceEditor = function (_Component) {
  _inherits(TinyMceEditor, _Component);

  /**
   * Creates an instance of TinyMceComponent.
   * @memberOf TinyMceComponent
   */
  function TinyMceEditor() {
    _classCallCheck(this, TinyMceEditor);

    var _this = _possibleConstructorReturn(this, (TinyMceEditor.__proto__ || Object.getPrototypeOf(TinyMceEditor)).call(this));

    _this.state = {
      editor: null,
      tinymceContent: ''
    };
    return _this;
  }

  /**
   * Initialize tinymce on compnent mount
   * @method ComponentDidMount
   * @return {void}
   * @memberOf TinyMceComponent
   */


  _createClass(TinyMceEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      tinymce.init({
        selector: '#' + this.props.id,
        height: "400",
        plugins: 'autolink link image lists \n      print preview textcolor table emoticons codesample',
        toolbar: 'undo redo | bold italic | \n      fontsizeselect fontselect | \n      alignleft aligncenter alignright | forecolor backcolor \n      | table | numlist bullist | emoticons | codesample',
        table_toolbar: 'tableprops tabledelete  \n      | tableinsertrowbefore \n      tableinsertrowafter tabledeleterow | tableinsertcolbefore \n      tableinsertcolafter tabledeletecol',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt'
      });
    }

    /**
     * Remove instance of tinymce on compnent unmount
     * @method ComponentWillUnmount
     * @return {void}
     * @memberOf TinyMceComponent
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      tinymce.remove(this.state.editor);
    }

    /**
     * Renders the component
     * @method render
     * @return {void}
     * @memberOf TinyMceComponent
     */

  }, {
    key: 'render',
    value: function render() {
      this.setState({
        tinymceContent: event.target.value.docTitle,
        access: event.target.value.access
      });
      return _react2.default.createElement('textarea', {
        id: this.props.id,
        defaultValue: this.props.defaultValue
      });
    }
  }]);

  return TinyMceEditor;
}(_react.Component);

TinyMceEditor.propTypes = {
  id: _propTypes2.default.string.isRequired,
  handleEditorChange: _propTypes2.default.func.isRequired
};

exports.default = TinyMceEditor;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TinyMceEditor.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50IiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInByb3BzIiwiaWQiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsInRhYmxlX3Rvb2xiYXIiLCJmb250c2l6ZV9mb3JtYXRzIiwicmVtb3ZlIiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZG9jVGl0bGUiLCJhY2Nlc3MiLCJkZWZhdWx0VmFsdWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLGE7OztBQUNKOzs7O0FBSUEsMkJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxJQURHO0FBRVhDLHNCQUFnQjtBQUZMLEtBQWI7QUFGWTtBQU1iOztBQUVEOzs7Ozs7Ozs7O3dDQU1vQjtBQUNsQkMsY0FBUUMsSUFBUixDQUFhO0FBQ1hDLHdCQUFhLEtBQUtDLEtBQUwsQ0FBV0MsRUFEYjtBQUVYQyxnQkFBUyxLQUZFO0FBR1hDLHVHQUhXO0FBS1hDLDBNQUxXO0FBU1hDLDRMQVRXO0FBYVhDLDBCQUFrQjtBQWJQLE9BQWI7QUFlRDs7QUFFRDs7Ozs7Ozs7OzJDQU11QjtBQUNyQlQsY0FBUVUsTUFBUixDQUFlLEtBQUtiLEtBQUwsQ0FBV0MsTUFBMUI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzZCQU1TO0FBQ1AsV0FBS2EsUUFBTCxDQUFjO0FBQ1paLHdCQUFnQmEsTUFBTUMsTUFBTixDQUFhQyxLQUFiLENBQW1CQyxRQUR2QjtBQUVaQyxnQkFBUUosTUFBTUMsTUFBTixDQUFhQyxLQUFiLENBQW1CRTtBQUZmLE9BQWQ7QUFJQSxhQUNFO0FBQ0UsWUFBSSxLQUFLYixLQUFMLENBQVdDLEVBRGpCO0FBRUUsc0JBQWMsS0FBS0QsS0FBTCxDQUFXYztBQUYzQixRQURGO0FBTUQ7Ozs7OztBQUdIckIsY0FBY3NCLFNBQWQsR0FBMEI7QUFDeEJkLE1BQUksb0JBQVVlLE1BQVYsQ0FBaUJDLFVBREc7QUFFeEJDLHNCQUFvQixvQkFBVUMsSUFBVixDQUFlRjtBQUZYLENBQTFCOztrQkFLZXhCLGEiLCJmaWxlIjoiMC42M2U0NmVjODBmY2NmMWE5OTM1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogVGlueU1jZSByZWFjdCBjb21wb25lbnQgY2xhc3NcbiAqIEBjbGFzcyBUaW55TWNlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5jbGFzcyBUaW55TWNlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVGlueU1jZUNvbXBvbmVudC5cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBlZGl0b3I6IG51bGwsXG4gICAgICB0aW55bWNlQ29udGVudDogJydcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGlueW1jZSBvbiBjb21wbmVudCBtb3VudFxuICAgKiBAbWV0aG9kIENvbXBvbmVudERpZE1vdW50XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBUaW55TWNlQ29tcG9uZW50XG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgc2VsZWN0b3I6YCMke3RoaXMucHJvcHMuaWR9YCxcbiAgICAgIGhlaWdodCA6IFwiNDAwXCIsXG4gICAgICBwbHVnaW5zOiBgYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBcbiAgICAgIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucyBjb2Rlc2FtcGxlYCxcbiAgICAgIHRvb2xiYXI6IGB1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IFxuICAgICAgZm9udHNpemVzZWxlY3QgZm9udHNlbGVjdCB8IFxuICAgICAgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIFxuICAgICAgfCB0YWJsZSB8IG51bWxpc3QgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVgLFxuICAgICAgdGFibGVfdG9vbGJhcjogYHRhYmxlcHJvcHMgdGFibGVkZWxldGUgIFxuICAgICAgfCB0YWJsZWluc2VydHJvd2JlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xgLFxuICAgICAgZm9udHNpemVfZm9ybWF0czogJzhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdCcsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlIG9mIHRpbnltY2Ugb24gY29tcG5lbnQgdW5tb3VudFxuICAgKiBAbWV0aG9kIENvbXBvbmVudFdpbGxVbm1vdW50XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBUaW55TWNlQ29tcG9uZW50XG4gICAqL1xuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aW55bWNlLnJlbW92ZSh0aGlzLnN0YXRlLmVkaXRvcik7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgY29tcG9uZW50XG4gICAqIEBtZXRob2QgcmVuZGVyXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBUaW55TWNlQ29tcG9uZW50XG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW55bWNlQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UaW55TWNlRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRWRpdG9yQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlueU1jZUVkaXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=