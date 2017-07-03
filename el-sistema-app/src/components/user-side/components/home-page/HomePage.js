import React, { Component } from 'react';
import Hero1 from './components/HomeHero1';
import UpcomingEvents from './components/UpcomingEvents';
import Hero2 from './components/HomeHero2';
import InfoGraphics from './components/InfoGraphics';


class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <Hero1 />
        <UpcomingEvents />
        <Hero2 />
        <InfoGraphics />
      </div>
    )
  }
}

export default HomePage;
