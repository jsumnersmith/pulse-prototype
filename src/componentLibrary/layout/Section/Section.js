import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Box, Flex } from 'rebass';

import { GhostButton } from '../../button';
import { CircleIcon } from '../../icon';
import { Heading, Paragraph } from '../../text';

import SectionWrapper, { TRANSITION_NAME, TRANSITION_TIMEOUT } from './SectionWrapper';

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = { isOpen: false };
  }

  toggleOpen() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    const {
      accentColor,
      children,
      collapsible,
      headingIcon,
      headingIconWeight,
      headingText,
      subHeadingText,
      ...props
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Box
        {...props}
        css={`
          &:not(:last-child) {
            margin-bottom: ${({ theme }) => theme.space[5]}px;
            padding-bottom: ${({ theme }) => theme.space[5]}px;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grayMediumLight};
          }
        `}
      >
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            {headingIcon && (
              <CircleIcon
                color={accentColor}
                icon={headingIcon}
                iconWeight={headingIconWeight}
                mr={3}
                size="sm"
              />
            )}
            <div>
              <Heading size="sm">{headingText}</Heading>
              {subHeadingText && <Paragraph>{subHeadingText}</Paragraph>}
            </div>
          </Flex>
          {collapsible && (
            <Flex alignItems="center">
              <GhostButton
                icon={isOpen ? 'angle-down' : 'angle-left'}
                onClick={this.toggleOpen}
                px={3}
              />
            </Flex>
          )}
        </Flex>
        {collapsible ? (
          <CSSTransition
            classNames={TRANSITION_NAME}
            in={!collapsible || isOpen}
            timeout={TRANSITION_TIMEOUT}
          >
            {() => (
              <SectionWrapper
                ref={(el) => { this.el = el; }}
                height={this.el ? this.el.scrollHeight : 0}
                transitionTimeout={TRANSITION_TIMEOUT}
              >
                <Box mt={3}>{children}</Box>
              </SectionWrapper>
            )}
          </CSSTransition>
        ) : <Box mt={3}>{children}</Box>}
      </Box>
    );
  }
}

Section.propTypes = {
  accentColor: PropTypes.string,
  collapsible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  headingIcon: PropTypes.string,
  headingIconWeight: PropTypes.string, // eslint-disable-line react/require-default-props
  headingText: PropTypes.string,
  subHeadingText: PropTypes.string,
};

Section.defaultProps = {
  accentColor: '',
  collapsible: false,
  headingIcon: null,
  headingText: '',
  subHeadingText: '',
};
