import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import tokens from '@kickup/pulse-style-tokens';

import Button from '../Button';

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
  children: text('children', 'view codes'),
  color: select('color', Object.keys(tokens.colors), 'blue'),
  disabled: boolean('disabled', false),
  href: text('href', undefined),
  onClick: action('onClick'),
  size: select('size', buttonSizes, 'md'),
});

storiesOf('button.Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Button {...props()} />)
  .add('With Icon', () => (
    <Button
      {...props()}
      icon={text('icon', 'angle-left')}
      iconWeight={select('iconWeight', iconWeights, 'regular')}
      iconPosition={select('iconPosition', iconPositions, 'left')}
    >{text('children', 'Before')}</Button>
  ));
