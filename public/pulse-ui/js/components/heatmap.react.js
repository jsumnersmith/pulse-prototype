'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */

var PureRenderMixin = require('react-addons-pure-render-mixin');

var Popover = require('./popover.react.js');

var Heatmap = _react2.default.createClass({
  displayName: 'Heatmap',

  mixins: [PureRenderMixin],

  getInitialState: function getInitialState() {
    return {
      expandedRows: new Set()
    };
  },
  expandRow: function expandRow(rowId) {
    var rows = this.state.expandedRows;
    rows.add(rowId);

    this.setState({ expandedRows: new Set(rows) });
  },
  collapseRow: function collapseRow(rowId) {
    var rows = this.state.expandedRows;
    rows.delete(rowId);

    this.setState({ expandedRows: new Set(rows) });
  },
  renderRows: function renderRows() {
    var _this = this;

    var expandedRows = this.state.expandedRows;
    var expandRow = this.expandRow;
    var collapseRow = this.collapseRow;

    return _.map(this.props.rows, function (row) {
      var isExpanded = expandedRows.has(row.id);

      return [_react2.default.createElement(HeatmapRow, {
        isExpandable: true,
        boldGoal: true,
        isExpanded: isExpanded
        // eslint-disable-next-line react/jsx-no-bind
        , expandFunction: expandRow.bind(null, row.id)
        // eslint-disable-next-line react/jsx-no-bind
        , collapseFunction: collapseRow.bind(null, row.id),
        row: row,
        columns: _this.props.columns,
        renderTitleHover: _this.props.renderTitleHover,
        key: row.id + '-' + row.data.length + '-' + isExpanded
      }), isExpanded ? _.map(row.children, function (child) {
        return _react2.default.createElement(HeatmapRow, {
          isExpandable: false,
          boldGoal: false,
          row: child,
          columns: _this.props.columns,
          renderTitleHover: _this.props.renderTitleHover,
          key: child.id + '-' + row.data.length + '-'
        });
      }) : _react2.default.createElement('tr', null)];
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'table-responsive' },
      _react2.default.createElement(
        'table',
        { className: 'table heatmap dashboard-table no-border no-stripe text-center', style: { tableLayout: 'auto', overflowX: 'scroll' } },
        _react2.default.createElement(HeatmapHeaderRow, { counts: this.props.counts, columns: this.props.columns }),
        _react2.default.createElement(
          'tbody',
          null,
          this.renderRows()
        )
      )
    );
  }
});

var HeatmapHeaderRow = _react2.default.createClass({
  displayName: 'HeatmapHeaderRow',

  mixins: [PureRenderMixin],

  renderExpanderColumn: function renderExpanderColumn() {
    return _react2.default.createElement('th', { style: { width: '15px' } });
  },
  renderRowNameColumn: function renderRowNameColumn() {
    return _react2.default.createElement('th', { style: { width: '250px' } });
  },
  renderDataColumn: function renderDataColumn(columnName) {
    return _react2.default.createElement(
      'th',
      { className: 'text-center column-header-label', style: { fontWeight: '600', width: '30px', fontSize: '100%' } },
      _react2.default.createElement(
        'div',
        null,
        columnName
      )
    );
  },
  renderUnknownCell: function renderUnknownCell() {
    return _react2.default.createElement('th', null);
  },
  renderColumnHeaders: function renderColumnHeaders() {
    var columns = this.props.columns;

    var renderExpanderColumn = this.renderExpanderColumn;
    var renderRowNameColumn = this.renderRowNameColumn;
    var renderDataColumn = this.renderDataColumn;
    var renderUnknownColumn = this.renderUnknownColumn;

    return columns.map(function (column) {
      if (column.type === 'expander') {
        return renderExpanderColumn();
      } else if (column.type === 'rowName') {
        return renderRowNameColumn();
      } else if (column.type === 'data') {
        return renderDataColumn(column.columnTitle);
      }
      return renderUnknownColumn();
    });
  },
  renderResponseCounts: function renderResponseCounts() {
    var columns = this.props.columns;
    var counts = this.props.counts;

    return columns.map(function (column) {
      if (column.type === 'expander') {
        return _react2.default.createElement('th', null);
      } else if (column.type === 'rowName') {
        return _react2.default.createElement(
          'th',
          { className: 'meta response-count-label text-right' },
          'Response Count'
        );
      } else if (column.type === 'data') {
        return _react2.default.createElement(
          'th',
          { className: 'text-center response-count meta' },
          counts[column.index]
        );
      }
      return _react2.default.createElement('th', { className: 'text-center response-count meta' });
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        this.renderColumnHeaders()
      ),
      _react2.default.createElement(
        'tr',
        null,
        this.renderResponseCounts()
      )
    );
  }
});

