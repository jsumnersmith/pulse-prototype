import React from 'react';
import spreadsheetIcon from '../../images/spreadsheet-icon.svg';
import './manage-data-sources.less';
import './queue.less';
import sampleEvents from '../events/components/sampleEvents';

export default () => (
  <div className="wrapper">
    <div className="data-source-header">
      <h2 style={{marginBottom: 20}}>
        <img src={spreadsheetIcon} style={{height: 45, width: 'auto', marginRight: 10}}/>
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
          {
            sampleImportQueue.map((item, index) => (
              <div className="import-queue__item">
                <div className="import-queue__item-header">
                  <span className={`meta circle-icon--small ${index === 0 && 'meeting-goals text-white'}`}><strong>{index + 1}</strong></span>
                  <h5><strong>{item.name}</strong> - {item.district}</h5>
                  {index === 0 && <h5 className="green">Currently Running</h5> }
                  <h5 className="import-queue__count">
                    <code>{index === 0 ? 34 : 0 }/{item.submissionCount}</code>
                  </h5>
                </div>
              </div>
            ))
          }
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
    importConfigurationExpiration:' 2018-2-16T14:30:00'
  },
  {
    name: 'PD Feedback Surveys',
    district: 'Irving ISD',
    submissionCount: 114,
    importConfiguration: 'Nightly'
  },
  {
    name: 'Teacher Feedback Surveys',
    district: 'Irving ISD',
    submissionCount: 452,
    importConfiguration: 'Nightly'
  }
]