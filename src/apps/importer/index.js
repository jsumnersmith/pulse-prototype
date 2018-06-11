import React, {Component} from 'react';
import { isEmpty } from 'lodash';
import Dropzone from 'react-dropzone';
import Papa from 'papaparse';
import ImporterHeader from './ImporterHeader';
import ConfigSelector from './ConfigSelector';
import ColumnConfiguration from './ColumnConfiguration';
import AcceptanceTable from './AcceptanceTable';

import './importer.less';

const stepDescriptions = [
  'Add File',
  'Pick Configuration',
  'Edit & Review Columns',
  'Review Import'
]

export default class Importer extends Component {
  constructor(props){
    super(props);
    this.state = {...this.initialState};
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.stepIs = this.stepIs.bind(this);
    this.restartProcess = this.restartProcess.bind(this);
    this.setConfig = this.setConfig.bind(this);
  }

  initialState = {
    step: 1,
    headers: [],
    data: null,
    config: '',
    fileName: ''
  }

  nextStep(){
    if (this.state.step === 4) return;
    let {step} = this.state;
    step++
    this.setState({step})
  }

  previousStep(){
    if (this.state.step === 1) return;
    let {step} = this.state;
    step--
    this.setState({step})
  }

  onAdd(addFiles, rejectedFiles, e){
    e.preventDefault();
    e.stopPropagation();

    const files = [addFiles[0]];
    console.log(files)
    // If the result array has a valid value, do the thing...
    if (!isEmpty(files.filter(Boolean))) {
      Papa.parse(files.filter(Boolean)[0], {complete: (results)=>{
        this.setState({headers: results.data[0], data: results.data, fileName: files.filter(Boolean)[0].name});
        return this.nextStep();
      }});
    }
  }

  stepIs(n){
    return this.state.step === n;
  }

  restartProcess() {
    return this.setState({...this.initialState});
  }

  setConfig(config) {
    this.setState({config}, this.nextStep);
  }


  render(){
    console.log(this.state.config);
    return (
      <div className="wrapper">
        <ImporterHeader />
        <div className="block-flat" style={{border: '1px solid rgba(0,0,0,.15)'}}>
          <StepFooter
            step={this.state.step}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            disabled={this.state.data ? false : true}
          />
          { this.state.fileName && <FileNameDisplay fileName={this.state.fileName} restart={this.restartProcess}/>}
          <div className="content">
            { this.stepIs(1) && <StepOne onAdd={this.onAdd} /> }
            { this.stepIs(2) && <StepTwo setConfig={this.setConfig}/> }
            { this.stepIs(3) && <StepThree headers={this.state.headers} nextStep={this.nextStep} config={this.state.config} data={this.state.data} /> }
            { this.stepIs(4) && <StepFour data={this.state.data} /> }
          </div>

        </div>
      </div>
    )
  }
}

const StepFooter = ({step, nextStep, previousStep, disabled}) => (
  <div className="importer-step-footer">
    { !disabled && <button className="btn btn-primary btn-sm btn-trans" onClick={previousStep}><i className="fa fa-caret-left"/> Previous</button> }
    <label style={{flexGrow: 1, textAlign: 'center'}}>Step {step} of 4: {stepDescriptions[step - 1]}</label>
    <div className="importer-step-footer__action">
    { !disabled && <button className="btn btn-primary btn-sm btn-trans" onClick={nextStep}>Next <i className="fa fa-caret-right"/></button> }
    </div>
  </div>
)

const FileNameDisplay = ({fileName, restart}) => (
  <div className="importer-file-name">
    <h5><i className="importer-file-name__icon fa fa-file-code-o"/> You uploaded <strong className="underline--pulse-blue">{fileName}</strong> <span className="meta" onClick={restart} style={{float: 'right', cursor: 'pointer', fontSize: 11}}><i className="fa fa-refresh"/> Start Over</span></h5>
  </div>
)

const StepOne = ({onAdd}) => (
  <Dropzone
    className="importer-file-upload-input__input"
    onDrop={onAdd}
  >
    <div className="file-upload-input__display">
      <h3>
        <i className="fa fa-cloud-upload circle-icon pulse-blue" style={{ marginBottom: '10px' }} /> <br />
        <strong>Drag and drop files to upload</strong> <br />
        <small>or click to select a file</small>
      </h3>
    </div>
  </Dropzone>
)

const StepTwo = ConfigSelector;

const StepThree = ColumnConfiguration;

const StepFour = AcceptanceTable;
