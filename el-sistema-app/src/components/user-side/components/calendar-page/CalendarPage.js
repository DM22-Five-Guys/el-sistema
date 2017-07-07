import React, { Component } from 'react';
import Modals from './components/Modals';
import NotificationHero from './components/NotificationHero';
import './styles/calendar-page.css';


class CalendarPage extends Component {
  constructor() {
    super();

    this.state = {
      modalDisplayData: {
        isOpen: false,
        notificationModal: false,
        eventModal: false,
        eventDetails: {}
      }
    }

    this.openModal = this.openModal.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  openModal() {
    var {modalDisplayData} = this.state;
    modalDisplayData.notificationModal = true;
    this.setState({
      modalDisplayData: modalDisplayData
    })
  }

  updateState() {
    this.setState({
      modalDisplayData: {
        isOpen: false,
        notificationModal: false,
        eventModal: false,
      }
    })
  }

  giveToModals() {
    var toSend = Object.assign({}, this.state.modalDisplayData);
    toSend.updateCalendarState = this.updateState;
    return toSend;
  }

  render() {
    return (
      <div className="calendar-page">
        <Modals {...this.giveToModals()}/>
        <h2>Calendar</h2>
        <NotificationHero openModal={this.openModal}/>
      </div>
    )
  }
}

export default CalendarPage;
