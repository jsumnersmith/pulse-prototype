"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var ListBody = function ListBody(_ref) {
  var children = _ref.children,
      _ref$subHeader = _ref.subHeader,
      subHeader = _ref$subHeader === undefined ? null : _ref$subHeader;
  return React.createElement(
    "tbody",
    null,
    React.createElement(
      "tr",
      { className: "list-table-content" },
      React.createElement(
        "td",
        { className: "list-table-content-column" },
        subHeader,
        React.createElement(
          "div",
          { className: "list-table-column-wrapper constrained" },
          children
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

ListBody.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};

exports.default = ListBody;