'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var GroupingsListTable = _react2.default.createClass({
  displayName: 'GroupingsListTable',
  renderColumn: function renderColumn(list, index) {
    var sortedItems = _.orderBy(list.listItems, ['score', 'name'], ['desc', 'asc']);
    return _react2.default.createElement(
      'table',
      { className: 'no-border list-table-column', key: index },
      _react2.default.createElement(
        'tbody',
        { className: 'no-border-x no-border-y' },
        sortedItems.map(function (listItem, i) {
          return _react2.default.createElement(
            'tr',
            { className: 'list-table-name-row', key: String(index) + String(i) },
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('div', { className: 'list-table-score', style: listItem.iconStyles }),
              _react2.default.createElement(
                'div',
                { className: 'list-table-teacher' },
                listItem.teacher
              )
            )
          );
        })
      )
    );
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'list-table-wrapper' },
      _react2.default.createElement(
        'table',
        {
          className: 'list-table no-border table-responsive'
          // eslint-disable-next-line react/no-string-refs
          , ref: 'table'
        },
        _react2.default.createElement(
          'thead',
          {
            className: 'no-border'
            // eslint-disable-next-line react/no-string-refs
            , ref: 'heading'
          },
          _react2.default.createElement(
            'tr',
            { className: 'list-table-header' },
            this.props.lists.map(function (list) {
              return _react2.default.createElement(
                'th',
                { width: this.props.evenColumns ? 100 / this.props.lists.length + '%' : '' },
                _react2.default.createElement(
                  'div',
                  { className: 'list-table-header-cell' },
                  list.simpleTitle ? _react2.default.createElement('span', null) : _react2.default.createElement(
                    'div',
                    { className: 'meta list-table-header-cell-meta' },
                    _react2.default.createElement(
                      'span',
                      null,
                      list.listItems.length
                    ),
                    _react2.default.createElement(
                      'span',
                      { style: { color: '#bbb' } },
                      this.props.genericQuestionText ? 'selected' : 'interested in'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    list.title
                  )
                )
              );
            }, this)
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            { className: 'list-table-content' },
            this.props.lists.map(function (list, index) {
              return _react2.default.createElement(
                'td',
                { className: 'list-table-content-column' },
                _react2.default.createElement(
                  'div',
                  { className: 'list-table-column-wrapper constrained', 'data-column-wrapper': true },
                  this.renderColumn(list, index)
                )
              );
            }, this)
          )
        )
      )
    );
  }
});

module.exports = GroupingsListTable;