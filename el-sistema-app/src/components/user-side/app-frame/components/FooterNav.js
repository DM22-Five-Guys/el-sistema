import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Committed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navData: [
        {
          display: 'Home',
          path: '/home',
        },
        {
          display: 'About us',
          path: '/about'
        },
        {
          display: 'Our Team',
          path: '/about'
        },
        {
          display: 'Calendar',
          path: '/calendar'
        },
        {
          display: 'Volunteer',
          path: '/about'
        },
        {
          display: 'Donate',
          path: '/support'
        }
      ],
      updateUserSideState: props.updateUserSideState
    }
  }

  render() {
    return (
      <section className="footer-nav">
        <h4> NAVIGATION </h4>
        <ul>
          {this.state.navData.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <li onClick={() => this.state.updateUserSideState(item.path)}>{item.display}<div className="nav-pointer"></div></li>
              </Link>
            )
          })}
        </ul>
        <input type="button" value="Contact Us" className="contact-us" />
      </section>
    )
  }
}
