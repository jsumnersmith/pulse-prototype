"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListTable = _react2.default.createClass({
  displayName: "ListTable",
  render: function render() {
    var listItems = this.props.listItems || [];
    return _react2.default.createElement(
      "div",
      { className: "list-table list-table--simple" },
      _react2.default.createElement(
        "table",
        { className: "no-border list-table" },
        _react2.default.createElement(
          "thead",
          { className: "no-border-x no-border-y" },
          _react2.default.createElement(
            "tr",
            { className: "list-table-header" },
            _react2.default.createElement(
              "th",
              null,
              _react2.default.createElement(
                "div",
                { className: "list-table-header-cell" },
                this.props.title
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
                { className: "list-table-column-wrapper" },
                _react2.default.createElement(
                  "table",
                  { className: "no-border list-table-column" },
                  _react2.default.createElement(
                    "tbody",
                    { className: "no-border-x no-border-y" },
                    listItems.map(function (listItem) {
                      return _react2.default.createElement(
                        "tr",
                        { className: "list-table-name-row" },
                        _react2.default.createElement(
                          "td",
                          null,
                          listItem
                        )
                      );
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  }
}); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

module.exports = ListTable;