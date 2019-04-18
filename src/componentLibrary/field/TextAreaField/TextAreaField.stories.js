import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import TextAreaField from '../TextAreaField';

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
  rows: number('rows', 5),
});

storiesOf('field.TextAreaField', module)
  .addDecorator(withKnobs)
  .add('Default', () => <TextAreaField {...props()} />)
  .add('Error', () => (
    <TextAreaField
      {...props()}
      meta={{
        ...props.meta,
        error: text('error', 'Error Message'),
        touched: boolean('touched', true),
      }}
    />))
  .add('without label', () => (
    <TextAreaField {...props()} label={text('label', undefined)} />));
