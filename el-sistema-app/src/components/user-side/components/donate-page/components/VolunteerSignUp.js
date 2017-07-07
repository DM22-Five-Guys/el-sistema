import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { addVolunteer } from './../../../../../reducers/volunteer.signup.reducer';
import './VolunteerSignUp.css';

class VolunteerSignUp extends Component{
    constructor(){
        super()
    }
    renderTextField(field){
        return(
            <div>
                <input className={field.className} type={field.type} {...field.input}/>
            </div>
        )
    }

    onSubmit(values){
        this.props.addVolunteer(values);
        this.props.reset()
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <div className="volunteer-signup-container">
                <h1 className="volunteer-signup-title">
                    Volunteer Sign-Up
                </h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="volunteer-signup-name">
                        <label className="volunteer-signup-name-label" htmlFor="name">Name</label>
                        <Field className="volunteer-email-field" type="text" name="name" component={this.renderTextField}/>
                    </div>
                    <div className="volunteer-signup-email">
                        <label className="volunteer-signup-email-label" htmlFor="email">Email</label>
                        <Field className="volunteer-email-field" type="email" name="email" component={this.renderTextField}/>
                    </div>
                    <div className="volunteer-button-container">
                        <button className="volunteer-donate-btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default connect(null, { addVolunteer })(reduxForm({form: "volunteerSignupForm"})(VolunteerSignUp))