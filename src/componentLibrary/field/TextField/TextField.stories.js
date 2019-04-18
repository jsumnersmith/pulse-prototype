import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import TextField from '../TextField';

const props = () => ({
  input: {
    name: text('name', 'input-field-name'),
    onBlur: action('onBlur'),
    onChange: action('onChange'),
  },
  label: text('label', 'label'),
  meta: {
    error: text('error', undefined),
    form: text('form', 'form-name'),
    touched: boolean('touched', false),
  },
  onChange: action('onChange'),
  placeholder: text('placeholder', undefined),
});

storiesOf('field.TextField', module)
  .addDecorator(withKnobs)
  .add('Default', () => <TextField {...props()} />)
  .add('Error', () => (
    <TextField
      {...props()}
      meta={{
        ...props.meta,
        error: text('error', 'Error Message'),
        touched: boolean('touched', true),
      }}
    />))
  .add('without label', () => (
    <TextField {...props()} label={text('label', undefined)} />));
