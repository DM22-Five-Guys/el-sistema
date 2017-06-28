import React, { Component } from 'react';
import Header from './app-frame/Header';
import Footer from './app-frame/Footer';
import ContentContainer from './app-frame/ContentContainer';
import navInfo from './app-frame/assets/navigationItems';
import HomePage from './components/home-page/HomePage';
import CalendarPage from './components/calendar-page/CalendarPage';
import AboutPage from './components/about-page/AboutPage';
import MediaPage from './components/media-page/MediaPage';
import BlogPage from './components/blog-page/BlogPage';
import DonatePage from './components/donate-page/DonatePage';
import {Route, Switch, Redirect} from 'react-router-dom';
import './style.css';



class UserSide extends Component {
  constructor() {
    super();

    this.state = {
      contentContainerMarginTop: this.determineMarginTop()
    }

    this.updateMarginTop = this.updateMarginTop.bind(this);
  }

  determineMarginTop() {

    var marginTop;

    if (navInfo.information.every(item => !window.location.href.includes(item.path)))
      marginTop = 130;
    else if (window.location.href.includes('home'))
      marginTop = 130;
    else
      marginTop = 92.5;

    return marginTop;
  }

  updateMarginTop() {
    this.setState({
      contentContainerMarginTop: this.determineMarginTop()
    })
  }


  render() {
    return (
      <div className="UserSide-container">
        <Header updateMarginTop={this.updateMarginTop}/>
          <ContentContainer marginTop={this.state.contentContainerMarginTop}>
            <Switch>
              <Route path='/calendar' component={CalendarPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/media' component={MediaPage} />
              <Route path='/blog' component={BlogPage} />
              <Route path='/support' component={DonatePage} />
              <Route path='/home' component={HomePage} />
              <Redirect from='/' to='/home' />
            </Switch>
          </ContentContainer>
        <Footer />
      </div>
    )
  }
}

export default UserSide;
