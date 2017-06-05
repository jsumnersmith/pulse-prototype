'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDebounceInput = require('react-debounce-input');

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var SearchInput = exports.SearchInput = function (_React$Component) {
  _inherits(SearchInput, _React$Component);

  function SearchInput() {
    _classCallCheck(this, SearchInput);

    return _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).apply(this, arguments));
  }

  _createClass(SearchInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'search-box search-filters' },
        _react2.default.createElement(
          'div',
          { className: 'input-group' },
          _react2.default.createElement(
            'span',
            { className: 'input-group-addon' },
            _react2.default.createElement('i', { className: 'fa fa-search' })
          ),
          _react2.default.createElement(_reactDebounceInput2.default, {
            className: 'form-control search-box-input',
            minLength: this.props.minLength,
            debounceTimeout: this.props.debounceTimeout,
            placeholder: this.props.placeholder,
            onChange: function onChange(event) {
              return _this2.props.onChange(event);
            }
          }),
          this.props.children ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('i', { className: 'fa fa-caret-down search-filters-toggle', 'data-toggle': 'collapse', 'data-target': '#filtersDropdown' }),
            _react2.default.createElement(
              'div',
              { className: 'collapse search-filters-dropdown', id: 'filtersDropdown' },
              this.props.children
            )
          ) : null
        )
      );
    }
  }]);

  return SearchInput;
}(_react2.default.Component);

SearchInput.propTypes = {
  placeholder: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  minLength: _react2.default.PropTypes.number,
  debounceTimeout: _react2.default.PropTypes.number
};

SearchInput.defaultProps = {
  onChange: function onChange() {},
  placeholder: 'Search',
  minLength: 2,
  debounceTimeout: 15
};

exports.default = SearchInput;