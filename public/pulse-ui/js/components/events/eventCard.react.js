'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickCard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _textEllipsis = require('text-ellipsis');

var _textEllipsis2 = _interopRequireDefault(_textEllipsis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-multi-comp */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */

var EventCard = function (_Component) {
  _inherits(EventCard, _Component);

  function EventCard() {
    _classCallCheck(this, EventCard);

    return _possibleConstructorReturn(this, (EventCard.__proto__ || Object.getPrototypeOf(EventCard)).apply(this, arguments));
  }

  _createClass(EventCard, [{
    key: 'getAttendance',
    value: function getAttendance() {
      return _lodash2.default.filter(this.props.sampleEvent.attendees, function (attendee) {
        return attendee.confirmed;
      }).length || false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          sampleEvent = _props.sampleEvent,
          showAction = _props.showAction,
          actionLink = _props.actionLink,
          actionTitle = _props.actionTitle,
          isAttending = _props.isAttending,
          isAdmin = _props.isAdmin,
          isList = _props.isList;

      return React.createElement(
        'div',
        { className: 'event-card' },
        React.createElement(
          'a',
          { href: this.props.eventLink || '#' },
          React.createElement(
            'div',
            { className: 'event-card-date' },
            React.createElement(
              'div',
              { className: 'event-card-date-month' },
              (0, _moment2.default)(sampleEvent.date).format('MMM')
            ),
            React.createElement(
              'div',
              { className: 'event-card-date-day' },
              (0, _moment2.default)(sampleEvent.date).format('DD')
            ),
            React.createElement(
              'div',
              { className: 'event-card-date-year' },
              (0, _moment2.default)(sampleEvent.date).format('YYYY')
            )
          ),
          React.createElement(
            'div',
            { className: 'event-card-header' },
            React.createElement(
              'h4',
              { className: 'event-card-title' },
              React.createElement(
                'strong',
                null,
                sampleEvent.name
              )
            ),
            React.createElement(
              'h5',
              { className: 'event-card-time' },
              React.createElement(
                'strong',
                null,
                (0, _moment2.default)(sampleEvent.date).format('MMMM Do, YYYY'),
                ' ',
                sampleEvent.startTime,
                ' - ',
                sampleEvent.endTime
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'row event-card-content' },
            React.createElement(
              'div',
              { className: 'col-md-8' },
              React.createElement(
                'div',
                { className: 'col-md-12' },
                sampleEvent.description ? React.createElement(
                  'p',
                  { className: 'event-card-description' },
                  sampleEvent.description
                ) : null
              ),
              React.createElement(
                'h6',
                { style: { marginTop: 0 }, className: 'col-md-4' },
                React.createElement('i', { className: 'fa fa-map-marker circle-icon--medium' }),
                ' ',
                React.createElement(
                  'strong',
                  null,
                  sampleEvent.location
                )
              ),
              React.createElement(
                'h6',
                { style: { marginTop: 0 }, className: 'col-md-4' },
                React.createElement('i', { className: 'fa fa-user circle-icon--medium' }),
                ' ',
                React.createElement(
                  'strong',
                  null,
                  sampleEvent.leaders
                )
              ),
              React.createElement(
                'h6',
                { style: { marginTop: 0 }, className: 'col-md-4' },
                React.createElement('i', { className: 'fa fa-check circle-icon--medium' }),
                ' ',
                React.createElement(
                  'strong',
                  null,
                  this.getAttendance(),
                  '/',
                  sampleEvent.attendees.length
                ),
                ' Attended'
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md-4' },
              showAction ? isAdmin ? React.createElement(AdminControls, null) : React.createElement(TeacherControls, { isList: isList, isAttending: isAttending, actionLink: actionLink, actionTitle: actionTitle }) : null
            )
          )
        )
      );
    }
  }]);

  return EventCard;
}(_react.Component);

var AdminControls = function (_Component2) {
  _inherits(AdminControls, _Component2);

  function AdminControls(props) {
    _classCallCheck(this, AdminControls);

    var _this2 = _possibleConstructorReturn(this, (AdminControls.__proto__ || Object.getPrototypeOf(AdminControls)).call(this, props));

    _this2.state = {
      showCode: false
    };
    return _this2;
  }

  _createClass(AdminControls, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({ showCode: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'event-admin-control text-center' },
        React.createElement(
          'a',
          { href: '/events/edit.html', className: 'btn btn-primary btn-block', style: { marginLeft: 0 } },
          React.createElement('i', { className: 'fa fa-pencil' }),
          ' Edit Event'
        ),
        React.createElement(
          'a',
          { className: 'btn btn-default btn-block', style: { marginLeft: 0, marginTop: 10, display: !this.state.showCode ? 'block' : 'none' }, onClick: function onClick() {
              return _this3.onClick();
            } },
          'Generate Attendance Code'
        ),
        React.createElement(
          'div',
          { className: 'event-attendance-code', style: { marginTop: 10, display: this.state.showCode ? 'block' : 'none' } },
          'X5fH8Gn'
        )
      );
    }
  }]);

  return AdminControls;
}(_react.Component);

