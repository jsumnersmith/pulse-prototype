import React from 'react';
import './attributes.less';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="header">
        <h3>Edit Attribute</h3>
      </div>
      <div className="content">
        <div className="input-group" style={{display: "block"}}>
          <label>Attribute Name</label>
          <input type="text" className="form-control" style={{display: "block", float: "none"}} />
        </div>
        <div className="attribute-value-list">
          <div className="attribute-value-item" sortable="true" draggable="true">
            <i className="far fa-bars" style={{marginLeft: 20}}></i>
            <h5 className="attribute-value-title">
              <input className="form-control"  value="Possible Attribute Value" />
            </h5>
            <i className="far fa-trash-alt" style={{marginLeft: 20}} data-toggle="modal" data-target="#sample-confirm-modal"></i>
          </div>
          <div className="attribute-value-item" sortable="true" draggable="true">
            <i className="far fa-bars" style={{marginLeft: 20}}></i>
            <h5 className="attribute-value-title">
              <input className="form-control"  value="Other Attribute Value" />
            </h5>
            <i className="far fa-trash-alt" style={{marginLeft: 20}} data-toggle="modal" data-target="#sample-confirm-modal"></i>
          </div>
          <div className="attribute-value-item" sortable="true" draggable="true">
            <i className="far fa-bars" style={{marginLeft: 20}}></i>
            <h5 className="attribute-value-title">
              <input className="form-control"  value="One More Attribute Value" />
            </h5>
            <i className="far fa-trash-alt" style={{marginLeft: 20}} data-toggle="modal" data-target="#sample-confirm-modal"></i>
          </div>
        </div>
        <a className="btn btn-success" data-toggle="modal" data-target="#sample-merge-modal" style={{marginTop: 20}}>Test Merge Modal</a>
      </div>
    </div>

    <div className="modal modal-background colored-header danger fade in" id="sample-confirm-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="text-center">Delete This Value?</h3>
            <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <div className="i-circle danger"><i className="far fa-question"></i></div>
              <div>There are <strong>34</strong> users connected to this attribute?</div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default btn-flat md-close" data-dismiss="modal" >Cancel</button>
            <button type="button" className="btn btn-danger btn-flat md-close" data-dismiss="modal">Yes. Delete this value</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal modal-background colored-header success fade in" id="sample-merge-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="text-center">Merge These Values?</h3>
            <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <h2><strong>Possible Attribute Value</strong></h2>
              <h2><i className="far fa-arrow-down" style={{color: "#1b9974", margin: "10px auto"}}></i></h2>
              <h2><strong>Other Attribute Value</strong></h2>
              <div style={{marginTop: 20}}>Would you like to merge all instances of these values?</div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default btn-flat md-close" data-dismiss="modal" >Cancel</button>
            <button type="button" className="btn btn-success btn-flat md-close" data-dismiss="modal">Yes. Merge these values</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);