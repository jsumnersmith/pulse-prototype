import React from 'react';
import Dropzone from 'react-dropzone';
import sampleCSV from './sample.csv';

export default ({onAdd}) => (
  <div>
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
    <p className="text-center" style={{marginTop: 10}}>Not sure where to start? Download <a href={sampleCSV} style={{textDecoration: 'underline'}}>this quick start CSV</a> to get your data ready to import into KickUp.</p>
  </div>
)