import React, {Component} from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, toggleActive, activeName}) =>
  <div className={`form-builder__editable-item ${ value.name == activeName ? 'active' : ''}`}>
    <div className={`form-builder__editable-item-inner`}>
      <h5 onClick={()=>{ return toggleActive(value.name)}}>
        <span className={`form-builder__sidebar-item-icon ${value.iconClass}`}/>
        <strong style={{display: 'table-cell'}} >{value.name}</strong>
      </h5>
      <button className="btn btn-xs" onClick={()=>{ return toggleActive(value.name)}}>Launch editor</button>
      <i className="fa fa-times circle-icon form-builder__editable-item-close" onClick={()=>{ return toggleActive('')}}/>
    </div>
  </div>
);

const SortableList = SortableContainer(({items, toggleActive, activeName}) => {
  return (
    <div className="form-builder__editable-items">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
          toggleActive={toggleActive}
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
      activeItem: ''
    };
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleActive(itemName){
    console.log("Setting value", itemName);
    this.setState({activeItem: itemName})
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
      lockToContainerEdges={true}
      toggleActive={this.toggleActive}
      activeName={this.state.activeItem}
      />;
  }
}