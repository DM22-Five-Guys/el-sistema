import React, { Component } from 'react';
import Hero1 from './components/HomeHero1';
import UpcomingEvents from './components/UpcomingEvents'

class HomePage extends Component {


  render() {
    return (
      <div className="home-page">
        <Hero1 />
        <UpcomingEvents />
      </div>
    )
  }
}

export default HomePage;
