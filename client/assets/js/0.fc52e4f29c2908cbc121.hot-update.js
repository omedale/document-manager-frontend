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
        var doc = parser.parseFromString(this.state.currentDocument.data.content, "text/html");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4PzliM2MiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiVmlld0RvY3VtZW50IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnREb2N1bWVudCIsImdldERvY3VtZW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImNvbnRlbnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb2MiLCJwYXJzZUZyb21TdHJpbmciLCJkYXRhIiwiZG9jdW1lbnRzIiwiaGlzdG9yeSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIseUJBQVFDLFdBQVIsQ0FBb0IsS0FBS0gsS0FBTCxDQUFXSSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBNUMsRUFBZ0RDLElBQWhELENBQXFELG9CQUFXO0FBQzlELGVBQUtDLFFBQUwsQ0FBYztBQUNaTiwyQkFBaUJPO0FBREwsU0FBZDtBQUdELE9BSkQ7QUFLQSxXQUFLVCxLQUFMLENBQVdVLE9BQVgsQ0FBbUJDLFlBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLFVBQVUsRUFBZDtBQUNBLFVBQUksS0FBS1gsS0FBTCxDQUFXQyxlQUFYLEtBQStCLEVBQW5DLEVBQXVDO0FBQ3JDLFlBQUlXLFNBQVMsSUFBSUMsU0FBSixFQUFiO0FBQ0EsWUFBTUMsTUFBTUYsT0FBT0csZUFBUCxDQUF1QixLQUFLZixLQUFMLENBQVdDLGVBQVgsQ0FBMkJlLElBQTNCLENBQWdDTCxPQUF2RCxFQUFnRSxXQUFoRSxDQUFaO0FBQ0Q7O0FBTE0sVUFRQ00sU0FSRCxHQVFlLEtBQUtsQixLQVJwQixDQVFDa0IsU0FSRDs7QUFTUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsRUFBZjtBQUNFLG1FQUFlLFNBQVMsS0FBS2xCLEtBQUwsQ0FBV21CLE9BQW5DO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0E7QUFBQTtBQUFBLG9CQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBUSxXQUFVLGVBQWxCLEVBQWtDLE9BQU0sS0FBeEMsRUFBOEMsUUFBTyxLQUFyRDtBQUNHUDtBQURIO0FBREY7QUFEQTtBQURGO0FBREY7QUFERjtBQUpGLE9BREY7QUFvQkQ7Ozs7RUE5Q3dCLGdCQUFNUSxTOztBQWdEakNyQixhQUFhc0IsU0FBYixHQUF5QixFQUF6Qjs7QUFJQSxTQUFTQyxlQUFULENBQXlCckIsS0FBekIsRUFBZ0NzQixRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xMLGVBQVdqQixNQUFNaUI7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU00sa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU87QUFDTGYsYUFBUywrQkFBbUJaLGVBQW5CLEVBQW9DMkIsUUFBcEM7QUFESixHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkN6QixZQUE3QyxDIiwiZmlsZSI6IjAuZmM1MmU0ZjI5YzI5MDhjYmMxMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBEb2N1bWVudExpc3QgZnJvbSAnLi9Eb2N1bWVudExpc3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIFZpZXdEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50RG9jdW1lbnQ6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIEFwaUNhbGwuZ2V0RG9jdW1lbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpLnRoZW4oZG9jdW1lbnQgPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudERvY3VtZW50OiBkb2N1bWVudFxuICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5BbGxEb2N1bWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudCA9ICcnXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudERvY3VtZW50ICE9PSAnJykge1xuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGhpcy5zdGF0ZS5jdXJyZW50RG9jdW1lbnQuZGF0YS5jb250ZW50LCBcInRleHQvaHRtbFwiKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHsgZG9jdW1lbnRzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBib2R5Y2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG9iamVjdCBjbGFzc05hbWU9XCJ2aWV3Q29udGFpbmVyXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblZpZXdEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG5cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXdEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvVmlld0RvY3VtZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=