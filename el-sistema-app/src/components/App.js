import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { logout } from './../reducers/users.reducer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

       
          <Link to="/login">
            <button className="app-login-button">LOGIN</button>
          </Link>
          {/*test if auth is working on page request*/}
          <Link to="/test"><button className="app-login-button">TEST</button></Link>
          <button onClick={()=> logout() } className="app-login-button">LOGOUT</button>
        
      </div>
    );
  }
}



export default App