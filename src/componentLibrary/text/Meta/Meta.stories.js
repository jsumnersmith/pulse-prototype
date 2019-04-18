import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Meta from './Meta';

const props = () => ({
  children: text('children', 'So meta'),
});

storiesOf('text.Meta', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Meta {...props()} />);
