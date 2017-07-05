// 603 width
import React, { Component } from 'react';
import placeholderImage1 from './../assets/violinKid.jpg';
import placeholderImage2 from './../assets/jazzband.jpg';
import eightNote from './../assets/8th-note.png';
import content from './../assets/content';
import { Link } from 'react-router-dom';

class InfoGraphics extends Component {
  constructor() {
    super();

    this.state = {
      images: {
        1: placeholderImage1,
        2: placeholderImage2
      },
      donationCard: content.infoGraphics.donationCard,
      visionCard: content.infoGraphics.visionCard,
      registrationCard: {
        howTo: content.infoGraphics.registrationCard.howTo,
        fyi: content.infoGraphics.registrationCard.fyi
      },
      coreValues: [
        "Music education as social change",
        "Accessibility",
        "High standards of musical excellence",
        "Community"
      ]
    }
  }

  render() {
    return (
      <section className="info-graphics">

        <div className="info-graphics-leftside">

          <div className="image-1">
            <img src={this.state.images[1]} alt="Kids playing Violin" />
          </div>

          <div className="donation-card">
            <p>{this.state.donationCard}</p>
            <Link to="/about">
              <input type="button" value="Support Us" />
            </Link>
          </div>

          <div className="registration-card">
            <h4>Registration</h4>
            <span>Registration is open!</span>
            <p>{this.state.registrationCard.howTo}</p>
            <p>{this.state.registrationCard.fyi}</p>
          </div>
        </div>

        <div className="info-graphics-rightside">

          <div className="vision-card-space">
            <div className="vision-card">
              <h4>Vision</h4>
              <span>for the Future</span>
              <p>{this.state.visionCard}</p>
            </div>
          </div>

          <div className="image-2">
            <img src={this.state.images[2]} alt="El-Sistema Performance" />
          </div>

          <div className="core-values">
            <h4>El Sistema-Inspired Core Values</h4>
            <ul>
              {
                this.state.coreValues.map(value => <li><img src={eightNote} alt="Eighth Note" /><span>{value}</span></li>)
              }
            </ul>
            <Link to="/about"><input type="button" value="Read More" /></Link>
          </div>
        </div>

      </section>
    )
  }
}

export default InfoGraphics;
