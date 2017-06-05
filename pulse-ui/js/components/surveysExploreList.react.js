'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = require('moment'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var SurveysList = _react2.default.createClass({
  displayName: 'SurveysList',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'surveys-list' },
      this.props.surveys.map(function (survey) {
        return _react2.default.createElement(SurveysListItem, survey);
      })
    );
  }
});

var SurveysListItem = _react2.default.createClass({
  displayName: 'SurveysListItem',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'surveys-list-item' },
      _react2.default.createElement(
        'div',
        { className: 'surveys-list-item-icon' },
        _react2.default.createElement('div', { className: 'surveys-list-item-icon-svg' }),
        !this.props.isOpen ? _react2.default.createElement(
          'span',
          { className: 'label label-danger' },
          'Closed'
        ) : ''
      ),
      _react2.default.createElement(
        'div',
        { className: 'surveys-list-item-content' },
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-title' },
          this.props.name || ''
        ),
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-date' },
          'Opened: ',
          moment(this.props.created).format('MM/DD/YY') || ''
        ),
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-date' },
          'Last Activity: ',
          moment(this.props.lastActivity).format('MM/DD/YY') || ''
        ),
        _react2.default.createElement(
          'p',
          { className: 'surveys-list-item-response-totals meta orange' },
          this.props.totalRepsonses || '',
          ' Response',
          this.props.totalRepsonses !== 1 ? 's' : ''
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'surveys-list-item-button' },
        _react2.default.createElement(
          'a',
          { href: this.props.url, className: 'btn btn-default' },
          'Explore Survey Form'
        ),
        this.props.formUrl && this.props.formUrl.length ? _react2.default.createElement(
          'div',
          { style: { fontSize: 12, textAlign: 'center', marginTop: 10 } },
          _react2.default.createElement(
            'a',
            { href: this.props.formUrl, target: 'blank', style: { color: '#888' } },
            'View Form'
          )
        ) : ''
      )
    );
  }
});

module.exports = SurveysList;