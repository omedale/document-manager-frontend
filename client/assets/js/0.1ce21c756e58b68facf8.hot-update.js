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

    _this.state = { editor: null };
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
      return _react2.default.createElement('textarea', {
        id: this.props.id,
        defaultValue: 'kkkkkkkk'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJwcm9wcyIsImlkIiwiaGVpZ2h0IiwicGx1Z2lucyIsInRvb2xiYXIiLCJ0YWJsZV90b29sYmFyIiwiZm9udHNpemVfZm9ybWF0cyIsInJlbW92ZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsYTs7O0FBQ0o7Ozs7QUFJQSwyQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFFQyxRQUFRLElBQVYsRUFBYjtBQUZZO0FBR2I7O0FBRUQ7Ozs7Ozs7Ozs7d0NBTW9CO0FBQ2xCQyxjQUFRQyxJQUFSLENBQWE7QUFDWEMsd0JBQWEsS0FBS0MsS0FBTCxDQUFXQyxFQURiO0FBRVhDLGdCQUFTLEtBRkU7QUFHWEMsdUdBSFc7QUFLWEMsME1BTFc7QUFTWEMsNExBVFc7QUFhWEMsMEJBQWtCO0FBYlAsT0FBYjtBQWVEOztBQUVEOzs7Ozs7Ozs7MkNBTXVCO0FBQ3JCVCxjQUFRVSxNQUFSLENBQWUsS0FBS1osS0FBTCxDQUFXQyxNQUExQjtBQUNEOztBQUVEOzs7Ozs7Ozs7NkJBTVM7QUFDUCxhQUNFO0FBQ0UsWUFBSSxLQUFLSSxLQUFMLENBQVdDLEVBRGpCO0FBRUUsc0JBQWM7QUFGaEIsUUFERjtBQU1EOzs7Ozs7QUFHSFAsY0FBY2MsU0FBZCxHQUEwQjtBQUN4QlAsTUFBSSxvQkFBVVEsTUFBVixDQUFpQkMsVUFERztBQUV4QkMsc0JBQW9CLG9CQUFVQyxJQUFWLENBQWVGO0FBRlgsQ0FBMUI7O2tCQUtlaEIsYSIsImZpbGUiOiIwLjFjZTIxYzc1NmU1OGI2OGZhY2Y4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBUaW55TWNlIHJlYWN0IGNvbXBvbmVudCBjbGFzc1xuICogQGNsYXNzIFRpbnlNY2VDb21wb25lbnRcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmNsYXNzIFRpbnlNY2VFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBUaW55TWNlQ29tcG9uZW50LlxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBlZGl0b3I6IG51bGwgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRpbnltY2Ugb24gY29tcG5lbnQgbW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnREaWRNb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGlueW1jZS5pbml0KHtcbiAgICAgIHNlbGVjdG9yOmAjJHt0aGlzLnByb3BzLmlkfWAsXG4gICAgICBoZWlnaHQgOiBcIjQwMFwiLFxuICAgICAgcGx1Z2luczogYGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgXG4gICAgICBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZWAsXG4gICAgICB0b29sYmFyOiBgdW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBcbiAgICAgIGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBcbiAgICAgIGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgZm9yZWNvbG9yIGJhY2tjb2xvciBcbiAgICAgIHwgdGFibGUgfCBudW1saXN0IGJ1bGxpc3QgfCBlbW90aWNvbnMgfCBjb2Rlc2FtcGxlYCxcbiAgICAgIHRhYmxlX3Rvb2xiYXI6IGB0YWJsZXByb3BzIHRhYmxlZGVsZXRlICBcbiAgICAgIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgXG4gICAgICB0YWJsZWluc2VydHJvd2FmdGVyIHRhYmxlZGVsZXRlcm93IHwgdGFibGVpbnNlcnRjb2xiZWZvcmUgXG4gICAgICB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sYCxcbiAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHQnLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZSBvZiB0aW55bWNlIG9uIGNvbXBuZW50IHVubW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnRXaWxsVW5tb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGlueW1jZS5yZW1vdmUodGhpcy5zdGF0ZS5lZGl0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbXBvbmVudFxuICAgKiBAbWV0aG9kIHJlbmRlclxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17J2tra2tra2trJ31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UaW55TWNlRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRWRpdG9yQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlueU1jZUVkaXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=