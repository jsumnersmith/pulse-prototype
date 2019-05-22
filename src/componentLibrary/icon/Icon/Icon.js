import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'rebass';

const iconWeightLookup = {
  brand: 'fab',
  light: 'fal',
  regular: 'far',
  solid: 'fas',
};

const Icon = ({
  className,
  icon,
  iconWeight,
  spin,
  ...props
}) => (
  <Text
    as="i"
    {...props}
    className={classNames(className, iconWeightLookup[iconWeight], `fa-${icon}`, spin && 'fa-spin')}
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconWeight: PropTypes.string,
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  className: null,
  iconWeight: 'regular',
  spin: false,
};

export default Icon;
