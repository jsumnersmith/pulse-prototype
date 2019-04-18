import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex } from 'rebass';

import Item from '../Menu/Item';

const Checkbox = ({ indeterminate, ...props }) => (
  <Box
    ref={(el) => {
      if (el) {
        el.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
      }
    }}
    as="input"
    type="checkbox"
    {...props}
    css={`
      /* Negate legacy styles */
      && {
        margin: 0;
      }
    `}
  />
);

Checkbox.propTypes = {
  indeterminate: PropTypes.bool,
};

Checkbox.defaultProps = {
  indeterminate: false,
};

const CheckboxItem = ({ children, ...props }) => (
  <Item as="label">
    <Flex alignItems="center">
      <Checkbox {...props} />
      <Box ml={3}>{children}</Box>
    </Flex>
  </Item>
);

CheckboxItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CheckboxItem;
