import React from 'react';

import BigButton from './components/BigButton.js';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="row">
        <div className="col-md-6">
          <h3><i className="fa fa-user circle-icon pulse-blue"/> <strong>Edit User</strong></h3>
          <fieldset>
            <label>First Name</label>
            <input className="form-control"/>
          </fieldset>
          <fieldset>
            <label>Last Name</label>
            <input className="form-control"/>
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input className="form-control"/>
          </fieldset>
        </div>
        <div className="col-md-6">
          <h3><i className="fa fa-user circle-icon green"/> <strong>Set Permissions</strong></h3>
          <BigButton
            iconClass="fa-file-text-o"
            title="Manage Reports"
            description="User will be able to create, edit, and view all reports"
          />
          <BigButton
            iconClass="fa-calendar"
            title="Manage Events"
            description="User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
          />
          <BigButton
            iconClass="fa-user-circle"
            title="Manage Users"
            description="User will be able to create, edit, and view all users and groups."
          />
          <BigButton
            iconClass="fa-history"
            title="View History Pages"
            description="User will be able to view a historical record of all survey responses for all other users."
          />
        </div>
      </div>
    </div>
  </div>
);