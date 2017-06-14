import React from 'react';
import AdminNav from './AdminNav';
import UserNav from './UserNav';

import icon from '../calendar-icon.svg';

export default ({activeName, admin}) => (
  <div className="event-header">
    <h2 style={{fontWeight: 700, marginTop:30}}>
      <img src={icon} style={{width: 40, height: 40, verticalAlign: 'middle', marginRight: 10}} alt="Calendar Icon"/>
      Events
    </h2>
    {
      admin ? <AdminNav activeName={activeName}/> : <UserNav activeName={activeName}/>
    }

    <hr className="dark"/>
  </div>
)