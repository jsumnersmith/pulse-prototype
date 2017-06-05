'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rubricColors = require('./colors.js').rubric; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var chroma = require('chroma-js');

var Rubric = _react2.default.createClass({
  displayName: 'Rubric',
  getTextColor: function getTextColor(color) {
    return chroma(color).luminance() < 0.31 ? 'white' : '#666';
  },
  render: function render() {
    var colors = this.props.colors || rubricColors(this.props.scores.length);
    var width = (100 / this.props.scores.length).toString() + '%';
    var seeingSuccessStyles = {
      width: (100 - this.props.seeingSuccess / this.props.scores.length * 100).toString() + '%',
      left: (this.props.seeingSuccess / this.props.scores.length * 100).toString() + '%'
    };

    return _react2.default.createElement(
      'div',
      { className: 'rubric', style: { position: 'relative', paddingTop: this.props.seeingSuccess ? '30px' : 0 } },
      _react2.default.createElement(
        'table',
        { className: 'no-border' },
        _react2.default.createElement(
          'tbody',
          { className: 'no-border-x ' },
          _react2.default.createElement(
            'tr',
            { className: 'text-center' },
            this.props.scores.map(function (score, index) {
              return _react2.default.createElement(
                'td',
                { style: { width: width } },
                _react2.default.createElement(
                  'div',
                  { style: { backgroundColor: colors[index], border: '2.5px solid ' + colors[index] } },
                  _react2.default.createElement(
                    'span',
                    { className: 'rubric-score-number', style: { backgroundColor: colors[index], color: this.getTextColor(colors[index]) } },
                    index + 1
                  )
                )
              );
            }, this)
          ),
          _react2.default.createElement(
            'tr',
            null,
            this.props.scores.map(function (score) {
              return _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'text-center' },
                  score
                )
              );
            })
          )
        )
      ),
      this.props.seeingSuccess ? _react2.default.createElement(
        'div',
        { className: 'rubric-seeing-success meta', style: seeingSuccessStyles },
        'Seeing Success'
      ) : _react2.default.createElement('span', null)
    );
  }
});

module.exports = Rubric;