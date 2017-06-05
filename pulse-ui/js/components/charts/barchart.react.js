'use strict';

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var React = require('react');
var Bar = require('./bar.react.js');
var BarAverage = require('./baraverage.react.js');
var _ = require('lodash');

// API
// ~~~~~~~~~~~~~
// The Data structure the bar chart is looking for is as follows:
// - Object containing
//   - (INTEGER) Total respondents (to create range)
//   - (ARRAY) Array of response objects ({score; 0, total; 10});
//   - (ID) Id of related rubric (to pull in for hovers.)

// Sample Data object:

var BarChart = React.createClass({
  displayName: 'BarChart',
  componentDidMount: function componentDidMount() {},
  render: function render() {
    var _props = this.props,
        data = _props.data,
        max = _props.max,
        min = _props.min;

    var histogram = _.groupBy(data, Math.floor);
    var avg = _.mean(data);
    var range = _.rangeRight(min, max + 1);
    var maxTotal = _.max(_.map(_.values(_.pick(histogram, range)), function (x) {
      return x.length;
    }));

    return React.createElement(
      'div',
      { className: 'cl-card-chart' },
      range.map(function (score) {
        var respondentsForScore = histogram[String(score)] || [];
        var width = respondentsForScore.length / maxTotal * 100;

        return React.createElement(Bar, { colorClass: score + '-' + max, key: score, width: width, total: respondentsForScore.length });
      }),
      React.createElement(BarAverage, { average: avg, max: range[0] })
    );
  }
});

module.exports = BarChart;