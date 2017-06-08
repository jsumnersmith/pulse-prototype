import React, { Component } from 'react';
import _ from 'lodash';
import SubHeader from './components/SubHeader';
import EventCard from './components/EventCard';
import sampleEvents from './components/sampleEvents';
import './events.css';


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
        <SubHeader activeName="browse" />
        <EventCard
          sampleEvent={this.getEvent()}
          showAction={true}
          isAttending={false}
          actionLink={'/events/edit'}
          actionTitle={'Sign Up'}
          isAdmin={true}
          />
      </div>
    )
  }
}