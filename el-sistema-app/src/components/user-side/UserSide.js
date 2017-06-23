import React, { Component } from 'react';
import Header from './app-frame/Header';
import Footer from './app-frame/Footer';
import HomePage from './components/home-page/HomePage';
import CalendarPage from './components/calendar-page/CalendarPage';
import AboutPage from './components/about-page/AboutPage';
import MediaPage from './components/media-page/MediaPage';
import BlogPage from './components/blog-page/BlogPage';
import DonatePage from './components/donate-page/DonatePage';
import {Route, Switch} from 'react-router-dom';



class UserSide extends Component {
  render () {
    return (
      <div className="container">
        <Header />
            <Switch>
              <Route path='/calendar' component={CalendarPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/media' component={MediaPage} />
              <Route path='/blog' component={BlogPage} />
              <Route path='/donate' component={DonatePage} />
              <Route path='/' component={HomePage} />
            </Switch>
        <Footer />
      </div>
    )
  }
}

export default UserSide;
