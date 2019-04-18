import React from 'react';

import { adjustColorToContrast } from '../../utils';

import Button from '../Button';

const BackButton = props => (
  <Button
    bg="white"
    borderColor="grayMedium"
    color="white"
    {...props}
    css={`
      position: relative;
      margin-left: 15px;
      padding-left: 17px;

      &:before {
        content: " ";
        position: absolute;
        left: -11px;
        top: 4px;
        border-left: inherit;
        border-bottom: inherit;
        background: inherit;
        height: 23px;
        width: 23px;
        border-bottom-left-radius: 3px;
        transform: rotate(45deg);
      }

      &, &:active, &:focus, &:hover {
        color: ${({ theme }) => adjustColorToContrast(theme.colors.grayMedium)}
      }
    `}
  />
);

export default BackButton;
