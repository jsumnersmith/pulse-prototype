import React from 'react';
import './tabbed-container.less';

export default () => (
  <div className="wrapper">
    <h5 className="event-list-title" style={{background: "#1FAF84"}}><i className="fa fa-calendar circle-icon--medium green"></i> <strong>Search Events</strong></h5>
    <div className="block-flat tabbed-block">
      <ul className="nav nav-tabs flex-tabs">
        <li className="active"><a data-toggle="tab" href="#menu1">Item 1</a></li>
        <li><a data-toggle="tab" href="#menu2">Item 2</a></li>
        <li><a data-toggle="tab" href="#menu3">Item 3</a></li>
      </ul>
      <div className="tab-content">
        <div id="menu1" className="tab-pane in active">
          <h4><strong>Item 1</strong></h4>
          <p>Some content in item 1.</p>
        </div>
        <div id="menu2" className="tab-pane">
          <h4><strong>Item 2</strong></h4>
          <p>Some content in item 2.</p>
        </div>
        <div id="menu3" className="tab-pane">
          <h4><strong>Item 3</strong></h4>
          <p>Some content in item 3.</p>
        </div>
      </div>
    </div>
  </div>
)
