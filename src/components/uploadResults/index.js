import React from 'react';
import './upload-results.less';

const ResultsTable = ({successes, failures, total}) => (
  <div className="upload-results">
    <div className="upload-results__header">
      <i className="fa fa-upload circle-icon--medium green upload-results__icon" />
      <div className="upload-results__title">
        <strong>Currently uploading users</strong>
      </div>
      <div className="upload-results__progress">
        {
          successes + failures > 0 && <div className="upload-results__progress-bar" style={{width: `${((successes + failures) / total) * 100}%`}}></div>
        }
        <strong>{`${Math.round(((successes + failures) / total) * 100)}%`}</strong>
      </div>
    </div>
    <table className="no-border upload-results__table">
      <thead className="no-border">
        <tr className="text-center">
          <th className="text-center"><strong><i className="fa fa-list-alt" /> Completed</strong></th>
          <th className="text-center"><strong><i className="fa fa-check green" /> Successes</strong></th>
          <th className="text-center"><strong><i className="fa fa-times red" /> Failures</strong></th>
        </tr>
      </thead>
      <tbody className="no-border-y">
        <tr className="text-center">
          <td>{successes + failures}/{total}</td>
          <td>{successes}</td>
          <td>{failures}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <ResultsTable
        failures={15}
        successes={234}
        total={539}
      />
      <ResultsTable
        failures={20}
        successes={40}
        total={60}
      />
      <ResultsTable
        failures={0}
        successes={0}
        total={539}
      />
    </div>
  </div>
);