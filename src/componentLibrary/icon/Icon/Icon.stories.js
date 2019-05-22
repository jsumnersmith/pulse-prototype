import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Icon from './Icon';

const fontSizes = [
  '16px',
  '24px',
  '32px',
];

const iconWeights = [
  'brand',
  'light',
  'regular',
  'solid',
];

const props = () => ({
  fontSize: select('fontSize', fontSizes),
  icon: text('icon', 'user'),
  iconWeight: select('iconWeight', iconWeights, 'regular'),
  spin: boolean('spin', false),
});

storiesOf('icon.Icon', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Icon {...props()} />);
