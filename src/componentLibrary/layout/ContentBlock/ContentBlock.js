import PropTypes from 'prop-types';
import React from 'react';
import { Box, Card, Flex } from 'rebass';

import { CircleIcon } from '../../icon';
import { Heading } from '../../text';

const ContentBlock = React.forwardRef(({
  accentColor,
  borderTop,
  children,
  headingIcon,
  headingIconWeight,
  headingMenu,
  headingText,
  innerPadding,
  topPadding,
  ...props
}, ref) => (
  <Card
    ref={ref}
    accentColor={accentColor}
    bg="white"
    width={1}
    pt={topPadding}
    {...props}
    css={`
      border-top: ${borderTop || 'none'};
      border-bottom: 2px solid ${({ theme }) => theme.colors.grayMediumLight};
    `}
  >
    {headingText && (
      <Flex justifyContent="space-between" mb={4} px={5}>
        <Flex alignItems="center">
          {headingIcon && (
            <CircleIcon
              color={accentColor}
              icon={headingIcon}
              iconWeight={headingIconWeight}
              mr={2}
              size="sm"
            />
          )}
          <Heading size="sm">{headingText}</Heading>
        </Flex>
        {headingMenu}
      </Flex>
    )}
    <Box pb={innerPadding} px={innerPadding}>
      {children}
    </Box>
  </Card>
));

ContentBlock.propTypes = {
  accentColor: PropTypes.string,
  borderTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  headingIcon: PropTypes.string,
  headingIconWeight: PropTypes.string, // eslint-disable-line react/require-default-props
  headingMenu: PropTypes.node,
  headingText: PropTypes.string,
  innerPadding: PropTypes.number,
  topPadding: PropTypes.number,
};

ContentBlock.defaultProps = {
  accentColor: '',
  borderTop: ({ accentColor, theme }) => (
    `3px solid ${theme.colors[accentColor] || theme.colors.lightBlue}`
  ),
  headingIcon: '',
  headingMenu: null,
  headingText: '',
  innerPadding: 5,
  topPadding: 5,
};

export default ContentBlock;
