import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import './adding-table.less';

import { Button } from '../../../../componentLibrary/button';
import { Paragraph } from '../../../../componentLibrary/text';
import { TextInput } from '../../../../componentLibrary/input';

const values =[ 'PB&J', 'Turkey Club', 'Chicken Salad', 'Falafel' ]

const options = [ "Hate", "Dislike", "Neutral", "Like", "Love" ]

export default ({onSave}) => (
  <div>
    <Paragraph>Prompt</Paragraph>
    <TextInput mb={3} value="How do you feel about sandwiches?"/>

    <div style={{display: 'flex'}}>
      <div style={{flexGrow: 1, marginRight: 10}}>
        <Paragraph>Question Rows</Paragraph>
        <SortableComponent
          headings={['Question Text']}
          rows={values.map((value)=>{
            return {
              columns: [
                <input className="form-control" value={value} />,
              ]
            }
          })}
          addOption={()=>{console.log("Good Add")}}
          buttonValue="Question"
        />
      </div>
      <div style={{flexGrow: 1, marginLeft: 10}}>
        <Paragraph>Option Columns</Paragraph>
        <SortableComponent
          headings={['Option Text']}
          rows={options.map((option)=>{
            return {
              columns: [
                <input className="form-control" value={option} />,
              ]
            }
          })}
          addOption={()=>{console.log("Good Add")}}
          buttonValue="Option"
        />
      </div>
    </div>
    <Button block mt={3} onClick={onSave}>Save</Button>
  </div>
);


const SortableItem = SortableElement(({value}) =>
  <div className="adding-table__row">
    <i className="far fa-bars adding-table__row-icon" style={{marginRight: 10}}/><div className="adding-table__row-content">{value.columns.map((column)=><div className="adding-table__column">{column}</div>)}</div><i className="far fa-trash adding-table__row-icon" style={{marginLeft: 10, cursor: "pointer"}}/>
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

class SortableComponent extends Component {
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
            <button type="submit" className="btn btn-block btn-trans btn-primary" style={{marginTop: 10, marginLeft: 0}} onClick={this.props.addOption}>Add {this.props.buttonValue}</button>
          </fieldset>
        </div>
      </div>
    </div>)
  }
}