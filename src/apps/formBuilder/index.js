import React, {Component} from 'react';
import EditableList from './components/EditableList';
import {
    multipleChoiceForm,
    scaledMatrixForm,
    interestsForm,
    openResponseForm
  } from './components/Forms';

import './form-builder.less';

export default class FormBuilder extends Component {
  render(){
    return (
      <div className="wrapper" style={{paddingTop: 20}}>
        <h2><strong>Create New Form</strong></h2>
        <div className="block-flat form-builder">
          <div className="form-builder__section">
            <div className="form-builder__header">
              <div className="circle-icon pulse-blue form-builder__header-icon">1</div>
              <div className="form-builder__header-text">
                <h3 className="form-builder__header-title">Form Details</h3>
                <div className="form-builder__header-subtitle">Enter a name for your form to continue.</div>
              </div>
            </div>
            <div className="form-builder__section-content">
              <fieldset>
                <label>Form Name</label>
                <input className="form-control" />
              </fieldset>
              <div className="text-center form-builder__section-action"><button className="btn btn-primary">Continue</button></div>
            </div>
          </div>
          <div className="form-builder__section">
            <div className="form-builder__header">
              <div className="circle-icon purple form-builder__header-icon">2</div>
              <div className="form-builder__header-text">
                <h3 className="form-builder__header-title">Form Content</h3>
                <div className="form-builder__header-subtitle">Add and configure questions</div>
              </div>
            </div>
            <div className="form-builder__section-content">
              <div className="row">
                <div className="col-md-9">
                  <div className="form-builder__editable-content">
                    <div className="form-builder__editable-section block-flat">
                      <div className="actions">
                        <a className="minimize">
                          <i className="fa fa-chevron-down" />
                        </a>
                        <a className="close-down">
                          <i className="fa fa-times" />
                        </a>
                      </div>
                      <div className="form-builder__editable-section-content">
                        <EditableList
                          items={widgets}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <SideBarItem
                    title="New Form Section"
                    iconClass="section"
                  />
                  <hr />
                  <SideBarItem
                    title="Text"
                    iconClass="text"
                  />
                  <SideBarItem
                    title="Scaled Questions Matrix"
                    iconClass="heatmap"
                  />
                  <SideBarItem
                    title="Multiple Choice Question"
                    iconClass="multiple-choice"
                  />
                  <SideBarItem
                    title="Interest Question"
                    iconClass="interests"
                  />
                  <SideBarItem
                    title="Open Response Question"
                    iconClass="open-responses"
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

const SideBarItem = ({title, iconClass}) => (
  <div className="form-builder__sidebar-item" draggable="true">
    <span className={`form-builder__sidebar-item-icon ${iconClass}`}/><strong className="form-builder__sidebar-item-title">{title}</strong>
  </div>
)

const widgets = [
  {
    name: "Multiple Choice",
    iconClass: "multiple-choice",
    form: multipleChoiceForm
  },
  {
    name: "Open Response",
    iconClass: "open-responses",
    form: openResponseForm

  },
  {
    name: "Scaled Matrix",
    iconClass: "heatmap",
    form: scaledMatrixForm
  },
  {
    name: "Interests",
    iconClass: "interests",
    form: interestsForm
  }
];

