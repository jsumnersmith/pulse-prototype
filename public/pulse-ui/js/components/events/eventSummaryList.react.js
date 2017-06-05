'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _sampleEvents = require('./sampleEvents');

var _sampleEvents2 = _interopRequireDefault(_sampleEvents);

var _eventCard = require('./eventCard.react');

var _colors = require('../colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */

var EventSummaryList = function (_Component) {
  _inherits(EventSummaryList, _Component);

  function EventSummaryList() {
    _classCallCheck(this, EventSummaryList);

    return _possibleConstructorReturn(this, (EventSummaryList.__proto__ || Object.getPrototypeOf(EventSummaryList)).apply(this, arguments));
  }

  _createClass(EventSummaryList, [{
    key: 'isAttending',
    value: function isAttending(attendees) {
      if (!this.props.teacher) {
        return false;
      }
      return _lodash2.default.includes(_lodash2.default.map(attendees, 'id'), this.props.teacher.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var color = (0, _colors2.default)(5)[this.props.index || 0];
      var events = this.props.events || _sampleEvents2.default;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { borderBottom: '3px solid' + color } },
          events.map(function (sampleEvent) {
            return React.createElement(_eventCard.QuickCard, {
              sampleEvent: sampleEvent,
              isAttending: _this2.isAttending(sampleEvent.attendees),
              showAction: _this2.props.showAction || false,
              actionLink: '#register',
              actionTitle: 'Sign Up',
              eventLink: '/events/teacher/event.html#' + sampleEvent.id
            });
          })
        ),
        React.createElement(
          'a',
          { className: 'btn btn-block btn-default', href: this.props.url, style: { marginTop: 10, marginLeft: 0 } },
          this.props.linkText
        )
      );
    }
  }]);

  return EventSummaryList;
}(_react.Component);

exports.default = EventSummaryList;