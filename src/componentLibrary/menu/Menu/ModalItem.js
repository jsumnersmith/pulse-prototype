import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import Item from './Item';

export default class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { isOpen: false };
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const {
      children,
      modal,
      ...props
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Fragment>
        <Item onClick={this.handleOpen} {...props}>
          {children}
        </Item>
        {modal({ handleClose: this.handleClose, isOpen })}
      </Fragment>
    );
  }
}

ModalItem.propTypes = {
  children: PropTypes.string.isRequired,
  modal: PropTypes.func.isRequired,
};
