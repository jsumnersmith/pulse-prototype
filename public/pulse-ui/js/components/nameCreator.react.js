'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var NameCreator = function (_React$Component) {
  _inherits(NameCreator, _React$Component);

  function NameCreator(props) {
    _classCallCheck(this, NameCreator);

    var _this = _possibleConstructorReturn(this, (NameCreator.__proto__ || Object.getPrototypeOf(NameCreator)).call(this, props));

    _this.onAdd = _this.onAdd.bind(_this);
    return _this;
  }

  _createClass(NameCreator, [{
    key: 'onAdd',
    value: function onAdd() {
      var value = this.select.value;
      var option = {};
      if (value === 'customText') {
        option.type = value;
        option.name = 'Custom Text';
      } else if (value === 'randomNumber') {
        option.type = value;
        option.name = 'Random Number';
      } else {
        option.type = 'attribute';
        option.name = value;
      }
      this.props.onAdd(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'name-creator' },
        _react2.default.createElement(
          'div',
          { className: 'name-creator-new' },
          _react2.default.createElement(
            'select',
            { className: 'form-control', ref: function ref(select) {
                _this2.select = select;
              } },
            this.props.attributes.map(function (attribute) {
              return _react2.default.createElement(
                'option',
                { value: attribute },
                attribute
              );
            }),
            _react2.default.createElement(
              'option',
              { value: 'customText' },
              'Custom Text'
            ),
            _react2.default.createElement(
              'option',
              { value: 'randomNumber' },
              'Random Number'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-default name-creator-new-button', onClick: this.onAdd },
            _react2.default.createElement('i', { className: 'fa fa-plus' }),
            ' Add'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'name-creator-wrapper' },
          this.props.activeOptions.map(function (option, index) {
            return _react2.default.createElement(ActiveOption, { key: index, onRemove: function onRemove() {
                _this2.props.onRemove(index);
              }, option: option });
          }) // eslint-disable-line react/no-array-index-key

        )
      );
    }
  }]);

  return NameCreator;
}(_react2.default.Component);

exports.default = NameCreator;


var ActiveOption = function ActiveOption(_ref) {
  var option = _ref.option,
      onRemove = _ref.onRemove;

  if (option.type === 'customText') {
    return _react2.default.createElement(CustomTextOption, { onRemove: onRemove });
  } else if (option.type === 'randomNumber') {
    return _react2.default.createElement(RandomNumberOption, { onRemove: onRemove });
  }
  return _react2.default.createElement(AttributeOption, { option: option, onRemove: onRemove });
};

var Option = function Option(_ref2) {
  var option = _ref2.option,
      children = _ref2.children,
      onRemove = _ref2.onRemove;
  return _react2.default.createElement(
    'div',
    { className: 'name-creator-option' },
    _react2.default.createElement(
      'div',
      { className: 'name-creator-option-content' },
      option.name ? _react2.default.createElement(
        'h5',
        null,
        _react2.default.createElement(
          'strong',
          null,
          option.name
        )
      ) : null,
      children
    ),
    _react2.default.createElement('i', { className: 'fa fa-times name-creator-option-remove', onClick: onRemove })
  );
};

var AttributeOption = function AttributeOption(_ref3) {
  var option = _ref3.option,
      onRemove = _ref3.onRemove;
  return _react2.default.createElement(Option, { option: option, onRemove: onRemove });
};

var CustomTextOption = function CustomTextOption(_ref4) {
  var onRemove = _ref4.onRemove;
  return _react2.default.createElement(
    Option,
    { option: { name: '' }, onRemove: onRemove },
    _react2.default.createElement('input', { className: 'form-control', placeholder: 'Add custom text here' })
  );
};

var RandomNumberOption = function RandomNumberOption(_ref5) {
  var onRemove = _ref5.onRemove;
  return _react2.default.createElement(Option, { option: { name: 'Random Number' }, onRemove: onRemove });
};