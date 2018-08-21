import React, { Component } from 'react';
import './buttons.less';
export default class SaveButtons extends Component {
  constructor(props){
    super(props);
    this.getButtonClass = this.getButtonClass.bind(this);
    this.state = {
      buttonState: 'empty'
    }
  }

  setButtonState(e){
    this.setState({ buttonState: e.target.value });
  }

  getButtonClass(){
    let buttonClass = '';
    switch( this.state.buttonState){
      case 'empty':
        buttonClass = 'btn-default';
        break;
      case 'saveable':
        buttonClass = 'btn-primary';
        break;
      case 'saving':
        buttonClass = 'btn-primary';
        break;
      case 'success':
        buttonClass = 'btn-success';
        break;
      case 'error':
        buttonClass = 'btn-trans btn-danger';
        break;
      default:
        buttonClass = "btn-default";
    }
    return buttonClass;
  }

  checkDisabled(){
    const {buttonState} = this.state;
    if (buttonState === 'empty' || buttonState === 'error' || buttonState === 'saving') {
      return true;
    }
    return false;
  }

  getIcon(){
    const {buttonState} = this.state;
    if (buttonState === 'saving') {
      return 'fa-circle-notch fa-spin';
    } else if (buttonState === 'success') {
      return 'fa-check'
    }
  }

  render(){
    return (
      <div className="wrapper">
        <div className="block-flat">
          <div className="content">
            <select className="form-control" onChange={(e)=> this.setButtonState(e)}>
              <option value="empty">Empty</option>
              <option value="saveable">Saveable</option>
              <option value="saving">Saving</option>
              <option value="success">Success</option>
              <option value="error">Error</option>
            </select>
            { this.state.buttonState === 'error' ? <p className="error">This is what an error message should look like.</p> : null}
            <div style={{marginTop: 20}}>
              <a href="#no-changes" className={`btn ${this.getButtonClass()}`} disabled={this.checkDisabled()}>
                <Icon icon={this.getIcon()} />{this.state.buttonState}
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const Icon = ({icon}) => (
  <span>
    {
      icon ? <i className={`far ${icon}`} style={{marginRight: 5}}></i> : null
    }
  </span>
);