'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var PercentPieChart = require('../components/percentPieChart.react.js');
var colors = require('../components/colors.js');

var MultipleChoiceResult = _react2.default.createClass({
  displayName: 'MultipleChoiceResult',
  getInitialState: function getInitialState() {
    return {
      contentView: 'responses'
    };
  },
  getAlternateContentButtonText: function getAlternateContentButtonText() {
    return this.state.contentView === 'responses' ? 'Drill In' : 'View Chart';
  },
  getAlternateContentView: function getAlternateContentView() {
    return this.state.contentView === 'responses' ? 'groupings' : 'responses';
  },
  changeView: function changeView() {
    this.setState({
      contentView: this.getAlternateContentView()
    });
  },
  renderContent: function renderContent() {
    if (this.state.contentView === 'responses') {
      var sliceAmount = this.props.sliceAmount ? this.props.sliceAmount : this.props.question.answers.length;
      return _react2.default.createElement(MultipleChoiceAnswers, {
        question: this.props.question,
        teachersByAnswers: this.props.teachersByAnswers,
        sliceAmount: sliceAmount
      });
    }
    return _react2.default.createElement(
      'div',
      null,
      this.props.groupingsContent || ''
    );
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'multiple-choice-question' },
      _react2.default.createElement(
        'table',
        { className: 'multiple-choice-question-header' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'multiple-choice-question-icon' },
              _react2.default.createElement('i', { className: 'fa fa-list-ul circle-icon--small meeting-goals' })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'h4',
                { className: 'multiple-choice-question-title' },
                this.props.question.title
              )
            ),
            _react2.default.createElement(
              'td',
              { className: 'multiple-choice-question-actions' },
              _react2.default.createElement(
                'a',
                { className: 'btn btn-block btn-default', onClick: this.changeView },
                this.getAlternateContentButtonText()
              )
            )
          )
        )
      ),
      this.renderContent()
    );
  }
});

