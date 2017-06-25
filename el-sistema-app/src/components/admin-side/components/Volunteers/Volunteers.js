import React, { Component } from 'react';
import AddVolunteer from './components/Add-Volunteer';
import VolunteerTable from './components/Volunteer-Table'

class Volunteers extends Component {
  render() {
    return (
        <div>
      <AddVolunteer />
      <VolunteerTable />
      </div>
    )
  }
}

export default Volunteers;
