import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Pill from '../Pill';

const props = () => ({
  name: text('name', 'Blended Learning'),
});

storiesOf('pill.Pill', module)
  .addDecorator(withKnobs)
  .add('Removable', () => <Pill onRemove={action('onRemove')} {...props()} />)
  .add('Non-removable', () => <Pill {...props()} />);
