/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import colors from './colors';

const _ = require('lodash');

class MultipleChoiceResult extends Component {
  constructor(props){
    super(props);
    this.getAlternateContentButtonText = this.getAlternateContentButtonText.bind(this);
    this.getAlternateContentView = this.getAlternateContentView.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  state = {
   contentView: 'responses',
  }

  getAlternateContentButtonText() {
    return this.state.contentView === 'responses' ? 'Drill In' : 'View Chart';
  }

  getAlternateContentView() {
    return this.state.contentView === 'responses' ? 'groupings' : 'responses';
  }

  changeView() {
    this.setState({
      contentView: this.getAlternateContentView(),
    });
  }

  renderContent() {
    if (this.state.contentView === 'responses') {
      const sliceAmount = this.props.sliceAmount ? this.props.sliceAmount : this.props.question.answers.length;
      return (
        <MultipleChoiceAnswers
          question={this.props.question}
          teachersByAnswers={this.props.teachersByAnswers}
          sliceAmount={sliceAmount}
        />
      );
    }
    return (
      <div>{this.props.groupingsContent || ''}</div>
    );
  }

  render() {
    return (
      <div className="multiple-choice-question">
        <table className="multiple-choice-question-header">
          <tbody>
            <tr>
              <td className="multiple-choice-question-icon">
                <i className="fa fa-list-ul circle-icon--small meeting-goals" />
              </td>
              <td>
                <h4 className="multiple-choice-question-title">{this.props.question.title}</h4>
              </td>
              <td className="multiple-choice-question-actions">
                <a className="btn btn-block btn-default" onClick={this.changeView}>{this.getAlternateContentButtonText()}</a>
              </td>
            </tr>
          </tbody>
        </table>
        {
          this.renderContent()
        }
      </div>
    );
  }
};

class MultipleChoiceAnswers extends Component {
  constructor(props){
    super(props);
    this.getMaxCount = this.getMaxCount.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
    this.getAllPercentages = this.getAllPercentages.bind(this);
    this.getAllCounts = this.getAllCounts.bind(this);
    this.getWidth = this.getWidth.bind(this);
    this.getColorColumn = this.getColorColumn.bind(this);
    this.getCountColumn = this.getCountColumn.bind(this);
    this.getBarChartColumn = this.getBarChartColumn.bind(this);
    this.getSize = this.getSize.bind(this);
    this.getAnswerRow = this.getAnswerRow.bind(this);
    this.getAnswerRows = this.getAnswerRows.bind(this);
    this.getActiveClass = this.getActiveClass.bind(this);
    this.showToggle = this.showToggle.bind(this);
    this.showViewMore = this.showViewMore.bind(this);
    this.toggleViewMore = this.toggleViewMore.bind(this);
  }
  state = {
    resultsView: 'bars',
    colors: colors(this.props.question.answers.length),
    slice: true,
  }

  getMaxCount() {
    return _.chain(this.props.question.answers)
      .map(answer => answer.count)
      .max()
      .value();
  }

  getPercentage(count) {
    return _.round((count / this.props.question.totalCount) * 100, 0);
  }

  getAllPercentages() {
    const answers = _.orderBy(this.props.question.answers, 'count', 'desc');
    return _.map(answers, answer => this.getPercentage(answer.count));
  }

  getAllCounts() {
    const answers = _.orderBy(this.props.question.answers, 'count', 'desc');
    return _.map(answers, answer => answer.count);
  }

  getWidth(count) {
    return (count / this.getMaxCount()) * 100;
  }

  getColorColumn(answer, index) {
    const color = this.state.colors[index];
    return (
      <td className="multiple-choice-color-key-wrapper">
        <span className="multiple-choice-color-key" style={{ backgroundColor: color }} />
      </td>
    );
  }

  getCountColumn(answer) {
    return (
      <td className="multiple-choice-pie-chart-count">
        {answer.count}
      </td>
    );
  }

