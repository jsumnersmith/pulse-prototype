import React from 'react';

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
    <div className="row" style={{marginBottom: 10}}>
      <div className="col-md-12" style={{marginBottom: 20}}>
        <h5>{ getConfigText(config) }</h5>
      </div>
      {data[0].map((header, index) => <div className="col-md-4"><ConfigurableColumn rows={getRows(index, data)}title={header} index={index + 1}/></div>)}
    </div>
    <button className="btn btn-primary btn-block" onClick={nextStep}>Process Results</button>
  </div>
)

const ConfigurableColumn = ({title, index, rows}) => (
  <div className="importer-column">
    <div className="importer-column__header">
      <div className="importer-column__number"><label>Column {index}</label></div>
    </div>
    <div className="importer-column__configuration">
      <SampleTable heading={title} rows={rows} />
      <select className="form-control">
        <option>--- Select a Column Configuration ---</option>
        <optgroup label="User/Person">
          <option selected={title === 'First Name'}>First Name</option>
          <option selected={title === 'Last Name'}>Last Name</option>
          <option selected={title === 'Email'}>Email</option>
          <option selected={title === 'Groups'}>Groups</option>
          <option selected={title === 'Tags'}>Tags</option>
        </optgroup>
      </select>
    </div>
  </div>
)

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