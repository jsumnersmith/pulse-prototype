import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import TextArea from '../TextArea';

const props = () => ({
  hasError: boolean('hasError', false),
  onChange: action('onChange'),
  placeholder: text('placeholder', undefined),
  rows: number('rows', undefined),
});

storiesOf('input.TextArea', module)
  .addDecorator(withKnobs)
  .add('Default', () => <TextArea {...props()} />);
