import sampleSubmittedEvents from './sampleSubmittedEvents.js';
import moment from 'moment';
import {Link} from 'react-router-dom';

import React, { Component } from 'react';

export default class ApprovalTable extends Component {
  render(){
    return (
      <div>
        <table>
          <thead className="no-border">
            <tr>
              <th><strong>Date Submitted</strong></th>
              <th><strong>Submitted By</strong></th>
              <th><strong>Event Title</strong></th>
              <th className="text-center"><strong>Details</strong></th>
              <th className="text-center"><strong>Update Status</strong></th>
            </tr>
          </thead>
          <tbody className="no-border-y">
            {
              sampleSubmittedEvents.map(submittedEvent => {
                return (
                  <tr>
                    <td>{moment(submittedEvent.date).format('MMMM Do, YYYY')}</td>
                    <td><strong>{submittedEvent.attendees[0].name}</strong></td>
                    <td><strong>{submittedEvent.name}</strong></td>
                    <td className="text-center">
                      <Link to={`/events/admin/submissions/${submittedEvent.id}`} className="btn btn-trans btn-primary btn-sm" ><i className="far fa-info"></i> See Details</Link>
                    </td>
                    <td>
                      <select className="form-control">
                        <option>Submission Pending</option>
                        <option>Submission Denied</option>
                        <option>Submission Approved</option>
                        <option>Attendance Confirmed</option>
                      </select>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="modal modal-background colored-header primary fade in" id="details-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h3 className="text-center">Review Submitted Event</h3>
                <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
              </div>
              <div className="modal-body text-left">
                <div>
                  <table className="no-border">
                    <tbody className="no-border-y">
                      <tr>
                        <th style={{padding: 8}}><strong>Date Submitted</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>May 6th, 2017</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Submitted By</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>Joel Smith</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event Title</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>Blended Learning Technical Audit Workshop</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event Description</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>A candle sees a writer as a rooky jumper. Though we assume the latter, they were lost without the measly jeep that composed their innocent. </th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event Location</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>Deep in the Heart of Texas</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event Leaders</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>Profesisonal Education Services</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event Date</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>January 5th, 2018</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event Start Time</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>7:00 AM</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Event End Time</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>3:00 PM</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Total Hours</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>6</th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Documentation</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}><a href="http://google.com">Link to Documentation</a></th>
                      </tr>
                      <tr>
                        <th style={{padding: 8}}><strong>Metadata</strong></th>
                        <th style={{fontWeight: "normal", padding: 8}}>
                          <p><strong>Event Type</strong>: Workshop</p>
                          <p><strong>Funding Source</strong>: Section 234 Funds</p>
                          <p><strong>District Initiatives</strong>: Blended Learning, Personalized PD</p>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-trans btn-default btn-flat md-close" data-dismiss="modal">Edit Event</button>
                <button type="button" className="btn btn-danger btn-flat md-close" data-dismiss="modal">Reject Event</button>
                <button type="button" className="btn btn-success btn-flat md-close" data-dismiss="modal">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}