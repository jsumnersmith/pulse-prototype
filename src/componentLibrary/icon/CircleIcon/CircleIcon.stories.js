import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import tokens from '@kickup/pulse-style-tokens';

import CircleIcon from './CircleIcon';

const iconWeights = [
  'brand',
  'light',
  'regular',
  'solid',
];

const props = () => ({
  color: select('color', Object.keys(tokens.colors), 'blue'),
  icon: text('icon', 'user'),
  iconWeight: select('iconWeight', iconWeights, 'regular'),
  spin: boolean('spin', false),
});

storiesOf('icon.CircleIcon', module)
  .addDecorator(withKnobs)
  .add('Small', () => <CircleIcon size="sm" {...props()} />)
  .add('Large', () => <CircleIcon size="lg" {...props()} />);
