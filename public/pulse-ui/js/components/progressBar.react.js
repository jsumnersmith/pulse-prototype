'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = _react2.default.createClass({
  displayName: 'ProgressBar',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'progress big' },
      _react2.default.createElement(
        'div',
        { className: 'progress-bar progress-bar-success ' + (this.props.width === '0%' ? 'progress-bar-empty' : ''), style: { width: this.props.width } },
        this.props.width
      )
    );
  }
}); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

module.exports = ProgressBar;