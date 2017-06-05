'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var moment = require('moment');

var ListTable = require('./listTable.react.js');

var responseItem = _react2.default.createClass({
  displayName: 'responseItem',
  getCoveredTopicRows: function getCoveredTopicRows(goals) {
    if (!goals.length) {
      return [_react2.default.createElement(
        'span',
        { className: 'response-item-topics-row' },
        'No data available'
      )];
    }
    return _.map(goals, function (goal) {
      return _react2.default.createElement(
        'span',
        { className: 'response-item-topics-row' },
        _react2.default.createElement('div', { className: 'circle-icon--score ' + goal.scoreClass, style: goal.scoreStyle }),
        _react2.default.createElement(
          'div',
          { className: 'response-item-topics-text' },
          goal.name
        )
      );
    });
  },
  getQuestionRows: function getQuestionRows(questions) {
    if (!questions.length) {
      return [_react2.default.createElement(
        'span',
        { className: 'response-item-questions-row' },
        'No data available'
      )];
    }
    return _.map(questions, function (question) {
      return _react2.default.createElement(
        'span',
        { className: 'response-item-questions-row' },
        _react2.default.createElement('div', { className: 'circle-icon--small fa ' + question.iconClass }),
        _react2.default.createElement(
          'div',
          { className: 'response-item-questions-title' },
          question.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'response-item-questions-text' },
          question.text
        )
      );
    });
  },
  getRespondentOrReferentText: function getRespondentOrReferentText() {
    if (this.props.response.referentText) {
      return _react2.default.createElement(
        'span',
        null,
        ' ',
        _react2.default.createElement(
          'span',
          { className: 'response-item-title-light' },
          'about'
        ),
        ' ',
        this.props.response.referentText
      );
    } else if (this.props.response.respondentText) {
      return _react2.default.createElement(
        'span',
        null,
        ' ',
        _react2.default.createElement(
          'span',
          { className: 'response-item-title-light' },
          'by'
        ),
        ' ',
        this.props.response.respondentText
      );
    }
    return '';
  },
  render: function render() {
    var response = this.props.response;
    return _react2.default.createElement(
      'div',
      { className: 'response-item' },
      _react2.default.createElement(
        'div',
        { className: 'response-item-date-column' },
        _react2.default.createElement(
          'div',
          { className: 'response-item-date' },
          _react2.default.createElement(
            'div',
            { className: 'response-item-date-month' },
            moment(response.date).format('MMM')
          ),
          _react2.default.createElement(
            'div',
            { className: 'response-item-date-day' },
            moment(response.date).format('DD')
          ),
          _react2.default.createElement(
            'div',
            { className: 'response-item-date-year' },
            moment(response.date).format('YYYY')
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'response-item-content' },
        _react2.default.createElement(
          'div',
          { className: 'response-item-title' },
          _react2.default.createElement(
            'h4',
            { className: 'response-item-title-text' },
            response.title,
            ' ',
            this.getRespondentOrReferentText()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'response-item-actions' },
          _react2.default.createElement(
            'div',
            { className: 'btn-group' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-sm btn-primary' },
              this.props.renderResponseModal()
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-sm btn-default dropdown-toggle', 'data-toggle': 'dropdown' },
              'Reports ',
              _react2.default.createElement('span', { className: 'caret' })
            ),
            _react2.default.createElement(
              'ul',
              { className: 'dropdown-menu', role: 'menu' },
              response.reports.map(function (report) {
                return _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: report.url },
                    'View ',
                    report.name
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'response-item-topics' },
          _react2.default.createElement(ListTable, {
            title: 'Covered Topics',
            listItems: this.getCoveredTopicRows(response.goals)
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'response-item-questions' },
          _react2.default.createElement(ListTable, {
            title: 'Questions',
            listItems: this.getQuestionRows(response.questions)
          })
        )
      )
    );
  }
});

module.exports = responseItem;