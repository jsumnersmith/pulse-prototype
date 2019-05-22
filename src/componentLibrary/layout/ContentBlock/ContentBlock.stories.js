import React from 'react';
import { Box, Flex } from 'rebass';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import tokens from '@kickup/pulse-style-tokens';

import ContentBlock from '../ContentBlock';
import { Paragraph } from '../../text';

const iconWeights = [
  'brand',
  'light',
  'regular',
  'solid',
];

const props = () => ({
  accentColor: select('accentColor', [null, ...Object.keys(tokens.colors)], null),
  headingText: text('headingText', ''),
  headingIcon: text('headingIcon', ''),
  headingIconWeight: select('headingIconWeight', iconWeights, 'brand'),
});

const withHeadingProps = () => ({
  accentColor: select('accentColor', [null, ...Object.keys(tokens.colors)], null),
  headingText: text('headingText', 'A long time ago, in a galaxy far, far away...'),
  headingIcon: text('headingIcon', 'galactic-republic'),
  headingIconWeight: select('headingIconWeight', iconWeights, 'brand'),
});

storiesOf('layout.ContentBlock', module)
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
    <ContentBlock {...props()}>
      <Paragraph>{text('children', 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.')}</Paragraph>
    </ContentBlock>
  ))
  .add('Grid', () => (
    <Flex mx={-2}>
      <Box px={2} width={1 / 2}>
        <ContentBlock {...props()}>
          <Paragraph>{text('First children', 'This is getting out of hand! Now there are two of them!')}</Paragraph>
        </ContentBlock>
      </Box>
      <Box px={2} width={1 / 2}>
        <ContentBlock {...props()}>
          <Paragraph>{text('Second children', 'Always two there are; no more, no less. A master and an apprentice.')}</Paragraph>
        </ContentBlock>
      </Box>
    </Flex>
  ))
  .add('With heading', () => (
    <ContentBlock {...withHeadingProps()}>
      <Paragraph>{text('children', 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.')}</Paragraph>
    </ContentBlock>
  ));
