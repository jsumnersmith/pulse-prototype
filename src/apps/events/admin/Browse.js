import React from 'react';
import SubHeader from '../components/SubHeader';
import EventList from '../components/EventList';
import sampleEvents from '../components/sampleEvents';

import '../events.less';

export default () => (
  <div className="wrapper">
    <SubHeader activeName="browse" admin={true}/>
    <EventList events={sampleEvents} urlPrefix={'/events/admin/'} isAdmin={true}/>
  </div>
)
