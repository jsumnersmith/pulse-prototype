import React from 'react';
import DirectoryHeader from './DirectoryHeader'

import './directory.less';

export default ({match}) => (
    <div className="wrapper">
      <DirectoryHeader/>
        <div className="block-flat">
          Groups
        </div>
    </div>
);

