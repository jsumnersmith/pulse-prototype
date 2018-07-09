import React from 'react';

export default ({data}) => (
  <div>
    <div style={{display: 'flex', marginBottom: 30, justifyContent: 'space-between'}}>
      <h4>You're about to import <strong className="underline--pulse-blue">{data.length - 1}</strong> new people.</h4>
      <div>
        <button className="btn btn-primary">Accept Changes and Import</button>
        <button className="btn btn-danger btn-trans">Cancel Upload</button>
      </div>
    </div>

    <table className="no-border">
      <thead className="no-border-y no-border">
        <tr>
          <th className="sticky-header"><i className="fa fa-check circle-icon--no-border circle-icon--small "/></th>
          {data[0].map(column =>
            <th className="sticky-header"><strong>{column}</strong></th>
          )}
          <th className="sticky-header"><strong>Import Type</strong></th>
        </tr>
      </thead>
      <tbody className="no-border-y">
        {data.slice(1).map((row, index) =>
          <tr>
            <td className="text-center"><input type="checkbox" checked/></td>
            {row.map(column => <td>{column}</td>)}
            <td>
              { index === 5 && <span className="blue">Update</span> }
              { index === 7 && <span className="red-text">Deactivate</span> }
              { index !== 5 && index !== 7 && <span className="green">Create</span> }
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <div style={{display: 'flex', marginTop: 30, justifyContent: 'space-between'}}>
      <h4>You're about to import <strong className="underline--pulse-blue">{data.length - 1}</strong> new people.</h4>
      <div>
        <button className="btn btn-primary">Accept Changes and Import</button>
        <button className="btn btn-danger btn-trans">Cancel Upload</button>
      </div>
    </div>
  </div>
)