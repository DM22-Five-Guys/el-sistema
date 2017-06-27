import React, { Component } from 'react';
import AddVolunteer from './components/Add-Volunteer';
import VolunteerTable from './components/Volunteer-Table'

import './../Volunteers/style.css';

export default class Volunteers extends Component {
  render() {
    return (

      <div className="volunteer-container">
      <AddVolunteer />
      <VolunteerTable />


        <h1>Volunteers Page</h1>
      </div>
    )
  }
}
