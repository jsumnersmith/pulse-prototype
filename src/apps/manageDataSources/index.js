import React from 'react';
import {SearchWithFilters as SearchInput } from 'pulse-ui/src/deprecated';
import {Link} from 'react-router-dom';
import spreadsheetIcon from '../../images/spreadsheet-icon.svg';

import './manage-data-sources.less';

export default ({match}) => (
  <div className="wrapper">
    <div className="data-source-header">
      <h2 style={{marginBottom: 20}}>
        <img src={spreadsheetIcon} style={{height: 45, width: 'auto', marginRight: 10}}/>
        <strong>Manage Data Sources</strong>
      </h2>
      <nav className="data-source-nav">
        <Link className="meta" to={match.url + 'queue'}>View Queue</Link>
        <a className="btn btn-primary"><i className="fa fa-plus"/>Add Data Source</a>
      </nav>
    </div>
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
            <option>Error Syncing</option>
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
                <th><strong>Import Status</strong></th>
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
                    <td className="text-center">{dataSource.errorContent}</td>
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
    <div className="modal modal-background fade in" id="sample-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-left">
            <h3><i className="fa fa-gear circle-icon green" style={{marginRight: 5}}/> <strong>Edit Import Configuration for *Title*</strong></h3>
            <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
          </div>
          <div className="modal-body" style={{padding: 20}}>
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
          <div className="modal-footer text-right">
          <button type="button" className="btn btn-default btn-trans btn-flat md-close" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary btn-flat md-close" data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal modal-background fade in" id="error-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-left">
            <h3><i className="fa fa-exclamation circle-icon red" style={{marginRight: 5}}/> <strong>Errors Messages for *Title*</strong></h3>
            <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
          </div>
          <div className="modal-body" style={{padding: 20}}>
            <div>
              <code>
                {sampleError}
              </code>
            </div>
          </div>
          <div className="modal-footer text-right">
            <button type="button" className="btn btn-primary btn-flat md-close" data-dismiss="modal">Done</button>
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
    errorContent: <div><span className="circle-icon--small yellow"><strong className="meta">3</strong></span> <a data-toggle="modal" data-target="#error-modal"><span className="circle-icon--small red">1</span></a></div>,
    importConfiguration: 'Regular',
    importConfigurationExpiration:' 2018-2-16T14:30:00'
  },
  {
    name: 'PD Feedback Surveys',
    district: 'Irving ISD',
    dataStatus: true,
    lastImport: '2017-12-11T04:30:00',
    lastImportSubmissionCount: 114,
    errorContent: <a data-toggle="modal" data-target="#error-modal"><span className="circle-icon--small red">1</span></a>,
    importConfiguration: 'Nightly'
  },
  {
    name: 'Teacher Feedback Surveys',
    district: 'Irving ISD',
    dataStatus: true,
    lastImport: '2017-12-07T11:30:00',
    lastImportSubmissionCount: 452,
    errorContent: <i className="fa fa-check green"/>,
    importConfiguration: 'Nightly'
  }

]

const sampleError = "[\n  \"An identifier is necessary in row '[\\\"2017-11-10 9:51:03\\\", \\\"https://form.jotform.com/72975250828163?session=learningtool99&observersEmail=&teachersEmail=&observationWeek=11/6-11/10\\\", \\\"\\\", \\\"\\\", \\\"11/6-11/10\\\", \\\"\\\", \\\"Name:\\\\r\\\\nEmail:\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"ELA/Literacy/English\\\", \\\"\\\", \\\"4\\\", \\\"We will be able to use text evidence in order to support our understanding of a text by underlining and labeling answers to given questions.\\\", \\\"Purpose Statement\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"3\\\", \\\"3\\\", \\\"2\\\", \\\"2.67\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"2.67\\\", \\\"3\\\", \\\"Yes, the teacher is on track with the scope and sequence.\\\", \\\"Students worked together finding text evidence.... Some students could tell what they were learning.\\\", \\\"Redirect students when they are off task. Some behaviors cannot be ignored when it causes the class to lose instructional time. Also work on \\\\\\\" why\\\\\\\" students are learning.\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"64.18.45.23\\\", \\\"3861338893253166830\\\", \\\"Edit Submission\\\"]'\", \n  \"Traceback (most recent call last):\\n  File \\\"/var/django/pulse/backend/pulse/tasks.py\\\", line 51, in import_survey_submission\\n    submission = survey.add_submission_from_import(response)\\n  File \\\"/var/django/pulse/backend/pulse/models.py\\\", line 166, in add_submission_from_import\\n    respondent = self.get_or_create_entity(response_json, self.respondent_processor)\\n  File \\\"/var/django/pulse/backend/pulse/models.py\\\", line 268, in get_or_create_entity\\n    raise e\\nEntityNotSupplied: An identifier is necessary in row '[\\\"2017-11-10 9:51:03\\\", \\\"https://form.jotform.com/72975250828163?session=learningtool99&observersEmail=&teachersEmail=&observationWeek=11/6-11/10\\\", \\\"\\\", \\\"\\\", \\\"11/6-11/10\\\", \\\"\\\", \\\"Name:\\\\r\\\\nEmail:\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"ELA/Literacy/English\\\", \\\"\\\", \\\"4\\\", \\\"We will be able to use text evidence in order to support our understanding of a text by underlining and labeling answers to given questions.\\\", \\\"Purpose Statement\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"3\\\", \\\"3\\\", \\\"2\\\", \\\"2.67\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"2.67\\\", \\\"3\\\", \\\"Yes, the teacher is on track with the scope and sequence.\\\", \\\"Students worked together finding text evidence.... Some students could tell what they were learning.\\\", \\\"Redirect students when they are off task. Some behaviors cannot be ignored when it causes the class to lose instructional time. Also work on \\\\\\\" why\\\\\\\" students are learning.\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"\\\", \\\"64.18.45.23\\\", \\\"3861338893253166830\\\", \\\"Edit Submission\\\"]'\\n\"\n]";
