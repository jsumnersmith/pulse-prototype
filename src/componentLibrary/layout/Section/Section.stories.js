import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Paragraph } from '../../text';

import ContentBlock from '../ContentBlock';

import Section from './Section';

storiesOf('layout.Section', module)
  .addDecorator(story => (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#ddd',
      }}
    >
      <div
        style={{
          margin: '20px auto',
          maxWidth: '960px',
          width: '90%',
        }}
      >
        {story()}
      </div>
    </div>
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ContentBlock>
      <Section
        accentColor="blue"
        headingIcon="basketball-ball"
        headingText="Hello"
      >
        <Paragraph>This is a section.</Paragraph>
      </Section>
      <Section
        accentColor="green"
        headingIcon="basketball-hoop"
        headingText="World"
      >
        <Paragraph>This is another section.</Paragraph>
      </Section>
    </ContentBlock>
  ))
  .add('Collapsible', () => (
    <ContentBlock>
      <Section
        accentColor="blue"
        collapsible
        headingIcon="basketball-ball"
        headingText="Hello"
      >
        <Paragraph>This is a section.</Paragraph>
      </Section>
      <Section
        accentColor="green"
        collapsible
        headingIcon="basketball-hoop"
        headingText="World"
        subHeadingText="This is a space for a description of the section."
      >
        <Paragraph>This is another section.</Paragraph>
      </Section>
    </ContentBlock>
  ));
