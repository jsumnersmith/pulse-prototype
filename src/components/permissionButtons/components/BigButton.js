import React, {Component} from 'react';
import './bigButton.less';

export default class BigButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false
    }
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(){
    this.setState({isActive: !this.state.isActive });
  }

  render(){
    const { iconClass, title, description } = this.props;
    const { isActive } = this.state;
    return (
      <div className={`btn-huge ${isActive ? "btn-huge__active" : ""}`} onClick={this.toggleActive}>
        <i className={`fa ${iconClass} btn-huge__icon`} />
        <div className="btn-huge__content">
          <h4 className="btn-huge__title"><strong>{title}</strong></h4>
          <p className="btn-huge__description">{description}</p>
        </div>
      </div>
    )
  }
}