import React from 'react';
import BigButton from './BigButton';
import './underline.less';

export default () => (
  <div style={{marginTop: 40}}>
    <h3>
      <span className="bars">
        <span className="bar-1"></span>
        <span className="bar-2"></span>
        <span className="bar-3"></span>
      </span>
      <strong>Welcome, <span className="underline-thick underline-thick--orange underline-thick--gray-bg">Joel</span>! You might want to...</strong>
    </h3>
    <div className="">
      <div className="row">
        <div className="col-md-12">
          <h5 className="meta" style={{marginLeft: 10}}><i className="far fa-chart-pie" /> Analytics</h5>
          <hr className="dark"/>
        </div>
        <div className="col-md-6">
          <BigButton
            iconClass="fa-chart-line"
            title="View Your Log"
            description={<span>See your own feedback and historical data.</span>}
          />
        </div>
      </div>
    </div>
  </div>
)