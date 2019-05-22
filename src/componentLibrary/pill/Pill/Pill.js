import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex } from 'rebass';
import { withTheme } from 'styled-components';

import { Icon } from '../../icon';
import { Meta } from '../../text';

const BG_COLOR = 'grayMediumLight';

const Pill = withTheme(({ name, onRemove, theme, ...props }) => (
  <Flex
    alignItems="center"
    bg={BG_COLOR}
    {...props}
    css={`
      display: inline-flex;
      border-radius: 2px;
    `}
  >
    <Meta color="grayDark" px={2} py={1}>{name}</Meta>
    {onRemove && (
      <Box
        as="button"
        bg={BG_COLOR}
        color={theme.contrastingColors[BG_COLOR]}
        onClick={onRemove}
        px={2}
        py={1}
        css={`
          cursor: pointer;
          outline: none;
          border: 0px;
          border-left: 1px solid white;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
        `}
      >
        <Icon icon="times" />
      </Box>
    )}
  </Flex>
));

Pill.propTypes = {
  name: PropTypes.string,
  onRemove: PropTypes.func,
};

Pill.defaultProps = {
  name: '',
  onRemove: null,
};

export default Pill;
