"use strict";

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var React = require('react');

var BarAverage = React.createClass({
  displayName: "BarAverage",
  render: function render() {
    var avg = this.props.average;
    var max = this.props.max;
    var avgStyle = { bottom: avg / max * 100 + "%" };

    return React.createElement(
      "div",
      { className: "cl-chart-bar-average", style: avgStyle },
      React.createElement("div", { className: "cl-chart-bar-average-line" }),
      React.createElement(
        "div",
        { className: "cl-chart-bar-average-amount" },
        React.createElement(
          "div",
          { className: "cl-chart-bar-average-amount--small" },
          "Average"
        ),
        React.createElement(
          "div",
          { className: "cl-chart-bar-average-amount--large" },
          avg.toFixed(2)
        )
      )
    );
  }
});

module.exports = BarAverage;