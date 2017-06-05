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

var Histogram = _react2.default.createClass({
  displayName: 'Histogram',
  render: function render() {
    var histogram = this.props.histogram;

    if (!histogram) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'table',
        { className: 'no-border' },
        _react2.default.createElement(
          'tr',
          { className: 'no-border-x no-border-y', style: { fontSize: '11px', height: '20px' } },
          _react2.default.createElement(
            'th',
            { style: { width: '110px', fontSize: 'inherit' } },
            'Rating'
          ),
          _react2.default.createElement(
            'th',
            { style: { width: '190px', fontSize: 'inherit' } },
            'Rubric'
          ),
          _react2.default.createElement(
            'th',
            { style: { width: '90px', fontSize: 'inherit' } },
            'Responses'
          )
        ),
        _.map(histogram, function (_ref) {
          var range = _ref.range,
              count = _ref.count,
              percent = _ref.percent,
              rubricText = _ref.rubricText,
              color = _ref.color;

          var tierText = range.left + ' - ' + range.right;

          return _react2.default.createElement(
            'tr',
            { className: 'no-border-x no-border-y', style: { fontSize: '11px', lineHeight: '13px' } },
            _react2.default.createElement(
              'td',
              { style: { width: '110px', fontSize: 'inherit', lineHeight: 'inherit', padding: '0px', paddingLeft: '5px' } },
              tierText
            ),
            _react2.default.createElement(
              'td',
              { style: { width: '190px', fontSize: 'inherit', lineHeight: 'inherit', padding: '0px 5px 0px 0px' } },
              _react2.default.createElement(
                'div',
                { style: { position: 'relative', height: '45px', verticalAlign: 'middle', fontSize: 'inherit', margin: '5px' } },
                _react2.default.createElement(
                  'div',
                  { style: { width: percent + '%', height: '100%', position: 'absolute', background: color } },
                  '\xA0'
                ),
                _react2.default.createElement(
                  'div',
                  { style: { position: 'absolute', height: '45px', width: '100%', paddingTop: '3px', paddingBottom: '3px' } },
                  _react2.default.createElement(
                    'div',
                    { style: { position: 'relative', width: '100%', fontWeight: '400', color: 'black', margin: '3px', height: '39px', overflow: 'hidden', textOverflow: 'ellipsis' } },
                    rubricText || _react2.default.createElement(
                      'i',
                      { style: { fontSize: 'inherit', width: '100%', textAlign: 'left' } },
                      '(No text available)'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'td',
              { style: { width: '90px', fontSize: 'inherit', lineHeight: 'inherit', padding: '0px', paddingLeft: '4px' } },
              count,
              '/ ',
              percent,
              '%'
            )
          );
        })
      )
    );
  }
});

module.exports = Histogram;