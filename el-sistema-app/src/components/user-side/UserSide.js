import React, { Component } from 'react';
import Header from './app-frame/Header';
import Footer from './app-frame/Footer';
import HomePage from './components/home-page/HomePage';
import CalendarPage from './components/calendar-page/CalendarPage';
import AboutPage from './components/about-page/AboutPage';
import MediaPage from './components/media-page/MediaPage';
import BlogPage from './components/blog-page/BlogPage';
import DonatePage from './components/donate-page/DonatePage';
import {Route, Switch, Redirect} from 'react-router-dom';
import './style.css';



class UserSide extends Component {

  render () {
    return (
      <div className="UserSide-container">
        <Header />
          <div className="content-container">
            <Switch>
              <Route path='/calendar' component={CalendarPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/media' component={MediaPage} />
              <Route path='/blog' component={BlogPage} />
              <Route path='/donate' componet={DonatePage} />
              <Route path='/home' component={HomePage} />
              <Redirect from='/' to='/home' />
            </Switch>
          </div>
        <Footer />
      </div>
    )
  }
}

export default UserSide;
