import React from 'react';
import { Link } from 'react-router-dom';

export default ({match}) => (
  <div className="row">
    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#1FAF84"}}><i className="fa fa-gear circle-icon--medium green"></i> <strong>Manage Meta Data Attributes</strong></h5>
      <div className="block-flat">
        <div className="content">
          <table className="no-border">
            <thead className="no-border">
              <tr>
                <th><strong>Attribute Name</strong></th>
                <th><strong>Actions</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y">
              <tr>
                <td><strong>Type of P.D.</strong></td>
                <td><Link to={`${match.url}/type-of-pd`} className="btn btn-sm btn-trans btn-primary"><i className="fa fa-pencil"></i> Edit</Link></td>
              </tr>
            </tbody>
          </table>
          <div>
            Buttons to create new one.
          </div>
        </div>
      </div>
    </div>
  </div>
)