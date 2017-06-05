'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = require('moment'); /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var SurveysList = _react2.default.createClass({
  displayName: 'SurveysList',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'surveys-list' },
      this.props.surveys.map(function (survey) {
        return _react2.default.createElement(SurveysListItem, survey);
      })
    );
  }
});

var SurveysListItem = _react2.default.createClass({
  displayName: 'SurveysListItem',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'surveys-list-item' },
      _react2.default.createElement(
        'div',
        { className: 'surveys-list-item-inner' },
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-icon' },
          _react2.default.createElement('div', { className: 'surveys-list-item-icon-svg' }),
          !this.props.isOpen ? _react2.default.createElement(
            'span',
            { className: 'label label-danger' },
            'Closed'
          ) : ''
        ),
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-content' },
          _react2.default.createElement(
            'a',
            { href: this.props.url },
            _react2.default.createElement(
              'div',
              { className: 'surveys-list-item-title' },
              this.props.name || ''
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'surveys-list-item-date' },
            'Opened: ',
            moment(this.props.created).isValid() ? moment(this.props.created).format('MM/DD/YY') : 'Not available'
          ),
          _react2.default.createElement(
            'div',
            { className: 'surveys-list-item-date' },
            'Last Activity: ',
            moment(this.props.lastActivity).isValid() ? moment(this.props.lastActivity).format('MM/DD/YY') : 'Not available'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-count' },
          _react2.default.createElement(
            'p',
            { className: 'surveys-list-item-response-totals meta' },
            _react2.default.createElement(
              'span',
              { className: 'orange' },
              this.props.totalRepsonses || 0
            ),
            ' Response',
            this.props.totalRepsonses !== 1 ? 's' : ''
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'surveys-list-item-button' },
          _react2.default.createElement(
            'a',
            { href: this.props.url, className: 'btn btn-trans btn-primary' },
            'View Report'
          ),
          this.props.actionsMenu && this.props.actionsMenu.length ? _react2.default.createElement(ManageReportMenu, { actionsMenu: this.props.actionsMenu }) : '',
          this.props.formUrl && this.props.formUrl.length ? _react2.default.createElement(
            'div',
            { style: { fontSize: 12, textAlign: 'center', marginTop: 10 } },
            _react2.default.createElement(
              'a',
              { href: this.props.formUrl, target: 'blank', style: { color: '#888' } },
              'View Form'
            )
          ) : ''
        )
      )
    );
  }
});

var ManageReportMenu = function ManageReportMenu(_ref) {
  var _ref$actionsMenu = _ref.actionsMenu,
      actionsMenu = _ref$actionsMenu === undefined ? [] : _ref$actionsMenu;
  return _react2.default.createElement(
    'div',
    { style: { position: 'relative', display: 'inline-block' } },
    _react2.default.createElement(
      'a',
      { href: '', className: 'btn btn-default btn-trans dropdown-toggle', 'data-toggle': 'dropdown' },
      ' Manage ',
      _react2.default.createElement('i', { className: 'fa fa-caret-down' })
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu', role: 'menu' },
      actionsMenu.map(function (menuItem) {
        return _react2.default.createElement(ActionsMenuItem, menuItem);
      })
    )
  );
};

var ActionsMenuItem = function ActionsMenuItem(_ref2) {
  var icon = _ref2.icon,
      name = _ref2.name,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === undefined ? function () {} : _ref2$onClick,
      href = _ref2.href;
  return _react2.default.createElement(
    'li',
    null,
    href ? _react2.default.createElement(
      'a',
      { onClick: onClick, href: href },
      _react2.default.createElement('i', { className: 'fa ' + (icon || '') }),
      ' ',
      name
    ) : _react2.default.createElement(
      'a',
      { onClick: onClick },
      _react2.default.createElement('i', { className: 'fa ' + (icon || '') }),
      ' ',
      name
    )
  );
};
module.exports = SurveysList;