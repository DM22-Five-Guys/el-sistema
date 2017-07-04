import React, { Component } from 'react';
import heroImage from './../assets/home-hero-2.jpg';
import content from './../assets/content.js';

class Hero2 extends Component {
  constructor() {
    super();

    this.state = {
      image: heroImage,
      about: content.hero2.about
    }
  }

  render() {
    return (
      <section className="home-hero-2">
        <div className="hero-image-container">
          <img src={this.state.image} alt="Home Hero 2" />
        </div>
        <p>{this.state.about}</p>
      </section>
    )
  }
}

export default Hero2;
