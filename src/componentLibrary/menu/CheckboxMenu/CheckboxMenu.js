import React from 'react';

import ButtonMenu from '../ButtonMenu';

import CheckboxItem from './CheckboxItem';

const CheckboxMenu = props => (
  <ButtonMenu closeOnClickInside={false} {...props} />
);

CheckboxMenu.Item = CheckboxItem;

export default CheckboxMenu;
