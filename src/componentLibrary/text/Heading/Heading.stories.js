import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Heading from './Heading';

const props = () => ({
  children: text('children', 'Now Headlining'),
});

storiesOf('text.Heading', module)
  .addDecorator(withKnobs)
  .add('Extra small', () => <Heading size="xs" {...props()} />)
  .add('Small', () => <Heading size="sm" {...props()} />)
  .add('Medium', () => <Heading size="md" {...props()} />)
  .add('Large', () => <Heading size="lg" {...props()} />);

