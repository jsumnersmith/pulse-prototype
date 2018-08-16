import React, { Component } from 'react';
import AdvancedConfigModal from './AdvancedConfigModal';

const getConfigText = (config) => {
  if (config === 'custom'){
    return 'You chose to customize your configuration';
  } else if (config === 'ldap') {
    return 'You chose to use the standard LDAP or Active Directory configuration';
  } else if (config === 'standard') {
    return 'You chose to use the standard KickUp configuration';
  } else {
    //In the case they get here but aren't sure why.
    return "You haven't selected a configuration yet."
  }
}

const getRows = (index, data) => {
  const firstThreeRows = data.slice(1, 5);
  return firstThreeRows.map(row => row[index]);
}

export default ({data = [], nextStep = () => {}, config=''}) => (
  <div>
    <div style={{marginBottom: 10}}>
      <div style={{marginBottom: 20, display: 'flex', justifyContent: 'space-between'}}>
        <h5>{ getConfigText(config) }</h5>
        { config === 'custom' && <SaveCustom /> }
      </div>
    </div>
    <div className="row">
      {data[0].map((header, index) => <div className="col-md-4"><ConfigurableColumn rows={getRows(index, data)}title={header} index={index + 1}/></div>)}
    </div>
    <button className="btn btn-primary btn-block" onClick={nextStep}>Process Results</button>
  </div>
)


class ConfigurableColumn extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      configType: this.getInitialConfig()
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.setConfigType = this.setConfigType.bind(this);
  }
  toggleModal(isModalOpen = !this.state.isModalOpen){
    this.setState({isModalOpen});
  }

  getInitialConfig(){
    const {title} = this.props;
    let configType;
    const presets = ['First Name', 'Last Name', 'Email', 'School', 'Grade', 'Role'];
    if (presets.includes(title)) configType = title
    else configType = 'unknown';
    return configType;
  }

  setConfigType(e){
    let configType = e.target.value;
    this.setState({configType});
  }

  render(){
    const {title, index, rows} = this.props;
    return (
      <div className="importer-column">
        <div className="importer-column__header">
          <div className="importer-column__number"><label>Column {index}</label></div>
        </div>
        <div className="importer-column__configuration">
          <SampleTable heading={title} rows={rows} />
          <select className="form-control" onChange={this.setConfigType}>
            <option >--- Select a Column Configuration ---</option>
            <optgroup label="User/Person">
              <option selected={title === 'First Name'} value="First Name">First Name</option>
              <option selected={title === 'Last Name'} value="Last Name">Last Name</option>
              <option selected={title === 'Email'} value="Email">Email</option>
              <option selected={title === 'Groups'} value="Groups">Groups</option>
              <option selected={title === 'School'} value="School">School</option>
              <option selected={title === 'Grade'} value="Grade">Grade</option>
              <option selected={title === 'Role'} value="Role">Role</option>
              <option value="New Attribute">Create New Attribute</option>
              <option value="Remove">Deactivate User - True/False</option>
            </optgroup>
          </select>
          <div className="text-center" style={{paddingTop: 10}}><a onClick={this.toggleModal}>Advanced Configuration</a></div>
          <AdvancedConfigModal
            configType={this.state.configType}
            title={title}
            isOpen={this.state.isModalOpen}
            close={()=>this.toggleModal(false)}
            index={index}
          />
        </div>
      </div>
    )
  }
}

const SampleTable = ({heading, rows}) => (
  <div className="importer-column__table">
    <table style={{marginBottom: 20}}>
      <thead className="no-border-y">
        <tr><th><strong>{heading}</strong></th></tr>
      </thead>
      <tbody className="no-border-y no-border-x">
        {rows.map(row => <tr><td>{row}</td></tr>)}
      </tbody>
    </table>
  </div>
)

const SaveCustom = () => (
  <div>
    <button className="btn btn-primary btn-trans btn-sm" data-toggle="modal" data-target="#save-modal">Save Configuration</button>
    <SaveModal />
  </div>
)

const SaveModal = () => (
  <div className="modal modal-background fade in" id="save-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
    <div className="modal-dialog">
      <div className="modal-content" style={{padding: 20}}>
        <div className="modal-header text-left">
          <h3><i className="far fa-pencil circle-icon pulse-blue" style={{marginRight: 5}}/> <strong>Save Configuration</strong></h3>
          <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
        </div>
        <div className="modal-body" style={{padding: 20}}>
          <div>
            <fieldset>
              <label>
                Configuration Name
              </label>
              <input className="form-control"/>
            </fieldset>
          </div>
        </div>
        <div className="text-center" >
          <button className="btn btn-primary" data-dismiss="modal">Save</button>
          <button className="btn btn-danger btn-trans" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
)

