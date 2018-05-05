import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import {nonPeople} from './users.js';
import EditAttributes from './EditComponents/EditAttributes';


import './directory.less';

export default class Edit extends Component {
  render() {
    const id = this.props.match.params.id;
    const item = nonPeople.find(item => String(item.id) === String(id));
    return (
      <div className="wrapper">
        <DirectoryHeader/>
          <Link className="btn btn-back btn-default" to={'/directory'} >Back to Directory</Link>
          <div className="block-flat" style={{marginTop: 10}}>
            <div className="row">
              <div className="col-md-12">
                <h3><i className="fa fa-user circle-icon pulse-blue" /> <strong>Edit Details</strong></h3>
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
                        <td><button className="btn btn-sm btn-trans btn-primary">Actions <i className="fa fa-caret-down" /></button></td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <div style={{display: 'flex', alignContent: 'center'}} >
                            <input placeholder="Enter another unique identifier" className="form-control" />
                            <button className="btn btn-primary"><i className="fa fa-plus" />Add</button>
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
                    <h3 style={{marginTop: 0}}><i className="fa fa-tags circle-icon yellow" /> <strong>Attributes</strong></h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <EditAttributes user={item} />
                </div>
                <div className="col-md-12">
                  <hr />
                  <div className="text-center">
                    <button className="btn btn-primary" data-dismiss="modal">Save</button>
                    <button className="btn btn-primary btn-trans" data-dismiss="modal">Save and Add Another</button>
                    <button className="btn btn-danger btn-trans" data-dismiss="modal">Cancel Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
};
