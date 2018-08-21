import React, { Component } from 'react';
import spreadsheetIcon from '../../images/spreadsheet-icon.svg';
import './manage-data-sources.less';
import './queue.less';

const defaultState = {
  text: 'View All Tasks',
  hiddenIndex: 1,
}

export default class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState(({ hiddenIndex }) => {
      if (hiddenIndex === 1) {
        return { text: 'View Survey Tasks', hiddenIndex: -1 };
      } else {
        return defaultState;
      }
    });
  }

  render() {
    return (
  <div className="wrapper">
    <div className="data-source-header">
      <h2 style={{marginBottom: 20}}>
        <img src={spreadsheetIcon} style={{height: 45, width: 'auto', marginRight: 10}} alt="Spreadsheet Icon"/>
        <strong>Manage Data Sources</strong>
      </h2>
      <nav className="data-source-nav">
        <a className="meta active">View Queue</a>
        <a className="btn btn-primary"><i className="far fa-plus"/>Add Data Source</a>
      </nav>
    </div>
    <div className="block-flat">
      <div className="content">
        <h4 className="import-queue__title">
          Import Queue
          <button
            style={{
              float: "right",
              marginTop: "-3px",
            }}
            className="btn btn-primary btn-trans btn-sm"
            onClick={this.toggleVisible}
          >{this.state.text}</button>
        </h4>
        <div className="import-queue__wrapper">
          <table className="no-border">
            <thead className="no-border">
              <tr>
                <th><strong>Queue Item</strong></th>
                <th><strong>Task Type</strong></th>
                <th><strong>Active</strong></th>
                <th><strong>Worker</strong></th>
                <th><strong>Time Scheduled</strong></th>
                <th><strong>Last Import</strong></th>
                <th><strong>Last Import Runtime Duration</strong></th>
                <th><strong>Progress</strong></th>
                <th><strong>Actions</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y">
              {
                sampleImportQueue.filter((item, index) => this.state.hiddenIndex !== index).map((item, index) => (
                  <tr>
                    <td>
                      <div className="import-queue__item-header">
                        <span className={`meta circle-icon--small ${item.active && 'meeting-goals text-white'}`}><strong>{index + 1}</strong></span>
                        <h5><strong>{item.name}</strong> - {item.district}</h5>
                      </div>
                    </td>
                    <td>
                      {item.type}
                    </td>
                    <td>
                      {item.active && <i className="far fa-check green"/> }
                    </td>
                    <td>
                      {item.worker}
                    </td>
                    <td>
                      {item.timeScheduled}
                    </td>
                    <td>
                      {item.lastImport}
                    </td>
                    <td>
                      {item.lastImportDuration}
                    </td>
                    <td>
                      {item.taskType !== 'email' && (
                        <code>{item.active ? 34 : 0 }/{item.submissionCount}</code>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-primary">Cancel</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
  }
}

const sampleImportQueue = [
  {
    active: true,
    name: 'Walkthrough Surveys',
    district: 'Irving ISD',
    submissionCount: 218,
    importConfiguration: 'Regular',
    lastImport: '2017-12-11T14:30:00',
    lastImportDuration: '2 min',
    importConfigurationExpiration:' 2018-2-16T14:30:00',
    timeScheduled: '2017-12-11T13:30:00',
    type: 'Import survey',
    worker: 'djangoweb1',
  },
  {
    active: true,
    taskType: 'email',
    name: 'Email Notifications',
    district: 'Irving ISD',
    submissionCount: 218,
    importConfiguration: '',
    lastImport: '',
    lastImportDuration: '',
    importConfigurationExpiration:'',
    timeScheduled: '2017-12-11T13:50:00',
    type: 'Email Notifications',
    worker: 'djangoweb2',
  },
  {
    name: 'PD Feedback Surveys',
    district: 'Irving ISD',
    submissionCount: 114,
    lastImport: '2017-12-11T04:30:00',
    lastImportDuration: '15 sec',
    importConfiguration: 'Nightly',
    timeScheduled: '2017-12-11T13:45:00',
    type: 'Re-run processors',
    worker: 'djangoweb2',
  },
  {
    name: 'Teacher Feedback Surveys',
    district: 'Irving ISD',
    submissionCount: 452,
    lastImport: '2017-12-07T11:30:00',
    lastImportDuration: '4 minutes',
    importConfiguration: 'Nightly',
    timeScheduled: '2017-12-11T14:30:00',
    type: 'Delete derived data',
    worker: 'djangoweb1',
  }
]
