import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Paragraph from '../../text/Paragraph';

import Modal from './Modal';

const iconWeights = [
  'brand',
  'light',
  'regular',
  'solid',
];

const props = () => ({
  accentColor: text('accentColor', null),
  closeOnClickOutside: boolean('closeOnClickOutside', true),
  handleClose: action('handleClose'),
  headingText: text('headingText', 'A long time ago, in a galaxy far, far away...'),
  headingIcon: text('headingIcon', 'rebel'),
  headingIconWeight: select('headingIconWeight', iconWeights, 'brand'),
  isOpen: boolean('isOpen', true),
  size: select('size', ['sm', 'lg', 'full']),
});

storiesOf('modal.Modal', module)
  .addParameters({
    info: {
      styles: {
        button: {
          topRight: {
            zIndex: 99999,
          },
        },
      },
    },
  })
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Modal {...props()}>
      <Paragraph>{text('children', 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.')}</Paragraph>
    </Modal>
  ))
  .add('With footer', () => (
    <Modal
      footer={<button>Update this button</button>}
      {...props()}
    >
      <Paragraph>{text('children', 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.')}</Paragraph>
    </Modal>
  ));
