import React from 'react';
import sampleEvents from '../components/sampleEvents';

const getEvent = (id) => {
  console.log(sampleEvents.length);
  const sample = sampleEvents.find(e => e.id == id);
  console.log(sample);
  return sample;
}

export default ({match}) => (
  <div className="wrapper">
    <h2 className="text-center" style={{marginBottom: 20}}><strong>{getEvent(match.params.id).name}</strong></h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Joel Smith</td>
          <td>joel@kickup.org</td>
          <td></td>
        </tr>
        <tr>
          <td>Bella Smith</td>
          <td>bella@kickup.org</td>
          <td></td>
        </tr>
        <tr>
          <td>Reggie Kinzig</td>
          <td>reggie@kickup.org</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);