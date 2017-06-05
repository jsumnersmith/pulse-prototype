'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var colors = require('./colors.js');

var PlotlyChart = require('react-plotlyjs');

var ComplexBarChart = _react2.default.createClass({
  displayName: 'ComplexBarChart',
  getInitialState: function getInitialState() {
    return {
      width: 0,
      height: 0
    };
  },
  componentDidMount: function componentDidMount() {
    this.setLegendStyling();
    this.setInitialWidthAndHeight(this.props);

    // Because there's no initial data...
    // this.removeTargetLine();
    window.addEventListener('resize', this.setWidthAndHeight.bind(this, this.props));
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setWidthAndHeight(nextProps);
  },
  componentDidUpdate: function componentDidUpdate() {
    this.setLegendStyling();
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('resize', this.setWidthAndHeight);
  },
  setLegendStyling: function setLegendStyling() {
    var svg = this.refs.plotlyWrapper.querySelectorAll('svg')[1]; // eslint-disable-line react/no-string-refs
    var legend = svg.querySelectorAll('.infolayer .legend')[0];
    if (legend) {
      var opacityAmount = legend.getBBox().width > 300 ? 0.4 : 1;
      $(legend).css({ opacity: opacityAmount });
    }
  },
  setInitialWidthAndHeight: function setInitialWidthAndHeight(props) {
    var wrapper = this.refs.plotlyWrapper; // eslint-disable-line react/no-string-refs
    var setWidthAndHeight = this.setWidthAndHeight;
    var timer = setInterval(function () {
      if (wrapper.offsetWidth > 0) {
        clearInterval(timer);
        return setWidthAndHeight(props);
      }
      return null;
    }, 50);
  },
  setWidthAndHeight: function setWidthAndHeight() {
    // this.insertTargetLine(props);

    var parent = this.refs.plotlyWrapper; // eslint-disable-line react/no-string-refs
    var svg = this.refs.plotlyWrapper.querySelectorAll('svg')[1]; // eslint-disable-line react/no-string-refs
    var legend = svg.querySelectorAll('.infolayer .legend')[0];
    var minHeight = legend ? legend.getBBox().height : 100;

    return this.setState({ width: parent.offsetWidth, height: minHeight });
  },
  getCumulativePercentage: function getCumulativePercentage(column, annotedIndex) {
    var slicedColumn = column.slice(0, annotedIndex + 1);
    return _.sum(slicedColumn);
  },


  // N.B. This annotation never worked out for the standard bar chart.
  getAnnotations: function getAnnotations(data) {
    if (!this.areAnnotationsNecessary(data)) {
      return [];
    }

    function calculateXOffsetForAnnotation(groupIndex, columnIndex, length) {
      // TODO: Find a better way to determine or set the gap b/w groups.
      var barWidth = 1 / (length + 1); // This assumes the gap is the width of a bar. Not always true . . .
      var startingPoint = -1 * (barWidth * (length / 2));
      var offset = startingPoint + barWidth * columnIndex + barWidth / 2;
      var xValue = groupIndex + offset;
      return xValue;
    }

    return _.flatten(_.map(data, function (obj, i) {
      return _.flatten(_.map(obj.y, function (val, xi) {
        return {
          x: calculateXOffsetForAnnotation(xi, i, data.length),
          y: val,
          text: val != null ? Number(val.toFixed(1)) : 'No Data',
          xanchor: 'center',
          yanchor: 'bottom',
          showarrow: false
        };
      }));
    }));
  },
  getStackedAnnotations: function getStackedAnnotations(data) {
    var getCumulativePercentage = this.getCumulativePercentage;
    var buildMappableDataStructure = this.buildMappableDataStructure;
    return _.filter(_.flatten(_.map(buildMappableDataStructure(data), function (column, columnIndex) {
      return _.flatten(_.map(column.y, function (annoted, annotedIndex) {
        return {
          text: _.round(annoted, 1).toString() + '%',
          x: columnIndex,
          y: getCumulativePercentage(column.y, annotedIndex) - annoted / 2,
          showarrow: false
        };
      }));
    })), function (item) {
      return item.text !== '0%';
    });
  },
  buildMappableDataStructure: function buildMappableDataStructure(data) {
    var uniqueXValues = _.uniq(_.flatten(_.map(data, 'x')));

    var uniqueXValuesAsObjects = _.map(uniqueXValues, function (val) {
      return { x: val, y: [] };
    });

    return uniqueXValuesAsObjects;
  },
  areAnnotationsNecessary: function areAnnotationsNecessary(data) {
    // At 16 unique x values (i.e. 4 bars in 4 groups),
    // we bail out b/c the chart is too crowded.
    var uniqueXValues = _.uniq(_.flatten(_.map(data, 'x')));
    return data.length * uniqueXValues.length < 17;
  },
  convertDataToPlotlyFormat: function convertDataToPlotlyFormat(data) {
    var props = this.props;
    if (_.isArray(data)) {
      return _.map(data, function (datum, i) {
        return _.extend(datum, {
          type: 'bar',
          marker: {
            color: props.percentage ? colors.rubric(datum.scale)[datum.scaleIndex] : colors(data.length)[i]
          }
        });
      });
    } else if (_.isObject(data)) {
      var dataArr = [];
      dataArr.push(_.extend(data, {
        type: 'bar',
        marker: {
          color: colors(data.x ? data.x.length : 0)
        }
      }));
      return dataArr;
    }
    return data;
  },
  removeTargetLine: function removeTargetLine() {
    var target = this.refs.plotlyWrapper.querySelectorAll('.target'); // eslint-disable-line react/no-string-refs
    if (target != null && target.length > 0) {
      _.each(target, function (node) {
        node.parentNode.removeChild(node);
      });
    }
  },
  insertTargetLine: function insertTargetLine(props) {
    var definedProps = void 0;
    this.removeTargetLine();
    if (props.percentage) {
      return;
    }
    if (!props || !props.targetValue) {
      definedProps = this.props;
    } else {
      definedProps = props;
    }

    var maxScaleValue = definedProps.maxScaleValue || 5;
    var svg = this.refs.plotlyWrapper.querySelectorAll('svg')[0]; // eslint-disable-line react/no-string-refs

    var chart = svg.querySelectorAll('.subplot rect')[0];
    var plot = svg.querySelectorAll('.subplot [clip-path]')[0];
    var hoverLayer = this.refs.plotlyWrapper.querySelectorAll('.hoverlayer')[0]; // eslint-disable-line react/no-string-refs

    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    var box = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    var valueForYPosition = chart.getBBox().height - chart.getBBox().height / maxScaleValue * definedProps.targetValue + 10;

    line.setAttribute('class', 'target');
    line.setAttribute('stroke', '#1FAF84');
    line.setAttribute('stroke-dasharray', '4, 4');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('x1', 0);
    line.setAttribute('x2', this.refs.plotlyWrapper.offsetWidth); // eslint-disable-line react/no-string-refs
    line.setAttribute('y1', valueForYPosition || 0);
    line.setAttribute('y2', valueForYPosition || 0);

    label.setAttribute('class', 'target');
    label.setAttribute('x', 36);
    label.setAttribute('y', valueForYPosition + 5 || 0);
    label.setAttribute('fill', '#1FAF84');
    label.textContent = 'Seeing Success';

    box.setAttribute('class', 'target');
    box.setAttribute('x', 30);
    box.setAttribute('y', valueForYPosition - 12.5 || 0);
    box.setAttribute('height', 25);
    box.setAttribute('width', 125);
    box.setAttribute('fill', '#fff');
    box.setAttribute('stroke', '#1FAF84');
    box.setAttribute('stroke-width', 3);

    hoverLayer.insertBefore(label, hoverLayer.lastChild);
    hoverLayer.insertBefore(box, hoverLayer.lastChild);
    plot.insertBefore(line, plot.firstChild);
  },
  shouldXAxisTicksRotate: function shouldXAxisTicksRotate() {
    var uniqueXValues = [];
    var maxAxisTitleWidth = 0;

    if (_.isArray(this.props.data)) {
      uniqueXValues = _.uniq(_.flatten(_.map(this.props.data, 'x')));
    } else {
      uniqueXValues = this.props.data.x || [];
    }

    _.each(uniqueXValues, function (val) {
      var valLengthInPixels = val.length * 8; // Assuming 7px as average character width;
      if (valLengthInPixels > maxAxisTitleWidth) {
        maxAxisTitleWidth = valLengthInPixels;
      }
    });

    return maxAxisTitleWidth > this.state.width / uniqueXValues.length;
  },
  render: function render() {
    var minHeight = this.props.data.length * 25;
    var marginBottom = this.shouldXAxisTicksRotate() ? 250 : 50;
    var layout = {
      annotations: this.props.percentage ? this.getStackedAnnotations(this.props.data) : [],
      showlegend: _.isArray(this.props.data),
      width: this.state.width,
      barmode: this.props.percentage ? 'stack' : '',
      height: (minHeight > 300 ? minHeight : 300) + marginBottom, // Add 200 to account for bottom margin.
      margin: {
        l: 20,
        r: 20,
        b: marginBottom,
        t: 20,
        pad: 0
      },
      font: {
        family: "'Open Sans', 'Museo Sans', 'Helvetica', 'serif'",
        size: 11,
        color: '#444'
      },
      legend: {
        font: {
          size: 13
        }
      },
      yaxis: {
        range: [0, this.props.percentage ? 100 : this.props.maxScaleValue]
      },
      xaxis: {
        type: 'category',
        tickangle: this.shouldXAxisTicksRotate() ? 45 : 0
      }
    };

    var config = {
      displayModeBar: false,
      staticPlot: true
    };

    return _react2.default.createElement(
      'div',
      {
        // eslint-disable-next-line react/no-string-refs
        ref: 'plotlyWrapper',
        className: 'complex-bar-chart'
      },
      _react2.default.createElement(PlotlyChart, { data: this.convertDataToPlotlyFormat(this.props.data), key: layout.annotations.length, layout: layout, config: config })
    );
  }
});

module.exports = ComplexBarChart;