import React, { Component } from 'react';
import facebookIcon from './../assets/facebook.png';
import linkedinIcon from './../assets/linked-in.png';
import twitterIcon from './../assets/twitter.png';

export default class StayConnected extends Component {

  render() {
    return (
      <section className="stay-connected">
        <h4> STAY CONNECTED </h4>
        <p> {this.props.content} </p>
        <form>
          <input type="tel" />
          <input type="submit" value="Sign-Up" className="sign-up-button" />
        </form>
        <div className="social-icons">
          <img src={facebookIcon} alt="Facebook Icon"/>
          <img src={linkedinIcon} alt="Linked-In Icon"/>
          <img src={twitterIcon} alt="Twitter Icon"/>
        </div>
      </section>
    )
  }
}
