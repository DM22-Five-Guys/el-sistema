import React, { Component } from 'react';
import navInterface from './assets/nav-interface';
import Header from './app-frame/Header';
import Footer from './app-frame/Footer';
import ContentContainer from './app-frame/ContentContainer';
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
    const url = window.location.href;
    this.state = {
      currentPage: navInterface.getCurrentPage(url),
      navigationState: navInterface.giveNavigationState(url),
      contentTopMargin: navInterface.giveTopMargin(url)
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(newPath) {
    this.setState({
      currentPage: navInterface.getCurrentPage(newPath),
      navigationState: navInterface.giveNavigationState(newPath),
      contentTopMargin: navInterface.giveTopMargin(newPath)
    })
  }

  giveToHeader() {
    var toSend = Object.assign({}, this.state);
    toSend.updateUserSideState = this.updateState;
    delete toSend.contentTopMargin;
    return toSend;
  }
  
  render() {
    return (
      <div className="UserSide-container">
        <Header {...this.giveToHeader()}/>
          <ContentContainer topMargin={this.state.contentTopMargin}>
            <Switch>
              <Route path='/calendar' component={CalendarPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/media' component={MediaPage} />
              <Route path='/blog' component={BlogPage} />
              <Route path='/support' component={DonatePage} />
              <Route path='/home' component={HomePage} />
              <Redirect from='/' to='/home' />
              <Redirect from='*' to='/home' />
            </Switch>
          </ContentContainer>
        <Footer updateUserSideState={this.updateState}/>
      </div>
    )
  }
}

export default UserSide;
