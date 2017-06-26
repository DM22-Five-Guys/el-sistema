import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link, Redirect } from 'react-router-dom';
//import { logout } from './../reducers/users.reducer';
import { logout } from './../reducers/users.reducer';
import getToken from './../components/admin-side/login-page/token.service';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';
import AdminSide from './admin-side/AdminSide';
import UserSide from './user-side/UserSide';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



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
      <BrowserRouter>
        <Switch>
          <Route path='/admin' component={AdminSide} />
          <Route path='/' component={UserSide} />
        </Switch>
      </BrowserRouter>

     
        

       



    )
  }
}





/*
          <Link to="/login">
            <button className="app-login-button">LOGIN</button>
          </Link>

          //test if auth is working on page request
          // <Link to="/test"><button className="app-login-button">TEST</button></Link>
          // <button onClick={()=> logout() } className="app-login-button">LOGOUT</button>*/


ReactDOM.render(<App />, document.querySelector('#root'));



export default App;




     /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
         {getToken() === null? <Redirect to="/login"/>:''}
         { this.isAuthed()? userLinks: guestLinks}
        {this.props.isLoggedIn !== false? userLinks: guestLinks}



        App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
function mapStateToProps(state){
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps, {logout})(App)*/