import PropTypes from 'prop-types';
import React from 'react';

import { Button, OutlineButton } from '../../button';
import { Modal } from '../../modal';
import { Paragraph } from '../../text';

import ModalItem from './ModalItem';

const ConfirmDeletionModalItem = ({
  children,
  handleConfirm,
  itemType,
  ...props
}) => (
  <ModalItem
    modal={({ handleClose, isOpen }) => (
      <Modal
        accentColor="red"
        footer={(
          <div>
            <OutlineButton color="red" onClick={handleClose}>
              No, Cancel
            </OutlineButton>
            <Button color="red" ml={2} onClick={handleConfirm}>Yes, Delete</Button>
          </div>
        )}
        handleClose={handleClose}
        headingText={children}
        isOpen={isOpen}
      >
        <Paragraph>Are you sure you want to delete this {itemType}?</Paragraph>
      </Modal>
    )}
    {...props}
  >
    {children}
  </ModalItem>
);

ConfirmDeletionModalItem.propTypes = {
  children: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  itemType: PropTypes.string,
};

ConfirmDeletionModalItem.defaultProps = {
  itemType: 'item',
};

export default ConfirmDeletionModalItem;
