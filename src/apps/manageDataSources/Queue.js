import React from 'react';
import spreadsheetIcon from '../../images/spreadsheet-icon.svg';
import './manage-data-sources.less';
import './queue.less';

export default () => (
  <div className="wrapper">
    <div className="data-source-header">
      <h2 style={{marginBottom: 20}}>
        <img src={spreadsheetIcon} style={{height: 45, width: 'auto', marginRight: 10}} alt="Spreadsheet Icon"/>
        <strong>Manage Data Sources</strong>
      </h2>
      <nav className="data-source-nav">
        <a className="meta active">View Queue</a>
        <a className="btn btn-primary"><i className="fa fa-plus"/>Add Data Source</a>
      </nav>
    </div>
    <div className="block-flat">
      <div className="content">
        <h4 className="import-queue__title">Import Queue</h4>
        <div className="import-queue__wrapper">
          <table className="no-border">
            <thead className="no-border">
              <tr>
                <th><strong>Queue Item</strong></th>
                <th><strong>Active</strong></th>
                <th><strong>Last Runtime</strong></th>
                <th><strong>Last Runtime Duration</strong></th>
                <th><strong>Progress</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y">
              {
                sampleImportQueue.map((item, index) => (
                  <tr>
                    <td>
                      <div className="import-queue__item-header">
                        <span className={`meta circle-icon--small ${index === 0 && 'meeting-goals text-white'}`}><strong>{index + 1}</strong></span>
                        <h5><strong>{item.name}</strong> - {item.district}</h5>
                      </div>
                    </td>
                    <td>
                      {index === 0 && <i className="fa fa-check green"/> }
                    </td>
                    <td>
                      {item.lastImport}
                    </td>
                    <td>
                      {item.lastImportDuration}
                    </td>
                    <td>
                      <code>{index === 0 ? 34 : 0 }/{item.submissionCount}</code>
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

const sampleImportQueue = [
  {
    name: 'Walkthrough Surveys',
    district: 'Irving ISD',
    submissionCount: 218,
    importConfiguration: 'Regular',
    lastImport: '2017-12-11T14:30:00',
    lastImportDuration: '2 min',
    importConfigurationExpiration:' 2018-2-16T14:30:00'
  },
  {
    name: 'PD Feedback Surveys',
    district: 'Irving ISD',
    submissionCount: 114,
    lastImport: '2017-12-11T04:30:00',
    lastImportDuration: '15 sec',
    importConfiguration: 'Nightly'
  },
  {
    name: 'Teacher Feedback Surveys',
    district: 'Irving ISD',
    submissionCount: 452,
    lastImport: '2017-12-07T11:30:00',
    lastImportDuration: '4 minutes',
    importConfiguration: 'Nightly'
  }
]