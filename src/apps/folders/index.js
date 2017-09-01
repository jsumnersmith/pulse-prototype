import React,  { Component } from 'react';
import SurveyIcon from '../../images/survey-icon.svg';

import  { Tag } from 'pulse-ui';

import './folders.less';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="header" style={{marginBottom: 20}}><h3>Collections Model</h3></div>
      <Collections />
    </div>

    <div className="block-flat">
      <div className="header" style={{marginBottom: 20}}><h3>Tag Model</h3></div>
      <TagsView />
    </div>

    <div className="block-flat">
      <div className="header" style={{marginBottom: 20}}><h3>Folder Model</h3></div>
      <Folders />
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
          { this.state.count !== 5 ? <button className="btn btn-sm btn-default btn-trans collections__add-report"><i className="fa fa-file-text-o"/> Add Report to Collection</button> : null }
        </div>
      </div>
    )
  }
}

class TagsView extends Component {
  state = {
    tag: null
  }
  getCount(){
    if (this.state.tag === "Tag 1") {
      return 3;
    } else if (this.state.tag === "Tag 2") {
      return 2;
    } else if (this.state.tag === "Tag 3") {
      return 1;
    } else {
      return 5;
    }
  }
  render(){
    return (
      <div className="tags">
        <div className="search-box">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-search"></i></span>
            <input type="text" className="form-control search-box-input" placeholder="Search for Report or Tag Name (but search doesn't actually work)" value={this.state.tag ? `${this.state.tag}` : ''} />
          </div>
        </div>
        <div className="tags__tag-list">
          <label>Most Used Tags: </label>
          <span className="tags__tag" onClick={()=>{this.setState({tag: 'Tag 1'})}}> <Tag name="Tag 1" /></span>
          <span className="tags__tag" onClick={()=>{this.setState({tag: 'Tag 2'})}}><Tag name="Tag 2" /></span>
          <span className="tags__tag" onClick={()=>{this.setState({tag: 'Tag 3'})}}><Tag name="Tag 3" /></span>
          <a className="btn btn-sm btn-default tags__all" onClick={()=>{this.setState({tag: null})}}>All Reports</a>
        </div>
        <ReportList count={this.getCount()} showTags={true} />
      </div>
    )
  }
}

class Folders extends Component {
  state = {
    view: 'folder'
  }
  toggleView(view){
    this.setState({view})
  }
  render(){
    return (
      <div className="folder">
        <button className="btn btn-default btn-sm" onClick={()=>{this.toggleView('list')}}><i className="fa fa-list"/> List</button> <button className="btn btn-default btn-sm" onClick={()=>{this.toggleView('grid')}}><i className="fa fa-th"/> Grid</button>
        {
          this.state.view === 'list' ?
          <ReportList count={5} />
          : <GridView />
        }
      </div>
    )
  }
}

const GridView = () => (
  <div className="folders__grid">
    { Array.apply(null, Array(6)).map((item, index)=> <FolderGridItem index={index} />) }
    { Array.apply(null, Array(2)).map((item, index)=> <ReportGridItem index={index} />) }
  </div>
)

const FolderGridItem = ({index}) => (
  <div className="folders__grid-item folder__grid-folder" draggable="true">
    <div className="folders__grid-icon">
      <i className="fa fa-folder-open-o" style={{fontSize: 48}}/>
    </div>
    <h4><strong>Folder {index + 1}</strong></h4>
  </div>
)

const ReportGridItem = ({index}) => (
  <div className="folders__grid-item folder__grid-report" draggable="true">
    <div className="folders__grid-icon">
      <i className="orange fa fa-info-circle" style={{position: 'absolute', bottom: 0, right: "-10px"}}/>
      <img src={SurveyIcon} alt="Report Icon"/>
    </div>
    <h4><strong>Report {index + 1}</strong></h4>
  </div>
)
