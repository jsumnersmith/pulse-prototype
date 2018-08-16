import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import AttendanceSummaryTable from '../components/AttendanceSummaryTable';
import ApprovalTable from '../components/ApprovalTable';
import AttributeManager from '../components/AttributeManager';
import AttributeEditor from '../components/AttributeEditor';
import sampleEvents from '../components/sampleEvents';
import '../events.less';
import '../../../base/subnav.less';

export default ({ match }) => (
  <div className="wrapper">
    <SubHeader activeName="manage" admin={true}/>
    <ul className="ku-subnav">
      <li className="ku-subnav__nav-item"><Link to={`${match.url}/attendance`} className="meta">Attendance</Link></li>
      <li className="ku-subnav__nav-item"><Link to={`${match.url}/approval`} className="meta">Approval</Link></li>
      <li className="ku-subnav__nav-item"><Link to={`${match.url}/attributes`} className="meta">Attributes</Link></li>
    </ul>
    <div className="row" style={{marginTop: 0}}>
      <Router>
        <div>
          <Route component={ApprovalTableWrapper} path={`${match.url}/approval`}/>
          <Route component={AttendanceTableWrapper} path={`${match.url}/attendance`}/>
          <Route component={AttributeManager} path={`${match.url}/attributes`} exact={true}/>
          <Route component={AttributeEditor} path={`${match.url}/attributes/type-of-pd`}/>
        </div>
      </Router>
    </div>
  </div>
)

const ApprovalTableWrapper = () => (
  <div className="col-md-12" style={{marginBottom: 20}}>
    <h5 className="event-list-title" style={{ background: "#007DA0"}}><i className="far fa-calendar-check circle-icon--medium pulse-blue"></i> <strong>Approve Submitted Events</strong></h5>
    <ApprovalTable
      events={sampleEvents}
    />
  </div>
)

const AttendanceTableWrapper = () => (
  <div className="col-md-12">
    <AttendanceSummaryTable
      events={sampleEvents}
    />
  </div>
)
