"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PercentPieChart = _react2.default.createClass({
  displayName: "PercentPieChart",
  getData: function getData() {
    var percentages = this.props.percentages;
    var colors = this.props.colors;

    if (!percentages) {
      percentages = [];
    }

    var data = {};
    data.datasets = [];
    if (percentages.length > 0) {
      data.datasets = [{
        data: percentages,
        backgroundColor: colors,
        borderWidth: colors.map(function () {
          return 2.5;
        })
      }];
    }
    return data;
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { style: { width: this.props.width, height: this.props.height } },
      _react2.default.createElement("canvas", {
        // eslint-disable-next-line react/no-string-refs
        ref: "chartCanvas",
        width: this.props.width,
        height: this.props.height
      })
    );
  }
}); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

module.exports = PercentPieChart;