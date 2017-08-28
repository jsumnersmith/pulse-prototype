import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './adding-table.less';

const SortableItem = SortableElement(({value}) =>
  <div className="adding-table__row">
    <i className="fa fa-bars adding-table__row-icon" style={{marginRight: 10}}/><div className="adding-table__row-content">{value.columns.map((column)=><div className="adding-table__column">{column}</div>)}</div><i className="fa fa-times adding-table__row-icon circle-icon--small" style={{marginLeft: 10, cursor: "pointer"}}/>
  </div>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <div className="adding-table__body">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

export default class SortableComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows: this.props.rows
    };
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      rows: arrayMove(this.props.rows, oldIndex, newIndex),
    });
  };
  render() {
    console.log("And now the rows are . . .", this.props.rows)

    return (<div className="adding-table">
      <div className="adding-table__header adding-table__row">
        <i className="adding-table__row-icon" />
        <div className="adding-table__row-content">
          { this.props.headings.map((heading)=> <div className="adding-table__column"><strong>{heading}</strong></div>)}
        </div>
        <i className="adding-table__row-icon" />
      </div>
      <SortableList items={this.props.rows} onSortEnd={this.onSortEnd} />
      <div className="adding-table__form">
        <div className="row" style={{paddingLeft: 27}}>
          <fieldset className="col-md-12">
            <button type="submit" className="btn btn-block btn-trans btn-primary" style={{marginTop: 10, marginLeft: 0}} onClick={this.props.addOption}>Add Option</button>
          </fieldset>
        </div>
      </div>
    </div>)
  }
}