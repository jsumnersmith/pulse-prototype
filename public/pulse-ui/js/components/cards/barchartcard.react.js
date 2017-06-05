'use strict';

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

// TODO: Add react and react-dom as NPM packages.
var React = require('react');
var BarChart = require('../charts/barchart.react.js');

var BarChartCard = React.createClass({
  displayName: 'BarChartCard',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'cl-card' },
      React.createElement(
        'h5',
        { className: 'cl-card-meta' },
        this.props.meta
      ),
      React.createElement(
        'h3',
        { className: 'cl-card-title' },
        this.props.title
      ),
      React.createElement(BarChart, { data: this.props.data, max: this.props.max, min: this.props.min }),
      React.createElement(
        'div',
        { className: 'cl-card-description' },
        this.props.description
      )
    );
  }
});

module.exports = BarChartCard;