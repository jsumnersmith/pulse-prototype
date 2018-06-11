import React from 'react';
import spreadsheetIcon from '../../images/spreadsheet-icon.svg';

export default () => (
  <header className="importer-header">
    <h2 className="importer-header__title">
      <img src={spreadsheetIcon} alt="Spreadsheet" style={{height: 60, width: 'auto'}}/> <strong>CSV Importer</strong>
    </h2>
  </header>
);