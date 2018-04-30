import React, {Component} from 'react';
import {groups} from './users.js';
import BigButton from '../../components/permissionButtons/components/BigButton.js';

import './permission-table.less';

export default ({permissions}) => (
  <table className="no-border">
    <thead className="no-border">
      <tr>
        <th><strong>Permission</strong></th>
        <th><strong>Applies To</strong></th>
      </tr>
    </thead>
    <tbody className="no-border-y no-border-x">
      {
        permissions.map(permission => {
          return <PermissionRow {...permission}/>
        })
      }
    </tbody>
  </table>
);

class PermissionRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: this.props.isActive,
      isConfused: false
    }
    this.getIconClassName = this.getIconClassName.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(){
    this.setState({isActive: !this.state.isActive})
  }

  getIconClassName(){
    const {isActive, isConfused} = this.state;
    if (isActive){
      return "fa-check-circle green";
    } else  if (isConfused){
      return "fa-minus-circle";
    } else {
      return "fa-circle-thin"
    }
  }
  render(){
    return (
      <tr className="permission-table-row">
        <td onClick={this.toggleActive} style={{cursor: 'pointer'}} className="td-button">
          <BigButton
            isActive={this.state.isActive}
            iconclassName="fa-calendar"
            title={this.props.title}
            description={this.props.description}
          />
        </td>
        <td style={{width: 400,}}><div style={{ opacity: this.state.isActive ? '1' : '.5', pointerEvents: this.state.isActive ? 'initial' : 'none'}}><PermissionDropdown /></div></td>
      </tr>
    )
  }
};

class PermissionDropdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      appliesTo: ['Global'],
    }
    this.updateAppliesTo = this.updateAppliesTo.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  updateAppliesTo(value){
    let {appliesTo} = this.state;
    console.log(appliesTo, value)
    if (value === 'Global' || appliesTo[0] === 'Global') {
      appliesTo = [value];
    } else if (appliesTo.includes(value)) {
      appliesTo = appliesTo.filter(item => item != value);
    } else {
      appliesTo.push(value);
    }
    console.log(appliesTo);
    if (appliesTo.length < 1) { appliesTo = ['Global']; }
    return this.setState({appliesTo});
  }
  isActive(value){
    return this.state.appliesTo.includes(value);
  }
  render(){
    const groupList = groups.map(group => group.name);
    return (
      <div className="btn-group">
        <button className="btn btn-default dropdown-toggle" data-toggle="dropdown" >
          <span style={{display: 'inline-block', maxWidth: 300, overflow: 'hidden'}}>{this.state.appliesTo.join(', ')}</span> <i className="fa fa-caret-down" />
        </button>
        <ul className="dropdown-menu">
          <li onClick={()=>this.updateAppliesTo('Global')} style={{listStyle: 'none', paddingLeft: 0, cursor: 'pointer'}}>
            <a>{this.isActive('Global') ? <i className="fa fa-check-square-o"/> : <i className="fa fa-square-o" style={{marginRight: 2}} />} {'Global (All Users)'}</a>
          </li>
          <li className="divider"></li>
          {groupList.map(item =>
            <li onClick={()=>this.updateAppliesTo(item)} style={{listStyle: 'none', paddingLeft: 0, cursor: 'pointer'}}>
              <a>{this.isActive(item) ? <i className="fa fa-check-square-o"/> : <i className="fa fa-square-o" style={{marginRight: 2}} />} {item}</a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
