// not sure if this will work...
import React, { Component } from 'react'
//import { loadToken } from './../../../reducers/users.reducer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import getToken from './token.service';
export default function(ComposedComponent){
    class Authenticate extends Component{
        isAuthed(){
            if(this.props.isLoggedIn || getToken()!== null){
                return true;
            } else {
                return false;
            }
        }
        
       
        render(){
        // return loadToken() === null? <Redirect to="/login"/> : <ComposedComponent {...this.props} />
        return this.isAuthed()?<ComposedComponent {...this.props}/> : <Redirect to="/login"/>
                
        }
    }

    Authenticate.propTypes = {
        isLoggedIn: PropTypes.bool.isRequired
    }
 
  function mapStateToProps(state){
      return {
          isLoggedIn: state.user.isLoggedIn
      }
  }
    return connect(mapStateToProps)(Authenticate)
}