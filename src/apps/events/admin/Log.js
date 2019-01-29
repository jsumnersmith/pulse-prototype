import React from 'react';
import SubHeader from '../components/SubHeader';
import EventTable from '../components/EventTable';
import sampleEvents from '../components/sampleEvents';
import sampleSubmittedEvents from '../components/sampleSubmittedEvents';
import ApprovalTableUser from '../components/ApprovalTableUser';
import '../events.less';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="log" admin="true"/>
    <div className="row" style={{marginTop: 0}}>
    <div className="col-md-12" style={{marginBottom: 40}}>
      <ApprovalTableUser events={sampleSubmittedEvents}/>
    </div>

    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#007DA0"}}><i className="far fa-check circle-icon--medium pulse-blue color-text"></i> <strong>Attendance Log</strong></h5>
      <div className="events-table-actions">
        <label >Show</label>
        <select className="form-control" style={{background: 'white', width: 150}}>
          <option value="17-18">2017-2018</option>
          <option value="16-17">2016-2017</option>
          <option value="15-16">2015-2016</option>
        </select>
      </div>
      <div style={{background: 'white', padding: 20}}>

        <EventTable
          events={sampleEvents}
        />
      </div>
    </div>
  </div>
  </div>
)
