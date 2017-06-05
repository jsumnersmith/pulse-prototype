'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _eventCard = require('./eventCard.react');

var _eventCard2 = _interopRequireDefault(_eventCard);

var _searchWithFilters = require('../searchWithFilters.react');

var _colors = require('../colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */

var EventList = function (_Component) {
  _inherits(EventList, _Component);

  function EventList(props) {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));

    _this.onSearch = _this.onSearch.bind(_this);
    _this.filterEvent = _this.filterEvent.bind(_this);
    _this.onDayClick = _this.onDayClick.bind(_this);
    _this.state = {
      searchQuery: '',
      selectedDay: null
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'onDayClick',
    value: function onDayClick(day, _ref) {
      var selected = _ref.selected;

      this.setState({
        selectedDay: selected ? undefined : day
      });
    }
  }, {
    key: 'onSearch',
    value: function onSearch(e) {
      var value = e.target.value;
      this.setState({
        searchQuery: value
      });
    }
  }, {
    key: 'getEventsByDate',
    value: function getEventsByDate(events) {
      var _this2 = this;

      return (0, _lodash2.default)(events).filter(function (eventItem) {
        return _this2.filterEvent(eventItem);
      }).groupBy('date').toPairs().value();
    }
  }, {
    key: 'filterEvent',
    value: function filterEvent(eventItem) {
      if (this.state.selectedDay && !_reactDayPicker.DateUtils.isSameDay(this.state.selectedDay, new Date(eventItem.date))) {
        return false;
      } else if (this.state.searchQuery) {
        return new RegExp(this.state.searchQuery, 'ig').test(JSON.stringify(eventItem));
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var eventsByDay = this.getEventsByDate(this.props.events);
      var colorsArr = this.props.colors || (0, _colors2.default)(5);
      var urlPrefix = this.props.urlPrefix || '/events/';
      var isAdmin = this.props.isAdmin;

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(
            'h5',
            { className: 'event-list-title', style: { background: "#1FAF84" } },
            React.createElement('i', { className: 'fa fa-calendar circle-icon--medium green' }),
            ' ',
            React.createElement(
              'strong',
              null,
              'Search Events'
            )
          ),
          React.createElement(
            'div',
            { className: 'block flat' },
            React.createElement(
              'div',
              { className: 'content' },
              React.createElement(
                'div',
                { className: 'row', style: { marginTop: 0 } },
                React.createElement(
                  'div',
                  { className: 'col-md-10' },
                  React.createElement(_searchWithFilters.SearchInput, { onChange: this.onSearch })
                ),
                React.createElement(
                  'div',
                  { className: 'col-md-2' },
                  React.createElement(
                    'div',
                    { className: 'text-center' },
                    React.createElement(
                      'a',
                      { className: 'btn btn-default btn-block', 'data-toggle': 'collapse', 'data-target': '#filtersDropdown' },
                      'Advanced ',
                      React.createElement('i', { className: 'fa fa-caret-down' })
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'col-md-12', style: { position: 'relative', marginTop: 10 } },
                  React.createElement(
                    'div',
                    { className: 'collapse', style: { position: 'relative' }, id: 'filtersDropdown' },
                    React.createElement(
                      'div',
                      { className: 'col-md-8' },
                      'Filters'
                    ),
                    React.createElement(
                      'div',
                      { className: 'col-md-4' },
                      React.createElement(_reactDayPicker2.default, {
                        onDayClick: this.onDayClick,
                        selectedDays: [this.state.selectedDay]
                      })
                    )
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-12' },
          _lodash2.default.map(eventsByDay, function (_ref2, index) {
            var _ref3 = _slicedToArray(_ref2, 2),
                date = _ref3[0],
                eventsForDay = _ref3[1];

            return React.createElement(DayOfEvents, {
              isAdmin: isAdmin,
              key: index,
              date: date,
              events: eventsForDay,
              color: colorsArr[index % 5],
              urlPrefix: urlPrefix
            });
          })
        )
      );
    }
  }]);

  return EventList;
}(_react.Component);

var stubIsAttending = function stubIsAttending(id) {
  return id === 1;
};

var DayOfEvents = function (_Component2) {
  _inherits(DayOfEvents, _Component2);

  function DayOfEvents() {
    _classCallCheck(this, DayOfEvents);

    return _possibleConstructorReturn(this, (DayOfEvents.__proto__ || Object.getPrototypeOf(DayOfEvents)).apply(this, arguments));
  }

  _createClass(DayOfEvents, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          events = _props.events,
          color = _props.color,
          urlPrefix = _props.urlPrefix,
          isAdmin = _props.isAdmin;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { style: { marginTop: 20, marginBottom: 0, borderBottom: '3px solid ' + color, paddingBottom: 5 } },
          React.createElement(
            'strong',
            null,
            (0, _moment2.default)(date).format('dddd MMMM Do, YYYY')
          )
        ),
        events.map(function (sampleEvent) {
          return React.createElement(_eventCard2.default, {
            isList: true,
            isAdmin: isAdmin,
            showAction: true,
            sampleEvent: sampleEvent,
            actionLink: urlPrefix + 'event.html#' + sampleEvent.id,
            actionTitle: 'See Details',
            eventLink: urlPrefix + 'event.html#' + sampleEvent.id,
            isAttending: stubIsAttending(sampleEvent.id)
          });
        })
      );
    }
  }]);

  return DayOfEvents;
}(_react.Component);

exports.default = EventList;