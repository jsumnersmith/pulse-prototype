'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactDayPicker = require('react-day-picker');

var _search = require('../search.react');

var _search2 = _interopRequireDefault(_search);

var _eventCard = require('./eventCard.react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */

var filterSearch = function filterSearch(query, events) {
  return _lodash2.default.filter(events, function (eventItem) {
    if (new Date(query) && _reactDayPicker.DateUtils.isSameDay(new Date(query), new Date(eventItem.date))) {
      return true;
    }
    return new RegExp(query, 'ig').test(JSON.stringify(eventItem));
  });
};

var isAttending = function isAttending(eventItem) {
  return _lodash2.default.includes(_lodash2.default.map(eventItem.attendees, 'id', 1));
};

var renderResult = function renderResult(eventItem) {
  return React.createElement(_eventCard.QuickCard, {
    sampleEvent: eventItem,
    isAttending: isAttending(eventItem),
    showAction: false,
    eventLink: '/events/event.html#' + eventItem.id
  });
};

var EventGlobalSearch = function (_Component) {
  _inherits(EventGlobalSearch, _Component);

  function EventGlobalSearch() {
    _classCallCheck(this, EventGlobalSearch);

    return _possibleConstructorReturn(this, (EventGlobalSearch.__proto__ || Object.getPrototypeOf(EventGlobalSearch)).apply(this, arguments));
  }

  _createClass(EventGlobalSearch, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_search2.default, {
          filterMethod: filterSearch,
          items: this.props.events,
          renderResultMethod: renderResult,
          placeholder: 'Search for any event'
        })
      );
    }
  }]);

  return EventGlobalSearch;
}(_react.Component);

exports.default = EventGlobalSearch;