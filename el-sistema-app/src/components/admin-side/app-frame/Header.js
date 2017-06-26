import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './../components/Dashboard/Dashboard';
import Volunteers from './../components/Volunteers/Volunteers';
import Performances from './../components/Performances/Performances';
import Classes from './../components/Classes/Classes';
import ContentPictures from './../components/ContentPictures/ContentPictures';
import ContentText from './../components/ContentText/ContentText';
import Media from './../components/Media/Media';
import Blog from './../components/Blog/Blog';

import './style.css';

import Sidebar from './Sidebar';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      showSide: true
    }
  }

  toggleSidebar = function () {
    this.setState({
      showSide: !this.state.showSide
    })
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          {/*<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>*/}
          <div className="hamburger" onClick={ (e) => this.toggleSidebar() }>
            <div className="ham-bar"></div>
            <div className="ham-bar"></div>
            <div className="ham-bar"></div>
          </div>
          <h3 className="nav-title">El Sistema Pittsburg - Website Administration</h3>
        </div>

        <div className="admin-content">
          {
            this.state.showSide
            ?
            <Sidebar />
            :
            null
          }
          <Switch>
            <Route path='/admin/volunteers' component={Volunteers} />
            <Route path='/admin/classes' component={Classes} />
            <Route path='/admin/performances' component={Performances} />
            <Route path='/admin/content/pictures' component={ContentPictures} />
            <Route path='/admin/content/text' component={ContentText} />
            <Route path='/admin/media' component={Media} />
            <Route path='/admin/blog' component={Blog} />
            <Route path='/admin' component={Dashboard} />
          </Switch>
        </div>

      </div>
    )
  }
}
