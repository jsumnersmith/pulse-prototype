import React, {Component} from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, toggleActive, toggleMenu, activeName, activeMenuName}) =>
  <div className={`form-builder__editable-item ${ value.name === activeName ? 'active' : ''}`}>
    <div className={`form-builder__editable-item-inner`}>
      <h5 style={{display: 'inline-block', verticalAlign: 'top'}}>
        <span className={`form-builder__sidebar-item-icon ${value.iconClass}`}/>
        <strong style={{display: 'table-cell'}} >{value.name}</strong>
      </h5>
      <button className="btn btn-xs btn-default form-builder__edit-button" onClick={()=>{ return toggleActive(value.name)}}>Launch editor</button>
      <div className="form-builder__editable-preview">
        {value.preview}
      </div>
      <i className="fa fa-times circle-icon--small form-builder__editable-item-close" onClick={()=>{ return toggleActive('')}}/>
      <div className="form-builder__editable-content-form">
        {value.form}
      </div>
    </div>
  </div>
);

const SortableList = SortableContainer(({items, toggleActive, toggleMenu, activeName, activeMenuName}) => {
  return (
    <div className="form-builder__editable-items">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
          toggleActive={toggleActive}
          toggleMenu={toggleMenu}
          activeMenuName={activeMenuName}
          activeName={activeName}/>
      ))}
    </div>
  );
});

export default class SortableComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:  this.props.items,
      activeItem: '',
      activeMenu: '',
    };
    this.toggleActive = this.toggleActive.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleActive(itemName){
    console.log("Setting value", itemName);
    this.setState({activeItem: itemName})
  }
  toggleMenu(itemName){
    console.log("Setting Menu active")
    this.setState({activeMenu: itemName})
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList
      items={this.state.items}
      onSortEnd={this.onSortEnd}
      toggleActive={this.toggleActive}
      toggleMenu={this.toggleMenu}
      activeName={this.state.activeItem}
      activeMenuName={this.state.activeMenu}
      />;
  }
}