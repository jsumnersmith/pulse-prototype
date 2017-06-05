'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var PureRenderMixin = require('react-addons-pure-render-mixin');

var Popover = _react2.default.createClass({
  displayName: 'Popover',

  mixins: [PureRenderMixin],

  componentDidMount: function componentDidMount() {
    var _this = this;

    if (this.props.hoverAndClick) {
      $(_reactDom2.default.findDOMNode(this)).popover({ // eslint-disable-line react/no-find-dom-node
        trigger: 'manual',
        html: 'true',
        content: function content() {
          return $(_reactDom2.default.findDOMNode(_this.hidden)).html();
        }, // eslint-disable-line react/no-find-dom-node
        container: 'body'
      }).on('mouseenter', function () {
        var el = this;
        $(this).popover('show');
        $('.popover').on('mouseleave', function () {
          $(el).popover('hide');
        });
      }).on('mouseleave', function () {
        var el = this;
        setTimeout(function () {
          if (!$('.popover:hover').length) {
            $(el).popover('hide');
          }
        }, 300);
      });
    } else {
      $(_reactDom2.default.findDOMNode(this)).popover({ // eslint-disable-line react/no-find-dom-node
        trigger: this.props.trigger || 'hover',
        html: 'true',
        content: function content() {
          return $(_reactDom2.default.findDOMNode(_this.hidden)).html();
        }, // eslint-disable-line react/no-find-dom-node
        container: 'body'
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var position = this.props.position || 'top';
    return _react2.default.createElement(
      'a',
      { href: '#!', onClick: function onClick(e) {
          return e.preventDefault();
        }, className: 'popover-container', 'data-original-title': this.props.title, title: this.props.popoverTitle, 'data-placement': position, style: this.props.style },
      this.props.children,
      _react2.default.createElement(
        'div',
        { ref: function ref(c) {
            _this2.hidden = c;
          }, style: { display: 'none' } },
        _react2.default.createElement(
          'div',
          { style: { color: 'black' } },
          this.props.content
        )
      )
    );
  }
});

module.exports = Popover;