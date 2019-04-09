import React from 'react';

import './grid.less'

export default () => (
  <div className="wrapper">
    <div style={{marginBottom: 20}}>
      <h3><i className="far fa-table circle-icon green"/> <strong>CSS Grid Experiment</strong></h3>
    </div>
    <div className="grid twelve">
      {/* 12 Columns */}
      <div className="col-12 break">12 Columns</div>
      {/* 6 Columns */}
      <div className="col-6"> 6 Column </div>
      <div className="col-6 break"> 6 Column </div>
      {/* 4 Columns */}
      <div className="col-4"> 4 Column </div>
      <div className="col-4"> 4 Column </div>
      <div className="col-4 break"> 4 Column </div>
      {/* 3 Columns */}
      <div className="col-3"> 3 Column </div>
      <div className="col-3"> 3 Column </div>
      <div className="col-3"> 3 Column </div>
      <div className="col-3 break"> 3 Column </div>
      {/* 2 Columns */}
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2"> 2 Column </div>
      <div className="col-2 break"> 2 Column </div>
    </div>
    <div>
      <h3>Print Test</h3>
      <div class="break">
        <p>1</p>
      </div>
      <div class="break">
        <p>2</p>
      </div>
      <div class="break">
        <p>3</p>
      </div>
      <div class="break">
        <p>4</p>
      </div>
    </div>
  </div>
)