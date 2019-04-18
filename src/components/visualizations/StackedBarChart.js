import React from 'react';
import { ContentBlock } from '../../componentLibrary/layout'
import tokens from '@kickup/pulse-style-tokens';

const StackedBarChart = () => (
  <ContentBlock
    headingText="Coaching Time Spend"
    headingIcon="clock"
    accentColor={ tokens.colors.lightBlue }
    mb={ tokens.spacing[2] }
  >
    <p>Hi</p>
  </ContentBlock>
);

export default StackedBarChart;