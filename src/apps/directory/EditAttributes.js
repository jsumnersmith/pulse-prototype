import React, { Component } from 'react';
import './directory.less';

export default class Edit extends Component {
  render() {
    const {user} = this.props;
    return (
     <div>
        <p><i className="fa fa-info-circle orange"/> The following attribute facts are everything that KickUp has learned about this person or entity from any uploads, imports, or editing that has happened in our system.</p>
        <table className="no-border">
          <thead className="no-border">
            <tr>
              <th><strong>Type</strong></th>
              <th><strong>Value</strong></th>
              <th><strong>Start Date</strong></th>
              <th><strong>End Date</strong></th>
              <th><strong>Source</strong></th>
              <th><strong>Status</strong></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="no-border-y">
            {
              user.school &&
              <tr>
                <td>School</td>
                <td>{user.school}</td>
                <td>09/01/2017</td>
                <td>--</td>
                <td>Irving ISD Roster Data Source</td>
                <td><i className="fa fa-check green"/> Active</td>
                <td><button className="btn btn-sm btn-primary btn-trans"><i className="fa fa-pencil" /> Edit</button></td>
              </tr>
            }
            {
              user.grade &&
              <tr>
                <td>Grade</td>
                <td>{user.grade}</td>
                <td>09/01/2017</td>
                <td>--</td>
                <td>Irving ISD Roster Data Source</td>
                <td><i className="fa fa-check green"/> Active</td>
                <td><button className="btn btn-sm btn-primary btn-trans"><i className="fa fa-pencil" /> Edit</button></td>
              </tr>
            }
            {
              user.role &&
              <tr>
                <td>Role</td>
                <td>{user.role}</td>
                <td>09/01/2017</td>
                <td>--</td>
                <td>Irving ISD Roster Data Source</td>
                <td><i className="fa fa-check green"/> Active</td>
                <td><button className="btn btn-sm btn-primary btn-trans"><i className="fa fa-pencil" /> Edit</button></td>
              </tr>
            }
            {
              user.attributes &&
                user.attributes.map(attribute =>
                  <tr>
                    <td>{attribute.type}</td>
                    <td>{attribute.value}</td>
                    <td>09/01/2017</td>
                    <td>--</td>
                    <td>Sample Survey Import</td>
                    <td><i className="fa fa-check green"/> Active</td>
                    <td><button className="btn btn-sm btn-primary btn-trans"><i className="fa fa-pencil" /> Edit</button></td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    )
  }
};