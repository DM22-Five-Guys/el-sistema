import React, { Component } from 'react';
import NotificationHero from './components/NotificationHero';
import './styles/calendar-page.css';


class CalendarPage extends Component {
  render() {
    return (
      <div className="calendar-page">
        <h2>Calendar</h2>
        <NotificationHero />
      </div>
    )
  }
}

export default CalendarPage;
