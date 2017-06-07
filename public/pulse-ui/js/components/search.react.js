'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var initialState = {
  query: '',
  activeIndex: -1
};
var isDownArrow = function isDownArrow(e) {
  return e.keyCode === 40;
};
var isUpArrow = function isUpArrow(e) {
  return e.keyCode === 38;
};
var isEnter = function isEnter(e) {
  return e.keyCode === 13;
};

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = initialState;

    _this.onSearchInput = _this.onSearchInput.bind(_this);
    _this.onKeyPress = _this.onKeyPress.bind(_this);
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'onSearchInput',
    value: function onSearchInput(e) {
      this.setState({ query: e.target.value });
    }
  }, {
    key: 'onKeyPress',
    value: function onKeyPress(e) {
      if (!this.props.items.length) {
        return;
      }

      if (isUpArrow(e)) {
        e.preventDefault();
        this.setNewActiveIndexForUpArrow();
      }

      if (isDownArrow(e)) {
        e.preventDefault();
        this.setNewActiveIndexForDownArrow();
      }

      if (isEnter(e)) {
        e.preventDefault();
        this.handleSelection(e, this.getResults()[this.state.activeIndex]);
      }
    }
  }, {
    key: 'setNewActiveIndexForUpArrow',
    value: function setNewActiveIndexForUpArrow() {
      return this.setState(function (_ref) {
        var activeIndex = _ref.activeIndex;
        return {
          activeIndex: activeIndex > -1 ? activeIndex - 1 : -1
        };
      });
    }
  }, {
    key: 'setNewActiveIndexForDownArrow',
    value: function setNewActiveIndexForDownArrow() {
      var _this2 = this;

      return this.setState(function (_ref2) {
        var activeIndex = _ref2.activeIndex;
        return {
          activeIndex: activeIndex < _this2.getResults().length - 1 ? activeIndex + 1 : activeIndex
        };
      });
    }
  }, {
    key: 'getResults',
    value: function getResults() {
      return this.state.query.length ? this.props.filterMethod(this.state.query, this.props.items).slice(0, 5) : [];
    }
  }, {
    key: 'navigateToSelectedLink',
    value: function navigateToSelectedLink() {
      var link = _reactDom2.default.findDOMNode(this).querySelectorAll('.active a'); // eslint-disable-line react/no-find-dom-node
      if (link[0]) {
        window.location = link[0].href;
      }
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(e, item) {
      if (this.props.handleSelectionMethod) {
        this.props.handleSelectionMethod(e, item);
      } else {
        this.navigateToSelectedLink();
      }

      if (this.props.resetOnSelection) {
        this.setState(initialState);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'search-box' },
        React.createElement(
          'div',
          { className: 'input-group' },
          React.createElement(
            'span',
            { className: 'input-group-addon' },
            React.createElement('i', { className: 'fa fa-search' })
          ),
          React.createElement('input', {
            className: 'form-control search-box-input',
            type: 'text',
            value: this.state.query,
            onChange: this.onSearchInput,
            placeholder: this.props.placeholder,
            onKeyDown: this.onKeyPress
          })
        ),
        React.createElement(SearchResults, {
          activeIndex: this.state.activeIndex,
          results: this.getResults(),
          renderResultMethod: this.props.renderResultMethod,
          onClickForResult: this.handleSelection
        })
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;


Search.propTypes = {
  filterMethod: _react.PropTypes.func.isRequired,
  items: _react.PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  handleSelectionMethod: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  renderResultMethod: _react.PropTypes.func.isRequired,
  resetOnSelection: _react.PropTypes.bool
};

Search.defaultProps = {
  placeholder: 'Search',
  resetOnSelection: false
};

var SearchResults = function SearchResults(_ref3) {
  var results = _ref3.results,
      activeIndex = _ref3.activeIndex,
      renderResultMethod = _ref3.renderResultMethod,
      onClickForResult = _ref3.onClickForResult;
  return React.createElement(
    'div',
    { className: results.length ? 'search-box-results' : '' },
    results.map(function (result, i) {
      return React.createElement(
        'div',
        {
          key: _lodash2.default.uniqueId(),
          className: 'search-box-result' + (i === activeIndex ? ' active' : ''),
          onClick: function onClick(e) {
            return onClickForResult(e, result);
          }
        },
        renderResultMethod(result)
      );
    })
  );
};