import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import DirectoryHeader from './DirectoryHeader';
import users, { groups, emptyGroup } from './users.js';


import './directory.less';

export default class Edit extends Component {
  getUsers = (groupName) => users.filter(user => user.groups.includes(groupName));

  render() {
    const id = this.props.match.params.id;
    groups.push(emptyGroup);
    const group = groups.find(group => String(group.id) === String(id));
    console.log(id, group);
    return (
      <div className="wrapper">
        <DirectoryHeader/>
          <Link className="btn btn-back btn-default" to={'/directory/groups'} >Back to Groups</Link>
          <div className="block-flat" style={{marginTop: 10}}>
            <div className="row">
              <div className="col-md-12">
                <h3 style={{marginTop: 0}}><i className="far fa-info circle-icon pulse-blue" /> <strong>Edit Details</strong></h3>
                <label>Name</label>
                <input value={group.name} className="form-control" />
                <hr />
                <h3><i className="far fa-users circle-icon yellow" /> <strong>Members</strong></h3>
                <div className="directory-search">
                  <div className="directory-search__input">
                    <SearchInput />
                  </div>
                </div>
                <div className="directory-table-wrapper">
                  <table className="no-border directory-groups-table">
                    <thead className="no-border">
                      <tr>
                        <th><strong>Email</strong></th>
                        <th><strong>Name</strong></th>
                        <th style={{width: "100px", textAlign: 'center'}}><strong>Action</strong></th>
                      </tr>
                    </thead>
                    <tbody className="no-border-y">
                      {
                        this.getUsers(group.name).map(user => <tr>
                          <td><Link to={`/directory/edit/${user.id}`}>{user.email}</Link></td>
                          <td><Link to={`/directory/edit/${user.id}`}>{user.name}</Link></td>
                          <td><button className="btn-sm btn btn-danger btn-trans"><i className="far fa-times"/> Remove</button></td>
                        </tr>)
                      }
                    </tbody>
                  </table>
                </div>
                <hr />
                <div className="text-center col-md-12">
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-primary btn-trans">Save and Continue Editing</button>
                  <button className="btn btn-danger btn-trans">Cancel Changes</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
};