import React from 'react';
import { Card } from 'rebass';

import ConfirmDeletionModalItem from './ConfirmDeletionModalItem';
import Item from './Item';
import ModalItem from './ModalItem';

const Menu = React.forwardRef((props, ref) => (
  <Card
    ref={ref}
    as="ul"
    boxShadow="0 5px 10px rgba(0,0,0,0.25)"
    border="2px solid"
    borderColor="grayLight"
    borderRadius="3px"
    m={0}
    p={0}
    role="menu"
    {...props}
    css={{
      listStyle: 'none',
      maxHeight: 218,
      minWidth: 200,
      overflowY: 'scroll',
    }}
  />
));

Menu.ConfirmDeletionModalItem = ConfirmDeletionModalItem;
Menu.Item = Item;
Menu.ModalItem = ModalItem;

export default Menu;
