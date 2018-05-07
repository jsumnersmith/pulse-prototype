import React from 'react';

import FullSharing from './FullSharing';
import EventGroupSharing from './EventGroupSharing';

export default () => (
  <div className="wrapper">
    <label>Current View for Events Group Sharing</label>
    <EventGroupSharing />

    <label>Where we'd like to get to for All Sharing.</label>
    <FullSharing />
  </div>
);