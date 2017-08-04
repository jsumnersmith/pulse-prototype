import React from 'react';
import BigButton from './BigButton';
import LandingPageFeed from './LandingPageFeed';
import './underline.less';

export default () => (
  <div>
    <h3><strong>Welcome to Kickup!</strong></h3>

    <hr className="dark" />
    <div className="row">
      <div className="col-md-12">
        <h3><strong>Quick Links</strong></h3>
      </div>
      <div className="col-md-6">
        <BigButton
          iconClass="fa-file-text-o"
          title="Browse Reports"
          description={<span>Dive into the data from <strong>16</strong> reports in your organization.</span>}
        />
      </div>
      <div className="col-md-6">
        <BigButton
          iconClass="fa-calendar"
          title="Upcoming Events"
          description={<span>Check out the <strong>65</strong> upcoming events in your organization.</span>}
        />
      </div>
    </div>
  </div>
)

const StatsWidget = () => (
  <div className="district-stats-widget row">
    <div className="district-stats-widget__reports col-md-4">
      <IndividualStat
        color={"pulse-blue"}
        title={"16 Reports"}
        subtitle={"created"}
        icon={"fa-file-text"}
      />
    </div>
    <div className="district-stats-widget__responses col-md-4">
      <IndividualStat
        color={"green"}
        title={"563 Responses"}
        subtitle={"in last 12 months"}
        icon={"fa-envelope"}
      />
    </div>
    <div className="district-stats-widget__date col-md-4">
      <IndividualStat
        color={"orange"}
        title={"15 June"}
        subtitle={"Latest Response"}
        icon={"fa-calendar-o"}
      />
    </div>
  </div>
)

const IndividualStat = ({color, title, subtitle, icon}) => (
  <div className="block flat">
    <div className="content text-center event-data-point-wrapper">
      <h5 className="event-data-point">
        <div className={`event-data-point-icon bg-${color}`}>
          <i className={`fa ${icon} circle-icon--colored color-text ${color}-text`}></i>
        </div>
        <strong className="event-data-point-title" style={{fontSize: 22}}>
          <div><span className={`underline underline--${color}`}>{title}</span></div>
          <div className="meta" style={{marginTop: 10, marginBottom: 10, fontSize: 14}}>{subtitle}</div>
        </strong>
      </h5>
    </div>
  </div>
);