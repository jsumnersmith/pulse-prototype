'use strict';

var _react = require('react');

var LoadingModal = function LoadingModal(_ref) {
  var isLoaded = _ref.isLoaded,
      message = _ref.message;
  return React.createElement(
    'div',
    { style: { display: isLoaded ? 'none' : 'block' }, className: 'modal fade ' + (isLoaded ? '' : 'in'), tabIndex: '-1', role: 'dialog', 'aria-hidden': 'true' },
    React.createElement(
      'div',
      { className: 'modal-dialog' },
      React.createElement(
        'div',
        { className: 'modal-content' },
        React.createElement(
          'div',
          { className: 'modal-body text-center' },
          React.createElement('div', { className: 'loading-modal-image' }),
          React.createElement(
            'h3',
            { className: 'loading-modal-text' },
            message
          )
        )
      )
    )
  );
}; /* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

LoadingModal.propTypes = {
  isLoaded: _react.PropTypes.bool,
  message: _react.PropTypes.string
};

LoadingModal.defaultProps = {
  isLoaded: true,
  message: 'Loading your dashboard'
};

module.exports = LoadingModal;