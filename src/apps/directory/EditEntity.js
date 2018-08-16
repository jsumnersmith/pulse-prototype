import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import {nonPeople} from './users.js';
import EditAttributes from './EditComponents/EditAttributes';
import AddAttribute from './EditComponents/AddAttribute';

import './directory.less';

export default class Edit extends Component {
  render() {
    const id = this.props.match.params.id;
    const item = nonPeople.find(item => String(item.id) === String(id));
    return (
      <div className="wrapper">
        <DirectoryHeader/>
          <Link className="btn btn-back btn-default" to={'/directory/entities'} >Back to All</Link>
          <div className="block-flat" style={{marginTop: 10}}>
            <div className="row">
              <div className="col-md-12">
                <h3><i className="far fa-user circle-icon pulse-blue" /> <strong>Edit Details</strong></h3>
                <label>Name</label>
                <input value={item.name} className="form-control" />
                <table className="no-border directory-email-table" style={{marginTop: 20, border: "2px solid #eee"}}>
                    <thead className="no-border" style={{background: '#eee'}}>
                      <tr>
                        <th><strong>Unique Identifier</strong></th>
                        <th style={{width: 100}}></th>
                      </tr>
                    </thead>
                    <tbody className="no-border-y">
                      <tr>
                        <td>{item.id}</td>
                        <td><button className="btn btn-sm btn-trans btn-primary">Actions <i className="far fa-caret-down" /></button></td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <div style={{display: 'flex', alignContent: 'center'}} >
                            <input placeholder="Enter another unique identifier" className="form-control" />
                            <button className="btn btn-primary"><i className="far fa-plus" />Add</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

              </div>

              <div className="col-md-12">
                <hr />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                  <div className="">
                    <h3 style={{marginTop: 0}}><i className="far fa-tags circle-icon yellow" /> <strong>Attributes</strong></h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <EditAttributes user={item} />
                  <div className="text-right">
                    <button className="btn btn-primary" style={{marginTop: 10}} data-toggle="modal" data-target="#attribute-modal"><i className="far fa-plus" /> Add Attribute</button>
                  </div>
                </div>
                <div className="col-md-12">
                  <hr />
                  <div className="text-center">
                    <Link className="btn btn-primary" to={'/directory/entities'} >Save</Link>
                    <button className="btn btn-primary btn-trans" data-dismiss="modal">Save and Add Another</button>
                    <Link className="btn btn-danger btn-trans" to={'/directory/entities'} >Cancel Changes</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal full-width modal-background fade in" id="attribute-modal" tabIndex="-1" role="dialog" style={{dispaly: 'none'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-left" style={{paddingTop:40, paddingBottom: 0}}>
                  <h3><i className="far fa-tags circle-icon yellow" style={{marginRight: 5}}/> <strong>Add Attribute for {item.name}</strong></h3>
                  <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
                </div>
                <div className="modal-body" style={{padding: 20}}>
                  <div>
                    <AddAttribute user={item} />
                  </div>
                </div>
                <div className="text-center" >
                  <button className="btn btn-primary" data-dismiss="modal">Save</button>
                  <button className="btn btn-primary btn-trans" data-dismiss="modal">Save and Add Another</button>
                  <button className="btn btn-danger btn-trans" data-dismiss="modal">Cancel Changes</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
};
