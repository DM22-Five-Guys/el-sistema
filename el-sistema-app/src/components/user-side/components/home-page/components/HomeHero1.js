import React, {Component} from 'react';
import heroImage from './../assets/home-hero-1.jpg';
import content from './../assets/content';
import facebookIcon from './../assets/facebook.png';
import twitterIcon from './../assets/twitter.png';
import linkedinIcon from './../assets/linkedin.png';
import './../style.css';

class Hero1 extends Component {
  constructor() {
    super();

    this.state = {
      image: heroImage,
      quote: content.hero1.quote,
      quoteAuthor: content.hero1.author,
      quoteAuthorTitle: content.hero1.authorTitle
    }
  }

  render() {

    return (
      <section className="home-hero-1">
        <img src={this.state.image} alt="Home Hero 1" />
        <aside>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </div>
          <figure>
            <blockquote>{`"${this.state.quote}"`}</blockquote>
            <figcaption>
              <span>{this.state.quoteAuthor}</span>
              <span>{this.state.quoteAuthorTitle}</span>
            </figcaption>
          </figure>
        </aside>
      </section>
    )
  }
}

export default Hero1;
