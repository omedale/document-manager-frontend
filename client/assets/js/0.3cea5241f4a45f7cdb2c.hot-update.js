webpackHotUpdate(0,{

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(58);

var _redux = __webpack_require__(47);

var _reactRouterDom = __webpack_require__(24);

var _DocumentList = __webpack_require__(288);

var _DocumentList2 = _interopRequireDefault(_DocumentList);

var _SingleInput = __webpack_require__(86);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(87);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _ApiCalls = __webpack_require__(44);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

var _Select = __webpack_require__(85);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(57);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewDocument = function (_React$Component) {
  _inherits(ViewDocument, _React$Component);

  function ViewDocument(props) {
    _classCallCheck(this, ViewDocument);

    var _this = _possibleConstructorReturn(this, (ViewDocument.__proto__ || Object.getPrototypeOf(ViewDocument)).call(this, props));

    _this.state = {
      currentDocument: ''
    };
    return _this;
  }

  _createClass(ViewDocument, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _ApiCalls2.default.getDocument(this.props.match.params.id).then(function (document) {
        _this2.setState({
          currentDocument: document
        });
      });
      this.props.actions.AllDocuments();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = '';
      if (this.state.currentDocument !== '') {
        var parser = new DOMParser();
        consoparser.parseFromString(this.state.currentDocument.data.content, "text/html");
      }

      var documents = this.props.documents;

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
            { className: ' bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'viewContainer' },
                  _react2.default.createElement(
                    'object',
                    { className: 'viewContainer', width: '400', height: '400' },
                    content
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ViewDocument;
}(_react2.default.Component);

ViewDocument.propTypes = {};

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ViewDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4PzliM2MiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiVmlld0RvY3VtZW50IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnREb2N1bWVudCIsImdldERvY3VtZW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImNvbnRlbnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJjb25zb3BhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImRhdGEiLCJkb2N1bWVudHMiLCJoaXN0b3J5IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUI7QUFETixLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVvQjtBQUFBOztBQUNuQix5QkFBUUMsV0FBUixDQUFvQixLQUFLSCxLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxFQUE1QyxFQUFnREMsSUFBaEQsQ0FBcUQsb0JBQVc7QUFDOUQsZUFBS0MsUUFBTCxDQUFjO0FBQ1pOLDJCQUFpQk87QUFETCxTQUFkO0FBR0QsT0FKRDtBQUtBLFdBQUtULEtBQUwsQ0FBV1UsT0FBWCxDQUFtQkMsWUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSUMsVUFBVSxFQUFkO0FBQ0EsVUFBSSxLQUFLWCxLQUFMLENBQVdDLGVBQVgsS0FBK0IsRUFBbkMsRUFBdUM7QUFDckMsWUFBSVcsU0FBUyxJQUFJQyxTQUFKLEVBQWI7QUFDQUMsb0JBQVlDLGVBQVosQ0FBNEIsS0FBS2YsS0FBTCxDQUFXQyxlQUFYLENBQTJCZSxJQUEzQixDQUFnQ0wsT0FBNUQsRUFBcUUsV0FBckU7QUFDRDs7QUFMTSxVQVFDTSxTQVJELEdBUWUsS0FBS2xCLEtBUnBCLENBUUNrQixTQVJEOztBQVNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxFQUFmO0FBQ0UsbUVBQWUsU0FBUyxLQUFLbEIsS0FBTCxDQUFXbUIsT0FBbkM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDQTtBQUFBO0FBQUEsb0JBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFRLFdBQVUsZUFBbEIsRUFBa0MsT0FBTSxLQUF4QyxFQUE4QyxRQUFPLEtBQXJEO0FBQ0dQO0FBREg7QUFERjtBQURBO0FBREY7QUFERjtBQURGO0FBSkYsT0FERjtBQW9CRDs7OztFQTlDd0IsZ0JBQU1RLFM7O0FBZ0RqQ3JCLGFBQWFzQixTQUFiLEdBQXlCLEVBQXpCOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUJyQixLQUF6QixFQUFnQ3NCLFFBQWhDLEVBQTBDO0FBQ3hDLFNBQU87QUFDTEwsZUFBV2pCLE1BQU1pQjtBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTTSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMZixhQUFTLCtCQUFtQlosZUFBbkIsRUFBb0MyQixRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3pCLFlBQTdDLEMiLCJmaWxlIjoiMC4zY2VhNTI0MWY0YTQ1ZjdjZGIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IERvY3VtZW50TGlzdCBmcm9tICcuL0RvY3VtZW50TGlzdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgVmlld0RvY3VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnREb2N1bWVudDogJydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgQXBpQ2FsbC5nZXREb2N1bWVudCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCkudGhlbihkb2N1bWVudCA9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQ6IGRvY3VtZW50XG4gICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLkFsbERvY3VtZW50cygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb250ZW50ID0gJydcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50RG9jdW1lbnQgIT09ICcnKSB7XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgY29uc29wYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3RhdGUuY3VycmVudERvY3VtZW50LmRhdGEuY29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgfVxuXG5cbiAgICBjb25zdCB7IGRvY3VtZW50cyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9keWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxvYmplY3QgY2xhc3NOYW1lPVwidmlld0NvbnRhaW5lclwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICA8L29iamVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5WaWV3RG9jdW1lbnQucHJvcFR5cGVzID0ge1xuXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3RG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1ZpZXdEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9