import React, { Component } from 'react';
import {NameCreator} from 'pulse-ui';
import BigButton from './components/BigButton';
import _ from 'lodash';


const options = [
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
          <div className="section-header" style={{marginBottom: 20}}>
            <h3><strong><div className="circle-icon orange bg-orange" style={{display: "inline-block", marginRight: 10}}>5</div>Anonymize Report</strong></h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <BigButton
                iconClass="fa-circle-o"
                title="Configure for who Response is About"
                description={<span>Setup an anonymization scheme to hide the identity people about whom responses were submitted.</span>}
              />
              <div style={{padding: 10}}>
                <NameCreator
                  attributes={options}
                  activeOptions={this.state.activeOptions}
                  onAdd={this.onAdd}
                  onRemove={this.onRemove}
                />
              </div>
            </div>
            <div className="col-md-6">
            <BigButton
              iconClass="fa-circle-o"
              title="Configure for who Response is Submitted By"
              description={<span>Setup an anonymization scheme to hide the identity people who submitted responses.</span>}
            />
            <div style={{padding: 10}}>
              <NameCreator
                attributes={options}
                activeOptions={this.state.activeOptions}
                onAdd={this.onAdd}
                onRemove={this.onRemove}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}