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

var _ = require('lodash');
var moment = require('moment');

var Timeline = _react2.default.createClass({
  displayName: 'Timeline',
  getInitialState: function getInitialState() {
    return {
      offset: 0
    };
  },
  getTimelineOffsetStyles: function getTimelineOffsetStyles(numberOfEvents, offset) {
    if (numberOfEvents <= 5) {
      return { marginLeft: 0 };
    }
    var leftValue = (numberOfEvents - 5 - offset) * 1.882 * -1;
    return { marginLeft: 'calc(' + leftValue + '% - 5px)' };
  },
  updateItemClasses: function updateItemClasses(items, startSlice, endSlice) {
    _.each(items, function (item) {
      item.extraClass = 'non-active'; // eslint-disable-line no-param-reassign
    });

    for (var i = startSlice; i < endSlice; i++) {
      // eslint-disable-line no-plusplus
      if (items[i]) {
        items[i].extraClass = 'active '; // eslint-disable-line no-param-reassign
      }
    }
    return items;
  },
  handleLeftClick: function handleLeftClick() {
    if (this.state.offset < this.props.timelineEvents.length - 5) {
      this.setState({ offset: this.state.offset + 1 });
    }
  },
  handleRightClick: function handleRightClick() {
    if (this.state.offset > 0) {
      this.setState({ offset: this.state.offset - 1 });
    }
  },
  render: function render() {
    var numberOfEvents = this.props.timelineEvents.length;
    var startSlice = numberOfEvents - this.state.offset - 5;
    var endSlice = numberOfEvents - this.state.offset;
    var timeLineStyles = this.getTimelineOffsetStyles(numberOfEvents, this.state.offset);
    var events = this.updateItemClasses(this.props.timelineEvents, startSlice, endSlice) || [];
    return _react2.default.createElement(
      'div',
      { className: 'timeline' },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { className: 'timeline-move-left ' + (this.state.offset < numberOfEvents - 5 ? '' : ' inactive'), onClick: this.handleLeftClick },
          _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
        ),
        _react2.default.createElement(
          'a',
          { className: 'timeline-move-right ' + (this.state.offset > 0 ? '' : ' inactive'), onClick: this.handleRightClick },
          _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
        )
      ),
      _react2.default.createElement('div', { className: 'timline-line' }),
      _react2.default.createElement(
        'div',
        { className: 'timeline-events' + (numberOfEvents <= 5 ? ' centered' : '') },
        _react2.default.createElement(
          'div',
          { className: 'timeline-events-inner', style: timeLineStyles },
          _.map(events, function (timelineEvent) {
            return _react2.default.createElement(TimelineEvent, _extends({ key: _.uniqueId() }, timelineEvent));
          }, this)
        )
      )
    );
  }
});

var TimelineEvent = _react2.default.createClass({
  displayName: 'TimelineEvent',
  render: function render() {
    var date = moment(this.props.date).format('D MMM YY');
    return _react2.default.createElement(
      'div',
      { className: 'timeline-event text-center ' + this.props.extraClass },
      _react2.default.createElement(
        'div',
        { className: 'timeline-event-date meta' },
        date
      ),
      _react2.default.createElement(
        'div',
        { className: 'circle-icon' },
        _react2.default.createElement('i', { className: 'fa fa-' + this.props.iconClass })
      ),
      _react2.default.createElement(
        'div',
        { className: 'timeline-event-content' },
        _react2.default.createElement(
          'h4',
          { className: 'timeline-event-content-title' },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'timeline-event-content-inner' },
          this.props.content
        )
      )
    );
  }
});

module.exports = Timeline;