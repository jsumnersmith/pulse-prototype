import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import { Button, OutlineButton } from '../../button';
import { Modal } from '../../modal';
import { Paragraph } from '../../text';

import ButtonMenu from './ButtonMenu';

const props = () => ({
  alignment: select('alignment', ['left', 'right'], 'left'),
  buttonVariant: select('buttonVariant', ['outline', 'default', 'ghost']),
  direction: select('direction', ['down', 'up'], 'down'),
});

const iconWeights = [
  'brand',
  'light',
  'regular',
  'solid',
];

storiesOf('menu.ButtonMenu', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ButtonMenu {...props()}>
      <ButtonMenu.Item icon="comment" onClick={action('onClick 1')}>
        Hello There
      </ButtonMenu.Item>
      <ButtonMenu.Item icon="jedi-order" iconWeight="brand" onClick={action('onClick 2')}>
        General Kenobi
      </ButtonMenu.Item>
    </ButtonMenu>
  ))
  .add('With text', () => (
    <ButtonMenu
      {...props()}
      icon={text('icon', 'angle-down')}
      iconPosition={select('iconPosition', ['left', 'right'], 'right')}
      iconWeight={select('iconWeight', iconWeights, 'regular')}
      text={text('text', 'Actions')}
    >
      <ButtonMenu.Item icon="comment" onClick={action('onClick 1')}>
        Hello There
      </ButtonMenu.Item>
      <ButtonMenu.Item icon="jedi-order" iconWeight="brand" onClick={action('onClick 2')}>
        General Kenobi
      </ButtonMenu.Item>
    </ButtonMenu>
  ))
  .add('With confirmation modal', () => (
    <ButtonMenu>
      <ButtonMenu.ModalItem
        icon="galactic-republic"
        iconWeight="brand"
        modal={({ handleClose, isOpen }) => (
          <Modal
            accentColor="red"
            footer={(
              <div>
                <OutlineButton color="red" mr={2} onClick={handleClose}>Cancel</OutlineButton>
                <Button color="red" onClick={handleClose}>Execute</Button>
              </div>
            )}
            handleClose={handleClose}
            headingIcon="galactic-republic"
            headingIconWeight="brand"
            headingText="Order 66"
            isOpen={isOpen}
          >
            <Paragraph>
              Are you sure you want to execute?
            </Paragraph>
          </Modal>
        )}
      >
        Execute Order 66
      </ButtonMenu.ModalItem>
    </ButtonMenu>
  ));
