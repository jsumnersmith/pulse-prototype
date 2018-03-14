import React, { Component } from 'react';
import '../events.less';


export default class EventPage extends Component {
  render(){
    return (
      <div className="wrapper">
        {/* <SubHeader activeName="browse" /> */}
        <div className="block-flat" style={{maxWidth: 500, marginLeft: 'auto',  marginRight: 'auto'}}>
          <div className="text-center">
            <h3 style={{margin:0}}><i className="fa fa-check circle-icon green"/> <strong>Payment Submitted</strong></h3>
          </div>
          <p style={{margin: '20px 0'}}>Your payment has been submitted! There may be a delay before our system receives confirmation of that payment, but your registration information will reflect your payment when that confirmation arrives.</p>
          <div className="text-center">
            <button className="btn btn-block btn-success" style={{marginLeft: 0}}>Back to Event</button>
          </div>
        </div>
      </div>
    )
  }
}