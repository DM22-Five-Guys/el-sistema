// not sure if this will work...
import React, { Component } from 'react'
//import { loadToken } from './../../../reducers/users.reducer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types' 
export default function(ComposedComponent){
    class Authenticate extends Component{
        
       
        render(){
        // return loadToken() === null? <Redirect to="/login"/> : <ComposedComponent {...this.props} />
        return this.props.isLoggedIn === false? <Redirect to="/login"/> : <ComposedComponent {...this.props} />
                
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