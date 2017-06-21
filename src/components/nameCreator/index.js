import React, { Component } from 'react';
import {NameCreator} from 'pulse-ui';
import _ from 'lodash';

const options = [
  'Name',
  'Email',
  'School',
  'Grade',
  'Subject',
  'Years Teaching'
]

export default class NameCreatorWrapper extends Component {
  constructor(props){
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);

    this.state = {
      activeOptions: [
        {
          type: 'attribute',
          name: 'School'
        },
        {
          type: 'attribute',
          name: 'Grade'
        }
      ]
    }
  }

  onAdd(value){
    this.setState({
      activeOptions: _.concat(this.state.activeOptions, [value])
    })
  }

  onRemove(index){
    const activeOptions = _.clone(this.state.activeOptions);
    activeOptions.splice(index, 1)
    this.setState({ activeOptions })
  }
  render(){
    return (
      <div className="wrapper">
        <div className="block-flat">
          <NameCreator
            attributes={options}
            activeOptions={this.state.activeOptions}
            onAdd={this.onAdd}
            onRemove={this.onRemove}
          />
        </div>
      </div>
    )
  }
}