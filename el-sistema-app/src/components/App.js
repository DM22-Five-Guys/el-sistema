import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
//import { logout } from './../reducers/users.reducer';
import { logout, loadToken } from './../reducers/users.reducer';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedout: false
    }
    
  }



  render() {
    const guestLinks = (
       <Link to="/login">
            <button className="app-login-button">LOGIN</button>
            <button className="app-login-button">SIGN-UP</button>

        </Link>
    );
    const userLinks = (
      <div>
          <Link to="/test"><button className="app-login-button">TEST</button></Link>
          <button onClick={()=> {this.props.logout(); this.setState({ loggedout: true }, ()=> console.log(this.state.loggedout))} } className="app-login-button">LOGOUT</button>
      </div>
    )
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*{this.state.loggedout !== false? <Redirect to="/login"/>:''}*/}
         {loadToken() === null? <Redirect to="/login"/>:''}
        {this.props.isLoggedIn !== false? userLinks: guestLinks}
        {/*{loadToken()!== null?userLinks: guestLinks}*/}
        
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
function mapStateToProps(state){
  //console.log(state.user)
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}
//console.log(this.props.isLoggedIn)

export default connect(mapStateToProps, {logout})(App)



/*
          <Link to="/login">
            <button className="app-login-button">LOGIN</button>
          </Link>

          //test if auth is working on page request
          // <Link to="/test"><button className="app-login-button">TEST</button></Link>
          // <button onClick={()=> logout() } className="app-login-button">LOGOUT</button>*/