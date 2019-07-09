import React from 'react';
import styled from 'styled-components';
// import chroma from 'chroma-js';

import { Icon } from '../../../componentLibrary/icon';
import { Paragraph } from '../../../componentLibrary/text';

const Option = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  cursor:pointer;
  list-style: none;
  width: 100%;
  padding: ${({theme}) => theme.space[3]}px;
  color: ${({theme}) => `${theme.colors.grayDark}`};
  text-transform: none;
  letter-spacing: 0px;
  transition: all .2s ease-in-out;
  &:checked { background: red; }
  &:hover, &:focus, &:active {
    border-color: ${({theme}) => `${theme.colors.blue}`};
    background: ${({theme}) => `${theme.colors.grayLight}`};
  }
  > *:not(.background) { display: relative; z-index: 1; }
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .background {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border:
  }
  input:focus ~ .background, input:checked ~ .background {
    background:  ${({theme}) => `${theme.colors.grayLight}`};
  }
  i {
    padding: ${({theme}) => theme.space[2]}px;
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    border-radius: 2px;
    border:  ${({theme}) => `solid ${theme.colors.grayMediumLight} 2px`}
  }
  input:checked ~ i {
    color: ${({theme}) => theme.colors.blue};
    border-color:  ${({theme}) => `${theme.colors.blue}`}
  }
  input:focus ~ i {
    box-shadow: ${({theme}) => `0 0 5px  ${theme.colors.gold}`};
`;

const List = styled.ul`
  padding-left: 0;
  margin: 0;
`

const Choice = ({choice, name}) => (
  <Option>
    <input type="radio" id={choice} name={name} />
    <span className="background" />
    <Icon icon="check" iconWeight="solid" mr={3}/>
    <Paragraph>{choice}</Paragraph>
  </Option>
);

export default ({choices = [], ...props, name="default"}) => (
  <List {...props}>
    {choices.map((choiceText,index) => <Choice key={`choice-${index}`} name={name} choice={choiceText} />)}
  </List>
);