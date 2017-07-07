import React, { Component } from 'react';
import Modals from './components/Modals';
import NotificationHero from './components/NotificationHero';
import './styles/calendar-page.css';


class CalendarPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="calendar-page">
        <Modals />
        <h2>Calendar</h2>
        <NotificationHero/>
      </div>
    )
  }
}

export default CalendarPage;
