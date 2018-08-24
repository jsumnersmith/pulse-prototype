import React, {Component} from 'react';
import './bigButton.less';

export default class BigButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: this.props.isActive || false,
      isConfused: this.props.isConfused,
      isDisabled: this.props.isDisabled
    }
    if (this.props.onClick) {
      this.toggleActive = this.props.onClick;
    } else {
      this.toggleActive = this.toggleActive.bind(this);
    }
    this.getIconClassName = this.getIconClassName.bind(this);
  }

  toggleActive(){
    this.setState({
      isActive: !this.state.isActive,
      isConfused: false
    });
  }

  getIconClassName(){
    const {isActive, isConfused, isDisabled} = this.state;
    if (isActive){
      return "fa-check-circle green";
    } else  if (isConfused){
      return "fa-minus-circle";
    } else {
      return "fa-circle"
    }
  }

  render(){
    const { title, description } = this.props;
    const { isActive, isConfused } = this.state;
    return (
      <div className={`btn-huge btn-huge__tight ${isActive ? "btn-huge__active" : ""}`} onClick={this.toggleActive}>
        <i className={`far ${this.getIconClassName()} btn-huge__icon`} />
        <div className="btn-huge__content">
          <h4 className="btn-huge__title"><strong>{title}</strong></h4>
          <p className="btn-huge__description">{description}</p>
          { isConfused ? <p className="btn-huge__warning meta">There are users with conflicting permissions.</p>: null}
        </div>
      </div>
    )
  }
}