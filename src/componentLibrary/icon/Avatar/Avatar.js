import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'rebass';

const sizeLookup = {
  sm: {
    height: '26px',
    width: '26px',
  },
  lg: {
    height: '42px',
    width: '42px',
  },
};

const Avatar = ({
  alt,
  size,
  src,
  ...props
}) => (
  <Box
    as="img"
    {...props}
    alt={alt}
    src={src}
    css={{
      borderRadius: '50%',
      ...sizeLookup[size],
    }}
  />
);

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizeLookup)),
};

Avatar.defaultProps = {
  alt: 'Avatar',
  size: 'lg',
};

export default Avatar;
