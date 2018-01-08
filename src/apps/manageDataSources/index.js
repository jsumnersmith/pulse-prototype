import React from 'react';
import {SearchWithFilters as SearchInput } from 'pulse-ui/src/deprecated';

import spreadsheetIcon from '../../images/spreadsheet-icon.svg';

import './manage-data-sources.less';

export default () => (
  <div className="wrapper">
    <h2 style={{marginBottom: 20}}>
      <img src={spreadsheetIcon} style={{height: 45, width: 'auto', marginRight: 10}}/>
      <strong>Manage Data Sources</strong>
    </h2>
    <div className="block-flat">
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <SearchInput />
          </div>
        </div>
        <div className="data-source-table-filters" style={{display: 'flex'}}>
          <label>Filter by </label>
          <select className="form-control">
            <option>All Import Configurations</option>
            <option>Regular </option>
            <option>Nightly</option>
            <option>Off</option>
          </select>
          <select className="form-control">
            <option>All Data Statuses</option>
            <option>Up to Date</option>
            <option>Ready to Import</option>
            <option>Error with Import</option>
          </select>
        </div>

        <div className="data-source-table">
          <table className="no-border">
            <thead className="no-border">
              <tr>
                <th><strong>Name</strong></th>
                <th><strong>District</strong></th>
                <th style={{width: 86}}><strong>Data Status</strong></th>
                <th><strong>Last Import</strong></th>
                <th><strong>Submissions</strong></th>
                <th><strong>Import Setting</strong></th>
                <th><strong>Expiration</strong></th>
                <th><strong>Actions</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y">
              {
                sampleDataSources.map(dataSource =>
                  <tr>
                    <td><strong>{dataSource.name}</strong></td>
                    <td><strong>{dataSource.district}</strong></td>
                    <td className="text-center">{dataSource.dataStatus ?
                          <i className="fa fa-check circle-icon--small white-text green" /> :
                          <i className="fa fa-cloud circle-icon--small white-text yellow" />
                        }</td>
                    <td>{dataSource.lastImport}</td>
                    <td>{dataSource.lastImportSubmissionCount}</td>
                    <td>{dataSource.importConfiguration}</td>
                    <td>{dataSource.importConfigurationExpiration ? dataSource.importConfigurationExpiration : 'N/A' }</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-primary">Manage</button>
                        <button className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown"><i className="fa fa-chevron-down fa-sm"/>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu">
                          <li><a data-toggle="modal" data-target="#sample-modal">Edit Import Configuration</a></li>
                          <li><a>View Form</a></li>
                          <li><a>View Google Sheet</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="modal modal-background full-width fade in" id="sample-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div style={{padding: 20}}>
            <h3 style={{marginBottom: 15, display: 'block'}}><i className="fa fa-gear circle-icon green" style={{marginRight: 5}}/> <strong>Edit Import Configuration for *Title*</strong></h3>
            <div>
              <label>Run imports</label>
              <select className="form-control">
                <option>Regularly </option>
                <option>Nightly</option>
                <option>Never</option>
              </select>
              <label>Expiration Date for Configuration</label>
              <input className="form-control"/>
            </div>
          </div>
          <div className="text-right">
          <button type="button" className="btn btn-default btn-trans btn-flat md-close" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary btn-flat md-close" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const sampleDataSources = [
  {
    name: 'Walkthrough Surveys',
    district: 'Irving ISD',
    dataStatus: false,
    lastImport: '2017-12-11T14:30:00',
    lastImportSubmissionCount: 218,
    importConfiguration: 'Regular',
    importConfigurationExpiration:' 2018-2-16T14:30:00'
  },
  {
    name: 'PD Feedback Surveys',
    district: 'Irving ISD',
    dataStatus: true,
    lastImport: '2017-12-11T04:30:00',
    lastImportSubmissionCount: 114,
    importConfiguration: 'Nightly'
  },
  {
    name: 'Teacher Feedback Surveys',
    district: 'Irving ISD',
    dataStatus: true,
    lastImport: '2017-12-07T11:30:00',
    lastImportSubmissionCount: 452,
    importConfiguration: 'Nightly'
  }

]