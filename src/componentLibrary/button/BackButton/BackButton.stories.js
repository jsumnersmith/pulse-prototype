import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import BackButton from '../BackButton';


const props = () => ({
  children: text('children', 'go back'),
});

storiesOf('button.BackButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => <BackButton {...props()} />);
