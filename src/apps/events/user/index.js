import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import EventSummaryList from '../components/EventSummaryList';
import sampleEvents from '../components/sampleEvents';
import '../events.css';

export default class Events extends Component {
  render(){
    return (
      <div className="wrapper">
        <SubHeader activeName="home" />
        <div className="row">
          <div className="col-md-8">
            <h5 className="event-list-title" style={{background: "rgb(31, 175, 132)"}}><i className="fa fa-calendar-check-o circle-icon--medium green color-text"></i> <strong>Upcoming Events</strong></h5>
            <EventSummaryList
              index={4}
              events={sampleEvents.slice(3,6)}
              url={''}
              linkText={"Browse All Upcoming Events"}
            />
            <h5 className="event-list-title" style={{background: "#8B698E", marginTop: 40}}><i className="fa fa-check circle-icon--medium purple color-text"></i> <strong>Recent Events</strong></h5>
            <EventSummaryList
              index={1}
              events={sampleEvents.slice(0,2)}
              url={''}
              linkText={"Browse All Recent Events"}
            />
          </div>
          <div className="col-md-4">
            <h5 className="event-list-title" style={{background: "#007DA0"}}><i className="fa fa-cog circle-icon--medium pulse-blue"></i> <strong style={{color: 'white'}}>Quick Links</strong></h5>
            <div className="block-flat">
              <div className="content " style={{marginTop: 0}}>
                <h5 className="">
                  <div className="event-quick-link-icon">
                    <i className="fa fa-calendar-check-o circle-icon--small green" style={{color: 'white!important', marginRight: 10}}></i>
                  </div>
                  <strong className="event-quick-link-title">
                    <Link to={"/events/browse-upcoming"} className="event-data-point-link underline--green">You're attending <span className="underline--green">2</span> upcoming events</Link>
                  </strong>
                </h5>
                <h5 className="">
                  <div className="event-quick-link-icon">
                    <i className="fa fa-calendar circle-icon--small pulse-blue blue" style={{color: "white!important", marginRight: 10}}></i>
                  </div>
                  <strong className="event-quick-link-title">
                    <Link to={"/events/browse-upcoming"} className="event-data-point-link underline--pulse-blue">There are <span className="underline--pulse-blue">52</span> available events</Link>
                  </strong>
                </h5>
                <h5>
                  <div className="event-quick-link-icon">
                    <i className="fa fa-check circle-icon--small purple purple-text" style={{color: "white!important", marginRight: 10}}></i>
                  </div>
                  <strong className="event-quick-link-title">
                    <Link to={"/events/manage"} className="event-data-point-link underline--purple">You've attended <span className="underline--purple">15</span> events</Link>
                  </strong>
                </h5>
                <h5 className="">
                  <div className="event-quick-link-icon">
                    <i className="fa fa-hourglass  circle-icon--small orange action-required orange-text" style={{color: "white!important", marginRight: 10}}></i>
                  </div>
                  <strong className="event-quick-link-title">
                    <Link to={"/events/manage"} className="event-data-point-link underline--orange"> You've logged <span className="underline--orange">42</span> hours</Link>
                  </strong>
                </h5>
                <hr />
                <div>
                  <label>Enter an event attendance code</label>
                  <input className="form-control" placeholder="Enter an attendance code to confirm your attendance." />
                  <a href="#confirm" className="btn btn-default btn-block" style={{marginLeft: 0, marginTop: 10}}>Submit Code</a>
                </div>
                <hr />
                <div>
                  <label>Attended an event outside of your organization?</label>
                  <Link to={"/events/submit"} className="btn btn-primary btn-block">Submit An Event</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}