import React from 'react';
import styled from 'styled-components';
import tokens from '@kickup/pulse-style-tokens';

const Input = styled.input`
  width: 100%;
  font-size: ${tokens.typography.baseFontSize}px;
  font-weight: ${tokens.typography.fontWeight.bold};
  padding: 8px 10px;
  border: solid 2px ${tokens.colors.grayMediumLight};
  transition: border .1s ease-in-out;
  &:active, &:focus {
    border-color: ${tokens.colors.pulseBlue};
    outline: none;
  }
  &::placeholder { color: ${tokens.colors.grayMedium}}
  &:-ms-input-placeholder { color: ${tokens.colors.grayMedium}}
  &::-ms-input-placeholder { color: ${tokens.colors.grayMedium}}


`

export default ({
  placeholder = "Start typing to search",
  onFocus = () => {},
  onBlur = () => {},
}) => (
  <Input
    placeholder={placeholder}
    onFocus={onFocus}
    onBlur={onBlur}
  />
)