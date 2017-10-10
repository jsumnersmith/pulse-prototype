import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
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
        <SubHeader activeName="manage" admin={true}/>
        <Link to={"/events/admin/manage/approval"} className="btn btn-back">Back to All Submissions</Link>
        <div style={{marginTop:10}}></div>
        <EventCard
          sampleEvent={this.getEvent()}
          showAction={true}
          isAttending={false}
          actionLink={'/events/edit'}
          actionTitle={'Sign Up'}
          isAdmin={true}
          isSubmission={true}
          />
          <EventHistoryStream />
      </div>
    )
  }
}