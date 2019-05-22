import React from 'react';
import { Box, Text } from 'rebass';
import PropTypes from 'prop-types';

import Label from '../../text/Label';

const Fieldset = ({
  error,
  label,
  labelHtmlFor,
  children,
}) => (
  <Box
    as="fieldset"
    mx={0}
    my={3}
    p={0}
    css={`
      border: 0px;
    `}
  >
    {label && <Label
      htmlFor={labelHtmlFor}
      mb={1}
      pl={1}
    >{label}</Label>}
    {children}
    {error && <Text
      color="red"
      fontFamily="default"
      fontSize={0}
    >{error && error.message ? error.message : error}
    </Text>}
  </Box>
);

Fieldset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  label: PropTypes.string,
  labelHtmlFor: PropTypes.string,
};

Fieldset.defaultProps = {
  error: null,
  label: null,
  labelHtmlFor: null,
};

export default Fieldset;
