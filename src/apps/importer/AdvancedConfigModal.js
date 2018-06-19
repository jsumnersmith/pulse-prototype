import React from 'react';

export default ({configType = 'unconfigured', title, isOpen = false, close, index = 0}) => (
  <div className="modal modal-background fade in" id="save-modal" tabIndex="-1" role="dialog" style={{display: isOpen ? 'block' : 'none'}}>
    <div className="modal-dialog" style={{width: '80%'}}>
      <div className="modal-content" style={{padding: 20}}>
        <div className="modal-header text-left">
          <h3><i className="fa fa-gear circle-icon green" style={{marginRight: 5}}/> <strong>Advanced Column Configuration</strong></h3>
          <a className="close" onClick={close} aria-hidden="true">×</a>
        </div>
        <div className="modal-body" style={{padding: 20}}>
          <div>
            <div className="blue-header">
              <div className="blue-header__title"><label>Column {index}</label></div>
              <table>
                <thead className="no-border-y">
                  <tr><th><strong>{title}</strong></th></tr>
                </thead>
              </table>
            </div>
            <div style={{display: 'flex', alignItems: 'center', margin: '15px 0'}}>
              <label>Configuration:</label>
              <select className="form-control" style={{marginLeft: 10}}>
                <option >--- Select a Column Configuration ---</option>
                <optgroup label="User/Person">
                  <option selected={configType === 'First Name'} value="First Name">First Name</option>
                  <option selected={configType === 'Last Name'} value="Last Name">Last Name</option>
                  <option selected={configType === 'Email'} value="Email">Email</option>
                  <option selected={configType === 'Groups'} value="Groups">Groups</option>
                  <option selected={configType === 'School'} value="School">School</option>
                  <option selected={configType === 'Grade'} value="Grade">Grade</option>
                  <option selected={configType === 'Role'} value="Role">Role</option>
                  <option value="New Attribute">Create New Attribute</option>
                  <option value="Remove">Deactivate User - True/False</option>
                </optgroup>
              </select>
            </div>
            Appropriate Data for Configuration
          </div>
        </div>
        <div className="text-center" >
          <button className="btn btn-primary" onClick={close}>Save</button>
          <button className="btn btn-danger btn-trans" onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
)