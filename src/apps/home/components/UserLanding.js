import React from 'react';
import BigButton from './BigButton';
import LandingPageFeed from './LandingPageFeed';
import './underline.less';

export default () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <h3><strong>Quick Links</strong></h3>
      </div>
      <div className="col-md-6">
        <BigButton
          iconClass="fa-line-chart"
          title="See Your History Page"
          description="See all responses by or about you"
        />
      </div>
    </div>
    <hr className="dark" />
    <div className="row">
      <div className="col-md-12">
        <h3><strong>Activity Feed</strong></h3>
      </div>
      <div className="col-md-12">
        <LandingPageFeed
          items={[
            {
              title: <span>You submitted a response for <strong>Needs Assessment</strong></span>,
              type: 'report',
              date: new Date(),
              isTeacher: true
            },
            {
              title: <span>You submitted a response for <strong>Post-PD Feedback</strong></span>,
              type: 'report',
              date: new Date(),
              isTeacher: true
            }
          ]}
        />
      </div>
    </div>
  </div>
)