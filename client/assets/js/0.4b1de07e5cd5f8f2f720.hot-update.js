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
        // $('.viewContainer').append(this.state.currentDocument.data.content);

        // var parser = new DOMParser();
        // const doc = parser.parseFromString(this.state.currentDocument.data.content, "text/html");
        // content = doc.getElementsByTagName('body')[0].innerHTML

        // document.getElementById('myDiv2').innerHTML = this.state.currentDocument.data.content;

        // document.getElementById('myDiv2').html = this.state.currentDocument.data.content;
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
                  _react2.default.createElement('div', { id: 'myDiv2', className: 'viewContainer' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4PzliM2MiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiVmlld0RvY3VtZW50IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnREb2N1bWVudCIsImdldERvY3VtZW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImNvbnRlbnQiLCJkb2N1bWVudHMiLCJoaXN0b3J5IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUI7QUFETixLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVvQjtBQUFBOztBQUNuQix5QkFBUUMsV0FBUixDQUFvQixLQUFLSCxLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxFQUE1QyxFQUFnREMsSUFBaEQsQ0FBcUQsb0JBQVc7QUFDOUQsZUFBS0MsUUFBTCxDQUFjO0FBQ1pOLDJCQUFpQk87QUFETCxTQUFkO0FBR0QsT0FKRDtBQUtBLFdBQUtULEtBQUwsQ0FBV1UsT0FBWCxDQUFtQkMsWUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSUMsVUFBVSxFQUFkO0FBQ0EsVUFBSSxLQUFLWCxLQUFMLENBQVdDLGVBQVgsS0FBK0IsRUFBbkMsRUFBdUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Q7O0FBWk0sVUFlQ1csU0FmRCxHQWVlLEtBQUtiLEtBZnBCLENBZUNhLFNBZkQ7O0FBZ0JQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxFQUFmO0FBQ0UsbUVBQWUsU0FBUyxLQUFLYixLQUFMLENBQVdjLE9BQW5DO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0E7QUFBQTtBQUFBLG9CQUFLLFdBQVUsZUFBZjtBQUNFLHlEQUFLLElBQUcsUUFBUixFQUFpQixXQUFVLGVBQTNCO0FBREY7QUFEQTtBQURGO0FBREY7QUFERjtBQUpGLE9BREY7QUFvQkQ7Ozs7RUFyRHdCLGdCQUFNQyxTOztBQXVEakNoQixhQUFhaUIsU0FBYixHQUF5QixFQUF6Qjs7QUFJQSxTQUFTQyxlQUFULENBQXlCaEIsS0FBekIsRUFBZ0NpQixRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xMLGVBQVdaLE1BQU1ZO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNNLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xWLGFBQVMsK0JBQW1CWixlQUFuQixFQUFvQ3NCLFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDcEIsWUFBN0MsQyIsImZpbGUiOiIwLjRiMWRlMDdlNWNkNWY4ZjJmNzIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRG9jdW1lbnRMaXN0IGZyb20gJy4vRG9jdW1lbnRMaXN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBWaWV3RG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudERvY3VtZW50OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBBcGlDYWxsLmdldERvY3VtZW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKS50aGVuKGRvY3VtZW50ID0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudDogZG9jdW1lbnRcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuQWxsRG9jdW1lbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSAnJ1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnREb2N1bWVudCAhPT0gJycpIHtcbiAgICAgIC8vICQoJy52aWV3Q29udGFpbmVyJykuYXBwZW5kKHRoaXMuc3RhdGUuY3VycmVudERvY3VtZW50LmRhdGEuY29udGVudCk7XG5cbiAgICAgIC8vIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAvLyBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRoaXMuc3RhdGUuY3VycmVudERvY3VtZW50LmRhdGEuY29udGVudCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICAvLyBjb250ZW50ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uaW5uZXJIVE1MXG5cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURpdjInKS5pbm5lckhUTUwgPSB0aGlzLnN0YXRlLmN1cnJlbnREb2N1bWVudC5kYXRhLmNvbnRlbnQ7XG5cbiAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteURpdjInKS5odG1sID0gdGhpcy5zdGF0ZS5jdXJyZW50RG9jdW1lbnQuZGF0YS5jb250ZW50O1xuICAgIH1cblxuXG4gICAgY29uc3QgeyBkb2N1bWVudHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibXlEaXYyXCIgY2xhc3NOYW1lPVwidmlld0NvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVmlld0RvY3VtZW50LnByb3BUeXBlcyA9IHtcblxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlld0RvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==