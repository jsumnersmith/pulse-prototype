'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentCardGroup = require('../components/commentCardGroup.react.js');

var ActivityFeed = _react2.default.createClass({
  displayName: 'ActivityFeed',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'activity-feed' },
      this.props.activity.map(function (item) {
        return _react2.default.createElement(CommentCardGroup, { comments: [_extends({}, item)] });
      })
    );
  }
});

module.exports = ActivityFeed;