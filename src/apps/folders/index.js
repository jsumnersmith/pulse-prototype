import React,  { Component } from 'react';
import SurveyIcon from '../../images/survey-icon.svg';

import './folders.less';

// Let's make this a TABLE so it can have headers.
export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="header" style={{marginBottom: 20}}><h3>Collections Model</h3></div>
      <Collections />
    </div>

  </div>
);

const ReportList = ({count, showTags}) => (
  <table className="report-list">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Subsmissions</th>
        <th>Shared with</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { Array.apply(null, Array(count)).map((item, index)=> <ReportItem index={index} showTags={showTags}/>) }
    </tbody>
  </table>
);

const ReportItem = ({index, showTags}) => (
  <tr className="report-item">
    <td style={{width: 30}}>
      <div className="report-item__icon">
        <img src={SurveyIcon} alt="Report Icon"/>
      </div>
    </td>
    <td className={`report-item__content ${showTags ? "report-item__content-tags" :""}`}>
      <h4 className="report-item__title"><strong>Report {index + 1}</strong></h4>
    </td>
    <td>
      <p className="meta"><span className="orange">{Math.floor(Math.random() * 400) + 1 }</span> submissions</p>
    </td>
    <td><SharingStats /></td>
    <td className="report-item__action">
      <div className="btn-group">
        <button className="btn btn-primary">View Report</button>
        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <i className="far fa-caret-down" />
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu" role="menu">
          <li><a><i className="far fa-pencil"/> &nbsp; Edit Report</a></li>
          <li><a><i className="far fa-share"/> &nbsp; Share Report</a></li>
          <li><a><i className="far fa-clone"/> &nbsp; Copy Report</a></li>
          <li className="divider"></li>
          <li><a><i className="far fa-eye-slash"/> &nbsp; Hide Report</a></li>
        </ul>
      </div>
    </td>
  </tr>
)

const SharingStats = () => (
  <div className="report-item__sharing">
    <span><a data-toggle="popover" data-trigger="focus" title="Shared with" data-content="user@email.com, other@email.com, others@my.email.com"><i className="far fa-user circle-icon--small" /> <strong>{Math.floor(Math.random() * 10) + 1}</strong> users</a></span>
    <span><a data-toggle="popover" data-trigger="focus" title="Shared with" data-content="Admins, Principals, Teachers, Coaches"><i className="far fa-users circle-icon--small" /> <strong>{Math.floor(Math.random() * 3) + 1}</strong> groups</a></span>
  </div>
);

class Collections extends Component {
  state = {
    count: 5
  }
  checkActive(count){
    return count === this.state.count ? 'active' : '';
  }
  render() {
    return (
      <div className="collections">
        <div className="collections__list">
          <div className={`collections__item ${this.checkActive(5)}`} onClick={()=>(this.setState({count: 5}))}>
            All Reports
          </div>
          <div className={`collections__item ${this.checkActive(2)}`} onClick={()=>(this.setState({count: 2}))}>
            Sample Collections
          </div>
          <div className={`collections__item ${this.checkActive(3)}`} onClick={()=>(this.setState({count: 3}))}>
            Special Vintage Collection
          </div>
          <button className="btn btn-default btn-sm btn-trans collections__add-collection"><i className="far fa-plus"/> New Collection</button>
        </div>
        <div className="collections__reports">
          <ReportList count={this.state.count} />
          { this.state.count !== 5 ? <button className="btn btn-sm btn-default btn-trans collections__add-report"><i className="far fa-file-text-o"/> Add Report to Collection</button> : null }
        </div>
      </div>
    )
  }
}