import React, { Component } from 'react';

import RecentEdits from './components/Recent-Edits';
import Notifications from './components/Notifications';
import Calendar from './components/Calendar';

import './style.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dash-container">
          <div className="left-col">
            <RecentEdits />
            <Notifications />
          </div >
          <div className="right-col">
            <Calendar />
          </div>
        </div>
      </div>
    )
  }
}
