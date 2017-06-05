'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sampleSubmittedEvents = require('./sampleSubmittedEvents.js');

var _sampleSubmittedEvents2 = _interopRequireDefault(_sampleSubmittedEvents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApprovalTable = function (_React$Component) {
  _inherits(ApprovalTable, _React$Component);

  function ApprovalTable() {
    _classCallCheck(this, ApprovalTable);

    return _possibleConstructorReturn(this, (ApprovalTable.__proto__ || Object.getPrototypeOf(ApprovalTable)).apply(this, arguments));
  }

  _createClass(ApprovalTable, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'table',
          null,
          React.createElement(
            'thead',
            { className: 'no-border' },
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                React.createElement(
                  'strong',
                  null,
                  'Date Submitted'
                )
              ),
              React.createElement(
                'th',
                null,
                React.createElement(
                  'strong',
                  null,
                  'Submitted By'
                )
              ),
              React.createElement(
                'th',
                null,
                React.createElement(
                  'strong',
                  null,
                  'Event Title'
                )
              ),
              React.createElement(
                'th',
                { className: 'text-center' },
                React.createElement(
                  'strong',
                  null,
                  'Action'
                )
              )
            )
          ),
          React.createElement(
            'tbody',
            { className: 'no-border-y' },
            _sampleSubmittedEvents2.default.map(function (submittedEvent) {
              return React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  (0, _moment2.default)(submittedEvent.date).format('MMMM Do, YYYY')
                ),
                React.createElement(
                  'td',
                  null,
                  submittedEvent.attendees[0].name
                ),
                React.createElement(
                  'td',
                  null,
                  submittedEvent.name
                ),
                React.createElement(
                  'td',
                  { className: 'text-center' },
                  React.createElement(
                    'a',
                    { className: 'btn btn-trans btn-primary btn-sm' },
                    React.createElement('i', { className: 'fa fa-info' }),
                    ' See Details'
                  ),
                  React.createElement(
                    'a',
                    { className: 'btn btn-trans btn-success btn-sm' },
                    React.createElement('i', { className: 'fa fa-check' }),
                    ' Approve'
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return ApprovalTable;
}(React.Component);

exports.default = ApprovalTable;