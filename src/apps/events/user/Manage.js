import React from 'react';
import {Link} from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import EventTable from '../components/EventTable';
import sampleEvents from '../components/sampleEvents';
import sampleSubmittedEvents from '../components/sampleSubmittedEvents';
import ApprovalTableUser from '../components/ApprovalTableUser';
import '../events.less';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="manage" />
    <div className="row" style={{marginTop: 0}}>
    <div className="col-md-12" style={{marginBottom: 40}}>
      <ApprovalTableUser events={sampleSubmittedEvents}/>
    </div>

    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#007DA0"}}><i className="fa fa-check circle-icon--medium pulse-blue color-text"></i> <strong>Attendance Log</strong></h5>
      <EventTable
        events={sampleEvents}
      />
    </div>
  </div>
  </div>
)
