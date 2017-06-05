import React, {Component} from 'react';
import SubHeader from './components/SubHeader';
import './events.css';

export default class Events extends Component {
  render(){
    return (
      <div className="wrapper">
        <SubHeader activeName="home" />
      </div>
    )
  }
}