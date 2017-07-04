import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import placeholderImage from './../assets/placeholder-violin.jpg';


class UpcomingEvents extends Component {
  constructor() {
    super();

    this.state = {
      events: [
        {
          image: placeholderImage,
          date: 'June 12th',
          title: 'Jazz Violin "The Pittsburgh Way"'
        },
        {
          image: placeholderImage,
          date: 'June 24th',
          title: 'Pittsburgh Carnaval Showcase 2017!'
        },
        {
          image: placeholderImage,
          date: 'July 30th',
          title: 'Family Night Performance'
        }
      ]
    }
  }

  giveEvents() {
    return this.state.events.map(event => {
      return (
        <Link to="/calendar">
          <li className="event">
            <img src={event.image} alt="Event" />
            <span className="event-date">{event.date}</span>
            <span className="event-title">{event.title}</span>
          </li>
        </Link>
      )
    })
  }

  render() {
    return (
      <section className="upcoming-events">
        <div className="container">
          <header>
            <h2>Upcoming Events</h2>
            <Link to="/calendar">
              <input type="button" value="See More" />
            </Link>
          </header>
          <ul className="events-list">
            {this.giveEvents()}
          </ul>
        </div>
      </section>
    )
  }
}

export default UpcomingEvents;
