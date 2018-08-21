import React, {Component} from 'react';
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import users, {groups} from '../../apps/directory/users.js';
import coffee from '../../images/new_coffee.png';

import './sharing.less';

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
        <div className="block-flat">
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
      </div>
    )
  }
}

class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.assignPermissions(users.slice(0,4)),
      groups: this.assignPermissions(groups.slice(0,2))
    }
    this.setPermission = this.setPermission.bind(this);
    this.removeUserOrGroup = this.removeUserOrGroup.bind(this);
  }
  assignPermissions(items){
    let itemsClone =  Array.from(items);
    itemsClone.map(item => item.id % 2 === 0 ? item.itemPermission = 'view' : item.itemPermission = 'edit')
    return itemsClone;
  }
  setPermission(itemType, id, permission){
    console.log(itemType);
    let itemsClone = Array.from(this.state[itemType]);
    itemsClone.map(item => {
      if (id === item.id){
        item.itemPermission = permission;
      }
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
  render(){
    const {isPublic} = this.props;
    return (
      <div className="sharing-header" style={{marginTop: 20}}>
        <h5 className="sharing-header--title"><i className="far fa-users circle-icon--small" /> <strong>Select people to set { !isPublic && "visibilty and"} permissions</strong></h5>
        <SearchInput placeholder="Search users or groups to give them access to this event." />
        <table className="no-border">
          <thead className="no-border">
            <tr>
              <th><strong>User/Group</strong></th>
              <th style={{width: 250}}><strong>Access</strong></th>
              <th style={{width: 30}}></th>
            </tr>
          </thead>
          <tbody className="no-border-y">
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
  }
  setPermission(permission){
    const {item, rowType} = this.props;
    this.props.setPermission(rowType, item.id, permission);
  }
  showRow(){
    const {item, itemIsPublic} = this.props;
    if (itemIsPublic && item.itemPermission == 'view') {
      return false;
    } else {
      return true;
    }
  }
  render(){
    const {item, rowType, itemIsPublic} = this.props;
    return (

        this.showRow() &&
          <tr>
            <td><Avatar rowType={rowType} /> <strong>{item.name}</strong></td>
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
    <select className="form-control sharing-control" onChange={onChange}>
      {itemIsPublic ? <option value="view" disabled>View</option> :
      <option value="view" selected={itemPermission === 'view' ? true : false}>View</option> }
      <option value="manage" selected={itemPermission === 'manage' ? true : false}>View and Manage Attendance</option>
      <option value="edit" selected={itemPermission === 'edit' ? true : false}>View, Manage, and Edit</option>
    </select>
  </div>
)