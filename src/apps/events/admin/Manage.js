import React from 'react';
import { withRouter, HashRouter as Router, Route, Link } from 'react-router-dom';
import { SizeMe } from 'react-sizeme';
import SubHeader from '../components/SubHeader';
import AttendanceSummaryTable from '../components/AttendanceSummaryTable';
import ApprovalTable from '../components/ApprovalTable';
import AttributeManager from '../components/AttributeManager';
import AttributeEditor from '../components/AttributeEditor';
import sampleEvents from '../components/sampleEvents';
import '../events.less';
import '../../../base/subnav.less';

export default withRouter(({ match, history }) => (
  <div className="wrapper">
    {console.log(history)}
    <SubHeader activeName="manage" admin={true}/>
    <SizeMe>
      {({size}) =>
        size.width > 660 ?
        <ul className="ku-subnav">
          <li className={`ku-subnav__nav-item ${history.location.pathname === `${match.url}/attendance` ? 'active' : '' }`}><Link to={`${match.url}/attendance`} className="meta">Attendance</Link></li>
          <li className={`ku-subnav__nav-item ${history.location.pathname === `${match.url}/approval` ? 'active' : '' }`}><Link to={`${match.url}/approval`} className="meta">Approval</Link></li>
          <li className={`ku-subnav__nav-item ${history.location.pathname === `${match.url}/attributes` ? 'active' : '' }`}><Link to={`${match.url}/attributes`} className="meta">Attributes</Link></li>
        </ul>
        :
        <select className="form-control" onChange={(e)=> history.push(e.target.value)}>
          <option value={`${match.url}/attendance`} selected={history.location.pathname === `${match.url}/attendance`}>Attendance</option>
          <option value={`${match.url}/approval`} selected={history.location.pathname === `${match.url}/approval`}>Approval</option>
          <option value={`${match.url}/attributes`} selected={history.location.pathname === `${match.url}/attributes`}>Attributes</option>
        </select>
      }

    </SizeMe>
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
));

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
