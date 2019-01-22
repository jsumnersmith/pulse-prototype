import React, {Component} from 'react';
import EditableList from './components/EditableList';
import formIcon from '../../images/form-icon.svg';
import { Link } from 'react-router-dom';
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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
          <h2 className="header-title"><img src={formIcon} alt="Form Icon" className="header-icon"/><strong>Edit {this.state.name}</strong></h2>
          <Link to="/form-builder/" className="btn btn-back" style={{height: 34}}>Back to All Forms</Link>
        </div>
        <div className="block-flat form-builder" style={{marginBottom: 20, boxShadow: 'none', borderBottom: 'none'}}>
          <div className="form-builder__section">
            <div className="form-builder__section-content">
              <fieldset>
                <label>Form Name</label>
                <input className="form-control" value={this.state.name} onChange={this.changeName}/>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="inline-tabs" style={{display: 'none'}}>
          <a className="inline-tab meta active"><i className="far fa-align-justify"/> Layout </a>
          <a className="inline-tab meta"><i className="far fa-paint-brush"/> Styles</a>
          <a className="inline-tab meta"><i className="far fa-cog"/> Advanced Settings</a>
          <a className="inline-tab meta"><i className="far fa-users"/> Sharing</a>
        </div>
        <div className="form-builder__section blue-border-top" style={{marginTop: 20}}>
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
                <div className="form-builder__editable-section-header">
                  <label>Section Title</label>
                  <input className="form-control" placeholder="Add a Section Title"/>
                </div>
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

