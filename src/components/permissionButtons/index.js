import React from 'react';

import BigButton from './components/BigButton.js';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="row">
        <div className="col-md-6">
          <h3><i className="far fa-user circle-icon pulse-blue"/> <strong>Edit User</strong></h3>
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
          <h3><i className="far fa-unlock-alt circle-icon green"/> <strong>Set Permissions</strong></h3>
          <BigButton
            iconclassName="fa-file-alt"
            title="Manage Reports"
            description="User will be able to create, edit, and view all reports"
          />
          <BigButton
            iconclassName="fa-calendar-alt"
            title="Manage Events"
            description="User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
          />
          <BigButton
            iconclassName="fa-user-circle"
            title="Manage Users"
            description="User will be able to create, edit, and view all users and groups."
          />
          <BigButton
            iconclassName="fa-history"
            title="View History Pages"
            description="User will be able to view a historical record of all survey responses for all other users."
          />
        </div>
      </div>
      <div className="row" style={{marginTop: 20}}>
        <div className="col-md-12">
          <button className="btn btn-block btn-primary" data-toggle="modal" data-target="#sample-modal-buttons">Test Multiple Selection Modal</button>

        </div>
      </div>
    </div>
    <div className="modal fade success colored-header" id="sample-modal-buttons" tabIndex="-1" role="dialog" style={{display: "none"}} aria-hidden="false">
      <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
          <h3>Set Permissions</h3>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body">
          <div style={{marginBottom: 15}}>
            <label>Set permissions for the <span className="underline--orange">13</span> selected users.</label>
          </div>
          <BigButton
            iconclassName="fa-file-alt"
            title="Manage Reports"
            description="User will be able to create, edit, and view all reports"
          />
          <BigButton
            iconclassName="fa-calendar-alt"
            title="Manage Events"
            description="User will be able to create, edit, and view all events. Additionally, they will be able to register and confirm attendence for events."
          />
          <BigButton
            isConfused={true}
            iconclassName="fa-user-circle"
            title="Manage Users"
            description="User will be able to create, edit, and view all users and groups."
          />
          <BigButton
            iconclassName="fa-history"
            title="View History Pages"
            description="User will be able to view a historical record of all survey responses for all other users."
          />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success btn-flat" data-dismiss="modal">Done</button>
        </div>
        </div>
      </div>
    </div>
  </div>
);