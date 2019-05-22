import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button as RebassButton, Flex } from 'rebass';

import Icon from '../../icon/Icon';
import { darkenColor, pickColor, pickContrastingColor } from '../../utils';

const sizeLookup = {
  sm: { fontSize: 0, px: 4, py: 1 },
  md: { fontSize: 0, px: 5, py: '8px' },
};

const deriveAs = ({ href, to }) => {
  if (href) {
    return 'a';
  } else if (to) {
    // eslint-disable-next-line react/prop-types
    return ({ borderColor, borderRadius, ...props }) => <Link {...props} />;
  }
  return 'button';
};

const Button = ({
  active,
  block,
  children,
  disabled,
  icon,
  iconPosition,
  iconSpin,
  iconWeight,
  size,
  ...props
}) => (
  <RebassButton
    as={deriveAs(props)}
    type="button"
    {...sizeLookup[size]}
    bg={props.color}
    border={1}
    borderColor={props.color}
    borderRadius={3}
    disabled={disabled}
    fontWeight={700}
    width={block ? '100%' : 'auto'}
    {...props}
    css={`
      display: inline-block;
      vertical-align: middle;
      font-family: ${({ theme }) => theme.fonts.default};
      letter-spacing: 1px;
      line-height: ${({ theme }) => theme.lineHeights[1]} !important;
      cursor: pointer;
      outline: none;
      text-transform: uppercase;
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

      &, &:active, &:focus, &:hover {
        /* Negate bootstrap rules for element states */
        color: ${pickContrastingColor}
      }

      &:focus, &:hover {
        background-color: ${p => darkenColor(pickColor(p), 0.2)};
        text-decoration: none;
      }

      &:active {
        background-color: ${p => darkenColor(pickColor(p), 0.4)};
      }

      &:disabled {
        background-color: ${pickColor};
        cursor: not-allowed;
        opacity: 0.65;
        box-shadow: none;
      }

      && {
        /* Prop overrides for button state */
        background-color: ${p => p.active && darkenColor(pickColor(p), 0.4)};
      }
    `}
  >
    {!icon ? children : (
      <Flex
        alignItems="center"
        css="display: inline-flex"
        flexDirection={iconPosition === 'left' ? 'row' : 'row-reverse'}
      >
        <Icon
          fontSize={size === 'md' ? 2 : 1}
          icon={icon}
          iconWeight={iconWeight}
          ml={(iconPosition !== 'left' && children) ? 2 : 0}
          mr={(iconPosition === 'left' && children) ? 2 : 0}
          spin={iconSpin}
        />
        {children}
      </Flex>
    )}
  </RebassButton>

);

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconSpin: PropTypes.bool,
  iconWeight: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeLookup)),
  to: PropTypes.string,
};

Button.defaultProps = {
  active: false,
  block: false,
  children: '',
  color: 'blue',
  disabled: false,
  href: null,
  icon: null,
  iconPosition: 'left',
  iconSpin: false,
  iconWeight: 'regular',
  size: 'md',
  to: null,
};

export default Button;
