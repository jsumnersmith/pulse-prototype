'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _fixedDataTable = require('fixed-data-table');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */

function getTeachers(events) {
  return _lodash2.default.chain(events).flatMap('attendees').uniqBy('name').value();
}

var AttendanceSummaryTable = function (_Component) {
  _inherits(AttendanceSummaryTable, _Component);

  function AttendanceSummaryTable(props) {
    _classCallCheck(this, AttendanceSummaryTable);

    var _this = _possibleConstructorReturn(this, (AttendanceSummaryTable.__proto__ || Object.getPrototypeOf(AttendanceSummaryTable)).call(this, props));

    _this.setWidth = _this.setWidth.bind(_this);
    _this.setHeight = _this.setHeight.bind(_this);
    _this.setHeightAndWidth = _this.setHeightAndWidth.bind(_this);
    _this.state = {
      width: 0,
      height: 0
    };
    return _this;
  }

  _createClass(AttendanceSummaryTable, [{
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
      var rowsHeight = getTeachers(this.props.events).length * 55 + 57;
      var windowHeight = window.innerHeight * 0.9;
      this.setState({
        height: rowsHeight < windowHeight ? rowsHeight : windowHeight
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var events = this.props.events;

      var teachers = getTeachers(events);
      return React.createElement(
        'div',
        { ref: function ref(wrapper) {
            _this2.wrapper = wrapper;
          } },
        React.createElement(
          _fixedDataTable.Table,
          {
            rowHeight: 55,
            rowsCount: teachers.length,
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
                  teachers[rowIndex].name
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
              'In Organization'
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
                  React.createElement(
                    'strong',
                    null,
                    teachers[rowIndex].name.length
                  )
                )
              );
            },
            width: 100
          }),
          React.createElement(_fixedDataTable.Column, {
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Out of Organization'
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
                  { className: 'text-center' },
                  React.createElement(
                    'strong',
                    null,
                    teachers[rowIndex].name.length + 10
                  )
                )
              );
            },
            width: 100
          }),
          React.createElement(_fixedDataTable.Column, {
            header: React.createElement(
              _fixedDataTable.Cell,
              null,
              'Total Hours'
            ),
            allowCellsRecycling: true,
            cell: function cell(_ref7) {
              var rowIndex = _ref7.rowIndex,
                  props = _objectWithoutProperties(_ref7, ['rowIndex']);

              return React.createElement(
                _fixedDataTable.Cell,
                props,
                React.createElement(
                  'div',
                  { className: 'text-center' },
                  React.createElement(
                    'strong',
                    null,
                    teachers[rowIndex].name.length + teachers[rowIndex].name.length + 10
                  )
                )
              );
            },
            width: 100
          })
        )
      );
    }
  }]);

  return AttendanceSummaryTable;
}(_react.Component);

exports.default = AttendanceSummaryTable;