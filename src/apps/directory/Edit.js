import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import { Tag } from '@kickup/pulse-ui/src/deprecated';
import sampleUsers from './users.js';
import _ from 'lodash';
import BigButton from '../../components/permissionButtons/components/BigButton.js';
import ListTable from '../../components/listTable';
import PermissionsTable from './PermissionTable';

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
            <div className="col-md-12">
              <h3 style={{marginTop: 0}}><i className="fa fa-user circle-icon pulse-blue" /> <strong>Basic Information</strong></h3>
            </div>
            <div className="col-md-6">
              <fieldset className="fieldset" style={{marginBottom: 10}}>
                <label>First Name</label>
                <input value={user.name.split(' ')[0]} className="form-control" />
              </fieldset>
            </div>
            <div className="col-md-6">
              <fieldset className="fieldset">
                <label>Last Name</label>
                <input value={user.name.split(' ')[1]} className="form-control" />
              </fieldset>
            </div>
            <div className="col-md-12">
              <table className="no-border" style={{marginBottom: 10}}>
                <thead className="no-border">
                  <tr>
                    <th><strong>Email Address</strong></th>
                    <th><strong>Verified</strong></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="no-border-y">
                  <tr>
                    <td>{user.email}</td>
                    <td><i className="fa fa-check circle-icon--small white-text green"/></td>
                    <td><button className="btn btn-sm btn-trans btn-primary">Actions <i className="fa fa-caret-down" /></button></td>
                  </tr>
                </tbody>
              </table>
              <div style={{display: 'flex', alignContent: 'center'}} >
                <input placeholder="Enter a unique email address" className="form-control" />
                <button className="btn btn-primary" style={{marginTop: '5px'}}>Add</button>
              </div>
            </div>
            <div className="col-md-12">
              <hr style={{marginTop: 40, marginBottom: 30}} />
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
              </div>
              <div className="col-md-6">
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
              <h3 style={{marginTop: 0, marginBottom: 20}}><i className="fa fa-unlock-alt circle-icon green" /> <strong>Permissions & Restrictions</strong></h3>

              <div className="col-md-12">
                <div className="directory-toggle">
                  <label>Can this person log in?</label>
                  <span>
                    <button className={`btn btn-xs ${user.canLogin && 'btn-success'}`}>Yes</button>
                    <button className={`btn btn-xs ${!user.canLogin && 'btn-success'}`}>No</button>
                  </span>
                </div>
              </div>
              {
                user.canLogin &&

                <div className="col-md-12">
                  <h4 className="directory-section-subheader"><strong><i className="fa fa-user circle-icon--small green white-text"/> Administrative Permissions</strong></h4>
                  <p>These permissions will grant a user global, application-wide permissions to manage content.</p>
                  <div className="col-md-6">
                    <BigButton
                      isActive={user.permissions.includes('Manage Reports')}
                      iconclassName="fa-file-text-o"
                      title="Manage Reports"
                      description="User will be able to create, edit, and view all reports"
                    />
                  </div>
                  <div className="col-md-6">
                    <BigButton
                      isActive={user.permissions.includes('Manage Events')}
                      iconclassName="fa-calendar"
                      title="Manage Events"
                      description="User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
                    />
                  </div>
                  <h4 className="directory-section-subheader"><strong><i className="fa fa-users circle-icon--small green white-text"/> Management Permissions</strong></h4>
                  <p>These permissions will grant a user specific permissions to manage content and may be constrained down to content related to specific groups.</p>
                  <div className="col-md-12">
                    <PermissionsTable permissions={[
                      {
                        isActive: user.permissions.includes('Manage Users'),
                        iconclassName:"fa-user-circle",
                        title:"Manage Users",
                        description: "User will be able to create, edit, and view all users and groups."
                      },
                      {
                        isActive: user.permissions.includes('Manage Event Requests'),
                        iconclassName:"fa-user-circle",
                        title:"Manage Event Requests",
                        description: "User will be able to review and approve out of district event requests."
                      },
                      {
                        isActive: user.permissions.includes('View History Pages'),
                        iconclassName:"fa-user-circle",
                        title:"View History Pages",
                        description: "User will be able to view a historical record of all survey responses for all other users."
                      }
                    ]} />
                  </div>
                </div>
              }
              <div className="col-md-12" style={{marginTop: 30}}>
                <div className="directory-toggle">
                  <label>Do you want to restrict what data this user can see in reports that are shared with them?</label>
                  <span>
                    <button className={`btn btn-xs ${user.canLogin && 'btn-success'}`}>Yes</button>
                    <button className={`btn btn-xs ${!user.canLogin && 'btn-success'}`}>No</button>
                  </span>
                </div>

                <div>
                  <h4 className="directory-section-subheader"><strong>Current Restrictions</strong> <button className="btn btn-sm btn-primary btn-trans" data-toggle="modal" data-target="#sample-modal"><i className="fa fa-pencil" /> Edit Restrictions</button></h4>
                  { user.restrictions.length < 1 && <p>This user currently has no restrictions</p>}
                  {_.chain(user.restrictions).groupBy(restriction => restriction.type).map((restrictions, restrictionType) => {
                    return <span style={{display: 'inline-flex', alignItems: 'center', marginRight: 10}}><label style={{display: 'inline-block', marginRight: 5}}>{restrictionType}</label> {restrictions.map(restriction => <Tag name={`${restriction.value}`}/>)}</span>
                  }).value()}
                </div>
                <div style={{padding: 30, textAlign: 'center'}}>
                </div>
              </div>
            <div className="text-center col-md-12">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-primary btn-trans">Save and Continue Editing</button>
              <button className="btn btn-danger btn-trans">Cancel Changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal full-width modal-background fade in" id="sample-modal" tabIndex="-1" role="dialog" style={{dispaly: 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-left" style={{paddingTop:40, paddingBottom: 0}}>
                <h3><i className="fa fa-list-alt circle-icon purple" style={{marginRight: 5}}/> <strong>Set Restrictions for {user.name}</strong></h3>
                <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
              </div>
              <div className="modal-body" style={{padding: 20}}>
                <div>
                  <Restrictions />
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-flat md-close" data-dismiss="modal">Save Restrictions</button>
              </div>
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