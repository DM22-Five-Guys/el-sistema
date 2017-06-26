import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { login } from './../../../reducers/users.reducer';
import getToken from './token.service';
//import setAuthorizationToken from './../../../reducers/utils/setAuthorizationToken';
import './Login.component.css';

class LoginForm extends Component{
    renderEmailField(field){
        return (
            <div>
                <input placeholder='Email' className="email_input" {...field.input} type="email"/>
                
                <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    renderPasswordField(field){
        return(
            <input placeholder="Password" className="password_input" {...field.input} type="password"/>
        )
    }

    
   onComponentDidMount(){
       this.isAuthed()
   }

    onSubmit(values){
        this.props.login(values)   
    }
    isAuthed(){
        if(this.props.isLoggedIn || getToken() !== null){
            return true;
        } else {
            return false;
        }
    }
    render(){
        // console.log(this.props.first_login)
        // console.log(this.props)
        console.log(this.isAuthed())
        const { handleSubmit } = this.props;
        return(
            <div className="login-container">
                {this.props.first_login === true?<Redirect to="/first-login"/>:""};
                {this.isAuthed() === true?<Redirect to='/'/>:''}
                {/*{this.props.isLoggedIn === true?<Redirect to='/'/>:''}*/}

                <div className="form-box">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="form-header"><h1 className="form-header-title">Welcome Back</h1></div>
                            <Field name="email" component={this.renderEmailField}/>
                            <Field name="password" component={this.renderPasswordField}/>
                        <div className="forgot-password-link">Forgot Password?</div>
                        <button className="login-button" type="submit"><div className="login-button-text">LOGIN</div></button>
                    </form>
                </div>
            </div>
        )
    }

}

//  if(this.props.isLoggedIn){
//         setAuthorizationToken(loadToken());
//     }

function validate(values){
    //console.log(values);
    const errors = {}
    function emailValidator(str){
        let reg = /(\w+|\d+)\.?(\w+|\d+)@\w+\.\w{2,}/
        //let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return reg.test(str)
    }
    if(!emailValidator(values.email)){
        errors.email = "You must enter a valid email";
    }
    //console.log(errors)
    return errors;
}
function mapStateToProps(state){
    //console.log(state.user)
    if(state.user.first_login){
        //console.log(state.user.first_login)
    }
    return {
        first_login: state.user.first_login,
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, { login })(reduxForm({validate,form: 'loginForm'})(LoginForm));