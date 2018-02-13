import React, {Component} from 'react';
import DirectoryHeader from './DirectoryHeader';
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import { Link } from 'react-router-dom';
import users, { groups } from './users';

import './directory.less';

export default class Groups extends Component {
  getUserCount = (groupName) => users.filter(user => user.groups.includes(groupName)).length;

  render(){
    return (
      <div className="wrapper">
      <DirectoryHeader/>
      <Link className="btn btn-back btn-default" to={'/directory'} >Back to Directory</Link>
        <div className="block-flat" style={{marginTop: 10}}>
        <h3 style={{marginTop: 0}}><i className="fa fa-users circle-icon yellow" /> <strong>Groups</strong></h3>
        <div className="content">
            <div className="directory-search">
              <div className="directory-search__input">
                <SearchInput />
              </div>
            </div>
            <table className="no-border">
              <thead className="no-border">
                <tr>
                  <th><strong>Group Name</strong></th>
                  <th className="text-center"><strong>Members</strong></th>
                </tr>
              </thead>
              <tbody className="no-border-y">
                {
                  groups.map(group =>
                    <tr>
                      <td><strong><Link to={`/directory/groups/edit/${group.id}`}>{group.name}</Link></strong></td>
                      <td className="text-center">{this.getUserCount(group.name)}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
    </div>
    )
  }
}

