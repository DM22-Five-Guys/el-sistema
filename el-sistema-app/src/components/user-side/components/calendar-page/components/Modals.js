import React, { Component } from 'react';
import NotificationModal from './modals/NotificationModal';
import './../styles/modals.css';


class Modals extends Component {
  constructor(props) {
    super(props);

    var state = Object.assign({}, props);
    if (props.notificationModal || props.eventsModal) {
      state.isOpen = true;
    }

    this.state = state;

    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(props) {
    var newState = Object.assign({}, props);
    if (props.notificationModal || props.eventsModal) {
      newState.isOpen = true;
    }

    this.setState(newState);
  }

  determineDisplay() {
    var modalBlanketStyle = {};

    if (this.state.isOpen) {
      document.body.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      modalBlanketStyle.display = "block";
    } else {
        modalBlanketStyle.display = "none";
    }

    return modalBlanketStyle;
  }

  determineModal() {
    if (this.state.notificationModal)
      return <NotificationModal closeModal={this.closeModal}/>
    //...
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
    document.body.style.overflow = 'visible';
    this.props.updateCalendarState();
  }

  render() {
    return (
      <div className="modal-blanket" style={this.determineDisplay()}>
        {this.state.isOpen ? this.determineModal() : null}
      </div>
    )
  }
}

export default Modals;
