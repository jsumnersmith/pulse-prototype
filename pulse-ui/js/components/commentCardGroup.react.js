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

var CommentCardItem = _react2.default.createClass({
  displayName: 'CommentCardItem',
  getInitialState: function getInitialState() {
    return {
      closed: true
    };
  },
  handleToggle: function handleToggle() {
    this.setState({ closed: !this.state.closed });
  },
  render: function render() {
    var showYear = moment(this.props.date).year() !== moment().year();
    var date = this.props.date ? moment(this.props.date).format(showYear ? 'D MMM YY' : 'D MMM') : '';

    return _react2.default.createElement(
      'div',
      { className: 'comment-card ' + (this.props.checkbox ? 'comment-card-with-checkbox' : null), key: _.uniqueId() },
      this.props.checkbox ? _react2.default.createElement(
        'div',
        { className: 'comment-card-checkbox' },
        this.props.checkbox
      ) : _react2.default.createElement('div', null),
      _react2.default.createElement(
        'div',
        { className: 'comment-card-meta' },
        _react2.default.createElement(
          'div',
          { className: 'comment-card-icon' + (this.props.iconWrapperClass || ''), style: this.props.iconStyle },
          _react2.default.createElement('i', { className: 'fa fa-' + this.props.iconName })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'comment-card-content' },
        _react2.default.createElement(
          'h5',
          { className: 'meta color-warning comment-card-title' },
          this.props.title
        ),
        _react2.default.createElement(
          'h5',
          { className: 'meta comment-card-date' },
          date
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.visibleContent
        ),
        _react2.default.createElement(
          'div',
          { className: 'comment-card-hidden ' + (this.state.closed ? '' : 'active') },
          this.props.hiddenContent
        ),
        this.props.hiddenContent && this.props.hiddenContent.length > 0 ? _react2.default.createElement(
          'a',
          { className: 'comment-card-toggle', onClick: this.handleToggle },
          _react2.default.createElement('i', {
            className: 'fa ' + (this.state.closed ? 'fa-plus' : 'fa-minus')
          }),
          ' View ',
          this.state.closed ? 'More' : 'Less'
        ) : null
      )
    );
  }
});

var CommentCardGroup = _react2.default.createClass({
  displayName: 'CommentCardGroup',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'comment-card-group' + (this.props.isTight ? ' comment-card-group--tight' : '') },
      this.props.title ? _react2.default.createElement(
        'span',
        { className: 'comment-card-group-title' },
        'this.props.title'
      ) : '',
      this.props.comments.map(function (comment) {
        return _react2.default.createElement(CommentCardItem, comment);
      })
    );
  }
});

module.exports = CommentCardGroup;