// 603 width
import React, { Component } from 'react';
import placeholderImage1 from './../assets/violinKid.jpg';
import placeholderImage2 from './../assets/jazzband.jpg';
import content from './../assets/content';
import { Link } from 'react-router-dom';

class InfoGraphics extends Component {

  render() {
    return (
      <section className="info-graphics">

        <div className="info-graphics-leftside">
          <div className="image-1"></div>
          <div className="donation-card"></div>
          <div className="registration-card"></div>
        </div>

        <div className="info-graphics-rightside">
          <div className="vision-card"></div>
          <div className="image-2"></div>
          <div className="core-values"> </div>
        </div>

      </section>
    )
  }
}

export default InfoGraphics;

//left side content

// <img src={this.state.placeholderImages[1]} alt="Kids playing Violin" />

// <p>{this.state.donationCard}</p>
// <Link>
//   <input type="button" value="Support Us" />
// </Link>

// <h4>Registration</h4>
// <span>Registration is open!</span>
// <p>{this.state.registrationCard.howTo}</p>
// <p>{this.state.registrationCard.fyi}</p>

//Right side content

// <h4>Vision</h4>
// <span>for the Future</span>
// <p>{this.state.visionCardContent}</p>

// <img src={this.state.placeholderImages[2]} alt="El-Sistema Performance" />

// <h4>El Sistema-Inspired Core Values</h4>
// <ul>
//   <li>Music education as social change</li>
//   <li>Accessibility</li>
//   <li>High standards of musical excellence</li>
//   <li>Community</li>
// </ul>
// <input type="button" value="Read More" />
