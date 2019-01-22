import React from 'react';
import formIcon from '../../images/form-icon.svg';
import {SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import {Link} from 'react-router-dom';

import './form-builder.less';

export default () => (
  <div className="wrapper">
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
      <h2 className="header-title"><img src={formIcon} alt="Form Icon" className="header-icon"/><strong>Forms</strong></h2>
      <Link to="/form-builder/" className="btn btn-primary" style={{height: 34}}>Create New Form</Link>
    </div>
    <div className="block-flat blue-border-top">
      <div style={{height: 40}}>
        <SearchInput
          placeholder="Search for a form"
        />
      </div>
      <table className="no-border" style={{marginTop: 10}}>
        <thead className="no-border">
          <tr>
            <th><strong>Form</strong></th>
            <th><strong>Actions</strong></th>
          </tr>
        </thead>
        <tbody className="no-border-x no-border-y">
          <tr>
            <td><strong>Cool Form</strong></td>
            <td style={{width: 50}}><Link to="/form-builder/edit" className="btn btn-primary btn-sm btn-trans">Edit</Link></td>
          </tr>
          <tr>
            <td><strong>Other Form</strong></td>
            <td style={{width: 50}}><Link to="/form-builder/edit" className="btn btn-primary btn-sm btn-trans">Edit</Link></td>
          </tr>
          <tr>
            <td><strong>Nice Form</strong></td>
            <td style={{width: 50}}><Link to="/form-builder/edit" className="btn btn-primary btn-sm btn-trans">Edit</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)