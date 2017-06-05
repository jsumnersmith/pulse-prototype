"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var List = function List(_ref) {
  var children = _ref.children;
  return React.createElement(
    "table",
    { className: "list-table list-table--simple table-responsive no-border" },
    children
  );
}; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

List.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};

exports.default = List;