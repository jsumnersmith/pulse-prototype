import React, {Component} from 'react';
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import BigButton from '../../components/permissionButtons/components/BigButton.js';
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
  }
  removeUserOrGroup(name){
    console.log(name)
    let updatedUsers = this.state.users.filter(user => user.name !== name);
    let updatedGroups = this.state.groups.filter(group => group.name !== name);
    this.setState({users: updatedUsers, groups: updatedGroups});
  }
  render(){
    return (
      <div>
        <div className="block-flat">
          <div className="row">
            <div className="col-md-12">
              <BigButton
                isActive={this.state.public}
                iconclassName="fa-file-text-o"
                title="Make Event Public"
                description="If selected, any user who can access events for your organziation should be able to see this event."
              />
            </div>
            <div className="col-md-12">
              <div className="sharing-header" style={{marginTop: 20}}>
                <h5 className="sharing-header--title"><i className="far fa-group circle-icon--small" /> <strong>Groups</strong></h5>
                <SearchInput placeholder="Search users or groups to give them access to this event." />
                <table className="no-border">
                  <thead className="no-border">
                    <tr>
                      <th><strong>Groups</strong></th>
                      <th style={{width: 30}}></th>
                    </tr>
                  </thead>
                  <tbody className="no-border-y">
                    {
                      this.state.groups.map(group =>
                        <tr>
                          <td><i className="far fa-group circle-icon--small" /> <strong>{group.name}</strong></td>
                          <td><button className="btn btn-sm btn-danger btn-trans" onClick={() => this.removeUserOrGroup(group.name)}><i className="far fa-times" />Remove</button></td>
                        </tr>
                      )
                    }
                    {
                      this.state.users.map((user, index) =>
                        <tr>
                          <td><img src={coffee} className="sharing-user-list--avatar" alt="Coffee Avatar"/> <strong>{user.name}</strong></td>
                          <td><button className="btn btn-sm btn-danger btn-trans" onClick={() => this.removeUserOrGroup(user.name)}><i className="far fa-times" />Remove</button></td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}