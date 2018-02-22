import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import sampleUsers, {nonPeople} from './users.js';
import './directory.less';

export default class Edit extends Component {
  render() {
    const allPeople = sampleUsers.concat(nonPeople);
    const id = this.props.match.params.id;
    const user = allPeople.find(user => String(user.id) === String(id));
    return (
      <div className="wrapper">
        <DirectoryHeader/>
          <Link className="btn btn-back btn-default" to={`/directory/edit/${user.id}`} >Back to User</Link>
          <div className="block-flat" style={{marginTop: 10}}>
            <h3 style={{marginTop: 0}}><i className="fa fa-tags circle-icon yellow" /> <strong>Attributes</strong></h3>
            <p><i className="fa fa-info-circle orange"/> The following attribute facts are everything that KickUp has learned about this person or entity from any uploads, imports, or editing that has happened in our system.</p>
            <div className="directory-search__input">
              <SearchInput />
            </div>
            <table className="no-border">
              <thead className="no-border">
                <tr>
                  <th><strong>Type</strong></th>
                  <th><strong>Value</strong></th>
                  <th><strong>Start Date</strong></th>
                  <th><strong>End Date</strong></th>
                  <th><strong>Source</strong></th>
                  <th><strong>Status</strong></th>
                </tr>
              </thead>
              <tbody className="no-border-y">
                {
                  user.school &&
                  <tr>
                    <td>School</td>
                    <td>{user.school}</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Irving ISD Roster Data Source</td>
                    <td><i className="fa fa-check green"/> Active</td>
                  </tr>
                }
                {
                  user.grade &&
                  <tr>
                    <td>Grade</td>
                    <td>{user.grade}</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Irving ISD Roster Data Source</td>
                    <td><i className="fa fa-check green"/> Active</td>
                  </tr>
                }
                {
                  user.role &&
                  <tr>
                    <td>Role</td>
                    <td>{user.role}</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Irving ISD Roster Data Source</td>
                    <td><i className="fa fa-check green"/> Active</td>
                  </tr>
                }
                {
                  user.attributes &&
                    user.attributes.map(attribute =>
                      <tr>
                        <td>{attribute.type}</td>
                        <td>{attribute.value}</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Sample Survey Import</td>
                        <td><i className="fa fa-check green"/> Active</td>
                      </tr>
                    )
                }
              </tbody>
            </table>
            <div style={{marginTop: 20}}>
              <button className="btn btn-primary"><i className="fa fa-plus"/> Add New Attribute Fact</button>
            </div>
          </div>
      </div>
    )
  }
};