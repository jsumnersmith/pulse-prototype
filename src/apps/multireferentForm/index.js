import React from 'react';
import './multireferent-form.less';
import { Link } from 'react-router-dom';

export default ({ match }) => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="header">
        <h3>Response Configurations</h3>
      </div>
      <div className="content">
        <div className="response-configurations">
          <div className="response-configuration">
            <i className="fa fa-envelope circle-icon--medium"/>
            <div className="response-configuration__content">
              <h4 className="response-configuration__title"><strong>Response #1 Short Name</strong></h4>
              <ul className="response-configuration__details">
                <li className="response-configuration__detail"><strong>Column</strong>: #6 - Column Name</li>
              </ul>
            </div>
            <div>
              <button className="btn btn-default" data-toggle="collapse" data-target="#proccessors"><i className="fa fa-list"/> Processor List</button>
            </div>
            <div>
              <button className="btn btn-primary">Edit</button>
            </div>
            <div className="response-configuration__processors collapse" id="proccessors" style={{width: "100%"}}>
              <table className="no-border" style={{marginTop: 20}}>
                <thead className="no-border">
                  <tr>
                    <th><strong>Column</strong></th>
                    <th><strong>Processor Type</strong></th>
                    <th><strong>Processor ID</strong></th>
                  </tr>
                </thead>
                <tbody className="no-border-y">
                  <tr>
                    <td>#7 -- Column Text</td>
                    <td>Confidence</td>
                    <td>23423623</td>
                  </tr>
                  <tr>
                    <td>#8 -- Column Text</td>
                    <td>Confidence</td>
                    <td>23423624</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="response-configuration">
          <i className="fa fa-envelope circle-icon--medium"/>
          <div className="response-configuration__content">
            <h4 className="response-configuration__title"><strong>Response #2 Short Name</strong></h4>
            <ul className="response-configuration__details">
              <li className="response-configuration__detail"><strong>Column</strong>: #4 - Column Name</li>
            </ul>
          </div>
          <div>
            <button className="btn btn-default" data-toggle="collapse" data-target="#proccessors2"><i className="fa fa-list"/> Processor List</button>
          </div>
          <div>
            <button className="btn btn-primary">Edit</button>
          </div>
          <div className="response-configuration__processors collapse" id="proccessors2" style={{width: "100%"}}>
          <table className="no-border" style={{marginTop: 20}}>
            <thead className="no-border">
              <tr>
                <th><strong>Column</strong></th>
                <th><strong>Processor Type</strong></th>
                <th><strong>Processor ID</strong></th>
              </tr>
            </thead>
            <tbody className="no-border-y">
              <tr>
                <td>#9 -- Column Text</td>
                <td>Confidence</td>
                <td>23423625</td>
              </tr>
              <tr>
                <td>#10 -- Column Text</td>
                <td>Confidence</td>
                <td>23423626</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
          <Link to={`${match.url}/add`} className="btn btn-block btn-default" style={{marginLeft:0}}>
            <i className="fa fa-plus-circle"/> Add Response Configuration
          </Link>
        </div>
      </div>
    </div>
  </div>
)