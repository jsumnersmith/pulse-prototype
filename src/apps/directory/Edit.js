import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import { Tag } from '@kickup/pulse-ui/src/deprecated';
import sampleUsers from './users.js';
import BigButton from '../../components/permissionButtons/components/BigButton.js';
import ListTable from '../../components/listTable';


import './directory.less';

export default class Edit extends Component {
  render() {
    const id = this.props.match.params.id;
    const user = sampleUsers.find(user => String(user.id) === String(id));
    console.log(id, user);
    return (
      <div className="wrapper">
        <DirectoryHeader/>
          <Link className="btn btn-back btn-default" to={'/directory'} >Back to Directory</Link>
          <div className="block-flat" style={{marginTop: 10}}>
            <div className="row">
              <div className="col-md-6">
                <h3><i className="fa fa-user circle-icon pulse-blue" /> <strong>Edit Details</strong></h3>
                <label>Name</label>
                <input value={user.name} className="form-control" />
                <label>Email</label>
                <input value={user.email} className="form-control" />
                <hr />
                <BigButton
                  iconclassName="fa-lock"
                  title="Can Log In"
                  description="This will allow this user to log in to KickUp."
                />
                <hr />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                  <div className="">
                    <h3><i className="fa fa-tags circle-icon yellow" /> <strong>Attributes</strong></h3>
                  </div>
                  <div className="text-right">
                      <Link to={`/directory/edit/${user.id}/attributes`} className="btn btn-primary btn-trans btn-sm text-right" style={{marginTop: 10}}><i className="fa fa-pencil" /> Edit Attributes</Link>
                    </div>
                </div>
                <div className="col-md-12">

                  <table className="no-border">
                    <thead className="no-border">
                      <tr>
                        <th><strong>Attribute</strong></th>
                        <th><strong>Value</strong></th>
                      </tr>
                    </thead>
                    <tbody className="no-border-y">
                      <tr>
                        <td><strong>School</strong></td>
                        <td>{user.school && <Tag name={user.school} iconName="building-o"/> }</td>
                      </tr>
                      <tr>
                        <td><strong>Grade</strong></td>
                        <td>{user.grade && <Tag name={user.grade} iconName="users"/> }</td>
                      </tr>
                      <tr>
                        <td><strong>Role</strong></td>
                        <td>{user.role && <Tag name={user.role} iconName="book"/> }</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              <div className="col-md-6">
                <h3><i className="fa fa-unlock-alt circle-icon green" /> <strong>Permissions</strong></h3>
                <BigButton
                  iconclassName="fa-file-text-o"
                  title="Manage Reports"
                  description="User will be able to create, edit, and view all reports"
                />
                <BigButton
                  iconclassName="fa-calendar"
                  title="Manage Events"
                  description="User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
                />
                <BigButton
                  iconclassName="fa-user-circle"
                  title="Manage Users"
                  description="User will be able to create, edit, and view all users and groups."
                />
                <BigButton
                  iconclassName="fa-history"
                  title="View History Pages"
                  description="User will be able to view a historical record of all survey responses for all other users."
                />
              </div>
              <hr />
              <div className="col-md-12">

              </div>
              <hr />
              <div className="col-md-12">
                <h3><i className="fa fa-users circle-icon red" /> <strong>Groups</strong></h3>
                <div className="row">
                  <div className="col-md-6">
                    <i className="fa fa-user circle-icon--small" style={{marginLeft: 5}} /> <label>Group Membership</label>
                    <ListTable
                      list={{
                          title: 'Groups',
                          items: [
                            { name: 'English' },
                            { name: 'Crocket Middle School' },
                            { name: 'Nimitz High School' },
                            { name: 'MacArthur High School' }
                          ]
                        }
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <i className="fa fa-gear circle-icon--small "  style={{marginLeft: 5}}/> <label>Group Management</label>
                    <ListTable
                      list={{
                          title: 'Groups',
                          items: [
                            { name: 'English', options: <GroupAdminOptions/> },
                            { name: 'Crocket Middle School', options: <GroupAdminOptions/> },
                            { name: 'Nimitz High School', options: <GroupAdminOptions/> },
                            { name: 'MacArthur High School', options: <GroupAdminOptions/> }
                          ]
                        }
                      }
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-md-12">
                <h3><i className="fa fa-list-alt circle-icon purple" /> <strong>Data Restrictions</strong></h3>
              </div>
            </div>
          </div>
      </div>
    )
  }
};

const GroupAdminOptions = () => (
  <div style={{paddingLeft: 15}}>
    <div><input type="checkbox" /> Can edit users</div>
    <div><input type="checkbox" /> Can share reports with users</div>
    <div><input type="checkbox" /> Notified about survey responses</div>
    <div><input type="checkbox" /> Notified about event requests</div>
  </div>
)