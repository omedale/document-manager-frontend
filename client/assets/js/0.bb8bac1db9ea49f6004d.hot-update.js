webpackHotUpdate(0,{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SingleInput = __webpack_require__(60);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(61);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(59);

var _Select2 = _interopRequireDefault(_Select);

var _TinyMceEditor = __webpack_require__(295);

var _TinyMceEditor2 = _interopRequireDefault(_TinyMceEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentForm = function DocumentForm(_ref) {
  var documentData = _ref.documentData,
      selectedOption = _ref.selectedOption,
      onSave = _ref.onSave,
      handleEditorChange = _ref.handleEditorChange,
      onChange = _ref.onChange;

  var accessType = ['Public', 'Private'];
  var options = accessType.map(function (access) {
    var index = 0;
    return {
      id: index,
      value: access
    };
    index++;
  });
  $(document).ready(function () {
    $('select').material_select();
  });
  // tinymce.init({selector:'textarea'});
  // TinyMceEditor.activeEditor.setContent('custom')
  console.log(handleEditorChange);
  return _react2.default.createElement(
    'form',
    { onSubmit: onSave, className: 'col s12' },
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
          controlFunc: onChange,
          content: documentData.docTitle,
          placeholder: 'Title' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field col s6' },
        _react2.default.createElement(_Select2.default, {
          name: 'access',
          id: 'access',
          title: 'Access',
          controlFunc: onChange,
          selectedOption: selectedOption,
          docAccess: options
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'input-field col s12' },
        _react2.default.createElement(_TinyMceEditor2.default, {
          defaultValue: documentData.docContent,
          id: 'createDoc',
          handleEditorChange: handleEditorChange
        })
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
          'Save'
        )
      )
    )
  );
};

DocumentForm.propTypes = {
  documentData: _react2.default.PropTypes.object.isRequired,
  onSave: _react2.default.PropTypes.func.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = DocumentForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJpZCIsInZhbHVlIiwiYWNjZXNzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtYXRlcmlhbF9zZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiZG9jVGl0bGUiLCJkb2NDb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBNEU7QUFBQSxNQUF6RUMsWUFBeUUsUUFBekVBLFlBQXlFO0FBQUEsTUFBM0RDLGNBQTJELFFBQTNEQSxjQUEyRDtBQUFBLE1BQTNDQyxNQUEyQyxRQUEzQ0EsTUFBMkM7QUFBQSxNQUFuQ0Msa0JBQW1DLFFBQW5DQSxrQkFBbUM7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQy9GLE1BQUlDLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUFqQjtBQUNBLE1BQU1DLFVBQVVELFdBQVdFLEdBQVgsQ0FBZSxrQkFBVTtBQUN2QyxRQUFJQyxRQUFRLENBQVo7QUFDQSxXQUFPO0FBQ0xDLFVBQUlELEtBREM7QUFFTEUsYUFBT0M7QUFGRixLQUFQO0FBSUFIO0FBQ0QsR0FQZSxDQUFoQjtBQVFBSSxJQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsTUFBRSxRQUFGLEVBQVlHLGVBQVo7QUFDRCxHQUZEO0FBR0E7QUFDQTtBQUNBQyxVQUFRQyxHQUFSLENBQVlkLGtCQUFaO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBTSxVQUFVRCxNQUFoQixFQUF3QixXQUFVLFNBQWxDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UscUJBQVcsTUFEYjtBQUVFLGlCQUFPLE9BRlQ7QUFHRSxjQUFJLFVBSE47QUFJRSxnQkFBTSxVQUpSO0FBS0UsdUJBQWFFLFFBTGY7QUFNRSxtQkFBU0osYUFBYWtCLFFBTnhCO0FBT0UsdUJBQWEsT0FQZjtBQURGLE9BREY7QUFXRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxnQkFBTSxRQURSO0FBRUUsY0FBSSxRQUZOO0FBR0UsaUJBQU8sUUFIVDtBQUlFLHVCQUFhZCxRQUpmO0FBS0UsMEJBQWdCSCxjQUxsQjtBQU1FLHFCQUFXSztBQU5iO0FBREY7QUFYRixLQURGO0FBd0JFO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUNFLHdCQUFjTixhQUFhbUIsVUFEN0I7QUFFRSxjQUFJLFdBRk47QUFHRSw4QkFBb0JoQjtBQUh0QjtBQURGO0FBREYsS0F4QkY7QUFpQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQTtBQURGO0FBREY7QUFqQ0YsR0FERjtBQXlDRCxDQXpERDs7QUEyREFKLGFBQWFxQixTQUFiLEdBQXlCO0FBQ3ZCcEIsZ0JBQWMsZ0JBQU1xQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2QnJCLFVBQVEsZ0JBQU1tQixTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQsVUFGTjtBQUd2Qm5CLFlBQVUsZ0JBQU1pQixTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7QUFIUixDQUF6Qjs7a0JBTWV4QixZIiwiZmlsZSI6IjAuYmI4YmFjMWRiOWVhNDlmNjAwNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCBUaW55TWNlRWRpdG9yIGZyb20gJy4vVGlueU1jZUVkaXRvcic7XG5cbmNvbnN0IERvY3VtZW50Rm9ybSA9ICh7IGRvY3VtZW50RGF0YSwgc2VsZWN0ZWRPcHRpb24sIG9uU2F2ZSwgaGFuZGxlRWRpdG9yQ2hhbmdlLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGxldCBhY2Nlc3NUeXBlID0gWydQdWJsaWMnLCAnUHJpdmF0ZSddO1xuICBjb25zdCBvcHRpb25zID0gYWNjZXNzVHlwZS5tYXAoYWNjZXNzID0+IHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpbmRleCxcbiAgICAgIHZhbHVlOiBhY2Nlc3NcbiAgICB9XG4gICAgaW5kZXgrK1xuICB9KVxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnc2VsZWN0JykubWF0ZXJpYWxfc2VsZWN0KCk7XG4gIH0pO1xuICAvLyB0aW55bWNlLmluaXQoe3NlbGVjdG9yOid0ZXh0YXJlYSd9KTtcbiAgLy8gVGlueU1jZUVkaXRvci5hY3RpdmVFZGl0b3Iuc2V0Q29udGVudCgnY3VzdG9tJylcbiAgY29uc29sZS5sb2coaGFuZGxlRWRpdG9yQ2hhbmdlKVxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblNhdmV9IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgPFNpbmdsZUlucHV0XG4gICAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgIHRpdGxlPXsnVGl0bGUnfVxuICAgICAgICAgICAgaWQ9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgICAgY29udGVudD17ZG9jdW1lbnREYXRhLmRvY1RpdGxlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydUaXRsZSd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG5hbWU9eydhY2Nlc3MnfVxuICAgICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgICAgdGl0bGU9eydBY2Nlc3MnfVxuICAgICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgZG9jQWNjZXNzPXtvcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgIDxUaW55TWNlRWRpdG9yXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RvY3VtZW50RGF0YS5kb2NDb250ZW50fVxuICAgICAgICAgICAgaWQ9eydjcmVhdGVEb2MnfVxuICAgICAgICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRGb3JtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=