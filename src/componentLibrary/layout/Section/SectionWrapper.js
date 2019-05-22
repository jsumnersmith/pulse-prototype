import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const TRANSITION_NAME = 'collapsible-section-transition';
export const TRANSITION_TIMEOUT = 100;

const getEnterTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.enter : timeout
);

const getExitTimeout = ({ timeout }) => (
  typeof timeout === 'object' ? timeout.exit : timeout
);

const Wrapper = styled.div`
  height: auto;
  max-height: 0px;
  overflow: hidden;
  transition: max-height ${getEnterTimeout}ms linear;

  &.${TRANSITION_NAME}-enter-active {
    max-height: ${({ height }) => height}px;
  }

  &.${TRANSITION_NAME}-enter-done {
    max-height: ${({ height }) => height}px;
  }

  &.${TRANSITION_NAME}-exit {
    max-height: ${({ height }) => height}px;
    transition: max-height ${getExitTimeout}ms linear;
  }
`;

const SectionWrapper = React.forwardRef(({ children, height, transitionTimeout }, ref) => (
  <Wrapper
    ref={ref}
    height={height}
    timeout={transitionTimeout}
  >
    {children}
  </Wrapper>
));

SectionWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  transitionTimeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number.isRequired,
      exit: PropTypes.number.isRequired,
    }),
  ]).isRequired,
};

export default SectionWrapper;
