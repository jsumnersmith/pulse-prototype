import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import Menu from './Menu';

storiesOf('menu.Menu', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Menu>
      <Menu.Item icon="comment" onClick={action('onClick 1')}>
        Hello There
      </Menu.Item>
      <Menu.Item icon="jedi-order" iconWeight="brand" onClick={action('onClick 2')}>
        General Kenobi
      </Menu.Item>
    </Menu>
  ));