var HeatmapRow = _react2.default.createClass({
  displayName: 'HeatmapRow',

  mixins: [PureRenderMixin],

  renderExpanderCell: function renderExpanderCell() {
    var isExpandable = this.props.isExpandable && this.props.row.children && this.props.row.children.length;

    return _react2.default.createElement(
      'td',
      { style: { borderTop: '0', borderBottom: '0' } },
      isExpandable && this.props.isExpanded ? // eslint-disable-line no-nested-ternary
      _react2.default.createElement(
        'a',
        { onClick: this.props.collapseFunction, style: { cursor: 'pointer' } },
        _react2.default.createElement('i', { className: 'fa fa-chevron-down' })
      ) : isExpandable && !this.props.isExpanded ? _react2.default.createElement(
        'a',
        { onClick: this.props.expandFunction, style: { cursor: 'pointer' } },
        _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
      ) : _react2.default.createElement('span', null)
    );
  },
  renderRowNameCell: function renderRowNameCell() {
    var row = this.props.row;
    var boldGoal = this.props.boldGoal;
    var renderTitleHover = this.props.renderTitleHover;
    var hoverContent = renderTitleHover ? renderTitleHover(row) : null;
    var rowNameClass = boldGoal ? 'text-left table-label goalName bold' : 'text-left table-label goalName notBold';

    var rowContent = _react2.default.createElement(
      'div',
      { style: { minWidth: '250px' } },
      row.name,
      hoverContent ? _react2.default.createElement(
        Popover,
        { content: hoverContent, title: row.name, position: 'top', style: { maxWidth: 150 } },
        _react2.default.createElement('i', { className: 'fa fa-info-circle text-info' })
      ) : _react2.default.createElement('i', null)
    );

    return _react2.default.createElement(
      'td',
      { className: rowNameClass },
      rowContent
    );
  },
  renderDataCell: function renderDataCell(index, isLastRow) {
    var cellData = this.props.row.data[index];
    var hoverContent = cellData.renderHover();

    var title = cellData.totalCount + (_.isNil(cellData.groupName) ? ' Total Responses' : ' Responses from ' + cellData.groupName);

    return _react2.default.createElement(
      'td',
      { className: 'colored meta', style: { backgroundColor: cellData.color } },
      hoverContent ? _react2.default.createElement(
        Popover,
        { content: cellData.renderHover(), title: title, position: isLastRow ? 'left' : 'top' },
        this.renderDataCellText(cellData)
      ) : this.renderDataCellText(cellData)
    );
  },
  renderDataCellText: function renderDataCellText(cellData) {
    return _react2.default.createElement(
      'span',
      { style: { color: cellData.textColor } },
      cellData.value != null ? cellData.value : ''
    );
  },
  renderUnknownCell: function renderUnknownCell() {
    return _react2.default.createElement('td', null);
  },
  renderCells: function renderCells() {
    var columns = this.props.columns;

    var renderExpanderCell = this.renderExpanderCell;
    var renderRowNameCell = this.renderRowNameCell;
    var renderDataCell = this.renderDataCell;
    var renderUnknownCell = this.renderUnknownCell;

    return columns.map(function (column, index) {
      var isLastRow = index === columns.length - 1;
      if (column.type === 'expander') {
        return renderExpanderCell();
      } else if (column.type === 'rowName') {
        return renderRowNameCell();
      } else if (column.type === 'data') {
        return renderDataCell(column.index, isLastRow);
      }
      return renderUnknownCell();
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'tr',
      { style: { height: '55px' }, className: this.props.isExpandable ? 'expandable' : 'collapsable' },
      this.renderCells()
    );
  }
});

module.exports = Heatmap;