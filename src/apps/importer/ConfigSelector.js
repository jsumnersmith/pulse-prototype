import React from 'react';
import BigButton from '../home/components/BigButton';


export default ({config = '', setConfig = (config)=>{return config;}}) =>(
  <div>
    <h4>Create a new configuration</h4>
    <div onClick={()=> setConfig('custom')}>
      <BigButton
        title="Custom Configuration"
        description="Need to create a new configuration or just not sure? Use this option to map columns to the appropriate field."
        iconClass={'fa-cloud-upload'}
      />
    </div>
    <div style={{display: 'flex', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
      <hr style={{flexGrow: 1}} />
      <span className="meta" style={{margin: '0 20px'}}>or</span>
      <hr style={{flexGrow: 1}} />
    </div>
    <div >
      <h4>Choose a saved configuration</h4>
    </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <i className="fa fa-gears circle-icon--small circle-icon--no-border"   style={{marginRight: 5}}/>
      <label>Configurations</label>
    </div>
    <select className="form-control" style={{flexGrow: 1}} onChange={(e)=> setConfig(e.target.value)}>
      <option>--- Select a Configuration ---</option>
      <optgroup label="Standard Configs" >
        <option value="standard">KickUp Default</option>
      </optgroup>
      <optgroup label="Your Saved Configs">
        <option value="ldap">Custom LDAP Config</option>
      </optgroup>
    </select>
  </div>
)
