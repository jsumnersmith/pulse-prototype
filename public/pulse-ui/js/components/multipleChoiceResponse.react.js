'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListTable = require('../components/listTable.react.js'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var MultipleChoiceResponse = _react2.default.createClass({
  displayName: 'MultipleChoiceResponse',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'multiple-choice-response' },
      _react2.default.createElement(ListTable, this.props)
    );
  }
});

module.exports = MultipleChoiceResponse;