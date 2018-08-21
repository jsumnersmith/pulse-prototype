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
              <label>Make this event visible to:</label>
              <button className={`btn btn-success ${!this.state.public && "btn-trans"} btn-xs`} onClick={()=>this.setPublicity(true)}>All Users</button>
              <button className={`btn btn-success ${this.state.public && "btn-trans"} btn-xs`} onClick={()=>this.setPublicity(false)}>Only share with users and groups specified below</button>
            </div>
            <div className="col-md-12">
              <div className="sharing-header" style={{marginTop: 20}}>
                <h5 className="sharing-header--title"><i className="far fa-users circle-icon--small" /> <strong>People</strong></h5>
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
                          rowType='group'
                          itemIsPublic={this.state.public}
                          removeUserOrGroup={this.removeUserOrGroup}
                        />
                      )
                    }
                    {
                      this.state.users.map((user, index) =>
                        <ShareRow
                          item={user}
                          rowType='user'
                          itemIsPublic={this.state.public}
                          removeUserOrGroup={this.removeUserOrGroup}
                        />
                      )
                    }

                  </tbody>
                </table>.
                <div className="text-center">{this.state.public && <label>*This event is currently shared with all users.</label>}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class ShareRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      permission: 'view'
    }
    this.setPermission = this.setPermission.bind(this);
    this.showAsterisk = this.showAsterisk.bind(this);
  }
  setPermission(permission){
    this.setState({permission});
  }
  showAsterisk(){
    return this.props.itemIsPublic && this.state.permission === 'view';
  }
  render(){
    const {item, rowType} = this.props;
    return (
      <tr>
        <td><Avatar rowType={rowType} /> <strong>{item.name}</strong></td>
        <td>
          <UserActions
            onChange={(e)=>this.setPermission(e.target.value)}
            showAsterisk={this.showAsterisk()}
          />
        </td>
        <td><button className="btn btn-sm btn-danger btn-trans" onClick={() => this.props.removeUserOrGroup(item.name)}><i className="far fa-times" />Remove</button></td>
      </tr>
    )
  }
}

const Avatar = ({rowType}) => (
  <span>
    {rowType === 'user'
      ?
      <img src={coffee} className="sharing-user-list--avatar" alt="Coffee Avatar"/>
      :
      <i className="far fa-users circle-icon--small" />
    }
  </span>
)

const UserActions = ({onChange, showAsterisk}) => (
  <div className="sharing-control-wrapper">
    <select className="form-control sharing-control" onChange={onChange}>
      <option value="view" selected>Can View</option>
      <option value="manage">Can Manage Attendance</option>
      <option value="edit">Can Edit</option>
    </select>
    {showAsterisk && <label>*</label>}
  </div>
)