import React from 'react';
import EventCardLoader from './components/eventCard';
import StandardContentLoader from './components/standardContent';
import AdminTableLoader from './components/adminTable';
import './loading.less';
export default () => (
  <div className="wrapper">
    <div className="block-flat loading">
      <div className="content">
        Default
      </div>
      <div className="portlet-loading portlet-loading--wide">
        <StandardContentLoader />
      </div>
    </div>
    <div className="block-flat loading">
      <div className="content">
        Default with Title
        <div style={{background: "#000", height: 300, width: '100%'}}></div>
      </div>
      <div className="portlet-loading portlet-loading--wide">
        <StandardContentLoader title={"This is a loading text message..."}/>
      </div>
    </div>
    <div className="block-flat">
      <div className="content">
        Admin Table
        <AdminTableLoader />
      </div>
    </div>
    <div className="block-flat loading">
      <div className="content">
        Data Content

      </div>
      <div className="portlet-loading">
          <div className="bar-wrapper">
            <span className="data-bar-1" />
            <span className="data-bar-2" />
            <span className="data-bar-3" />
          </div>
        </div>
    </div>

    <div className="block-flat">
      <div className="content">
        Event Card
        <EventCardLoader />
      </div>
    </div>


  </div>
)