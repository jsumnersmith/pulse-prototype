import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import { ContentBlock } from '../../../componentLibrary/layout/';

const Section = styled(ContentBlock)`
  position: relative;
  width: ${({editing}) => editing ? 960 : 760 }px;
  max-width: 97%;
  margin: 0 auto;
  background: ${({theme}) => theme.colors.white};
  padding-left: ${({theme})=> theme.space[5]}px;
  padding-right: ${({theme})=> theme.space[5]}px;
  border-top: none;
  box-shadow: none;
  border-bottom: ${({theme, noBorder})=> `solid ${noBorder ? 'transparent' : theme.colors.grayLight} ${theme.space[1]}px`};
  * {  z-index: ${({editing}) => editing ? '9999' : '0' }; }
  &:before {
    content: " ";
    display: ${({editing}) => editing ? 'block' : 'none' };
    position: fixed;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: ${({theme}) => chroma(theme.colors.grayDark).alpha(.5).css()};
  }
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