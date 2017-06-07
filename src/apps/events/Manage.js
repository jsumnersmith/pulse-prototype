import React from 'react';
import SubHeader from './components/SubHeader';
import AttendanceSummaryTable from './components/AttendanceSummaryTable';
import ApprovalTable from './components/ApprovalTable';
import sampleEvents from './components/sampleEvents';
import './events.css';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="manage" />
    <div className="row" style={{marginTop: 0}}>
    <div className="col-md-12" style={{marginBottom: 20}}>
        <h5 className="event-list-title" style={{ background: "#007DA0"}}><i className="fa fa-calendar-check-o circle-icon--medium pulse-blue"></i> <strong>Approve Submitted Events</strong></h5>
        <ApprovalTable
          events={sampleEvents}
        />
    </div>
    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#8B698E"}}><i className="fa fa-check circle-icon--medium purple color-text"></i> <strong>Attendance Log</strong></h5>
      <AttendanceSummaryTable
        events={sampleEvents}
      />
    </div>
  </div>
  </div>
)
