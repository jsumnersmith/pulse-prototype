import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'rebass';

const sizeLookup = {
  xs: { as: 'h5', fontSize: 2 },
  sm: { as: 'h4', fontSize: 3 },
  md: { as: 'h3', fontSize: 4 },
  lg: { as: 'h2', fontSize: 5 },
};

const Heading = ({ size, ...props }) => (
  <Text
    {...sizeLookup[size]}
    color="grayDark"
    fontFamily="default"
    fontWeight="heavy"
    my={0}
    {...props}
  />
);

Heading.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizeLookup)),
};

Heading.defaultProps = {
  size: 'md',
};

export default Heading;