var TeacherControls = function TeacherControls(_ref) {
  var isAttending = _ref.isAttending,
      isList = _ref.isList,
      actionLink = _ref.actionLink,
      actionTitle = _ref.actionTitle;
  return React.createElement(
    'div',
    { className: 'event-teacher-control' },
    isAttending ? React.createElement(
      'div',
      null,
      isList ? React.createElement(
        'a',
        { href: actionLink, className: 'btn btn-primary' },
        actionTitle
      ) : React.createElement(
        'div',
        { style: { marginBottom: 10 } },
        React.createElement(
          'label',
          null,
          'Confirm Attendance'
        ),
        React.createElement('input', { className: 'form-control', placeholder: 'Enter code to confirm your attendance.' })
      ),
      React.createElement(
        'h4',
        { className: 'green' },
        React.createElement(
          'strong',
          null,
          React.createElement('i', { className: 'fa fa-check' }),
          ' ',
          "You're Attending"
        )
      )
    ) : React.createElement(
      'a',
      { href: actionLink, className: 'btn btn-primary' },
      actionTitle
    )
  );
};

var QuickCard = exports.QuickCard = function QuickCard(_ref2) {
  var sampleEvent = _ref2.sampleEvent,
      isAttending = _ref2.isAttending,
      _ref2$showAction = _ref2.showAction,
      showAction = _ref2$showAction === undefined ? false : _ref2$showAction,
      _ref2$actionLink = _ref2.actionLink,
      actionLink = _ref2$actionLink === undefined ? '#actionLink' : _ref2$actionLink,
      _ref2$actionTitle = _ref2.actionTitle,
      actionTitle = _ref2$actionTitle === undefined ? '' : _ref2$actionTitle,
      _ref2$eventLink = _ref2.eventLink,
      eventLink = _ref2$eventLink === undefined ? '#' : _ref2$eventLink;
  return React.createElement(
    'div',
    { className: 'event-card' },
    React.createElement(
      'a',
      { href: eventLink },
      React.createElement(
        'div',
        { className: 'event-card-header ' + (showAction ? 'event-card-header--narrow' : '') },
        React.createElement(
          'h5',
          { className: 'event-card-time' },
          React.createElement(
            'strong',
            null,
            (0, _moment2.default)(sampleEvent.date).format('MMMM Do, YYYY'),
            ' ',
            sampleEvent.startTime,
            ' - ',
            sampleEvent.endTime
          )
        ),
        React.createElement(
          'h4',
          { className: 'event-card-title' },
          React.createElement(
            'strong',
            null,
            sampleEvent.name
          )
        )
      ),
      showAction ? React.createElement(
        'div',
        { className: 'event-card-actions' },
        ' ',
        isAttending ? React.createElement(
          'h5',
          { className: 'meta green', style: { marginBottom: 0 } },
          React.createElement('i', { className: 'fa fa-check' }),
          "You're Attending"
        ) : React.createElement(
          'a',
          { href: actionLink, className: 'btn btn-primary btn-block', style: { display: 'inline-block', width: 160 } },
          actionTitle
        ),
        ' '
      ) : null,
      sampleEvent.description ? React.createElement(
        'p',
        null,
        (0, _textEllipsis2.default)(sampleEvent.description, 200)
      ) : null
    )
  );
};

exports.default = EventCard;