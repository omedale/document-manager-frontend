webpackHotUpdate(0,{

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(52);

var _redux = __webpack_require__(40);

var _NavigationBar = __webpack_require__(38);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(350);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

var _SingleInput = __webpack_require__(118);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(119);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(117);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(116);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateDocument = function (_React$Component) {
  _inherits(CreateDocument, _React$Component);

  function CreateDocument(props) {
    _classCallCheck(this, CreateDocument);

    var _this = _possibleConstructorReturn(this, (CreateDocument.__proto__ || Object.getPrototypeOf(CreateDocument)).call(this, props));

    _this.state = {
      documents: { docTitle: '', docContent: '', access: '' },
      email: '',
      docTitle: '',
      docContent: '',
      access: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(CreateDocument, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent,
        access: event.target.value.access
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: event.target.docContent.value
      };
      var field = event.target.name;
      var document = this.state.documents;
      document[field] = event.target.value;
      console.log(event.target.value);
      // this.props.actions.createDocument(doc);
    }
  }, {
    key: 'render',
    value: function render() {

      var documentData = {
        docTitle: this.state.docTitle,
        docContent: this.state.docContent,
        access: this.state.access
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'h3',
              null,
              'Add Document'
            ),
            _react2.default.createElement(_DocumentForm2.default, {
              selectedOption: this.state.access,
              documentData: documentData,
              onSave: this.onClickSave,
              onChange: this.handleChange
            }),
            _react2.default.createElement(
              'form',
              { onSubmit: this.onClickSave, className: 'col s12' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_SingleInput2.default, {
                    inputType: 'text',
                    title: 'Title',
                    id: 'docTitle',
                    name: 'docTitle',
                    controlFunc: this.handleChange,
                    content: this.state.docTitle,
                    placeholder: 'Title' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_Select2.default, {
                    name: 'ageRange',
                    id: 'access',
                    title: 'Access',
                    placeholder: 'Choose your age range',
                    controlFunc: this.handleChange,
                    options: this.state.access,
                    selectedOption: this.state.ownerAgeRangeSelection })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(_TextArea2.default, {
                    title: 'Document Content',
                    rows: 5,
                    resize: false,
                    content: this.state.docContent,
                    name: 'docContent',
                    id: 'docContent',
                    controlFunc: this.handleChange,
                    placeholder: 'Please type your document here' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(
                    'button',
                    { className: 'pull-right waves-effect waves-light btn' },
                    'Login'
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'waves-effect waves-light btn' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'check'
                    ),
                    'button'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreateDocument;
}(_react2.default.Component);

CreateDocument.propTypes = {
  actions: _react2.default.PropTypes.object.isRequired,
  documents: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(documentActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJDcmVhdGVEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJkb2N1bWVudHMiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJhY2Nlc3MiLCJlbWFpbCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiZmllbGQiLCJuYW1lIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsIm93bmVyQWdlUmFuZ2VTZWxlY3Rpb24iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhY3Rpb25zIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFBQ0MsVUFBVSxFQUFYLEVBQWVDLFlBQVksRUFBM0IsRUFBK0JDLFFBQVEsRUFBdkMsRUFEQTtBQUVYQyxhQUFPLEVBRkk7QUFHWEgsZ0JBQVUsRUFIQztBQUlYQyxrQkFBWSxFQUpEO0FBS1hDLGNBQVE7QUFMRyxLQUFiO0FBT0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFM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QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsd0JBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEscUJBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0Y7QUFSRjtBQURGO0FBSkYsT0FERjtBQTZERDs7OztFQXhHMEIsZ0JBQU1tQixTOztBQTBHbkMzQixlQUFlNEIsU0FBZixHQUEyQjtBQUN6QkMsV0FBUyxnQkFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFA7QUFFekI3QixhQUFXLGdCQUFNMkIsU0FBTixDQUFnQkcsS0FBaEIsQ0FBc0JEO0FBRlIsQ0FBM0I7O0FBS0EsU0FBU0UsZUFBVCxDQUF5QmhDLEtBQXpCLEVBQWdDaUMsUUFBaEMsRUFBeUM7QUFDdkMsU0FBTztBQUNMaEMsZUFBV0QsTUFBTUM7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU2lDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xSLGFBQVMsK0JBQW1COUIsZUFBbkIsRUFBb0NzQyxRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3BDLGNBQTdDLEMiLCJmaWxlIjoiMC5mZTI0NDk5Yzk1MmM2YjlhMTE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRGb3JtIGZyb20gJy4vRG9jdW1lbnRGb3JtJztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgQ3JlYXRlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZG9jdW1lbnRzOiB7ZG9jVGl0bGU6ICcnLCBkb2NDb250ZW50OiAnJywgYWNjZXNzOiAnJ30sXG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiBldmVudC50YXJnZXQuZG9jQ29udGVudC52YWx1ZVxuICAgIH1cbiAgICBjb25zdCBmaWVsZCA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGxldCBkb2N1bWVudCA9IHRoaXMuc3RhdGUuZG9jdW1lbnRzXG4gICAgZG9jdW1lbnRbZmllbGRdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAvLyB0aGlzLnByb3BzLmFjdGlvbnMuY3JlYXRlRG9jdW1lbnQoZG9jKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBjb25zdCBkb2N1bWVudERhdGEgPSB7XG4gICAgICBkb2NUaXRsZTogdGhpcy5zdGF0ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogdGhpcy5zdGF0ZS5hY2Nlc3MsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgRG9jdW1lbnQ8L2gzPlxuICAgICAgICAgICAgPERvY3VtZW50Rm9ybVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgICAgZG9jdW1lbnREYXRhPXtkb2N1bWVudERhdGF9XG4gICAgICAgICAgICBvblNhdmU9e3RoaXMub25DbGlja1NhdmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25DbGlja1NhdmV9IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPFNpbmdsZUlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1RpdGxlJ31cbiAgICAgICAgICAgICAgICAgICAgaWQ9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kb2NUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydUaXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J2FnZVJhbmdlJ31cbiAgICAgICAgICAgICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0FjY2Vzcyd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnQ2hvb3NlIHlvdXIgYWdlIHJhbmdlJ31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUub3duZXJBZ2VSYW5nZVNlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEb2N1bWVudCBDb250ZW50J31cbiAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kb2NDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5DcmVhdGVEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKXtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50cyBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlRG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=