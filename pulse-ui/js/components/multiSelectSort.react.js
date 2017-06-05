'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactSortableHoc = require('react-sortable-hoc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiSelectSort = function MultiSelectSort(_ref) {
  var _ref$differenceCallba = _ref.differenceCallback,
      differenceCallback = _ref$differenceCallba === undefined ? function (x) {
    return x;
  } : _ref$differenceCallba,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      _ref$onReorder = _ref.onReorder,
      onReorder = _ref$onReorder === undefined ? function () {} : _ref$onReorder,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === undefined ? function () {} : _ref$onSelect,
      _ref$onUnselect = _ref.onUnselect,
      onUnselect = _ref$onUnselect === undefined ? function () {} : _ref$onUnselect,
      _ref$renderSelectedOp = _ref.renderSelectedOption,
      renderSelectedOption = _ref$renderSelectedOp === undefined ? function () {} : _ref$renderSelectedOp,
      _ref$renderUnselected = _ref.renderUnselectedOption,
      renderUnselectedOption = _ref$renderUnselected === undefined ? function () {} : _ref$renderUnselected,
      _ref$selectedOptions = _ref.selectedOptions,
      selectedOptions = _ref$selectedOptions === undefined ? [] : _ref$selectedOptions,
      _ref$selectedHelpText = _ref.selectedHelpText,
      selectedHelpText = _ref$selectedHelpText === undefined ? 'Sort or remove the selected options below' : _ref$selectedHelpText,
      _ref$selectedTitle = _ref.selectedTitle,
      selectedTitle = _ref$selectedTitle === undefined ? '' : _ref$selectedTitle,
      _ref$unselectedHelpTe = _ref.unselectedHelpText,
      unselectedHelpText = _ref$unselectedHelpTe === undefined ? 'Select an option below to add it the list on the right' : _ref$unselectedHelpTe,
      _ref$unselectedTitle = _ref.unselectedTitle,
      unselectedTitle = _ref$unselectedTitle === undefined ? '' : _ref$unselectedTitle;

  var selectableOptions = _lodash2.default.differenceBy(options, selectedOptions, differenceCallback);
  var onSortEnd = function onSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;
    return onReorder((0, _reactSortableHoc.arrayMove)(selectedOptions, oldIndex, newIndex));
  };

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-6 multi-select-column' },
      _react2.default.createElement(
        'h5',
        null,
        unselectedTitle
      ),
      _react2.default.createElement(
        'div',
        { className: 'multi-select-column-content' },
        _react2.default.createElement(
          'p',
          { className: 'text-center' },
          _react2.default.createElement(
            'em',
            null,
            unselectedHelpText
          )
        ),
        _react2.default.createElement(OptionsList, {
          options: selectableOptions,
          renderOption: renderUnselectedOption,
          onSelect: onSelect
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-md-6 multi-select-column' },
      _react2.default.createElement(
        'h5',
        null,
        selectedTitle
      ),
      _react2.default.createElement(
        'div',
        { className: 'multi-select-column-content' },
        _react2.default.createElement(
          'p',
          { className: 'text-center' },
          _react2.default.createElement(
            'em',
            null,
            selectedHelpText
          )
        ),
        _react2.default.createElement(SortableSelectedList, {
          items: selectedOptions,
          renderOption: renderSelectedOption,
          onSortEnd: onSortEnd,
          onUnselect: onUnselect,
          useDragHandle: true
        })
      )
    )
  );
}; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

MultiSelectSort.propTypes = {
  onReorder: _react2.default.PropTypes.func,
  onSelect: _react2.default.PropTypes.func,
  onUnselect: _react2.default.PropTypes.func,
  options: _react2.default.PropTypes.array,
  renderSelectedOption: _react2.default.PropTypes.func.isRequired,
  renderUnselectedOption: _react2.default.PropTypes.func.isRequired,
  selectedOptions: _react2.default.PropTypes.array
};

var OptionsList = function OptionsList(_ref3) {
  var _ref3$options = _ref3.options,
      options = _ref3$options === undefined ? [] : _ref3$options,
      _ref3$onSelect = _ref3.onSelect,
      onSelect = _ref3$onSelect === undefined ? function () {} : _ref3$onSelect,
      _ref3$renderOption = _ref3.renderOption,
      renderOption = _ref3$renderOption === undefined ? function () {} : _ref3$renderOption;
  return _react2.default.createElement(
    'div',
    { className: 'multi-select-options' },
    options.map(function (option) {
      return _react2.default.createElement(
        'div',
        { className: 'multi-select-option', onClick: function onClick() {
            onSelect(option);
          } },
        renderOption(option)
      );
    })
  );
};

OptionsList.propTypes = {
  options: _react2.default.PropTypes.array,
  onSelect: _react2.default.PropTypes.func
};

var SortableSelectedList = (0, _reactSortableHoc.SortableContainer)(function (_ref4) {
  var items = _ref4.items,
      renderOption = _ref4.renderOption,
      onUnselect = _ref4.onUnselect;
  return _react2.default.createElement(
    'div',
    null,
    items.map(function (option, index) {
      return _react2.default.createElement(
        SortableSelectableOption
        // eslint-disable-next-line react/no-array-index-key
        ,
        { key: 'item-' + index,
          index: index,
          value: option
        },
        _react2.default.createElement(
          'div',
          { className: 'multi-select-selected' },
          _react2.default.createElement(
            'div',
            { className: 'multi-select-selected-drag' },
            _react2.default.createElement(
              DragHandle,
              null,
              _react2.default.createElement('i', { className: 'fa fa-grip  multi-select-drag-indicator' }),
              _react2.default.createElement(
                'div',
                { className: 'multi-select-selected-drag-content' },
                renderOption(option)
              )
            )
          ),
          _react2.default.createElement('i', {
            className: 'fa fa-times multi-select-unselect'
            // eslint-disable-next-line react/jsx-no-bind
            , onClick: onUnselect.bind(null, option)
          })
        )
      );
    })
  );
});

SortableSelectedList.propTypes = {
  options: _react2.default.PropTypes.array,
  onChange: _react2.default.PropTypes.func
};

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref5) {
  var children = _ref5.children;
  return _react2.default.createElement(
    'span',
    null,
    children
  );
});

DragHandle.propTypes = {
  children: _react2.default.PropTypes.element
};

var SortableSelectableOption = (0, _reactSortableHoc.SortableElement)(function (_ref6) {
  var children = _ref6.children;
  return _react2.default.createElement(
    'div',
    null,
    children
  );
});

// `value` is handled by the HOC
SortableSelectableOption.propTypes = {
  children: _react2.default.PropTypes.element
};

exports.default = MultiSelectSort;