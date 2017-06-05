'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileDropZone = function (_Component) {
  _inherits(FileDropZone, _Component);

  function FileDropZone() {
    _classCallCheck(this, FileDropZone);

    return _possibleConstructorReturn(this, (FileDropZone.__proto__ || Object.getPrototypeOf(FileDropZone)).apply(this, arguments));
  }

  _createClass(FileDropZone, [{
    key: 'onDrop',
    value: function onDrop(file) {
      // eslint-disable-line class-methods-use-this
      console.log('This is a file', file); // eslint-disable-line no-console
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        default: {
          width: '100%',
          border: '3px dashed #bbb',
          background: '#eee',
          fontWeight: 700,
          height: 'auto',
          padding: '10px',
          borderRadius: '3px'
        },
        active: {
          border: '3px solid #1b9974'
        },
        rejected: {
          border: '3px solid #e43726'
        }
      };
      return React.createElement(
        'div',
        { className: 'file-drop-zone' },
        React.createElement(
          _reactDropzone2.default,
          {
            onDrop: this.onDrop,
            style: style.default,
            activeStyle: style.active,
            rejectStyle: style.rejected
          },
          React.createElement(
            'div',
            null,
            'Try dropping some files here, or click to select files to upload.'
          )
        )
      );
    }
  }]);

  return FileDropZone;
}(_react.Component);

exports.default = FileDropZone;