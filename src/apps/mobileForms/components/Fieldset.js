import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
  margin: ${({theme})=> theme.space[5]}px 0 ${({theme})=> theme.space[6]}px;
`;

export default ({children, ...props}) => (
  <Fieldset {...props}>{children}</Fieldset>
);