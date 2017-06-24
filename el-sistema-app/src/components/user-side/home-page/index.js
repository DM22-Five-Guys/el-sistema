import React, { Component } from 'react';
import HomeHero1 from './components/homeHero1';
import UpcomingEvents from './components/upcomingEvents';
import HomeHero2 from './components/homeHero2';
import InfoGraphics from './components/infoGraphics';


import './style.css';


class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHero1 />
        <UpcomingEvents />
        <HomeHero2 />
        <InfoGraphics />
      </div>
    );
  }
}

export default HomePage;
