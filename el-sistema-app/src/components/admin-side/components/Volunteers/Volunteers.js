import React, { Component } from 'react';
import VolunteerTable from './components/Volunteer-Table';

import './../Volunteers/style.css';

export default class Volunteers extends Component {
  render() {
    return (
      <div className="volunteer-container">
        <VolunteerTable />
      </div>
    )
  }
}
