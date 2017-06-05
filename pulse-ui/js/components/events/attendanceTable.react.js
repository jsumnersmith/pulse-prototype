'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _fixedDataTable = require('fixed-data-table');

var _search = require('../search.react');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */

var AttendanceTable = function (_Component) {
  _inherits(AttendanceTable, _Component);

  function AttendanceTable(props) {
    _classCallCheck(this, AttendanceTable);

    var _this = _possibleConstructorReturn(this, (AttendanceTable.__proto__ || Object.getPrototypeOf(AttendanceTable)).call(this, props));

    _this.setWidth = _this.setWidth.bind(_this);
    _this.setHeight = _this.setHeight.bind(_this);
    _this.setHeightAndWidth = _this.setHeightAndWidth.bind(_this);
    _this.state = {
      width: 0,
      height: 0
    };
    return _this;
  }

  _createClass(AttendanceTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setHeightAndWidth();
      window.addEventListener('resize', this.setHeightAndWidth);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setHeightAndWidth);
    }
  }, {
    key: 'setHeightAndWidth',
    value: function setHeightAndWidth() {
      this.setWidth();
      this.setHeight();
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      this.setState({
        width: this.wrapper.offsetWidth
      });
    }
  }, {
    key: 'setHeight',
    value: function setHeight() {
      var rowsHeight = this.props.sampleEvent.attendees.length * 55 + 57;
      var windowHeight = window.innerHeight * 0.9;
      this.setState({
        height: rowsHeight < windowHeight ? rowsHeight : windowHeight
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sampleEvent = this.props.sampleEvent;

      return React.createElement(
        'div',
        { ref: function ref(wrapper) {
            _this2.wrapper = wrapper;
          } },
        React.createElement(
          _fixedDataTable.Table,
          {
            rowHeight: 55,
            rowsCount: sampleEvent.attendees.length,
            headerHeight: 55,
            width: this.state.width,
            height: this.state.height
          },
          React.createElement(_fixedDataTable.Column, {
            flexGrow: 4,
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Name'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref) {
              var rowIndex = _ref.rowIndex,
                  props = _objectWithoutProperties(_ref, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'strong',
                  null,
                  sampleEvent.attendees[rowIndex].name
                )
              );
            },
            width: 150
          }),
          React.createElement(_fixedDataTable.Column, {
            flexGrow: 4,
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'School'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref2) {
              var rowIndex = _ref2.rowIndex,
                  props = _objectWithoutProperties(_ref2, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'strong',
                  null,
                  'East High School'
                )
              );
            },
            width: 150
          }),
          React.createElement(_fixedDataTable.Column, {
            flexGrow: 4,
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Grade'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref3) {
              var rowIndex = _ref3.rowIndex,
                  props = _objectWithoutProperties(_ref3, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'strong',
                  null,
                  '12'
                )
              );
            },
            width: 150
          }),
          React.createElement(_fixedDataTable.Column, {
            flexGrow: 4,
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Role'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref4) {
              var rowIndex = _ref4.rowIndex,
                  props = _objectWithoutProperties(_ref4, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'strong',
                  null,
                  'English Teacher'
                )
              );
            },
            width: 150
          }),
          React.createElement(_fixedDataTable.Column, {
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Confirmed'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref5) {
              var rowIndex = _ref5.rowIndex,
                  props = _objectWithoutProperties(_ref5, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'div',
                  { className: 'text-center' },
                  sampleEvent.attendees[rowIndex].confirmed ? React.createElement('i', { className: 'fa fa-check circle-icon--small green' }) : React.createElement('i', { className: 'fa fa-times circle-icon--small' })
                )
              );
            },
            width: 100
          }),
          React.createElement(_fixedDataTable.Column, {
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Action'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref6) {
              var rowIndex = _ref6.rowIndex,
                  props = _objectWithoutProperties(_ref6, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'div',
                  { className: 'text-left', style: { paddingRight: 5 } },
                  sampleEvent.attendees[rowIndex].confirmed ? React.createElement(
                    'a',
                    { className: 'btn btn-danger btn-trans btn-block', style: { marginLeft: 0 } },
                    React.createElement('i', { className: 'fa fa-times' }),
                    ' Reset Attendence'
                  ) : React.createElement(
                    'a',
                    { className: 'btn btn-success btn-trans btn-block', style: { marginLeft: 0 } },
                    React.createElement('i', { className: 'fa fa-check' }),
                    ' Confirm Attendence'
                  )
                )
              );
            },
            width: 250
          })
        ),
        React.createElement(
          'label',
          { style: { marginTop: 10 } },
          'Add Attendees'
        ),
        React.createElement(_search2.default, { placeholder: 'Begin typing to add a person to the attendance list.' })
      );
    }
  }]);

  return AttendanceTable;
}(_react.Component);

exports.default = AttendanceTable;