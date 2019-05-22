import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Fieldset from '../Fieldset';

const props = () => ({
  label: text('label', 'label'),
  error: text('error', undefined),
  children: text('children', 'Children'),
});

storiesOf('field.Fieldset', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Fieldset{...props()} />)
  .add('Error', () => (
    <Fieldset
      {...props()}
      error={text('error', 'Error Message')}
    />))
  .add('without label', () => (
    <Fieldset {...props()} label={text('label', undefined)} />));
