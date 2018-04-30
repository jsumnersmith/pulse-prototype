import React, {Component} from 'react';
import _ from 'lodash';
import { Tag } from '@kickup/pulse-ui/src/deprecated';


export default class Filters extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilters: []
    }
    this.getFilters = this.getFilters.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.isActive = this.isActive.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }
  toggleFilter(filter){
    let {activeFilters} = this.state;
    if (activeFilters.includes(filter)){
      this.setState({activeFilters: _.without(activeFilters, filter)}, () => this.props.onChange(this.state.activeFilters));
    } else {
      this.setState({activeFilters: activeFilters.concat([filter])}, () => this.props.onChange(this.state.activeFilters));
    }
  }
  clearFilters(){
    this.setState({activeFilters: []})
  }
  getFilters(){
    return _(directoryFilters)
      .groupBy('type')
      .value()
  }
  isActive(filter) {
    return this.state.activeFilters.includes(filter);
  }
  getCategoryCount(name){
    let {activeFilters} = this.state;
    return activeFilters.filter(filter => filter.type === name).length;
  }
  render(){
    const filters = this.getFilters();
    const activeFilters = _.groupBy(this.state.activeFilters, 'type');
    return (
      <div>
        <label style={{marginRight: 10}}>Filter</label>
        {
          _.map(filters, (filterSet, filterName) =>
              <div className="btn-group">
                <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  {filterName} {this.getCategoryCount(filterName) > 0 && <span style={{background: "#eee", borderRadius: "50%", height: 15, width:15, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9}}>{this.getCategoryCount(filterName)}</span>} <i className="fa fa-caret-down" />
                </button>
                <ul className="dropdown-menu">
                  {filterSet.map(filter => <li onClick={()=>this.toggleFilter(filter)} style={{listStyle: 'none', paddingLeft: 0, cursor: 'pointer'}}>
                      <a>{this.isActive(filter) ? <i className="fa fa-check-square-o "/> : <i className="fa fa-square-o" style={{marginRight: 2}} />} {filter.name}</a>
                    </li>)
                  }
                </ul>
              </div>
            )
        }
        { this.state.activeFilters.length > 0 && <button className="btn btn-xs btn-danger btn-trans" onClick={this.clearFilters}>Clear Filters</button>}
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>{_.map(activeFilters, (filterSet, filterName) =>
          <span style={{display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', margin: "3px 0"}}>
            <label style={{marginRight: 10}}>{filterName}</label>
              {filterSet.map(filter => <span style={{marginBottom: 3}}><Tag name={`${filter.name}`} handleClose={() => this.toggleFilter(filter)} /></span>)}
          </span>
        )}
      </div>
    </div>
    )
  }
}

const directoryFilters = [
  { type: 'group', name: 'English' },
  { type: 'group', name: 'Crocket Middle School' },
  { type: 'group', name: 'Nimitz High School' },
  { type: 'group', name: 'MacArthur High School' },
  { type: 'permission', name: 'Edit Reports' },
  { type: 'permission', name: 'View Reports' },
  { type: 'permission', name: 'Edit Events' },
  { type: 'school', name: 'Crocket Middle School' },
  { type: 'school', name: 'Nimitz High School' },
  { type: 'school', name: 'MacArthur High School' },
  { type: 'role', name: 'English' },
  { type: 'grade', name: '12' },
  { type: 'grade', name: '10' },
  { type: 'grade', name: '6' }
]