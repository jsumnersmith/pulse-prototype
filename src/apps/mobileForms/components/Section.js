import React from 'react';
import styled from 'styled-components';
import { ContentBlock } from '../../../componentLibrary/layout/';

const Section = styled(ContentBlock)`
  position: relative;
  background: ${({theme}) => theme.colors.white};
  border-top: none;
  box-shadow: none;
  border-bottom: ${({theme, noBorder})=> `solid ${noBorder ? 'transparent' : theme.colors.grayLight} ${theme.space[1]}px`}
`

const Subtitle = styled.h5`
  position: absolute;
  top: ${({theme})=> theme.space[4]}px;
  right: ${({theme})=> theme.space[4]}px;
  color: ${({theme})=> theme.colors.grayMediumDark}
`

export default ({children, subtitle, ...props}) => (
  <Section {...props}>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
  </Section>
);