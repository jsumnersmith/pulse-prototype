import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Checkbox from './Checkbox';

const props = () => ({
  disabled: boolean('disabled', false),
  id: 'text-checkbox',
  indeterminate: boolean('indeterminate', false),
  label: text('label', 'Checkbox label'),
  onChange: action('onChange'),
});

storiesOf('input.Checkbox', module)
  .addDecorator(withKnobs)
  .add('Checked', () => <Checkbox defaultChecked {...props()} />)
  .add('Unchecked', () => <Checkbox {...props()} />);
