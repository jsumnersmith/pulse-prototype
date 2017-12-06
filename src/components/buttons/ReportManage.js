import React, { Component } from 'react';
import './buttons.less';
export default class SaveButtons extends Component {
  constructor(props){
    super(props);
    this.togglePrintView = this.togglePrintView.bind(this);
    this.state = {
      printView: false
    }
  }

  togglePrintView() {
    this.setState({printView: !this.state.printView})
  }

  render(){
    return (
      <div className="wrapper">
        <div className="block-flat">
          <div className="content">
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
              Manage Report <span className="caret"></span>
              </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a><Icon icon='fa-pencil'/>Edit Report</a></li>
                  <li className="divider"></li>
                  <li><a><Icon icon='fa-download'/>Export Data</a></li>
                  <li><a onClick={this.togglePrintView}><Icon icon='fa-print'/>{this.state.printView ? " Exit Print-Friendly View" : "Print-Friendly View" }</a></li>
                </ul>
            </div>
            {
              this.state.printView &&
              <span>
                <span className="label meta blue" style={{"font-size": 11, fontWeight: "600"}}><i className="fa fa-print"/> Currently in Print-Friendly View</span>
                <button className="btn btn-trans btn-xs btn-danger" style={{marginLeft: 0}}onClick={this.togglePrintView}>Exit</button>
              </span>
            }
            <div style={{marginTop: 30}}>
              <button type="button" className={`btn btn-default`} style={{position: 'relative'}} onClick={this.togglePrintView}>
               <Icon icon="fa-print"/> Print-Friendly View
               {this.state.printView && <span className="active-icon circle-icon--small fa fa-check pulse-blue white-text" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Icon = ({icon}) => (
  <span>
    {
      icon ? <i className={`fa ${icon}`} style={{marginRight: 10}}></i> : null
    }
  </span>
);