import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import { Tag } from '@kickup/pulse-ui/src/deprecated';
import sampleUsers from './users.js';
import BigButton from '../../components/permissionButtons/components/BigButton.js';
import ListTable from '../../components/listTable';
import GroupsSelector from './GroupSelector';

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
              <h3 style={{marginTop: 0}}><i className="fa fa-user circle-icon pulse-blue" /> <strong>Edit Details</strong></h3>
              <label>Name</label>
              <input value={user.name} className="form-control" />
              <label>Email</label>
              <input value={user.email} className="form-control" />
              <div style={{margin: '10px 0', height: 200, background: '#eee', border: 'rgba(0,0,0,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <strong>New Email UI</strong>
              </div>
            </div>
            <div className="col-md-6">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                  <div className="">
                    <h3><i className="fa fa-tags circle-icon yellow" /> <strong>Attributes</strong> &nbsp;
                    <span style={{color: '#bbb', background: '#eee', borderRadius: '50%', height: 20, width: 20, fontSize: 15, display: 'inline-flex', alignItems:'center', justifyContent: 'center'}} data-placement="top" data-toggle="popover" title="What are attributes?" data-content="Attributes are basic demographic facts that are known about a user. Typically, this data is used for data analysis in analytics reporting. "><i className="fa fa-question" style={{color: '#bbb', fontSize: 15}}/></span>
                  </h3>
                  </div>
                  <div className="text-right">
                      <Link to={`/directory/edit/${user.id}/attributes`} className="btn btn-primary btn-trans btn-sm text-right" style={{marginTop: 10}}><i className="fa fa-pencil" /> Edit Attributes</Link>
                    </div>
                </div>
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
                <hr />
                <h3>
                  <i className="fa fa-users circle-icon red" /> <strong>Groups</strong> &nbsp;
                  <span style={{color: '#bbb', background: '#eee', borderRadius: '50%', height: 20, width: 20, fontSize: 15, display: 'inline-flex', alignItems:'center', justifyContent: 'center'}} data-placement="top" data-toggle="popover" title="What are groups?" data-content="Groups are a tool for easily sharing or pre-registering a number of users in either analytics or events. "><i className="fa fa-question" style={{color: '#bbb', fontSize: 15}}/></span>
                </h3>
                <label>This user is a member of the following groups:</label>
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
            <div className="col-md-12">
              <hr />
              <h3 style={{marginTop: 0, marginBottom: 20}}><i className="fa fa-unlock-alt circle-icon green" /> <strong>Permissions</strong></h3>
              <div className="col-md-6">
                <BigButton
                  isActive={user.canLogin}
                  iconclassName="fa-lock"
                  title="Can Log In"
                  description="This will allow this user to log in to KickUp."
                />
                <BigButton
                  isActive={user.permissions.includes('Manage Reports')}
                  iconclassName="fa-file-text-o"
                  title="Manage Reports"
                  description="User will be able to create, edit, and view all reports"
                />
                <BigButton
                  isActive={user.permissions.includes('Manage Events')}
                  iconclassName="fa-calendar"
                  title="Manage Events"
                  description="User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
                />
                <BigButton
                  isActive={user.permissions.includes('Manage Users')}
                  iconclassName="fa-user-circle"
                  title="Manage Users"
                  description="User will be able to create, edit, and view all users and groups."
                />
                <BigButton
                  isActive={user.permissions.includes('View History Pages')}
                  iconclassName="fa-history"
                  title="View History Pages"
                  description="User will be able to view a historical record of all survey responses for all other users."
                />
              </div>
              <div className="col-md-6">
                <label>This user can manage the following groups:</label>
                <GroupsSelector
                  groups={['English', 'Crocket Middle School', 'Nimitz High School', 'MacArthur High School']}
                />
              </div>
            </div>
            <div className="col-md-12">
              <hr />
              <h3><i className="fa fa-list-alt circle-icon purple" /> <strong>Data Restrictions</strong></h3>
              <Restrictions />
              <hr />
            </div>
            <div className="text-center col-md-12">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-primary btn-trans">Save and Continue Editing</button>
              <button className="btn btn-danger btn-trans">Cancel Changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};



const Restrictions = () => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <ListTable
          list={{
              title: 'School',
              items: [
                { name: 'Crocket Middle School' },
                { name: 'Nimitz High School' },
                { name: 'MacArthur High School' }
              ]
            }
          }
        />
      </div>
      <div className="col-md-4">
        <ListTable
          list={{
              title: 'Role',
              items: [
                { name: 'English' }
              ]
            }
          }
        />
      </div>
      <div className="col-md-4">
        <ListTable
          list={{
              title: 'Grade',
              items: [
                { name: '12' },
                { name: '10' },
                { name: '6' }
              ]
            }
          }
        />
      </div>
    </div>
  </div>
)