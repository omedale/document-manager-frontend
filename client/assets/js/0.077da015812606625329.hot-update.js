webpackHotUpdate(0,{

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(47);

var _redux = __webpack_require__(39);

var _reactTinymce = __webpack_require__(351);

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(288);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

var _ApiCalls = __webpack_require__(34);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

var _SingleInput = __webpack_require__(60);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(61);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(59);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(46);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManageDocument = function (_React$Component) {
  _inherits(ManageDocument, _React$Component);

  function ManageDocument(props) {
    _classCallCheck(this, ManageDocument);

    var _this = _possibleConstructorReturn(this, (ManageDocument.__proto__ || Object.getPrototypeOf(ManageDocument)).call(this, props));

    _this.state = {
      email: '',
      docTitle: '',
      docContent: '',
      access: '',
      editor: null,
      editMode: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    _this.handleEditorChange = _this.handleEditorChange.bind(_this);
    return _this;
  }

  _createClass(ManageDocument, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(content) {
      this.setState({
        docContent: content
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        docTitle: event.target.value.docTitle,
        access: event.target.value.access
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.match.params.id) {
        _ApiCalls2.default.getDocument(this.props.match.params.id).then(function (document) {
          _this2.setState({
            docTitle: document.data.title,
            docContent: document.data.content,
            access: document.data.access,
            editMode: true
          });
        });
      }
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      var _this3 = this;

      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: this.state.docContent,
        access: event.target.access.value
      };
      if (this.state.edit) this.props.actions.saveDocuments(doc).then(function (res) {
        _this3.props.history.push('/');
      }).catch(function (error) {
        console.log(error);
      });
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
          { className: '' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'docContainer' },
          _react2.default.createElement(
            'div',
            { className: 'card row' },
            _react2.default.createElement(_DocumentForm2.default, {
              selectedOption: this.state.access,
              documentData: documentData,
              onSave: this.onClickSave,
              handleEditorChange: this.handleEditorChange,
              onChange: this.handleChange
            })
          )
        )
      );
    }
  }]);

  return ManageDocument;
}(_react2.default.Component);

ManageDocument.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImVkaXRNb2RlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIm9uQ2xpY2tTYXZlIiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwiY29udGVudCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJnZXREb2N1bWVudCIsInRoZW4iLCJkb2N1bWVudCIsImRhdGEiLCJ0aXRsZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwiZWRpdCIsImFjdGlvbnMiLCJzYXZlRG9jdW1lbnRzIiwiaGlzdG9yeSIsInB1c2giLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRvY3VtZW50RGF0YSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkb2N1bWVudHMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWSxFQUhEO0FBSVhDLGNB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QkY7QUFGUixDQUEzQjs7QUFLQSxTQUFTRyxlQUFULENBQXlCM0MsS0FBekIsRUFBZ0M0QyxRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xILGVBQVd6QyxNQUFNeUM7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU0ksa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU87QUFDTG5CLGFBQVMsK0JBQW1COUIsZUFBbkIsRUFBb0NpRCxRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Qy9DLGNBQTdDLEMiLCJmaWxlIjoiMC4wNzdkYTAxNTgxMjYwNjYyNTMyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgVGlueU1DRSBmcm9tICdyZWFjdC10aW55bWNlJztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRGb3JtIGZyb20gJy4vRG9jdW1lbnRGb3JtJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIE1hbmFnZURvY3VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnLFxuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGVkaXRvcjogbnVsbCxcbiAgICAgIGVkaXRNb2RlOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UgPSB0aGlzLmhhbmRsZUVkaXRvckNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRWRpdG9yQ2hhbmdlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY0NvbnRlbnQ6IGNvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkge1xuICAgICAgQXBpQ2FsbC5nZXREb2N1bWVudCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkudGhlbihkb2N1bWVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRvY1RpdGxlOiBkb2N1bWVudC5kYXRhLnRpdGxlLFxuICAgICAgICAgIGRvY0NvbnRlbnQ6IGRvY3VtZW50LmRhdGEuY29udGVudCxcbiAgICAgICAgICBhY2Nlc3M6IGRvY3VtZW50LmRhdGEuYWNjZXNzLFxuICAgICAgICAgIGVkaXRNb2RlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC5hY2Nlc3MudmFsdWVcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZWRpdClcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuc2F2ZURvY3VtZW50cyhkb2MpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6IHRoaXMuc3RhdGUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3dcIj5cbiAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgIGRvY3VtZW50RGF0YT17ZG9jdW1lbnREYXRhfVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e3RoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5NYW5hZ2VEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFuYWdlRG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=