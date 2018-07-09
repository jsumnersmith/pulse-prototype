import React, { Component } from 'react';

export default ({addMultiple, toggleMultiple}) => (
  <div className="importer-toggle row">
    <div className="col-md-6" onClick={()=> toggleMultiple(false)}>
      <Button
        isActive={!addMultiple}
        title="Invite a single user"
        description="Invite a single user and add more details about them including first and last name."
      />
    </div>
    <div className="col-md-6" onClick={()=> toggleMultiple(true)}>
      <Button
        isActive={addMultiple}
        title="Invite multiple users"
        description="Invite a list of users from a comma-separated list of emails. These users will all share any group, permissions, or restrictions settings."
      />
    </div>
  </div>
)

class Button extends Component {
  constructor(props){
    super(props);
    this.getIconClassName = this.getIconClassName.bind(this);
  }
  getIconClassName(){
    const {isActive} = this.props;
    if (isActive){
      return "fa-check-circle green";
    } else {
      return "fa-circle-thin"
    }
  }
  render(){
    const {title, description, isActive} = this.props;
    return (
      <div className={`btn-huge btn-huge__tight ${isActive ? "btn-huge__active" : ""}`}>
        <i className={`fa ${this.getIconClassName()} btn-huge__icon`} />
        <div className="btn-huge__content">
          <h4 className="btn-huge__title"><strong>{title}</strong></h4>
          <p className="btn-huge__description">{description}</p>
        </div>
      </div>
    )
  }
}