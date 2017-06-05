"use strict";

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var React = require('react');

var Bar = React.createClass({
  displayName: "Bar",
  render: function render() {
    var barStyle = {
      width: this.props.width + "%"
    };
    return React.createElement(
      "div",
      { className: "cl-chart-bar-wrapper" },
      React.createElement(
        "div",
        { className: "cl-chart-bar cl-bg-color-" + this.props.colorClass, style: barStyle },
        React.createElement(
          "span",
          { className: "cl-chart-bar-key cl-color-" + this.props.colorClass },
          this.props.total
        )
      )
    );
  }
});

module.exports = Bar;