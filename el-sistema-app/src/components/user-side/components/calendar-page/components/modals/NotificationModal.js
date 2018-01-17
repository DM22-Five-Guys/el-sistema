import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { subscribe } from './../../../../../../reducers/subscribe.reducer';

import content from './../../assets/content';

class NotificationModal extends Component {
  constructor() {
    super();

    this.state = {
      message: content.notificationModalMessage,
      classSelection: false
    }

  }

  renderSelectionItem(field){
    return (
      <li>
        <input type="checkbox" id="jazz-violin" name="jazz-violin"/>
        <label htmlFor="jazz-violin"><span>{field.label}</span></label>
      </li>
    )
  }

  toggleClassSelection() {
    var newState = Object.assign({}, this.state);
    newState.classSelection = !newState.classSelection;
    this.setState(newState);
  }

  classSelectionDisplay() {
    return this.state.classSelection ? {display: "block"} : {display: "none"};
  }
  onSubmit(values){
    subscribe(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="notification-modal">
        <div className="exit-button" onClick={() => this.props.closeModal()}>X</div>
        <h3>Notifications</h3>
        <p>{this.state.message}</p>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label htmlFor="phone-number">
            <span>Phone Number</span>
            <input type="tel" id="phone-number" name="phone-number" />
          </label>
          <p>Select what to get notification for:</p>

            <ul className="notification-selection">

              <li onClick={() => this.toggleClassSelection()}>
                <span>Classes</span>
                <div className="downwards-arrow"></div>
                <ul className="class-selection" style={this.classSelectionDisplay()}>
                  <Field name="test" label="Test" component={this.renderSelectionItem}/> 
                  <li>
                    <input type="checkbox" id="jazz-violin" name="jazz-violin"/>
                    <label htmlFor="jazz-violin"><span>Jazz Violin</span></label>
                  </li>
                  <li>
                    <input type="checkbox" id="strings" name="strings" />
                    <label htmlFor="strings"><span>Strings</span></label>
                  </li>
                  <li>
                    <input type="checkbox" id="bucket-band" name="bucket-band" />
                    <label htmlFor="bucket-band"><span>Bucket Band</span></label>
                  </li>
                </ul>
              </li>

              <li>
                <input type="checkbox" name="performances" id="performances" />
                <label htmlFor="performances"><span>Performances</span></label>
              </li>

              <li>
                <input type="checkbox" name="events" id="events" />
                <label htmlFor="events"><span>Events</span></label>
              </li>

              <li>
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all"><span>All</span></label>
              </li>
            </ul>

          <input type="submit" value="Sign up" onClick={() => this.props.closeModal()}/>
        </form>
      </div>
    )
  }
}

function validate(values){
  let errors = {};
  // if (!values.message){
  //   errors.title = "⚠ Please enter a message to send.";
  // }
  return errors;
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { subscribe })( reduxForm({ validate, form: 'subscribe'})(NotificationModal));
