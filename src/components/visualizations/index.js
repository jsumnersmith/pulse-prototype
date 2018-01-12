import React from 'react';

import GoalsSummary from './GoalsSummary';

export default () => (
  <div className="wrapper">
    <h3 style={{marginBottom: 30}}><i className="fa fa-line-chart circle-icon green"/> <strong>Visualizations</strong></h3>
    <GoalsSummary />
  </div>
)