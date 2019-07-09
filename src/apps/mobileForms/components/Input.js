import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

const Input = styled.input`
  width: 100%;
  padding: ${({theme}) => theme.space[4]}px;
  border: none;
  border-bottom: ${({theme}) => `solid ${theme.colors.grayMediumLight} ${theme.space[1]}px`};
  border-radius: 0;
  outline: 0;
  font-size: ${({theme})=> theme.fontSizes[2]}px;
  background: ${({theme}) => theme.colors.grayLight};
  transition: all .2s ease-in-out;
  &:focus, &:active {
    border-image-source: linear-gradient(
      90deg,
      ${({theme}) => chroma(theme.colors.orange).alpha(.6).css()},
      ${({theme}) => chroma(theme.colors.gold).alpha(.6).css()},
      ${({theme}) => chroma(theme.colors.teal).alpha(.6).css()}
    );
    border-image-slice: 1;
    background: ${({theme}) => `${chroma(theme.colors.teal).alpha(.1).css()}`};
  }
`;

export default () => (
  <div>
    <Input />
  </div>
);