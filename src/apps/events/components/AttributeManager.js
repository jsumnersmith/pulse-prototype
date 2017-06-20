import React from 'react';
import './attributeManager.less';

export default () => (
  <div className="row">
    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#1FAF84"}}><i className="fa fa-gear circle-icon--medium green"></i> <strong>Manage Meta Data Attributes</strong></h5>
      <div className="block-flat">
        <div className="content">
          <div className="attribute-manager">
            <div className="attribute-manager__item"></div>
            <div className="attribute-manager__item"></div>
            <div className="attribute-manager__item"></div>
            <div className="attribute-manager__item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)