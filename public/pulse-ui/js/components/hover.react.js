"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hover = _react2.default.createClass({
  displayName: "Hover",
  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },
  setHover: function setHover(active) {
    this.setState({ active: active });
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      {
        className: "hover-wrapper"
        // eslint-disable-next-line react/no-string-refs
        , ref: "wrapper"
      },
      this.state.active ? _react2.default.createElement(
        "div",
        {
          className: 'hover-content'
          // eslint-disable-next-line react/no-string-refs
          , ref: "content"
        },
        this.props.content
      ) : _react2.default.createElement("span", null),
      _react2.default.createElement(
        "span",
        {
          className: "hover-trigger"
          // eslint-disable-next-line react/jsx-no-bind
          , onMouseOut: this.setHover.bind(this, false)
          // eslint-disable-next-line react/jsx-no-bind
          , onMouseOver: this.setHover.bind(this, true)
        },
        this.props.children
      )
    );
  }
}); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

module.exports = Hover;