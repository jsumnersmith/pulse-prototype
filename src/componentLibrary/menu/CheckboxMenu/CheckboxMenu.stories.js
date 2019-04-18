import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import CheckboxMenu from './CheckboxMenu';

const props = () => ({
  alignment: select('alignment', ['left', 'right'], 'left'),
  buttonVariant: select('buttonVariant', ['outline', 'default', 'ghost']),
  direction: select('direction', ['down', 'up'], 'down'),
  text: text('text'),
});

storiesOf('menu.CheckboxMenu', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <CheckboxMenu {...props()}>
      <CheckboxMenu.Item onChange={action('Coruscant')}>Coruscant</CheckboxMenu.Item>
      <CheckboxMenu.Item onChange={action('Dantooine')}>Dantooine</CheckboxMenu.Item>
      <CheckboxMenu.Item onChange={action('Mustafar')}>Mustafar</CheckboxMenu.Item>
      <CheckboxMenu.Item onChange={action('Naboo')}>Naboo</CheckboxMenu.Item>
      <CheckboxMenu.Item onChange={action('Tatooine')}>Tatooine</CheckboxMenu.Item>
      <CheckboxMenu.Item onChange={action('Yavin')}>Yavin</CheckboxMenu.Item>
    </CheckboxMenu>
  ));
