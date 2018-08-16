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
        <div className="col-md-6" >
          <h5 className="meta" style={{marginLeft: 10}}><i className="far fa-calendar-alt" /> Events</h5>
          <hr className="dark"/>
        </div>
        <div className="col-md-6">
          <h5 className="meta" style={{marginLeft: 10}}><i className="far fa-pie-chart" /> Analytics</h5>
          <hr className="dark"/>
        </div>

        <div className="col-md-6" >
          <div>
            <BigButton
              iconClass="fa-calendar"
              title="Browse Events"
              description={<span>View and register for the 18 events in your organization.</span>}
            />
          </div>
          <div style={{marginTop: 10}}>
            <BigButton
              iconClass="fa-calendar-check"
              title="Confirm Attendance at Event"
              description={<span>Confirm that you went and share your feedback</span>}
            />
          </div>
          <div style={{marginTop: 10}}>
            <BigButton
              iconClass="fa-list-alt"
              title="View Your Events Log"
              description={<span>See a record of you events you've attended or registered for.</span>}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <BigButton
              iconClass="fa-line-chart"
              title="View Your Log"
              description={<span>See your own feedback and historical data.</span>}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)