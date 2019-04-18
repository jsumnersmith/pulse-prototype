import chroma from 'chroma-js';
import { memoize } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';

const TRANSITION_NAME = 'modal-transition';

const HideBodyOverflow = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const getEnterTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.enter : timeout
);

const getExitTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.exit : timeout
);

const StyledModalWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => chroma(theme.colors.grayMedium).alpha(0.8).css()};
  overflow-y: scroll;
  transition: opacity ${getEnterTimeout}ms linear;

  > * {
    transition: transform ${getEnterTimeout}ms ease-in-out;
  }

  &.${TRANSITION_NAME}-enter {
    opacity: 0.01;
    > * {
      transform: translateY(-40px);
    }
  }

  &.${TRANSITION_NAME}-enter-active {
    opacity: 1;
    > * {
      transform: translateY(0%);
    }
  }

  &.${TRANSITION_NAME}-exit {
    opacity: 1;
    transition: opacity ${getExitTimeout}ms linear;
    > * {
      transform: translateY(0%);
      transition: transform ${getExitTimeout}ms ease-in-out;
    }
  }

  &.${TRANSITION_NAME}-exit-active {
    opacity: 0.01;
    > * {
      transform: translateY(-40px);
    }
  }
`;

export default class ModalWrapper extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.onClick = this.onClick.bind(this);
    this.onEscape = this.onEscape.bind(this);
    this.setModalRef = this.setModalRef.bind(this);
  }

  componentDidMount() {
    // Bind handlers for conditionally handling close
    document.addEventListener('keydown', this.onEscape, false);
    this.el.addEventListener('click', this.onClick, false);

    // Add portal to document
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    // Unbind handlers bound in componentDidMount
    document.removeEventListener('keydown', this.onEscape, false);
    this.el.removeEventListener('click', this.onClick, false);

    // Remove portal from page
    this.el = null;
  }

  /**
   * Event handler for clicks for close-on-click-outside logic.
   * @param {object} e
   */
  onClick(e) {
    this.handleClose(() => {
      const { closeOnClickOutside } = this.props;
      return closeOnClickOutside && !this.modalEl.contains(e.target);
    });
  }

  /**
   * Event handler for key presses for close-on-escape logic.
   * @param {object} e
   */
  onEscape(e) {
    this.handleClose(() => e.keyCode === 27);
  }

  /**
   * Callback to bind reference of modal DOM element
   * @param {object} el
   */
  setModalRef(el) {
    this.modalEl = el;
  }

  /**
   * Calls the `handleClose` prop if the modal is open and an optionally
   * provided predicate function evaluates truthily.
   * @param {function} [predicate]
   */
  handleClose(predicate = () => true) {
    const { isOpen, handleClose } = this.props;
    if (isOpen && predicate()) {
      handleClose();
    }
  }

  _getChildren = memoize(() => {
    const { children } = this.props;
    return children(this.setModalRef);
  });

  render() {
    const {
      isOpen,
      transitionTimeout,
    } = this.props;


    if (isOpen) {
      // When the modal is closing, avoid rerendering the children
      // using memoiziation while the modal animates its closing, which
      // otherwise could cause the animation to flicker or even raise
      // uncaught exceptions, depending on the implementation of the
      // modal.
      //
      // If the modal is still open, never use the memoized children,
      // since the children should be able to update.
      this._getChildren.cache.clear();
    }

    return createPortal((
      <CSSTransition
        classNames={TRANSITION_NAME}
        in={isOpen}
        timeout={transitionTimeout}
        unmountOnExit
      >
        {() => (
          <StyledModalWrapper timeout={transitionTimeout}>
            <HideBodyOverflow />
            {this._getChildren()}
          </StyledModalWrapper>
        )}
      </CSSTransition>
    ), this.el);
  }
}

ModalWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  closeOnClickOutside: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  transitionTimeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number.isRequired,
      exit: PropTypes.number.isRequired,
    }),
  ]),
};

ModalWrapper.defaultProps = {
  children: null,
  className: '',
  closeOnClickOutside: true,
  transitionTimeout: 200,
};
