import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './app-frame/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Volunteers from './components/Volunteers/Volunteers';
import Performances from './components/Performances/Performances';
import Classes from './components/Classes/Classes';
import ContentPictures from './components/ContentPictures/ContentPictures';
import ContentText from './components/ContentText/ContentText';
import Media from './components/Media/Media';
import Blog from './components/Blog/Blog';


class AdminSide extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      
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
    )
  }
}

export default AdminSide;
