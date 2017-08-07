import React from 'react';
import BigButton from './BigButton';
import LandingPageFeed from './LandingPageFeed';
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
        <div className="col-md-6">
          <h5 className="meta" style={{marginLeft: 10}}><i className="fa fa-pie-chart" /> Analytics</h5>
          <hr className="dark"/>
        </div>
        <div className="col-md-6" >
          <h5 className="meta" style={{marginLeft: 10}}><i className="fa fa-calendar" /> Events</h5>
          <hr className="dark"/>
        </div>
        <div className="col-md-6">
          <div>
            <BigButton
              iconClass="fa-file-text-o"
              title="Browse Reports"
              description={<span>Dive into the data from <strong>16</strong> reports in your organization.</span>}
            />
          </div>
          <div style={{marginTop: 10}}>
            <BigButton
              iconClass="fa-plus-circle"
              title="Create a Report"
              description={<span>Create reports to share with your organization.</span>}
            />
          </div>
          <div style={{marginTop: 10}}>
            <BigButton
              iconClass="fa-user-o"
              title="View an Individual Log"
              description={<span>See feedback and activity for one of the 236 people in your organization.</span>}
            />
          </div>
          <div style={{marginTop: 10}}>
            <BigButton
              iconClass="fa-line-chart"
              title="View Your Log"
              description={<span>See your own feedback and historical data.</span>}
            />
          </div>
        </div>
        <div className="col-md-6" >
          <div>
            <BigButton
              iconClass="fa-calendar-o"
              title="Browse Events"
              description={<span>View and register for the 18 events in your organization.</span>}
            />
          </div>
          <div style={{marginTop: 10}}>
            <BigButton
              iconClass="fa-calendar-plus-o"
              title="Create an Event"
              description={<span>Create and invite colleagues to an event.</span>}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)