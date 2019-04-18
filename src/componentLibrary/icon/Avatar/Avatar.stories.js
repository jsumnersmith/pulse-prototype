import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Avatar from './Avatar';

const props = () => ({
  src: text('src', 'https://randomuser.me/api/portraits/lego/2.jpg'),
});

storiesOf('icon.Avatar', module)
  .addDecorator(withKnobs)
  .add('Small', () => <Avatar size="sm" {...props()} />)
  .add('Large', () => <Avatar size="lg" {...props()} />);
