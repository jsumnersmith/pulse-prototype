import sampleSubmittedEvents from './sampleSubmittedEvents.js';
import moment from 'moment';

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
              <th className="text-center"><strong>Action</strong></th>
            </tr>
          </thead>
          <tbody className="no-border-y">
            {
              sampleSubmittedEvents.map(submittedEvent => {
                return (
                  <tr>
                    <td>{moment(submittedEvent.date).format('MMMM Do, YYYY')}</td>
                    <td>{submittedEvent.attendees[0].name}</td>
                    <td>{submittedEvent.name}</td>
                    <td className="text-center">
                      <a className="btn btn-trans btn-primary btn-sm"><i className="fa fa-info"></i> See Details</a>
                      <a className="btn btn-trans btn-success btn-sm"><i className="fa fa-check"></i> Approve</a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}