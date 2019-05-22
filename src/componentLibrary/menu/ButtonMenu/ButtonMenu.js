import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Box } from 'rebass';

import { Button, GhostButton, OutlineButton } from '../../button';

import Menu from '../Menu';

import ButtonMenuWrapper, { TRANSITION_NAME, TRANSITION_TIMEOUT } from './ButtonMenuWrapper';

const deriveButtonComponent = (buttonVariant) => {
  if (buttonVariant === 'outline') {
    return OutlineButton;
  } else if (buttonVariant === 'ghost') {
    return GhostButton;
  }
  return Button;
};

export default class ButtonMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { isOpen: false };
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  handleToggle() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const {
      alignment,
      block,
      buttonVariant,
      children,
      closeOnClickInside,
      direction,
      icon,
      text,
      // Margin props are applied to the wrapper rather than the button
      // eslint-disable-next-line react/prop-types
      m, mb, ml, mr, mt, mx, my,
      ...props
    } = this.props;
    const { isOpen } = this.state;

    const DerivedButtonComponent = deriveButtonComponent(buttonVariant);
    const derivedIcon = icon || (!text ? 'ellipsis-v' : 'angle-down');

    const hasOptions = !isEmpty(React.Children.toArray(children));

    return hasOptions && (
      <Box
        {...{ m, mb, ml, mr, mt, mx, my }}
        css={{ position: 'relative', display: block ? 'block' : 'inline-block' }}
      >
        <DerivedButtonComponent
          active={isOpen}
          block={block}
          icon={derivedIcon}
          iconPosition="right"
          onClick={this.handleToggle}
          px={text ? 5 : 3}
          {...props}
        >{text}</DerivedButtonComponent>
        <CSSTransition
          classNames={TRANSITION_NAME}
          in={isOpen}
          mountOnEnter
          timeout={TRANSITION_TIMEOUT}
        >
          {() => (
            <ButtonMenuWrapper
              alignment={alignment}
              closeOnClickInside={closeOnClickInside}
              direction={direction}
              handleClose={this.handleClose}
              isOpen={isOpen}
              transitionTimeout={TRANSITION_TIMEOUT}
            >
              {children}
            </ButtonMenuWrapper>
          )}
        </CSSTransition>
      </Box>
    );
  }
}

ButtonMenu.propTypes = {
  alignment: PropTypes.oneOf(['left', 'right']),
  block: PropTypes.bool,
  buttonVariant: PropTypes.oneOf(['default', 'ghost', 'outline']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  closeOnClickInside: PropTypes.bool,
  direction: PropTypes.oneOf(['down', 'up']),
  icon: PropTypes.string,
  text: PropTypes.string,
};

ButtonMenu.defaultProps = {
  alignment: 'left',
  block: false,
  buttonVariant: 'outline',
  closeOnClickInside: true,
  direction: 'down',
  icon: null,
  text: '',
};

ButtonMenu.ConfirmDeletionModalItem = Menu.ConfirmDeletionModalItem;
ButtonMenu.Item = Menu.Item;
ButtonMenu.ModalItem = Menu.ModalItem;
