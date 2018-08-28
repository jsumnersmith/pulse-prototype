import React, {Component} from 'react';
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import users, {groups} from '../../apps/directory/users.js';
import coffee from '../../images/new_coffee.png';
import tokens from '@kickup/pulse-style-tokens';
import {sample} from 'lodash';
import chroma from 'chroma-js';

import './sharing.less';

const fadedBlue = chroma(tokens.colors.pulseBlue).alpha(.1).css();

export default class Sharing extends Component {
  constructor(props){
    super(props);
    this.state = {
      public: true,
      users: users.slice(0,4),
      groups: groups.slice(0,2)
    }
    this.removeUserOrGroup = this.removeUserOrGroup.bind(this);
    this.setPublicity = this.setPublicity.bind(this);
  }
  removeUserOrGroup(name){
    console.log(name)
    let updatedUsers = this.state.users.filter(user => user.name !== name);
    let updatedGroups = this.state.groups.filter(group => group.name !== name);
    this.setState({users: updatedUsers, groups: updatedGroups});
  }
  setPublicity(val){
    this.setState({ public: val });
  }
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h3 style={{display:'flex', alignItems: 'center', marginTop: 0 }}><i className="far fa-users green circle-icon" style={{display: 'inline-flex', marginRight: 10}}/> <strong>Visibility and Permissions</strong></h3>
          </div>
          <div className="col-md-12">
            <label>Who should see this event?</label>
            <div>
              <button className={`btn btn-success ${!this.state.public && "btn-trans"} btn-sm`} onClick={()=>this.setPublicity(true)}>All Users</button>
              <button className={`btn btn-success ${this.state.public && "btn-trans"} btn-sm`} onClick={()=>this.setPublicity(false)}>Only share with specific users and groups</button>
            </div>
          </div>
          <div className="col-md-12">
            <ListView isPublic={this.state.public}/>
          </div>
        </div>
      </div>
    )
  }
}

class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      groups: [],
      query: ""
    }
    this.assignPermission = this.assignPermission.bind(this);
    this.setPermission = this.setPermission.bind(this);
    this.removeUserOrGroup = this.removeUserOrGroup.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }
  assignPermission(item){
    item.itemPermission = this.props.isPublic ? 'edit' : 'view';
    return item;
  }
  setPermission(itemType, id, permission){
    let itemsClone = Array.from(this.state[itemType]);
    itemsClone.map(item => {
      if (id === item.id){
        item.itemPermission = permission;
      }
      return item;
    })
    let state = {};
    state[itemType] = itemsClone;
    this.setState(state);
  }
  removeUserOrGroup(name){
    console.log(name)
    let updatedUsers = this.state.users.filter(user => user.name !== name);
    let updatedGroups = this.state.groups.filter(group => group.name !== name);
    this.setState({users: updatedUsers, groups: updatedGroups});
  }
  addUserOrGroup(name){
    let updatedUsers = users.filter(user => user.name === name).map(this.assignPermission);
    let updatedGroups = groups.filter(group => group.name === name).map(this.assignPermission);
    this.setState({users: this.state.users.concat(updatedUsers), groups: this.state.groups.concat(updatedGroups), query: ""});
  }
  renderSearchResults(){
    const { query } = this.state;
    const matchingGroups = groups.filter(group => group.name.match(query));
    const matchingUsers = users.filter(user => user.name.match(query));
    return (
      <div>
        {
          matchingGroups.map(group =>
            <div className="search-box-result" onClick={() => this.addUserOrGroup(group.name)} style={{display: "flex", alignItems: 'center', cursor: 'pointer'}}>
              <strong>{group.name}</strong>
            </div>
          )
        }
        {
          matchingUsers.map(user =>
            <div className="search-box-result" onClick={() => this.addUserOrGroup(user.name)} style={{display: "flex", alignItems: 'center', cursor: 'pointer'}}>
              <strong style={{flexGrow: 1}}>{user.name}</strong>
            </div>
          )
        }
      </div>
    )
  }
  render(){
    const {isPublic} = this.props;
    return (
      <div className="sharing-header" style={{marginTop: 20}}>
        <h5 className="sharing-header--title"><strong>Add users or groups to allow them to { !isPublic && "view this event,"} manage attendance{!isPublic && ","} and/or edit this event.</strong></h5>
        <div className="search-box">
          <div className="input-group">
            <SearchInput
              placeholder="Search users or group to add"
              onChange={(e) => this.setState({query: e.target.value})}
            />
          </div>
          { this.state.query &&
            <div className="search-box-results">
              { this.renderSearchResults() }
            </div>
          }
        </div>
        <table className="no-border">
          <thead className="no-border">
            <tr>
              <th><strong>User/Group</strong></th>
              <th><strong>Members</strong></th>
              <th style={{width: 250}}><strong>Access</strong></th>
              <th style={{width: 30}}></th>
            </tr>
          </thead>
          <tbody className="no-border-y">
            <EditRow />
            <ManageRow />
            {
              this.state.groups.map(group =>
                <ShareRow
                  item={group}
                  rowType='groups'
                  itemIsPublic={isPublic}
                  setPermission={this.setPermission}
                  removeUserOrGroup={this.removeUserOrGroup}
                />
              )
            }
            {
              this.state.users.map((user, index) =>
                <ShareRow
                  item={user}
                  rowType='users'
                  itemIsPublic={isPublic}
                  setPermission={this.setPermission}
                  removeUserOrGroup={this.removeUserOrGroup}
                />
              )
            }

          </tbody>
        </table>
      </div>
    )
  }
}

class ShareRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      permission: 'edit'
    }
    this.setPermission = this.setPermission.bind(this);
    this.showRow = this.showRow.bind(this);
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
    this.n = this.generateRandomNumber(10, 45);
  }
  setPermission(permission){
    const {item, rowType} = this.props;
    this.props.setPermission(rowType, item.id, permission);
  }
  showRow(){
    const {item, itemIsPublic} = this.props;
    if (itemIsPublic && item.itemPermission === 'view') {
      return false;
    } else {
      return true;
    }
  }
  generateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  }
  render(){
    const {item, rowType, itemIsPublic} = this.props;
    return (

        this.showRow() &&
          <tr>
            <td><Avatar rowType={rowType} /> <strong>{item.name}</strong></td>
            <td>
              { rowType === 'groups' &&
                <span>
                  <a data-toggle="modal" data-target={`#${item.name}-group-modal`}>
                    {this.n} Members
                  </a>
                  <GroupModal n={this.n} id={`${item.name}-group-modal`} title={`Members of ${item.name}`}/>
                </span>
              }
            </td>
            <td>
              <UserActions
                itemPermission={item.itemPermission}
                onChange={(e)=>this.setPermission(e.target.value)}
                itemIsPublic={itemIsPublic}
              />
            </td>
            <td><button className="btn btn-sm btn-danger btn-trans" onClick={() => this.props.removeUserOrGroup(item.name)}><i className="far fa-times" />Remove</button></td>
          </tr>
    )
  }
}

class EditRow extends ShareRow {
  constructor(props){
    super(props)
    this.n = this.generateRandomNumber(10, 20)
  }
  render(){
    return (
      <tr style={{background: fadedBlue}}>
        <td><i className="far fa-unlock circle-icon--small pulse-blue" /> <strong>{"Users who can edit all events"}</strong></td>
        <td>
          <a data-toggle="modal" data-target="#edit-group-modal">
            {this.n} Members
          </a>
          <GroupModal n={this.n} id={"edit-group-modal"} title={"Can Edit All Events"}/>
        </td>
        <td><label>View, Manage Attendance, and Edit</label></td>
        <td></td>
      </tr>
    )
  }
}

class ManageRow extends ShareRow {
  constructor(props){
    super(props)
    this.n = this.generateRandomNumber(30, 40)
  }
  render(){
    return (
      <tr style={{background: fadedBlue}}>
        <td><i className="far fa-unlock circle-icon--small pulse-blue" /> <strong>{"Users who can manage attendance for all events"}</strong></td>
        <td>
          <a data-toggle="modal" data-target="#manage-group-modal">
            {this.n} Members
          </a>
          <GroupModal n={this.n} id={"manage-group-modal"} title={"Can Manage Attendance for All Events"}/>
        </td>
        <td><label>View and Manage Attendance</label></td>
        <td></td>
      </tr>
    )
  }
}

const Avatar = ({rowType}) => (
  <span>
    {rowType === 'users'
      ?
      <img src={coffee} className="sharing-user-list--avatar" alt="Coffee Avatar"/>
      :
      <i className="far fa-users circle-icon--small" />
    }
  </span>
)

const UserActions = ({itemPermission, onChange, itemIsPublic}) => (
  <div className="sharing-control-wrapper">
    <select className="form-control sharing-control" onChange={onChange} style={{minWidth: 280}}>
      {itemIsPublic ? <option value="view" disabled>View</option> :
      <option value="view" selected={itemPermission === 'view' ? true : false}>View</option> }
      <option value="manage" selected={itemPermission === 'manage' ? true : false}>View and Manage Attendance</option>
      <option value="edit" selected={itemPermission === 'edit' ? true : false}>View, Manage Attendance, and Edit</option>
    </select>
  </div>
)

const GroupModal = ({n, id, title="Members"}) => (
  <div className="modal modal-background fade in" id={id} tabIndex="-1" role="dialog" style={{display: "none"}}>
    <div className="modal-dialog" style={{minWidth: 700, maxWidth: '95%'}}>
      <div className="modal-content" style={{padding: 20}}>
        <div className="modal-header text-left">
          <h3><i className="far fa-users circle-icon green" style={{marginRight: 5}}/> <strong>{title}</strong></h3>
          <a className="close"  aria-hidden="true" data-dismiss="modal">×</a>
        </div>
        <div className="modal-body" style={{padding: 20}}>
          <GroupList n={n}/>
        </div>
        <div className="text-center" >
          <button className="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
)

const generateNames = (amount) => {
  const list = Array.from(Array(amount).keys());
  const namesList = list.map(item => `${sample(firstNames)} ${sample(lastNames)}`)
  console.log(namesList);
  return namesList;
}

const GroupList = ({n}) => (
  <table className="no-border">
    <thead className="no-border-y"><tr><th><strong>User</strong></th></tr></thead>
    <tbody className="no-border-y">
      {
        generateNames(n).map(name => <tr><td><img src={coffee} className="sharing-user-list--avatar" alt="Coffee Avatar"/> <strong>{name}</strong></td></tr>)
      }
    </tbody>

  </table>
)

const firstNames = [
  "John",
  "Joe",
  "Jim",
  "Josh",
  "Jacob",
  "James",
  "Joseph",
  "Julia",
  "Jamie",
  "Jayla",
  "Jenny",
  "Justin"
]

const lastNames = [
  "Jones",
  "Jameison",
  "Jackson",
  "Jimenez",
  "Jenkins",
  "Jefferson",
  "Jung",
  "Joyce",
  "Johnson",
  "Jordan",
  "Jurgen",
  "Jagger"
]