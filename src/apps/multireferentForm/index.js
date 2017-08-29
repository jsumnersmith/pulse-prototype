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
              <button className="btn btn-primary">Edit</button>
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
            <button className="btn btn-primary">Edit</button>
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