import React,  { Component } from 'react';

export class TagsView extends Component {
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

export class Folders extends Component {
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