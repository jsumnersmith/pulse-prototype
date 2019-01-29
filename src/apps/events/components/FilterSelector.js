import React, {Component} from 'react';
import _ from 'lodash';
import { Tag, SearchWithFilters as SearchInput } from '@kickup/pulse-ui/src/deprecated';
import tokens from '@kickup/pulse-style-tokens';
import './filter-selectors.less';

export default class FilterSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilters: [],
      openDropdown: ''
    }
    this.getFilters = this.getFilters.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.isActive = this.isActive.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.getCategoryCount = this.getCategoryCount.bind(this);
    this.setOpenDropdown = this.setOpenDropdown.bind(this);
    this.closeAllDropdowns = this.closeAllDropdowns.bind(this);
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
    return _(this.props.events)
      .map('meta')
      .flatten()
      .uniqWith(_.isEqual)
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
  closeAllDropdowns(callback){
   this.setState({openDropdown: ''}, callback)
  }
  setOpenDropdown(filterName){
    this.setState({openDropdown: filterName});
  }
  render(){
    const filters = this.getFilters();
    const activeFilters = _.groupBy(this.state.activeFilters, 'type');
    return (
      <div>
        <label style={{marginRight: 10}}>Filter</label>
        {
          _.map(filters, (filterSet, filterName) =>
            <FilterDropdown
              filterSet={filterSet}
              filterName={filterName}
              closeAllDropdowns={this.closeAllDropdowns}
              isActive={this.isActive}
              toggleFilter={this.toggleFilter}
              openDropdown={this.state.openDropdown}
              setOpenDropdown={this.setOpenDropdown}
            />
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

class FilterDropdown extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.checkIfActive = this.checkIfActive.bind(this);
    this.state = {
      searchText: ''
    }
  }
  handleClick(){
    if (this.checkIfActive()){
      return this.props.closeAllDropdowns();
    }
    this.props.setOpenDropdown(this.props.filterName);
  }
  checkIfActive(){
    const {filterName, openDropdown} = this.props;
    return filterName === openDropdown;
  }
  matchesSearch(filter){
    console.log("Search is", this.state.searchText)
    if (this.state.searchText.length < 1) {
      return true;
    }
    return filter.name.match(this.state.searchText);
  }

  render() {
    const {
      filterSet,
      filterName,
      isActive,
      toggleFilter,
    } = this.props;
    return (
      <div className="btn-group filter-selector">
        <button className="btn btn-default" onClick={()=> this.handleClick()}>
          {filterName} <i className="far fa-caret-down" />
        </button>
        {this.checkIfActive() &&
          <ul className="filter-selector__options">
            <li className="filter-selector__search">
              <SearchInput onChange={(e)=> this.setState({searchText: e.target.value})}/>
            </li>
            {filterSet.map(filter =>
              this.matchesSearch(filter) &&
                <li onClick={()=> toggleFilter(filter)} className="filter-selector__option">
                  <a style={{display: 'flex', alignItems: 'center'}}>{isActive(filter) ? <i className="fas fa-check-square" style={{color: tokens.colors.pulseBlue, fontSize: 16}}/> : <i className="far fa-square" style={{color: tokens.colors.grayMedium, fontSize: 16}} />} <span className="meta" style={{flexGrow: 1, marginLeft: 10}}>{filter.name}</span></a>
                </li>)
            }
          </ul>
        }
      </div>
    )
  }
}