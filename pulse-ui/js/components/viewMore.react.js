'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewMore = function (_Component) {
  _inherits(ViewMore, _Component);

  function ViewMore() {
    _classCallCheck(this, ViewMore);

    return _possibleConstructorReturn(this, (ViewMore.__proto__ || Object.getPrototypeOf(ViewMore)).apply(this, arguments));
  }

  _createClass(ViewMore, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {
        closed: true
      };
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      var _this2 = this;

      this.setState({ closed: !this.state.closed }, function () {
        return _this2.props.handleToggle(_this2.state.closed);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children,
        _react2.default.createElement(
          'a',
          { className: 'meta view-more-button', onClick: this.handleToggle },
          _react2.default.createElement('i', { className: 'fa ' + (this.state.closed ? 'fa-plus' : 'fa-minus') }),
          ' View ',
          this.state.closed ? 'More' : 'Less'
        )
      );
    }
  }]);

  return ViewMore;
}(_react.Component);

ViewMore.propTypes = {
  children: _propTypes2.default.element,
  handleToggle: _propTypes2.default.func
};

ViewMore.defaultProps = {
  children: _react2.default.createElement('div', null),
  handleToggle: function handleToggle() {}
};

exports.default = ViewMore;