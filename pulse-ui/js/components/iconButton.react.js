'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButton = function IconButton(_ref) {
  var _ref$iconClass = _ref.iconClass,
      iconClass = _ref$iconClass === undefined ? '' : _ref$iconClass,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === undefined ? false : _ref$isActive,
      title = _ref.title,
      helpText = _ref.helpText;
  return _react2.default.createElement(
    'a',
    { className: 'widget-button widget-button--small ' + (isActive ? 'active' : ''), onClick: onClick },
    _react2.default.createElement('div', { className: 'circle-icon--small active-indicator meeting-goals fa fa-check' }),
    _react2.default.createElement(
      'div',
      { className: 'widget-button-icon' },
      _react2.default.createElement('div', { className: 'fa circle-icon ' + iconClass + ' ' + (isActive ? 'meeting-goals' : 'gray') })
    ),
    title ? _react2.default.createElement(
      'h4',
      null,
      title
    ) : null,
    helpText ? _react2.default.createElement(
      'p',
      { style: { fontSize: 11, lineHeight: '14px' } },
      _react2.default.createElement(
        'em',
        null,
        helpText
      )
    ) : null
  );
}; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

IconButton.propTypes = {
  iconClass: _react2.default.PropTypes.string.isRequired,
  onClick: _react2.default.PropTypes.func,
  isActive: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.string,
  helpText: _react2.default.PropTypes.string
};

exports.default = IconButton;