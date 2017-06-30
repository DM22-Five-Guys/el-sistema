import React, { Component } from 'react';
//import logo from './logo.svg';
import { StripeProvider } from 'react-stripe-elements'

import './App.css';
import AdminSide from './admin-side/AdminSide';
import UserSide from './user-side/UserSide';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import getToken from './../components/admin-side/components/login-page/token.service';
import setAuthenticatonToken from './../components/admin-side/components/login-page/utils/setAuthorizationToken';



if (localStorage.getItem('id_token')){
    setAuthenticatonToken(getToken());
}



class App extends Component {

    
  render(){
     return (
      <BrowserRouter>
        <Switch>
          <Route path='/admin' component={AdminSide} />
          <StripeProvider apiKey='pk_test_nLm9j7f3xI9kKqHVB6YxlEWh'>
            <Route path='/' component={UserSide} />
          </StripeProvider>
        </Switch>
      </BrowserRouter>

    )
  }
}


export default App;


  // isAuthed(){
  //   if(this.props.isLoggedIn || getToken() !== null){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  /*render() {
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
         
         
           <Link to='/new-test'><button className="app-login-button">NEW-TEST</button></Link>
      </div>


    )*/





/*
          <Link to="/login">
            <button className="app-login-button">LOGIN</button>
          </Link>

          //test if auth is working on page request
          // <Link to="/test"><button className="app-login-button">TEST</button></Link>
          // <button onClick={()=> logout() } className="app-login-button">LOGOUT</button>*/






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