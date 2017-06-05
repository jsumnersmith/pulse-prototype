'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var moment = require('moment');

var Highlight = require('react-highlighter');
var CommentCardGroup = require('./commentCardGroup.react.js');
var Tag = require('./tag.react.js');

var CommentCardHistoryList = _react2.default.createClass({
  displayName: 'CommentCardHistoryList',
  getInitialState: function getInitialState() {
    return {
      query: ''
    };
  },
  updateSearchQuery: function updateSearchQuery(val) {
    this.setState({ query: val });
  },
  valuesMatchSearch: function valuesMatchSearch(response) {
    var query = new RegExp(this.state.query, 'ig');
    var valuesDoMatch = query.test(JSON.stringify(response));
    return valuesDoMatch;
  },
  checkFilters: function checkFilters(response) {
    if (this.state.query.length) {
      return this.valuesMatchSearch(response);
    }
    // TODO: don't even call this method if it's empty.
    return true;
  },
  mapComments: function mapComments(comments) {
    var state = this.state;
    return _.map(comments, function (comment) {
      return {
        key: _.uniqueId(),
        date: comment.date,
        iconName: comment.iconName,
        iconStyle: {},
        title: comment.authorName, // Is this deprecated . . .
        visibleContent: comment.commentItems.slice(0, 2).map(function (commentItem) {
          return _react2.default.createElement(
            'div',
            { key: _.uniqueId(), className: 'comment-card-item open' },
            _react2.default.createElement(
              'div',
              { className: 'comment-card-item-title' },
              _react2.default.createElement(
                Highlight,
                { search: state.query },
                _react2.default.createElement(Tag, { name: commentItem.type })
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'comment-card-item-text' },
              _react2.default.createElement(
                Highlight,
                { search: state.query },
                commentItem.text
              )
            )
          );
        }),
        hiddenContent: comment.commentItems.slice(2).map(function (commentItem) {
          return _react2.default.createElement(
            'div',
            { key: _.uniqueId(), className: 'comment-card-item open' },
            _react2.default.createElement(
              'div',
              { className: 'comment-card-item-title' },
              _react2.default.createElement(
                Highlight,
                { search: state.query },
                _react2.default.createElement(Tag, { name: commentItem.type })
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'comment-card-item-text' },
              _react2.default.createElement(
                Highlight,
                { search: state.query },
                commentItem.text
              )
            )
          );
        }),
        checkbox: false
      };
    });
  },
  render: function render() {
    var filteredComments = _.groupBy(_.filter(this.mapComments(this.props.comments), this.checkFilters), function (comment) {
      return moment(comment.date).startOf('day').format();
    });
    var emptyResponse = _react2.default.createElement(
      'h4',
      { className: 'meta comment-card-empty text-center' },
      this.props.emptySeachResultsText || 'No results found.'
    );

    return _react2.default.createElement(
      'div',
      { className: 'comment-card-list' },
      _react2.default.createElement(CommentCardFilters, { handleSearchQuery: this.updateSearchQuery }),
      _.map(filteredComments, function (commentGroup) {
        return _react2.default.createElement(CommentCardGroup, { comments: commentGroup });
      }),
      filteredComments.length < 1 ? emptyResponse : null
    );
  }
});

var CommentCardFilters = _react2.default.createClass({
  displayName: 'CommentCardFilters',
  handleSearchInput: function handleSearchInput(e) {
    this.props.handleSearchQuery(e.target.value);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'comment-card-filters' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6' },
          _react2.default.createElement('input', { className: 'form-control', type: 'text', placeholder: 'Search to filter responses', onChange: this.handleSearchInput })
        )
      )
    );
  }
});

module.exports = CommentCardHistoryList;