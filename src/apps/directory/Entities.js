import React from 'react';
import { SearchWithFilters as SearchInput, Tag } from '@kickup/pulse-ui/src/deprecated';
import { Link } from 'react-router-dom';
import { nonPeople } from './users.js';
import DirectoryHeader from './DirectoryHeader';

export default () => (
  <div className="wrapper">
    <DirectoryHeader />
    <div className="block-flat">
      <div className="content">
        <div>
          <div>
            <p>
              <i className="orange fa fa-info-circle" /> This management view is for super users to help manage non-people related entities generated from data sources in the system.
            </p>
          </div>
          <div className="directory-search">
            <div className="directory-search__input">
              <SearchInput />
            </div>
          </div>
          <table className="no-border">
            <thead className="no-border">
              <tr>
                <th><strong>Name</strong></th>
                <th><strong>Attributes</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y">
              { nonPeople.map(item =>
                <tr>
                  <td><Link to={`/directory/edit/entity/${item.id}`}><strong>{item.name}</strong></Link></td>
                  <td>{item.attributes.map(attribute => <Tag name={`${attribute.type}: ${attribute.value}`} iconName="tag"/>)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)