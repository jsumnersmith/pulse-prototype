import React, { Component } from 'react';
import _ from 'lodash';
import SubHeader from '../components/SubHeader';
import EventCard from '../components/EventCard';
import AttendanceTable from '../components/AttendanceTable';
import sampleEvents from '../components/sampleEvents';
import '../events.css';


export default class EventPage extends Component {
  constructor(props){
    super(props);
    this.getEvent = this.getEvent.bind(this);
  }
  getEvent(){
    return _.find(sampleEvents, e => e.id === Number(this.props.match.params.id));
  }
  render(){
    return (
      <div className="wrapper">
        <SubHeader activeName="browse" admin={true}/>
        <EventCard
          sampleEvent={this.getEvent()}
          showAction={true}
          isAttending={false}
          actionLink={'/events/edit'}
          actionTitle={'Sign Up'}
          isAdmin={true}
          />

          <h5 className="event-list-title" style={{background: "rgb(31, 175, 132)", marginTop: 30}}><i class="fa fa-calendar-check-o circle-icon--medium green color-text"></i> <strong>Event Attendance</strong></h5>
          <div className="block-flat">
            <div className="content">
              <AttendanceTable sampleEvent={this.getEvent()}/>
            </div>
          </div>
      </div>
    )
  }
}