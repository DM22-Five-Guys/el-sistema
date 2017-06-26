import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
//import { logout } from './../reducers/users.reducer';
import { logout } from './../reducers/users.reducer';
import getToken from './../components/admin-side/login-page/token.service';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedout: false
    }
    
  }

  isAuthed(){
    if(this.props.isLoggedIn || getToken() !== null){
      return true;
    } else {
      return false;
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
          <Link to='/register'><button className="app-login-button">REGISTER</button></Link>
          {/*delete this test */}
           <Link to='/new-test'><button className="app-login-button">NEW-TEST</button></Link>
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
         {getToken() === null? <Redirect to="/login"/>:''}
         { this.isAuthed()? userLinks: guestLinks}
        {/*{this.props.isLoggedIn !== false? userLinks: guestLinks}*/}
     
        
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