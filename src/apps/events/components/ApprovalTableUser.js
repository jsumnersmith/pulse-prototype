import sampleSubmittedEvents from './sampleSubmittedEvents.js';
import moment from 'moment';
import {Link} from 'react-router-dom';
import MultiSelectField from './MultiSelectField';


import React, { Component } from 'react';

export default class ApprovalTable extends Component {
  constructor(props){
    super(props);
    this.updateShow = this.updateShow.bind(this);
  }
  state = {
    show: 'active'
  }
  updateShow (e) {
    console.log(e);
    this.setState({show: e.target.value});
  }
  render(){
    const eventsToShow = this.state.show === 'active' ? [sampleSubmittedEvents[0]] : [sampleSubmittedEvents[1]]
    return (
    <div>
      <h5 className="event-list-title" style={{background: "#8B698E"}}>
          <div style={{display:"inline-block", width: "calc(100% - 500px)"}}>
            <i className="fa fa-check circle-icon--medium purple color-text"></i>
            <strong>Submitted Events</strong>
          </div>
          <span style={{display: "inline-block", width: 500}} className="text-right">
            <Link to={"/events/submit"} className="btn btn-default">Submit an Event</Link>
          </span>
        </h5>
        <div className="events-table-actions">
          <label >Show</label>
          <select className="form-control" style={{background: 'white', width: 150}} onChange={this.updateShow}>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div style={{padding: 20, background: 'white'}}>
          <table>
            <thead className="no-border" style={{background: '#eee'}}>
              <tr>
                <th><strong>Date Submitted</strong></th>
                <th><strong>Event Title</strong></th>
                <th className="text-center"><strong>Details</strong></th>
                <th><strong>Status</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y" style={{background: 'white'}}>
              {
                eventsToShow.map(submittedEvent => {
                  return (
                    <tr>
                      <td>{moment(submittedEvent.date).format('MMMM Do, YYYY')}</td>
                      <td><strong>{submittedEvent.name}</strong></td>
                      <td className="text-center">
                        <Link to={`/events/submissions/${submittedEvent.id}`} className="btn btn-trans btn-primary btn-sm" ><i className="fa fa-info"></i> See Details</Link>
                      </td>
                      <td>
                        <DisplayStatus status={`${this.state.show === 'active' ? 'pending' : 'closed'}`}/>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const DisplayStatus = ({status}) =>(
  <div>
    {status === 'pending' && <h5><strong><i className="fa fa-hourglass orange circle-icon--small white-text" style={{marginRight: 5}}/> Submission Pending</strong></h5>}
    {status === 'approved' && <h5><strong><i className="fa fa-thumbs-up pulse-blue circle-icon--small white-text" style={{marginRight: 5}}/> Submission Approved</strong></h5>}
    {status === 'denied' && <h5><strong><i className="fa fa-times red circle-icon--small white-text" style={{marginRight: 5}}/> Submission Denied</strong></h5>}
    {status === 'closed' && <h5><strong><i className="fa fa-minus red circle-icon--small white-text" style={{marginRight: 5}}/> Submission Closed</strong></h5>}
    {status === 'confirmed' && <h5><strong><i className="fa fa-check green circle-icon--small white-text"style={{marginRight: 5}}/> Attendance Confirmed</strong></h5>}
  </div>
)