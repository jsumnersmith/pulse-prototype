import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import InviteToggle from './EditComponents/InviteToggle';
import PermissionsTable from './EditComponents/PermissionTable';
import ListTable from '../../components/listTable';
import BigButton from '../../components/permissionButtons/components/BigButton.js';

export default class Uploader extends Component {
  constructor(props){
    super(props);
    this.state = {
      addMultiple: false,
      viewRestrictions: false
    }
    this.toggleMultiple = this.toggleMultiple.bind(this);
    this.toggleRestricions = this.toggleRestricions.bind(this);
  }
  toggleMultiple(val){
    return this.setState({addMultiple: val})
  }
  toggleRestricions(){
    return this.setState({viewRestrictions: !this.state.viewRestrictions})
  }
  render(){
    const {addMultiple} = this.state;
    return (
      <div className="wrapper">
        <DirectoryHeader />
        <div className="block-flat">
          <InviteToggle
            addMultiple={addMultiple}
            toggleMultiple={(val) => this.toggleMultiple(val)}
          />
          <div className="invite-basic-info">
            <h3><i className="far fa-user circle-icon pulse-blue" /> <strong>Add {addMultiple ? "People" : "Person"}</strong></h3>
            <div style={{paddingLeft: 20, paddingRight: 20}}>
              <div className="row" style={{marginBottom: 10}}>
                <div className="col-md-12">
                  <input className="form-control" placeholder={`${addMultiple ? "Add emails separated by a comma" : "Add email"}`}/>
                </div>
              </div>
              {
                !addMultiple &&
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset className="fieldset" style={{marginBottom: 10}}>
                        <label>First Name</label>
                        <input className="form-control" />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset className="fieldset">
                        <label>Last Name</label>
                        <input className="form-control" />
                      </fieldset>
                    </div>
                  </div>
              }
            </div>
          </div>
          <div className="invite-groups">
            <h3><i className="far fa-users circle-icon red" /> <strong>Add to Group</strong></h3>
              <div style={{paddingLeft: 20, paddingRight: 20}}>
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
          </div>
          <div className="invite-permissions row">
            <div className="col-md-12">
            <h3><i className="far fa-unlock circle-icon green" /> <strong>Add Permissions</strong></h3>
            <div style={{paddingLeft: 20, paddingRight: 20}}>
            <h4 className="directory-section-subheader" style={{marginTop: 40}}><strong><i className="far fa-user circle-icon--small pulse-blue white-text"/> Administrative Permissions</strong></h4>
            <p>These permissions will grant a user global, application-wide permissions to manage content.</p>
            <PermissionsTable
              appliesTo={false}
              permissions={[
                {
                  isActive: false,
                  iconclassName: "fa-file-alt",
                  title: "Manage Reports",
                  description: "User will be able to create, edit, and view all reports"
                },
                {
                  isActive: false,
                  iconclassName: "fa-calendar-alt",
                  title: "Manage Events",
                  description: "User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
                }
              ]} />
              <h4 className="directory-section-subheader" style={{marginTop: 40}}><strong><i className="far fa-users circle-icon--small pulse-blue white-text"/> Management Permissions</strong></h4>
              <p>These permissions will grant a user specific permissions to manage content and may be constrained down to content related to specific groups.</p>
              <div className="col-md-12">
                <PermissionsTable
                  appliesTo={true}
                  permissions={[
                  {
                    isActive: false,
                    iconclassName:"fa-user-circle",
                    title:"Manage Users",
                    description: "User will be able to create, edit, and view all users and groups."
                  },
                  {
                    isActive: false,
                    iconclassName:"fa-user-circle",
                    title:"Manage Event Requests",
                    description: "User will be able to review and approve out of district event requests."
                  },
                  {
                    isActive: false,
                    iconclassName:"fa-user-circle",
                    title:"View History Pages",
                    description: "User will be able to view a historical record of all survey responses for all other users."
                  }
                ]} />
              </div>
            </div>
            </div>
          </div>
          <div className="invite-attributes">
            <h3 style={{marginTop: 0, marginBottom: 20}}><i className={`far fa-list-alt circle-icon purple`} /> <strong>Add Restrictions</strong></h3>
             <div style={{padding: '0 20px'}}>
                <label>Do you want to restrict what data this user can see in reports that are shared with them?</label>
                <div onClick={()=> this.toggleRestricions()}>
                  <BigButton
                    isActive={this.state.viewRestrictions}
                    title="Add restrictions for this user"
                    description="User will only see report data associated with the filters that you set."
                  />
                </div>
                {
                  this.state.viewRestrictions &&
                  <Restrictions />
                }
              </div>
          </div>
          <div className="row" style={{marginTop: 20}}>
            <div className="text-center col-md-12">
              <Link className="btn btn-primary" to={'/directory'} ><i className="far fa-envelope" />Send Invitations</Link>
              <Link className="btn btn-danger btn-trans" to={'/directory'} >Cancel Changes</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


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