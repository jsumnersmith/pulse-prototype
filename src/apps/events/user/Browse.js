import React from 'react';
import SubHeader from '../components/SubHeader';
import EventList from '../components/EventList';
import sampleEvents from '../components/sampleEvents';

import '../events.less';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="browse" />
    <EventList events={sampleEvents} urlPrefix={'/events/'} isAdmin={false}/>
  </div>
)
