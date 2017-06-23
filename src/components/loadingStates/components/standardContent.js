import React from 'react';

export default ({title}) => (
  <div className="standard-loader">
    { title ? <div className="standard-loader-title">{title}</div> : null }
    <div className="standard-loader-bar-1">
    </div>
    <div className="standard-loader-bar-2">
    </div>
    <div className="standard-loader-bar-3">
    </div>
    <div className="standard-loader-bar-0">
    </div>
  </div>
);