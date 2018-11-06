import React from 'react';
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
  cursor: pointer;
  &:hover { background: ${tokens.colors.grayLight}};
`

export default ({list = ["Item 1", "Item 2", "Item 3"], setValue}) => (
  <List>
    {list.map(item => <ListItem onClick={()=> setValue(item)} key={item}>{item}</ListItem>)}
  </List>
)