import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import tokens from '@kickup/pulse-style-tokens';

import OutlineButton from '../OutlineButton';

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
  block: boolean('block', false),
  children: text('children', 'See Details'),
  color: select('color', Object.keys(tokens.colors), 'blue'),
  disabled: boolean('disabled', false),
  href: text('href', undefined),
  onClick: action('onClick'),
  size: select('size', buttonSizes, 'md'),
});

storiesOf('button.OutlineButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => <OutlineButton {...props()} />)
  .add('With Icon', () => (
    <OutlineButton
      {...props()}
      icon={text('icon', 'check')}
      iconWeight={select('iconWeight', iconWeights, 'regular')}
      iconPosition={select('iconPosition', iconPositions, 'left')}
    >{text('children', 'confirm')}</OutlineButton>));
