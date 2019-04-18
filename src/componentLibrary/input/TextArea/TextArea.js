import React from 'react';
import { Text } from 'rebass';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';

const TextArea = ({ rows, ...props }) => (
  <Text
    as="textarea"
    bg="white"
    color="grayDark"
    fontFamily="default"
    fontSize={1}
    fontWeight={500}
    lineHeight={1}
    px={3}
    py={3}
    width="100%"
    rows={rows}
    {...props}
    css={`
      border: 2px solid;
      border-color: ${({ theme, hasError }) => (hasError ? theme.colors.red : theme.colors.grayMediumLight)};
      border-radius: 2px;
      display: block;
      min-height: 40px;
      outline: none;
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

      &:focus {
        border-color: ${({ theme, hasError }) => (hasError ? theme.colors.red : theme.colors.blue)};
        box-shadow: ${({ hasError }) => hasError && 'inset 0 1px 1px rgba(0,0,0,0.075)'};
        background-color:  ${({ theme }) => chroma(theme.colors.blue).alpha(0.05).css()};
      }

      ::placeholder {
        color ${({ theme }) => theme.colors.grayMedium};
      }
    `}
  />
);

TextArea.propTypes = {
  hasError: PropTypes.bool,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  hasError: false,
  rows: 5,
};

export default TextArea;
