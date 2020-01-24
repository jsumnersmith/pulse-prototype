import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: ${({theme}) => theme.colors.grayMediumDark};
  font-size: ${({theme}) => theme.fontSizes[2]}px;
  text-transform: none;
  letter-spacing: 0;
  margin: ${({theme})=> theme.space[1]}px 0px;
`

export default ({children, ...props}) => (
  <Label {...props}>{children}</Label>
)