import React from 'react';
import Input from './components/Input';
import SelectableInput from './components/SelectableInput';
import ReactSelect from './components/ReactSelect';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <label style={{marginBottom: 5}}>Simple Input</label>
      <Input />
      <hr />
      <SelectableInput
        label="Selectable Input"
      />
      <hr />
      <ReactSelect
        label="React Select Example"
      />
    </div>
  </div>
)

