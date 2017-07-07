import React, { Component } from 'react';
import Hero1 from './components/HomeHero1';
import UpcomingEvents from './components/UpcomingEvents';
import Hero2 from './components/HomeHero2';
import InfoGraphics from './components/InfoGraphics';


class HomePage extends Component {

  giveToUpcomingEvents() {
    return {
      updateUserSideState: this.props.updateUserSideState
    }
  }

  giveToInfoGraphics() {
    return {
      updateUserSideState: this.props.updateUserSideState
    }
  }

  render() {
    return (
      <div className="home-page">
        <Hero1 />
        <UpcomingEvents {...this.giveToUpcomingEvents()}/>
        <Hero2 />
        <InfoGraphics {...this.giveToInfoGraphics()}/>
      </div>
    )
  }
}

export default HomePage;
