import React, {Component} from 'react';
import './events.css';
import icon from './calendar-icon.svg';

export default class Events extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="event-header">
          <h2 style={{fontWeight: 700, marginTop:30}}>
            <img src={icon} style={{width: 40, height: 40, verticalAlign: 'middle', marginRight: 10}} alt="Calendar Icon"/>
            Events
          </h2>
          <hr className="dark"/>
        </div>
      </div>
    )
  }
}