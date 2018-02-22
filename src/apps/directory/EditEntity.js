import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DirectoryHeader from './DirectoryHeader';
import {nonPeople} from './users.js';


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
              <div className="col-md-6">
                <h3><i className="fa fa-user circle-icon pulse-blue" /> <strong>Edit Details</strong></h3>
                <label>Name</label>
                <input value={item.name} className="form-control" />
              </div>
              <div className="col-md-6">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                  <div className="">
                    <h3><i className="fa fa-tags circle-icon yellow" /> <strong>Attributes</strong></h3>
                  </div>
                  <div className="text-right">
                      <Link to={`/directory/edit/${item.id}/attributes`} className="btn btn-primary btn-trans btn-sm text-right" style={{marginTop: 10}}><i className="fa fa-pencil" /> Edit Attributes</Link>
                    </div>
                </div>
                <div className="col-md-12">

                  <table className="no-border">
                    <thead className="no-border">
                      <tr>
                        <th><strong>Attribute</strong></th>
                        <th><strong>Value</strong></th>
                      </tr>
                    </thead>
                    <tbody className="no-border-y">
                      {item.attributes.map(attribute => <tr>
                        <td><strong>{attribute.type}</strong></td>
                        <td>{attribute.value}</td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
};