var MultipleChoiceAnswers = _react2.default.createClass({
  displayName: 'MultipleChoiceAnswers',
  getInitialState: function getInitialState() {
    return {
      resultsView: 'bars',
      colors: colors(this.props.question.answers.length),
      slice: true
    };
  },
  getMaxCount: function getMaxCount() {
    return _.chain(this.props.question.answers).map(function (answer) {
      return answer.count;
    }).max().value();
  },
  getPercentage: function getPercentage(count) {
    return _.round(count / this.props.question.totalCount * 100, 0);
  },
  getAllPercentages: function getAllPercentages() {
    var _this = this;

    var answers = _.orderBy(this.props.question.answers, 'count', 'desc');
    return _.map(answers, function (answer) {
      return _this.getPercentage(answer.count);
    });
  },
  getAllCounts: function getAllCounts() {
    var answers = _.orderBy(this.props.question.answers, 'count', 'desc');
    return _.map(answers, function (answer) {
      return answer.count;
    });
  },
  getWidth: function getWidth(count) {
    return count / this.getMaxCount() * 100;
  },
  getColorColumn: function getColorColumn(answer, index) {
    var color = this.state.colors[index];
    return _react2.default.createElement(
      'td',
      { className: 'multiple-choice-color-key-wrapper' },
      _react2.default.createElement('span', { className: 'multiple-choice-color-key', style: { backgroundColor: color } })
    );
  },
  getCountColumn: function getCountColumn(answer) {
    return _react2.default.createElement(
      'td',
      { className: 'multiple-choice-pie-chart-count' },
      answer.count
    );
  },
  getBarChartColumn: function getBarChartColumn(answer, index) {
    var color = this.state.colors[index];
    return _react2.default.createElement(
      'td',
      { className: 'multiple-choice-bar-chart-line-wrapper' },
      _react2.default.createElement('span', { className: 'multiple-choice-bar-chart-line', style: { width: 'calc(' + this.getWidth(answer.count) + '% - 40px)', backgroundColor: color } }),
      _react2.default.createElement(
        'span',
        { className: 'multiple-choice-bar-chart-count meta' },
        answer.count
      )
    );
  },
  getPieChartColumn: function getPieChartColumn(answer, index) {
    if (index !== 0) {
      return '';
    }
    var size = this.getSize();
    return _react2.default.createElement(
      'td',
      { className: 'multiple-choice-pie-chart-wrapper', rowSpan: this.props.question.answers.length },
      _react2.default.createElement(PercentPieChart, {
        colors: this.state.colors,
        percentages: this.getAllPercentages(),
        width: size,
        height: size
      })
    );
  },
  getSize: function getSize() {
    // 20px accounts for padding at bottom of cell.
    return this.refs.tbody.offsetHeight - 20; // eslint-disable-line react/no-string-refs
  },
  getAnswerRow: function getAnswerRow(answer, index) {
    var rowType = this.state.resultsView;
    var colorColumn = rowType === 'pie' ? this.getColorColumn(answer, index) : _react2.default.createElement('td', { style: { display: 'none' } });
    var countColumn = rowType === 'pie' ? this.getCountColumn(answer, index) : _react2.default.createElement('td', { style: { display: 'none' } });
    var chartColumn = rowType === 'bars' ? this.getBarChartColumn(answer, index) : this.getPieChartColumn(answer, index);
    return _react2.default.createElement(
      'tr',
      { className: 'multiple-choice-answer-row', key: answer.text + answer.count.toString() + index.toString() },
      _react2.default.createElement(
        'td',
        { className: 'multiple-choice-answer-title-count' },
        _react2.default.createElement(
          'strong',
          { className: 'meta' },
          this.getPercentage(answer.count) + '%'
        )
      ),
      colorColumn,
      countColumn,
      _react2.default.createElement(
        'td',
        { className: 'multiple-choice-answer-title-text' },
        answer.title
      ),
      chartColumn
    );
  },
  getAnswerRows: function getAnswerRows() {
    var _this2 = this;

    return _.chain(this.props.question.answers).orderBy('count', 'desc').map(function (answer, index) {
      return _this2.getAnswerRow(answer, index);
    }).thru(function (answerRows) {
      // eslint-disable-line arrow-body-style
      return _this2.state.slice ? answerRows.slice(0, _this2.props.sliceAmount) : answerRows;
    }).value();
  },
  getActiveClass: function getActiveClass(viewName) {
    if (viewName === this.state.resultsView) {
      return ' btn-primary';
    }
    return '';
  },
  toggleView: function toggleView(viewName) {
    this.setState({
      resultsView: viewName
    });
  },
  showToggle: function showToggle() {
    // const sumOfAnswerCounts = _.chain(this.props.question.answers)
    //  .map('count')
    //  .sum()
    //  .value();

    // return this.props.question.totalCount === sumOfAnswerCounts; When we want pie charts. Bring this back.
    return false;
  },
  showViewMore: function showViewMore() {
    return this.props.sliceAmount < this.props.question.answers.length;
  },
  toggleViewMore: function toggleViewMore() {
    this.setState({ slice: !this.state.slice });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'multiple-choice-answers-wrapper' },
      _react2.default.createElement(
        'table',
        { className: 'multiple-choice-answers no-border' },
        _react2.default.createElement(
          'tbody',
          {
            // eslint-disable-next-line react/no-string-refs
            ref: 'tbody'
          },
          this.getAnswerRows().map(function (answerRow) {
            return answerRow;
          })
        )
      ),
      this.showViewMore() ? _react2.default.createElement(
        'div',
        { className: 'multiple-choice-answers-view-more' },
        _react2.default.createElement(
          'a',
          { className: 'meta view-more-button', onClick: this.toggleViewMore },
          _react2.default.createElement('i', { className: 'fa ' + (this.state.slice ? 'fa-plus' : 'fa-minus') }),
          ' View ',
          this.state.slice ? 'More' : 'Less'
        )
      ) : _react2.default.createElement('span', null),
      _react2.default.createElement(
        'div',
        { className: 'multiple-choice-answers-footer' },
        _react2.default.createElement(
          'div',
          { className: 'multiple-choice-answers-total' },
          _react2.default.createElement(
            'span',
            { className: 'meta' },
            'Total Number of Responses: ',
            _react2.default.createElement(
              'strong',
              null,
              this.props.question.totalCount
            )
          )
        ),
        this.showToggle() ? _react2.default.createElement(
          'div',
          { className: 'multiple-choice-answers-toggle' },
          _react2.default.createElement(
            'span',
            { className: 'meta' },
            'Show results as'
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-xs' + this.getActiveClass('bars')
              // eslint-disable-next-line react/jsx-no-bind
              , onClick: this.toggleView.bind(this, 'bars')
            },
            'Bars'
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-xs' + this.getActiveClass('pie')
              // eslint-disable-next-line react/jsx-no-bind
              , onClick: this.toggleView.bind(this, 'pie')
            },
            'Pie'
          )
        ) : _react2.default.createElement('span', null)
      )
    );
  }
});

module.exports = MultipleChoiceResult;