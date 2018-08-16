import React, {Component} from 'react';
import EditableList from './components/EditableList';
import formIcon from '../../images/form-icon.svg';
import {
    multipleChoiceForm,
    scaledMatrixForm,
    openResponseForm
  } from './components/Forms';
import {
    MultipleChoicePreview,
    OpenResponsePreview,
    MatrixScalePreview
  } from './components/Previews';

import './form-builder.less';
import './inline-tabs.less';

export default class FormBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Cool Form'
    }
    this.changeName = this.changeName.bind(this);
  }
  changeName(e) {
    const name = e.target.value;
    this.setState({name})
  }
  render(){
    return (
      <div className="wrapper" style={{paddingTop: 20}}>
        <h2 className="header-title"><img src={formIcon} alt="Form Icon" className="header-icon"/><strong>Edit {this.state.name}</strong></h2>
        <div className="block-flat form-builder" style={{marginBottom: 3, boxShadow: 'none', borderBottom: 'none'}}>
          <div className="form-builder__section">
            {/* <div className="form-builder__header">
              <div className="circle-icon pulse-blue form-builder__header-icon">1</div>
              <div className="form-builder__header-text">
                <h3 className="form-builder__header-title">Form Details</h3>
                <div className="form-builder__header-subtitle">Enter a name for your form to continue.</div>
              </div>
            </div> */}

            <div className="form-builder__section-content">
              <fieldset>
                <label>Form Name</label>
                <input className="form-control" value={this.state.name} onChange={this.changeName}/>
              </fieldset>
            </div>
          </div>
          </div>
          <div className="inline-tabs">
            <a className="inline-tab meta active"><i className="far fa-align-justify"/> Layout </a>
            <a className="inline-tab meta"><i className="far fa-paint-brush"/> Styles</a>
            <a className="inline-tab meta"><i className="far fa-gear"/> Advanced Settings</a>
            <a className="inline-tab meta"><i className="far fa-users"/> Sharing</a>
          </div>
            <div className="form-builder__section">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-builder__editable-section block-flat">
                    <div className="form-builder__editable-section-header">
                      <label>Section Title</label>
                      <input className="form-control" placeholder="Add a Section Title"/>
                    </div>

                    <div className="form-builder__editable-section-content">
                      <EditableList
                        items={widgets}
                      />
                    </div>
                  </div>
                  <div className="form-builder__editable-section block-flat">
                    <div className="form-builder__editable-section-content">
                      <EditableList
                        items={widgets.slice(0,2)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

const widgets = [
  {
    name: "Multiple Choice",
    iconClass: "multiple-choice",
    form: multipleChoiceForm,
    preview: MultipleChoicePreview
  },
  {
    name: "Open Response",
    iconClass: "open-responses",
    form: openResponseForm,
    preview: OpenResponsePreview
  },
  {
    name: "Scaled Matrix",
    iconClass: "heatmap",
    form: scaledMatrixForm,
    preview: MatrixScalePreview
  }
];

