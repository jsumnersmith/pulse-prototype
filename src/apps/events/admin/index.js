import React, {Component} from 'react';
import SubHeader from '../components/SubHeader';
import EventSummaryList from '../components/EventSummaryList';
import EventGlobalSearch from '../components/EventGlobalSearch';
import sampleEvents from '../components/sampleEvents';
import '../events.css';

export default class Events extends Component {
  render(){
    return (
      <div className="wrapper">
        <SubHeader activeName="home" />
        <div className="row">
          <div className="col-md-12">
            <h5 className="event-list-title" style={{background: "#007DA0"}}><i className="fa fa-calendar circle-icon--medium pulse-blue color-text"></i> <strong>Welcome!</strong></h5>
            <div className="block-flat">
              <div className="content">
                <div className="row">
                  <div className="col-md-12">
                    <EventGlobalSearch
                      events={sampleEvents}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: 0}}>
              <div className="col-md-6">
                <h5 className="event-list-title" style={{background: "rgb(31, 175, 132)"}}><i className="fa fa-calendar-check-o circle-icon--medium green color-text"></i> <strong>Upcoming Events</strong></h5>
                <EventSummaryList
                  index={4}
                  events={sampleEvents}
                  url={''}
                  linkText={"Browse All Upcoming Events"}
                />
              </div>
              <div className="col-md-6">
                <h5 className="event-list-title" style={{background: "#8B698E"}}><i className="fa fa-check circle-icon--medium purple color-text"></i> <strong>Recent Events</strong></h5>
                <EventSummaryList
                  index={1}
                  events={sampleEvents.slice(0,2)}
                  url={''}
                  linkText={"Browse All Recent Events"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}