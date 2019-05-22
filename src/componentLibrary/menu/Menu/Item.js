import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text } from 'rebass';

import { Icon } from '../../icon';

const deriveAs = ({ href, to }) => {
  if (href) {
    return 'a';
  } else if (to) {
    // Blacklist certain props passed through that are used by Rebass,
    // since otherwise React raises warnings when innappropriate props
    // are passed to the `Link` component.
    // eslint-disable-next-line react/prop-types
    return ({ lineHeight, ...props }) => <Link {...props} />;
  }
  return 'span';
};

const Item = ({
  children,
  icon,
  iconWeight,
  ...props
}) => (
  <li
    css={`
      &:not(:first-child) {
        border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
      }
    `}
  >
    <Text
      as={deriveAs(props)}
      bg="white"
      color="grayDark"
      fontFamily="default"
      fontSize={2}
      fontWeight="normal"
      lineHeight={1}
      p={3}
      role="menuitem"
      {...props}
      css={`
        display: block;

        /* Negate legacy styles */
        letter-spacing: 0;
        margin-bottom: 0;
        text-transform: none;

        &:focus, &:hover {
          background-color: ${({ theme }) => theme.colors.grayLight};
          cursor: pointer;
          text-decoration: none;
        }
      `}
    >
      {!icon ? children : (
        <Flex alignItems="center">
          <Icon
            fontSize={1}
            icon={icon}
            iconWeight={iconWeight}
            mr={3}
          />
          {children}
        </Flex>
      )}
    </Text>
  </li>
);

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconWeight: PropTypes.string,
  to: PropTypes.string,
};

Item.defaultProps = {
  href: null,
  icon: null,
  iconWeight: 'regular',
  to: null,
};

export default Item;
