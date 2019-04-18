import PropTypes from 'prop-types';
import React from 'react';

import OutlineButton from '../OutlineButton';

const GhostButton = props => (
  <OutlineButton
    borderColor="transparent"
    {...props}
  />
);

GhostButton.propTypes = {
  color: PropTypes.string,
};

GhostButton.defaultProps = {
  color: 'blue',
};

export default GhostButton;
