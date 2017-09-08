import React,  { Component } from 'react';
import SurveyIcon from '../../images/survey-icon.svg';

import  { Tag } from 'pulse-ui/src/deprecated';

import './folders.less';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="header" style={{marginBottom: 20}}><h3>Collections Model</h3></div>
      <Collections />
    </div>
  </div>
);

const ReportList = ({count, showTags}) => (
  <div className="report-list">
    { Array.apply(null, Array(count)).map((item, index)=> <ReportItem index={index} showTags={showTags}/>) }
  </div>
);

const ReportItem = ({index, showTags}) => (
  <div className="report-item">
    <div className="report-item__icon">
      <img src={SurveyIcon} alt="Report Icon"/>
    </div>
    <div className={`report-item__content ${showTags ? "report-item__content-tags" :""}`}>
      <h4 className="report-item__title"><strong>Report {index + 1}</strong></h4>
      <p className="meta"><span className="orange">{Math.floor(Math.random() * 400) + 1 }</span> responses</p>
    </div>
    {
      showTags ?
      <div className="report-item__tags">
        { index < 3 ? <Tag name="Tag 1" /> : null}
        { index < 2 ? <Tag name="Tag 2" /> : null}
        { index < 1 ? <Tag name="Tag 3" /> : null}
      </div>
      : null
    }
    <div className="report-item__action">
      <button className="btn btn-primary">View Report</button>
    </div>
  </div>
)

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
          <button className="btn btn-default btn-sm btn-trans collections__add-collection"><i className="fa fa-plus"/> New Collection</button>
        </div>
        <div className="collections__reports">
          <ReportList count={this.state.count} />
          { this.state.count !== 5 ? <CollectionControls /> : null }
        </div>
      </div>
    )
  }
}

const CollectionControls = () => (
  <div style={{padding: "20px", borderTop: "2px dashed #eee"}}>
    <button className="btn btn-primary btn-block collections__add-report"><i className="fa fa-file-text-o"/> Add Report to Collection</button>
    <div className="row" style={{marginTop: 10}}>
      <div className="col-md-6">
        <button className="btn btn-default btn-block btn-trans collections__add-report"><i className="fa fa-pencil"/> Edit Collection Details</button>
      </div>
      <div className="col-md-6">
        <button className="btn btn-default btn-block btn-trans collections__add-report"><i className="fa fa-link"/> Share Collection</button>
      </div>
    </div>
  </div>
)


