import React, { Component } from 'react';
import NotificationModal from './modals/NotificationModal';
import './../styles/modals.css';


class Modals extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: true
    }
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

  render() {
    return (
      <div className="modal-blanket" style={this.determineDisplay()}>
        <NotificationModal />
      </div>
    )
  }
}

export default Modals;
