import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';
import { css } from 'styled-components';

import { ContentBlock } from 'ComponentLibrary/layout';

import { Icon } from '../../icon';
import ModalWrapper from './ModalWrapper';

const sizeLookup = {
  sm: css`
    width: 90%;
    max-width: 600px;
  `,
  lg: css`
    width: 90%;
    max-width: 960px;
  `,
  full: css`
    width: 100%;
    min-height: 100%;
    margin-top: 0;
    margin-bottom: 0;

    > * {
      margin: 0 auto;
      max-width: 960px;
    }
  `,
};

const Modal = ({
  accentColor,
  children,
  closeOnClickOutside,
  footer,
  headingText,
  headingIcon,
  headingIconWeight,
  isOpen,
  handleClose,
  size,
}) => (
  <ModalWrapper
    closeOnClickOutside={closeOnClickOutside}
    handleClose={handleClose}
    isOpen={isOpen}
  >
    {ref => (
      <ContentBlock
        ref={ref}
        accentColor={accentColor}
        bg="white"
        headingIcon={headingIcon}
        headingIconWeight={headingIconWeight}
        headingText={headingText}
        mx="auto"
        my={6}
        size={size}
        css={`
          position: relative;
          overflow: hidden;
          ${p => sizeLookup[p.size]}
          border-radius: 2px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        `}
      >
        <Box
          as="button"
          bg="transparent"
          color="grayMediumDark"
          onClick={handleClose}
          css={`
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            outline: none;
            border: 0;
            &:hover {
              opacity: 0.7;
            }
          `}
        >
          <Icon fontSize={16} icon="times" />
        </Box>
        {typeof children === 'function' ? children() : children}
        {footer && <Box
          bg="grayLight"
          mt={4}
          mb={-5}
          mx={-5}
          px={5}
          py={4}
          css={`
            border-top: 2px solid ${({ theme }) => theme.colors.grayMediumLight};
            text-align: right;
            > button {
              margin-left: 0;
              margin-right: 0;
              margin-bottom: 0 !important;
            }
          `}
        >
          {footer}
        </Box>}
      </ContentBlock>
    )}
  </ModalWrapper>
);

Modal.propTypes = {
  accentColor: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  closeOnClickOutside: PropTypes.bool,
  footer: PropTypes.node,
  headingText: PropTypes.string,
  headingIcon: PropTypes.string,
  headingIconWeight: PropTypes.string, // eslint-disable-line react/require-default-props
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeLookup)),
};

Modal.defaultProps = {
  closeOnClickOutside: true,
  footer: null,
  headingText: '',
  headingIcon: '',
  size: 'sm',
};

export default Modal;
