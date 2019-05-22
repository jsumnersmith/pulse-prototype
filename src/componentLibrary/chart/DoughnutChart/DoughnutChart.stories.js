import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import DoughnutChart from '../DoughnutChart';

const props = () => ({
  loading: boolean('loading', false),
  totalPercentage: number('totalPercentage', 53),
  chartSize: number('chartSize', 50),
  fontSize: number('fontSize', 12),
  strokeWidth: number('strokeWidth', 5),
  shouldShowText: boolean('shouldShowText', true),
  textLocation: text('textLocation', 'inside'),
  indicatorFill: text('indicatorFill', '#007da0'),
  trackFill: text('trackFill', '#ddd'),
  textColor: text('textColor', '#555555'),
  autoscaleText: boolean('autoscaleText', true),
});

storiesOf('chart.DoughnutChart', module)
  .addDecorator(withKnobs)
  .add('Basic usage', () => <DoughnutChart {...props()} />);
