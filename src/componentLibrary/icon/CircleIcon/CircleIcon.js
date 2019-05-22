import PropTypes from 'prop-types';
import React from 'react';
import { css, withTheme } from 'styled-components';

import Icon from '../Icon';

const sizeLookup = {
  sm: css`
    height: 26px;
    width: 26px;
    font-size: 16px;
    line-height: 26px;
  `,
  lg: css`
    height: 42px;
    width: 42px;
    font-size: 24px;
    line-height: 42px;
  `,
};

const CircleIcon = ({
  color,
  icon,
  iconWeight,
  theme,
  ...props
}) => (
  <Icon
    {...props}
    bg={color}
    color={theme.contrastingColors[color] || theme.colors.grayDark}
    icon={icon}
    iconWeight={iconWeight}
    css={`
      && {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
        ${p => sizeLookup[p.size]}
        flex-shrink: 0;
      }
    `}
  />
);

CircleIcon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconWeight: PropTypes.string, // eslint-disable-line react/require-default-props
  size: PropTypes.oneOf(Object.keys(sizeLookup)),
  theme: PropTypes.shape({
    contrastingColors: PropTypes.object.isRequired,
  }).isRequired,
};

CircleIcon.defaultProps = {
  color: 'grayLight',
  size: 'lg',
};

export default withTheme(CircleIcon);
