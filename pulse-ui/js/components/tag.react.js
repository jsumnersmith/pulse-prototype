'use strict';

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

var React = require('react');

var Tag = React.createClass({
  displayName: 'Tag',
  render: function render() {
    var closeButton = '';
    if (this.props.handleClose) {
      closeButton = React.createElement(CloseButton, { handleClose: this.props.handleClose });
    }

    return React.createElement(
      'span',
      { className: 'tag label ' + (this.props.labelType ? ' label-' + this.props.labelType : ' label-default') },
      React.createElement(
        'span',
        { className: 'tag-inner' + (this.props.clickHandler ? ' clickable' : ''), onClick: this.props.clickHandler },
        this.props.iconName ? React.createElement('i', { className: 'fa fa-' + this.props.iconName }) : null,
        this.props.name
      ),
      closeButton
    );
  }
});

var CloseButton = React.createClass({
  displayName: 'CloseButton',
  render: function render() {
    return React.createElement(
      'a',
      { onClick: this.props.handleClose, className: 'tag-close' },
      React.createElement('i', { className: 'fa fa-times' })
    );
  }
});

module.exports = Tag;