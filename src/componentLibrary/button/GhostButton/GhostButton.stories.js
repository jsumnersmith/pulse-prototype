import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import tokens from '@kickup/pulse-style-tokens';

import GhostButton from '../GhostButton';

const buttonSizes = [
  'sm',
  'md',
];

const iconPositions = [
  'left',
  'right',
];

const iconWeights = [
  'brand',
  'light',
  'regular',
  'solid',
];

const props = () => ({
  children: text('children', 'See Details'),
  color: select('color', Object.keys(tokens.colors), 'blue'),
  disabled: boolean('disabled', false),
  href: text('href', undefined),
  onClick: action('onClick'),
  size: select('size', buttonSizes, 'md'),
});

storiesOf('button.GhostButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => <GhostButton {...props()} />)
  .add('With Icon', () => (
    <GhostButton
      {...props()}
      icon={text('icon', 'check')}
      iconWeight={select('iconWeight', iconWeights, 'regular')}
      iconPosition={select('iconPosition', iconPositions, 'left')}
    >{text('children', 'confirm')}</GhostButton>));
