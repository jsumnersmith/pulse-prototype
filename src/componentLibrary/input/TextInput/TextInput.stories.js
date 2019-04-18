import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import TextInput from '../TextInput';

const props = () => ({
  hasError: boolean('hasError', false),
  onChange: action('onChange'),
  placeholder: text('placeholder', undefined),
});

storiesOf('input.TextInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => <TextInput {...props()} />);

