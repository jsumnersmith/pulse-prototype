import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Menu from '../Menu';

export const TRANSITION_NAME = 'button-menu-transition';
export const TRANSITION_TIMEOUT = 100;

const getEnterTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.enter : timeout
);

const getExitTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.exit : timeout
);

const Wrapper = styled.div`
  position: absolute;
  bottom: ${({ direction }) => (direction === 'up' ? '100%' : 'auto')};
  left: ${({ alignment }) => (alignment === 'left' ? 0 : 'auto')};
  right: ${({ alignment }) => (alignment === 'right' ? 0 : 'auto')};
  top: ${({ direction }) => (direction === 'down' ? '100%' : 'auto')};
  z-index: 999;

  transition: opacity ${getEnterTimeout}ms linear, transform ${getEnterTimeout}ms ease-in-out;

  &.${TRANSITION_NAME}-enter {
    opacity: 0.01;
    transform: translateY(${({ direction }) => (direction === 'up' ? '-10' : '10')}px);
  }

  &.${TRANSITION_NAME}-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.${TRANSITION_NAME}-exit {
    opacity: 1;
    transition: opacity ${getExitTimeout}ms linear, transform ${getExitTimeout}ms ease-in-out;
    transform: translateY(0);
  }

  &.${TRANSITION_NAME}-exit-active {
    opacity: 0.01;
    transform: translateY(${({ direction }) => (direction === 'up' ? '-10' : '10')}px);
  }

  &.${TRANSITION_NAME}-exit-done {
    /**
     * When menu is closed, hide it but continue rendering it in case
     * any of its children have created portals (such as modals)
     */
    display: none;
  }
`;

export default class ButtonMenuWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.onEscape = this.onEscape.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    // Bind handlers for conditionally handling close
    document.addEventListener('keydown', this.onEscape, false);
    const { isOpen } = this.props;
    if (isOpen) {
      document.addEventListener('click', this.onClick, false);
    }
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    if (prevProps.isOpen !== isOpen) {
      if (isOpen) {
        document.addEventListener('click', this.onClick, false);
      } else {
        document.removeEventListener('click', this.onClick, false);
      }
    }
  }

  componentWillUnmount() {
    // Unbind handlers bound in componentDidMount
    document.removeEventListener('keydown', this.onEscape, false);
    document.removeEventListener('click', this.onClick, false);
  }

  onClick(e) {
    const { closeOnClickInside, handleClose } = this.props;
    if (closeOnClickInside || !this.menuEl.contains(e.target)) {
      handleClose();
    }
  }

  onEscape(e) {
    const { handleClose } = this.props;
    if (e.keyCode === 27) {
      handleClose();
    }
  }

  setRef(el) {
    this.menuEl = el;
  }

  render() {
    const {
      alignment,
      children,
      direction,
      transitionTimeout,
    } = this.props;

    return (
      <Wrapper
        alignment={alignment}
        direction={direction}
        timeout={transitionTimeout}
      >
        <Menu ref={this.setRef}>{children}</Menu>
      </Wrapper>
    );
  }
}

ButtonMenuWrapper.propTypes = {
  alignment: PropTypes.oneOf(['left', 'right']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  closeOnClickInside: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['down', 'up']).isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  transitionTimeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number.isRequired,
      exit: PropTypes.number.isRequired,
    }),
  ]).isRequired,
};

ButtonMenuWrapper.Item = Menu.Item;
