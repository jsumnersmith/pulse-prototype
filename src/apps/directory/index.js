import React from 'react';
import DirectoryHeader from './DirectoryHeader'
import { SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import './directory.less';
import { Link } from 'react-router-dom';
import sampleUsers from './users.js';

const isLast = (index, arr) => {
  if (index !== arr.length - 1) {
    return false;
  }  else {
    return true;
  }
}

export default ({match}) => (
    <div className="wrapper">
      <DirectoryHeader />
        <div className="block-flat">
          <div className="content">
            <div className="directory-search">
              <div className="directory-search__input">
                <SearchInput />
              </div>
              <div className="directory-search__filters">
                <button className="btn btn-default"><i className="fa fa-columns"/> Show <i className="fa fa-caret-down"/></button>
                <button className="btn btn-default"><i className="fa fa-tags"/> Filter</button>
              </div>
            </div>
            <div className="directory-type-filter btn-group">
              <button className="btn btn-primary btn-sm">People</button>
              <button className="btn btn-default btn-sm">Other</button>
            </div>
            <table className="no-border">
              <thead className="no-border">
                <tr>
                  <th><strong>Email</strong></th>
                  <th><strong>Name</strong></th>
                  <th><strong>Can Login</strong></th>
                  <th><strong>Groups</strong></th>
                  <th><strong>Permissions</strong></th>
                  <th><strong>Data Restrictions</strong></th>
                  <th><strong>School</strong></th>
                  <th><strong>Role</strong></th>
                  <th><strong>Grades</strong></th>
                  <th><strong>Other Attribute</strong></th>
                </tr>
              </thead>
              <tbody className="no-border-y">
                {
                  sampleUsers.map(user => <tr>
                    <td><strong><Link to={`/directory/edit/${user.id}`}>{user.email}</Link></strong></td>
                    <td><strong><Link to={`/directory/edit/${user.id}`}>{user.name}</Link></strong></td>
                    <td className="text-center">{user.canLogin ? <i className="fa fa-check green" />: <i className="fa fa-minus-circle red-text"/> }</td>
                    <td>{user.groups.map((group, index) => <Link to={'/directory/groups'}>{group}{!isLast(index, user.groups) && ', ' }</Link>)}</td>
                    <td>Permissions</td>
                    <td>Data Restrictions</td>
                    <td>{user.school}</td>
                    <td>{user.role}</td>
                    <td>{user.grade}</td>
                    <td></td>
                  </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
    </div>
);