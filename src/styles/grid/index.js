import React from 'react';

import './grid.less'

export default () => (
  <div className="wrapper">
    <div style={{marginBottom: 20}}>
      <h3><i className="fa fa-table circle-icon green"/> <strong>CSS Grid Experiment</strong></h3>
    </div>
    <div className="grid twelve">
      {/* 12 Columns */}
      <div className="col-12">12 Columns</div>
      {/* 6 Columns */}
      <div className="col-6"> 6 Column </div>
      <div className="col-6"> 6 Column </div>
      {/* 4 Columns */}
      <div className="col-4"> 4 Column </div>
      <div className="col-4"> 4 Column </div>
      <div className="col-4"> 4 Column </div>
      {/* 3 Columns */}
      <div className="col-3"> 3 Column </div>
      <div className="col-3"> 3 Column </div>
      <div className="col-3"> 3 Column </div>
      <div className="col-3"> 3 Column </div>
      {/* 2 Columns */}
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
    </div>
  </div>
)