  getBarChartColumn(answer, index) {
    const color = this.state.colors[index];
    return (
      <td className="multiple-choice-bar-chart-line-wrapper">
        <span className="multiple-choice-bar-chart-line" style={{ width: `calc(${this.getWidth(answer.count)}% - 40px)`, backgroundColor: color }} />
        <span className="multiple-choice-bar-chart-count meta">{answer.count}</span>
      </td>
    );
  }

  getSize() {
    // 20px accounts for padding at bottom of cell.
    return this.refs.tbody.offsetHeight - 20; // eslint-disable-line react/no-string-refs
  }

  getAnswerRow(answer, index) {
    const rowType = this.state.resultsView;
    const colorColumn = rowType === 'pie' ? this.getColorColumn(answer, index) : <td style={{ display: 'none' }} />;
    const countColumn = rowType === 'pie' ? this.getCountColumn(answer, index) : <td style={{ display: 'none' }} />;
    const chartColumn = rowType === 'bars' ? this.getBarChartColumn(answer, index) : null;
    return (
      <tr className="multiple-choice-answer-row" key={answer.text + answer.count.toString() + index.toString()}>
        <td className="multiple-choice-answer-title-count">
          <strong className="meta">{`${this.getPercentage(answer.count)}%`}</strong>
        </td>
        {colorColumn}
        {countColumn}
        <td className="multiple-choice-answer-title-text">
          {answer.title}
        </td>
        {chartColumn}
      </tr>
    );
  }

  getAnswerRows() {
    return _.chain(this.props.question.answers)
      .orderBy('count', 'desc')
      .map((answer, index) => this.getAnswerRow(answer, index))
      .thru((answerRows) => { // eslint-disable-line arrow-body-style
        return this.state.slice ? answerRows.slice(0, this.props.sliceAmount) : answerRows;
      })
      .value();
  }

  getActiveClass(viewName) {
    if (viewName === this.state.resultsView) {
      return ' btn-primary';
    }
    return '';
  }

  toggleView(viewName) {
    this.setState({
      resultsView: viewName,
    });
  }

  showToggle() {
    // const sumOfAnswerCounts = _.chain(this.props.question.answers)
    //  .map('count')
    //  .sum()
    //  .value();

    // return this.props.question.totalCount === sumOfAnswerCounts; When we want pie charts. Bring this back.
    return false;
  }

  showViewMore() {
    return this.props.sliceAmount < this.props.question.answers.length;
  }

  toggleViewMore() {
    this.setState({ slice: !this.state.slice });
  }

  render() {
    return (
      <div className="multiple-choice-answers-wrapper">
        <table className="multiple-choice-answers no-border">
          <tbody
            // eslint-disable-next-line react/no-string-refs
            ref="tbody"
          >
            {
              this.getAnswerRows().map(answerRow => answerRow)
            }
          </tbody>
        </table>
        {
          this.showViewMore() ?
            <div className="multiple-choice-answers-view-more">
              <a className="meta view-more-button" onClick={this.toggleViewMore}><i className={`fa ${this.state.slice ? 'fa-plus' : 'fa-minus'}`} /> View {this.state.slice ? 'More' : 'Less'}</a>
            </div>
          :
            <span />
        }

        <div className="multiple-choice-answers-footer">
          <div className="multiple-choice-answers-total">
            <span className="meta">Total Number of Responses: <strong>{this.props.question.totalCount}</strong></span>
          </div>
          {
            this.showToggle()
            ?
              <div className="multiple-choice-answers-toggle">
                <span className="meta">Show results as</span>
                <a
                  className={`btn btn-xs${this.getActiveClass('bars')}`}
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={this.toggleView.bind(this, 'bars')}
                >Bars</a>
                <a
                  className={`btn btn-xs${this.getActiveClass('pie')}`}
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={this.toggleView.bind(this, 'pie')}
                >Pie</a>
              </div>
            :
              <span />
          }

        </div>
      </div>
    );
  }
};

export default MultipleChoiceResult;