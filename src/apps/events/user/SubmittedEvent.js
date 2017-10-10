import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import EventCard from '../components/EventCard';
import EventHistoryStream from '../components/EventHistoryStream';
import sampleEvents from '../components/sampleSubmittedEvents';
import '../events.less';


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
        <SubHeader activeName="manage" />
        <Link to={"/events/manage/"} className="btn btn-back">Back to Your Log</Link>
        <div style={{marginTop:10}}></div>
        <EventCard
          sampleEvent={this.getEvent()}
          showAction={true}
          isAttending={true}
          actionLink={'/events/edit'}
          actionTitle={'Sign Up'}
          isAdmin={false}
          isSubmission={true}
          />
          <EventHistoryStream />
      </div>
    )
  }
}