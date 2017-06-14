import React from 'react';
export default () => (
  <div className="modal modal-background colored-header success fade in" id="confirm-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h3 className="text-center">Confirm Attendence</h3>
          <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
        </div>
        <div className="modal-body text-left">
          <div>
            <div>
              <label>Enter an event attendance code</label>
              <input className="form-control" placeholder="Enter an attendance code to confirm your attendance."/>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success btn-flat md-close" data-dismiss="modal">Submit Code</button>
        </div>
      </div>
    </div>
  </div>
)