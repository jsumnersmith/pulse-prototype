import React from 'react';

import GoalsSummary from './GoalsSummary';
import TopicProgress from './TopicProgress';
import StackedBarChart from './StackedBarChart';

export default () => (
  <div className="wrapper">
    <h3 style={{marginBottom: 30}}><i className="far fa-chart-line circle-icon green"/> <strong>Visualizations</strong></h3>
    <StackedBarChart />
    <GoalsSummary />
    <TopicProgress />
  </div>
)