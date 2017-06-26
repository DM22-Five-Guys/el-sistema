import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {register} from './../../../reducers/users.reducer';
import { connect } from 'react-redux'

class RegisterUserForm extends Component{

    renderTextField(field){
        return(
            <div>
                <input placeholder={field.placeholder} {...field.input} type="text" />
            </div>
        )
    }
    renderEmailField(field){
        return(
            <div>
                <input placeholder={field.placeholder} {...field.input} type="email"/>
            </div>
        )
    }
    onSubmit(values){
        this.props.register(values)
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="first_name" placeholder='First Name'    component={this.renderTextField}/>
                    <Field name="last_name"  placeholder='Last Name'     component={this.renderTextField}/>
                    <Field name="email"      placeholder='Email Address' component={this.renderEmailField}/>
                    <Field name="job"        placeholder='Job'           component={this.renderTextField}/>
                    <Field name="short_bio"  placeholder="Short Bio"     component={this.renderTextField}/>
                    <Field name="long_bio"   placeholder="Long Bio"      component={this.renderTextField}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { register })(reduxForm({form: 'registerUserForm'})(RegisterUserForm))