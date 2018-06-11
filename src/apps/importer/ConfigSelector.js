import React from 'react';
import BigButton from '../home/components/BigButton';


export default ({config = '', setConfig = (config)=>{return config;}}) =>(
  <div>
    <div className="row">
      <div className="col-md-12">
        <h4>Choose a preset configuration</h4>
      </div>
      <div className="col-md-6" onClick={()=> setConfig('standard')}>
        <BigButton
          title="Standard KickUp Configuration"
          description="Use this configuration if you have a CSV already configured to fit KickUp's data model."
          iconClass={'kickup-icon'}
        />
      </div>
      <div className="col-md-6" onClick={()=> setConfig('ldap')}>
        <BigButton
          title="LDAP or Active Directory Configuration"
          description="Use this configuration if you have exported your users from an Active Directory or LDAP server."
          iconClass={'fa-database'}
        />
      </div>
    </div>
    <div style={{display: 'flex', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <hr style={{flexGrow: 1}} />
        <span className="meta" style={{margin: '0 20px'}}>or</span>
        <hr style={{flexGrow: 1}} />
    </div>
    <h4>Create a new configuration</h4>
    <div onClick={()=> setConfig('custom')}>
      <BigButton
        title="Custom Configuration"
        description="Need to create a new configuration or just not sure? Use this option to map columns to the appropriate field."
        iconClass={'fa-cloud-upload'}
      />
    </div>
  </div>
)
