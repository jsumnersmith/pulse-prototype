import React, { Component } from 'react';
import _ from 'lodash';
import { PDFDownloadLink } from '@react-pdf/renderer';

import SubHeader from '../components/SubHeader';
import EventCard from '../components/EventCard';
import Certificate from './Certificate';
import sampleEvents from '../components/sampleEvents';
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
        <SubHeader activeName="browse" />
        <EventCard
          sampleEvent={this.getEvent()}
          showAction={true}
          isAttending={true}
          actionLink={'/events/edit'}
          actionTitle={'Sign Up'}
          isAdmin={false}
        />
        <div style={{marginTop: 30}}>
          <PDFDownloadLink document={<Certificate sampleEvent={this.getEvent()}/>} fileName="certificate.pdf">
            {({ blob, url, loading, error }) => (loading ? <button className="btn btn-primary"><i className="fa fa-spin fa-spinner-third" /> Building Certificate...</button> : <button className="btn btn-primary">Download your certificate</button>)}
          </PDFDownloadLink>
        </div>

      </div>
    )
  }
}



