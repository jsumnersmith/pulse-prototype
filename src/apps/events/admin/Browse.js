import React from 'react';
import SubHeader from '../components/SubHeader';
import EventList from '../components/EventList';
import sampleEvents from '../components/sampleEvents';

import '../events.css';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="browse" />
    <EventList events={sampleEvents} urlPrefix={'/events/'} isAdmin={true}/>
  </div>
)
