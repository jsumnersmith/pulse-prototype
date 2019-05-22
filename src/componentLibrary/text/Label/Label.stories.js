import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Label from './Label';

const props = () => ({
  children: text('children', 'Hello label'),
});

storiesOf('text.Label', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Label {...props()} />);
