import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import getToken from './components/login-page/token.service';
import hasValidToken from './components/login-page/utils/checkToken';
import setAuthorizationToken from './components/login-page/utils/setAuthorizationToken';
import requireAuth from './components/login-page/AuthenticatedRoute';
import { connect } from 'react-redux'

import Header from './app-frame/Header';

import Sidebar from './app-frame/Sidebar';

import './app-frame/app-frame.style.css';

import RegisterUserForm from './components/register-user/register-user.component'
import Login from './components/login-page/Login.component';
import FirstLogin from './components/login-page/first-login.component';
import Dashboard from './components/Dashboard/Dashboard';
import Volunteers from './components/Volunteers/Volunteers';
import Performances from './components/Performances/Performances';
import Classes from './components/Classes/Classes';
import ContentPictures from './components/ContentPictures/ContentPictures';
import ContentText from './components/ContentText/ContentText';
import Media from './components/Media/Media';
import Blog from './components/Blog/Blog';

//import Calendar from './calendar/Calendar';



if(localStorage.id_token){
  setAuthorizationToken(getToken());
}


class AdminSide extends Component {
  constructor(){
    super();
    this.state={
      showSide: false
    }

    this.toggleSide = this.toggleSide.bind(this);
  }

  toggleSide(){

    if (this.props.isLoggedIn || hasValidToken){
      this.setState({
        showSide: !this.state.showSide
      })
    }
  }

  render() {
    return (
      <div>
        <Header toggleSide={this.toggleSide}/>
        <div className='admin-container'>
          {
            this.state.showSide
            ?
            <Sidebar />
            :
            null
          }
          <div className="admin-content">
              <Switch>
                {/*register is in test mode*/}
                <Route path="/admin/register" component={requireAuth(RegisterUserForm)}/>
                <Route path='/admin/first-login' component={FirstLogin}/>
                <Route path="/admin/login" component={Login}/>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps)(AdminSide)

