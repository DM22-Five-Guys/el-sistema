import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { firstLogin } from './../../../../reducers/users.reducer';
import getToken from './token.service';
import './first-login.component.css';

class FirstLoginForm extends Component{
    renderEmailField(field){
        return (
            <div>
                <input placeholder={field.placeholder} className="first-email_input" {...field.input} type="email"/>
                
                <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    renderPasswordField(field){
        return(
            <input placeholder={field.placeholder} className="first-password_input" {...field.input} type="password"/>
        )
    }

    renderCreatePasswordField(field){
        return(
            <div>
                <input placeholder={field.placeholder} className="first-password_input" {...field.input} type="password"/>
                <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    renderRetypePasswordField(field){
        return(
            <div>
                <input placeholder={field.placeholder} className="first-password_input" {...field.input} type="password"/>
                <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    onSubmit(values){
        //console.log(values)
        this.props.firstLogin(values)
    }
    isAuthed(){
        if(this.props.isLoggedIn || getToken() !== null){
            return true;
        }else{
            return false;
        }
    }
    render(){
        const { handleSubmit } = this.props;
        return(
            <div className="first-login-container">
                {this.isAuthed()?<Redirect to='/'/>:''}
                <div className="first-form-box">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="first-form-header"><h1 className="first-form-header-title">Welcome Back</h1></div>
                            <Field name="email" component={this.renderEmailField} placeholder="Email"/>
                            <Field name="password" component={this.renderPasswordField} placeholder="Temp Password"/>
                            <Field name="createPassword" component={this.renderCreatePasswordField} placeholder="Create Password"/>
                            <Field name="retypePassword" component={this.renderRetypePasswordField} placeholder="Retype Password"/>

                        <button className="first-login-button" type="submit"><div className="first-login-button-text">LOGIN</div></button>
                    </form>
                </div>
            </div>
        )
    }

}
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

    if(values.createPassword !== values.retypePassword){
        errors.retypePassword = "Password field must match!";
    }
    return errors;
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, {firstLogin})(reduxForm({validate, form: 'firstLoginForm'})(FirstLoginForm));