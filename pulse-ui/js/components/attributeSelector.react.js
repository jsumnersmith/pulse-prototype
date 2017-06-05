"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.List = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = exports.List = function List(_ref) {
  var label = _ref.label,
      showDisabled = _ref.showDisabled,
      headerMenuItems = _ref.headerMenuItems,
      _ref$onHeaderMenuItem = _ref.onHeaderMenuItemChange,
      onHeaderMenuItemChange = _ref$onHeaderMenuItem === undefined ? function () {} : _ref$onHeaderMenuItem,
      children = _ref.children,
      targets = _ref.targets,
      _ref$onTargetChange = _ref.onTargetChange,
      onTargetChange = _ref$onTargetChange === undefined ? function () {} : _ref$onTargetChange;
  return _react2.default.createElement(
    "div",
    { className: "list-table-wrapper report-builder-table-checklist" },
    _react2.default.createElement(
      "table",
      { className: "list-table list-table--simple table-responsive no-border" },
      _react2.default.createElement(
        "thead",
        { className: "no-border" },
        _react2.default.createElement(
          "tr",
          { className: "list-table-header" },
          _react2.default.createElement(
            "th",
            null,
            _react2.default.createElement(
              "div",
              { className: 'list-table-header-attribute-type ', style: { display: 'inline-block', width: 'calc(100% - 46px)' } },
              label
            ),
            _react2.default.createElement(
              "div",
              { style: { display: 'inline-block', width: 45, textAlign: 'right', position: 'relative' } },
              showDisabled ? _react2.default.createElement("i", { className: "fa fa-eye-slash", style: { opacity: 0.25, marginRight: 5 } }) : null,
              _react2.default.createElement("i", { className: "fa fa-bars", "data-toggle": "dropdown", style: { opacity: 0.5 } }),
              _react2.default.createElement(
                "ul",
                { className: "dropdown-menu dropdown-menu-right" },
                headerMenuItems.map(function (_ref2) {
                  var name = _ref2.name,
                      value = _ref2.value;
                  return _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      "a",
                      { onClick: function onClick() {
                          return onHeaderMenuItemChange({ name: name, value: !value });
                        } },
                      _react2.default.createElement("i", { className: "fa " + (value ? 'fa-check-square blue' : ' fa-square-o') }),
                      " ",
                      name
                    )
                  );
                })
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        "tbody",
        null,
        _react2.default.createElement(
          "tr",
          { className: "list-table-content" },
          _react2.default.createElement(
            "td",
            { className: "list-table-content-column" },
            _react2.default.createElement(
              "div",
              { className: "list-table-column-wrapper constrained" },
              _react2.default.createElement(
                "table",
                { className: "list-table-column" },
                _react2.default.createElement(
                  "tbody",
                  { className: "no-border-x no-border-y" },
                  _react2.default.createElement(
                    "tr",
                    { className: "list-table-checklist-row" },
                    _react2.default.createElement(
                      "td",
                      null,
                      _react2.default.createElement(
                        "strong",
                        { style: { fontSize: 14, color: '#aaa' } },
                        "Select Filters"
                      ),
                      " ",
                      _react2.default.createElement(TargetSelector, { targets: targets, onTargetChange: onTargetChange })
                    )
                  ),
                  children
                )
              )
            )
          )
        )
      )
    )
  );
}; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var Item = exports.Item = function Item(_ref3) {
  var label = _ref3.label,
      _ref3$value = _ref3.value,
      value = _ref3$value === undefined ? false : _ref3$value,
      _ref3$onChange = _ref3.onChange,
      onChange = _ref3$onChange === undefined ? function () {} : _ref3$onChange;
  return _react2.default.createElement(
    "tr",
    { className: "list-table-checklist-row" },
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(
        "div",
        { style: { position: 'relative' } },
        _react2.default.createElement(
          "div",
          { onClick: onChange },
          _react2.default.createElement("i", { className: value ? 'fa fa-check-square blue' : 'fa fa-square-o' }),
          _react2.default.createElement(
            "strong",
            { style: { fontSize: 14 } },
            label
          )
        )
      )
    )
  );
};

var TargetSelector = _react2.default.createClass({
  displayName: "TargetSelector",
  getInitialState: function getInitialState() {
    return { open: false };
  },
  toggleDropdown: function toggleDropdown() {
    this.setState({ open: !this.state.open });
  },
  render: function render() {
    var _props = this.props,
        targets = _props.targets,
        onTargetChange = _props.onTargetChange;

    return _react2.default.createElement(
      "span",
      null,
      targets.length ? _react2.default.createElement(
        "div",
        { className: "list-table-checklist-dropdown" },
        _react2.default.createElement(
          "a",
          { className: "meta dropdown-toggle", onClick: this.toggleDropdown },
          " ",
          _react2.default.createElement("i", { className: "fa fa-chevron-down" })
        ),
        _react2.default.createElement(
          "ul",
          { className: "targets " + (this.state.open ? 'open' : '') },
          targets.map(function (_ref4) {
            var name = _ref4.name,
                value = _ref4.value;
            return _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { onClick: function onClick() {
                    return onTargetChange({ name: name, value: value });
                  } },
                _react2.default.createElement("i", { className: value ? 'fa fa-check-square blue' : 'fa fa-square-o' }),
                name
              )
            );
          })
        )
      ) : null
    );
  }
});