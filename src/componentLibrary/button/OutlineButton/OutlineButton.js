import PropTypes from 'prop-types';
import React from 'react';

import { adjustColorToContrast, alphaColor, pickColor } from '../../utils';

import Button from '../Button';

const OutlineButton = props => (
  <Button
    bg="transparent"
    borderColor={props.color}
    {...props}
    css={`
      &, &:active, &:focus, &:hover {
        color: ${p => adjustColorToContrast(pickColor(p))}
      }

      &:focus, &:hover {
        background-color: ${p => (
          alphaColor(adjustColorToContrast(pickColor(p)), 0.05)
        )};
        text-decoration: none;
      }

      &:active {
        background-color: ${p => (
          alphaColor(adjustColorToContrast(pickColor(p)), 0.1)
        )};
      }

      &:disabled {
        background-color: transparent;
      }

      && {
        /* Prop overrides for button state */
        background-color: ${p => p.active && (
          alphaColor(adjustColorToContrast(pickColor(p)), 0.1)
        )};
      }
    `}
  />
);

OutlineButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
};

OutlineButton.defaultProps = {
  active: false,
  color: 'grayMedium',
};

export default OutlineButton;
