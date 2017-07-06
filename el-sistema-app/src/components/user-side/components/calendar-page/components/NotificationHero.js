import React, { Component } from 'react';
import content from './../assets/content';
import heroImage from './../assets/hero-image.jpg';
import './../styles/notification-hero.css';

class NotificationHero extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      notificationHeroMessage: content.notificationHeroMessage,
      heroImage: heroImage
    }
  }

  render() {
    return (
      <section className="notification-hero">
        <div className="image-container">
          <img src={this.state.heroImage} alt="Calendar Hero" />
        </div>
        <aside>
          <h3>Notifications</h3>
          <p>{this.state.notificationHeroMessage}</p>
          <input type="button" value="Sign up" />
        </aside>
      </section>
    )
  }
}

export default NotificationHero;
