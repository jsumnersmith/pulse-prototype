import React from 'react';
import Dropzone from 'react-dropzone';

export default ({onAdd}) => (
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
)