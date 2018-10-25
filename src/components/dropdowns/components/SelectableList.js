import React, { Component } from 'react';
import styled from 'styled-components';
import tokens from '@kickup/pulse-style-tokens';

const List = styled.ul`
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  list-style: none;
  padding: 5px 10px;
  background: transparent;
  transition: background .2s ease-in-out;
  &:hover { background: ${tokens.colors.grayLight}};
`

export default ({list = ["Item 1", "Item 2", "Item 3"]}) => (
  <List>
    {list.map(item => <ListItem>{item}</ListItem>)}
  </List>
)