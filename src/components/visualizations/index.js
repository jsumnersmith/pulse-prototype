import React from 'react';

import GoalsSummary from './GoalsSummary';
import TopicProgress from './TopicProgress';

export default () => (
  <div className="wrapper">
    <h3 style={{marginBottom: 30}}><i className="fa fa-line-chart circle-icon green"/> <strong>Visualizations</strong></h3>
    <GoalsSummary />
    <TopicProgress />
  </div>
)