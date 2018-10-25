import React, { Component } from 'react';
import styled from 'styled-components';
import tokens from '@kickup/pulse-style-tokens';
import chroma from 'chroma-js';

import Input from './Input';
import SelectableList from './SelectableList';

const Results = styled.div`
  position: absolute;
  z-index: 0;
  top: -7px;
  left: -8px;
  width: calc(100% + 16px);
  height: auto;
  min-height: 60px;
  background: ${tokens.colors.white};
  border: 2px solid ${tokens.colors.grayLight};
  box-shadow: 0px 5px 10px ${chroma(tokens.colors.grayMediumDark).alpha(0.25).css()};
  padding-top: 80px;
  border-radius: 2px;
`

const Dropdown = styled.div`
  position: relative;
  input {
    position: relative;
    z-index: 1;
  };
`
const Label = styled.label`
  position: relative;
  z-index: 1;
  margin-bottom: 5px;
`

export default class SelectableInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFocused: false
    }
    this.setFocuse = this.setFocus.bind(this);
  }
  setFocus(isFocused = true){
    this.setState({isFocused});
  }
  render(){
    return (
      <Dropdown>
        <Label>Selectable Input</Label>
        <Input
          onFocus={() => this.setFocus(true)}
          onBlur={()=> this.setFocus(false)}
        />
        { this.state.isFocused &&
          <Results>
            <SelectableList />
          </Results>
        }
      </Dropdown>
    )
  }
}