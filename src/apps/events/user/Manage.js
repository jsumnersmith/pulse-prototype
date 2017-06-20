import React from 'react';
import {Link} from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import EventTable from '../components/EventTable';
import sampleEvents from '../components/sampleEvents';
import '../events.less';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="manage" />
    <div className="row" style={{marginTop: 0}}>
        <div className="col-md-3 push-md-3">
          <div className="block flat">
            <div className="content text-center event-data-point-wrapper">
              <h5 className="event-data-point">
                <div className="event-data-point-icon"  style={{background: "#8B698E"}}>
                  <i className="fa fa-check circle-icon--colored purple color-text purple-text"></i>
                </div>
                <strong className="event-data-point-title">
                  <div><span className="underline underline--purple">15</span></div>
                  <div className="meta" style={{marginTop: "15px"}}>events attended</div>
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="block flat">
            <div className="content text-center event-data-point-wrapper">
              <h5 className="event-data-point">
                <div className="event-data-point-icon" style={{background: "#E59062"}}>
                  <i className="fa fa-hourglass circle-icon--colored orange color-text orange-text"></i>
                </div>
                <strong className="event-data-point-title">
                  <div><span className="underline underline--orange">42</span></div>
                  <div className="meta" style={{marginTop: 15}}>hours logged</div>
                </strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Link to={"/events/submit"}>
            <div className="block flat">
              <div className="content text-center event-data-point-wrapper">
                <h5 className="event-data-point">
                  <div className="event-data-point-icon"  style={{background: "#007DA0"}}>
                    <i className="fa fa-calendar circle-icon--colored pulse-blue color-text"></i>
                  </div>
                  <strong className="event-data-point-title">
                    <div className="meta">Submit an Event</div>
                  </strong>
                </h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <div className="block flat">
            <div className="content text-center event-data-point-wrapper">
              <h5 className="event-data-point">
                <div className="event-data-point-icon" style={{background: "#1FAF84"}}>
                  <i className="fa fa-download circle-icon--colored green color-text green-text"></i>
                </div>
                <strong className="event-data-point-title">
                  <div className="meta">Download your log</div>
                </strong>
              </h5>
            </div>
          </div>
        </div>
    </div>
    <div className="row" style={{marginTop: 0}}>

    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#8B698E"}}><i className="fa fa-check circle-icon--medium purple color-text"></i> <strong>Attendance Log</strong></h5>
      <EventTable
        events={sampleEvents}
      />
    </div>
  </div>
  </div>
)
