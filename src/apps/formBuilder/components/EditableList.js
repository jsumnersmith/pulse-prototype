import React, {Component} from 'react';
import { Portal } from 'react-portal';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({uniqueValue, value, toggleActive, activeName}) =>
  <div style={{position: 'relative'}}>
    <div className={`form-builder__editable-item ${ value.name === activeName ? 'active' : ''}`} >
      <div className={`form-builder__editable-item-inner`} onClick={() => toggleActive(value.name)}>
        <h5 style={{display: 'inline-block', verticalAlign: 'top'}}>
          <span className={`form-builder__sidebar-item-icon ${value.iconClass}`}/>
          <strong style={{display: 'table-cell'}} >{value.name}</strong>
        </h5>
        <div className="form-builder__editable-preview">
          {value.preview}
        </div>
      </div>
    </div>
    <div className="form-builder__editable-item-menu">
      <a className="form-builder__editable-item-menu-link" data-toggle="modal" data-target={`#edit-modal-${uniqueValue}`}><i className="far fa-pencil" /></a>
      <a className="form-builder__editable-item-menu-link"><i className="far fa-trash-o" /></a>
      <a className="form-builder__editable-item-menu-link"><i className="far fa-copy" /></a>
      <a className="form-builder__editable-item-menu-link"><i className="far fa-plus-circle" /></a>
    </div>
    <Portal>
      <div className="modal modal-background full-width fade" id={`edit-modal-${uniqueValue}`} tabIndex="-1" role="dialog" style={{display: "none"}}>
        <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header text-left">
              <h3 className="text-left"><span className={`form-builder__sidebar-item-icon ${value.iconClass}`} style={{display: 'inline-block'}}/> {value.name}</h3>
              <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
            </div>
            <div className="modal-body text-left">
              {value.form}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-trans md-close btn-block" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary btn-flat md-close btn-block" data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  </div>
);

const SortableList = SortableContainer(({items, toggleActive, toggleMenu, activeName, activeMenuName}) => {
  return (
    <div className="form-builder__editable-items">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          uniqueValue={index}
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
      toggleActive={this.toggleActive}
      activeName={this.state.activeItem}
      pressDelay={200}
      />;
  }
}